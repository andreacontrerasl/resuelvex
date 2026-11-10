import { Router } from "express";
import { Tramite } from "../models/Tramite";
import { User } from "../models/User";
import { requireAdmin, isAdmin, AuthedRequest } from "../middleware/requireAdmin";
import { enviarEmailEstado } from "../providers/resend";
import { subirDocumento, generarUrlDescarga, eliminarDocumento, obtenerDocumentoBase64 } from "../providers/cloudinary";

export const tramitesRouter = Router();

// El identificador interno del archivo en Cloudinary nunca va en listados
// ni detalles normales: solo se usa para generar el link de descarga.
const SIN_DOCUMENTO_INTERNO = "-documento.publicId";

// Si el estado cambia a "revision_cliente" y ya existe un documento, lo
// adjuntamos al correo (no solo un link al panel).
async function obtenerAdjuntoSiAplica(tramite: any, estado: string) {
  if (estado !== "revision_cliente" || !tramite.documento?.nombre) return undefined;

  try {
    const conPublicId = await Tramite.findById(tramite._id).select("documento.publicId");
    const publicId = (conPublicId as any)?.documento?.publicId;
    if (!publicId) return undefined;

    const contentBase64 = await obtenerDocumentoBase64(publicId);
    return { filename: tramite.documento.nombre as string, contentBase64 };
  } catch (err) {
    console.error("No se pudo adjuntar el documento al correo:", err);
    return undefined;
  }
}

// Admin: crear un trámite
tramitesRouter.post("/", requireAdmin, async (req, res) => {
  const { clienteId, plan, nombreEmpresa, notasInternas } = req.body;
  const codigo = `TRM-${new Date().getFullYear()}-${String(Date.now()).slice(-4)}`;
  const tramite = await Tramite.create({ codigo, clienteId, plan, nombreEmpresa, notasInternas });
  res.status(201).json(tramite);
});

// Admin: listar todos los trámites
tramitesRouter.get("/", requireAdmin, async (_req, res) => {
  const tramites = await Tramite.find().select(SIN_DOCUMENTO_INTERNO).populate("clienteId", "nombre email");
  res.json(tramites);
});

// Admin: cambiar el estado de un trámite
tramitesRouter.patch("/:id/estado", requireAdmin, async (req: AuthedRequest, res) => {
  const { estado } = req.body;
  const tramite = await Tramite.findByIdAndUpdate(
    req.params.id,
    {
      estado,
      $push: { estadoHistorial: { estado, actualizadoPor: req.auth?.sub } },
    },
    { new: true }
  ).select(SIN_DOCUMENTO_INTERNO).populate("clienteId", "nombre email");

  if (!tramite) return res.status(404).json({ error: "Trámite no encontrado" });

  const cliente: any = tramite.clienteId;
  if (cliente?.email) {
    obtenerAdjuntoSiAplica(tramite, estado).then((documentoAdjunto) => {
      enviarEmailEstado({
        to: cliente.email,
        nombreCliente: cliente.nombre,
        empresaNombre: tramite.codigo,
        codigo: tramite.codigo,
        estado,
        documentoAdjunto,
      });
    }); // sin await a propósito: no bloquea la respuesta al admin mientras el correo sale
  }

  res.json(tramite);
});

// Admin: cargar el documento constitutivo y pasar el trámite a revisión del cliente
tramitesRouter.post("/:id/documento", requireAdmin, async (req: AuthedRequest, res) => {
  const { nombre, tipo, data } = req.body;
  if (!nombre || !tipo || !data) {
    return res.status(400).json({ error: "Faltan datos del documento" });
  }

  const tramiteAnterior = await Tramite.findById(req.params.id);
  if (!tramiteAnterior) return res.status(404).json({ error: "Trámite no encontrado" });

  let subida;
  try {
    subida = await subirDocumento(String(req.params.id), data);
  } catch (err) {
    console.error("Error al subir el documento a Cloudinary:", err);
    return res.status(502).json({ error: "No se pudo subir el documento" });
  }

  const estado = "revision_cliente";
  const tramite = await Tramite.findByIdAndUpdate(
    req.params.id,
    {
      estado,
      documento: {
        nombre,
        tipo,
        publicId: subida.publicId,
        subidoEn: new Date(),
      },
      $push: { estadoHistorial: { estado, actualizadoPor: req.auth?.sub } },
    },
    { new: true }
  ).select(SIN_DOCUMENTO_INTERNO).populate("clienteId", "nombre email");

  if (!tramite) return res.status(404).json({ error: "Trámite no encontrado" });

  // Si había un documento previo, lo borramos de Cloudinary para no dejar
  // archivos huérfanos (sin await: no bloquea la respuesta al admin).
  const publicIdAnterior = (tramiteAnterior as any).documento?.publicId;
  if (publicIdAnterior) {
    eliminarDocumento(publicIdAnterior);
  }

  const cliente: any = tramite.clienteId;
  if (cliente?.email) {
    enviarEmailEstado({
      to: cliente.email,
      nombreCliente: cliente.nombre,
      empresaNombre: tramite.codigo,
      codigo: tramite.codigo,
      estado,
      documentoAdjunto: { filename: nombre, contentBase64: data },
    }); // sin await a propósito: no bloquea la respuesta al admin mientras el correo sale
  }

  res.json(tramite);
});

// Admin o cliente dueño del trámite: obtener un link de descarga temporal del documento
tramitesRouter.get("/:id/documento", async (req: AuthedRequest, res) => {
  const tramite = await Tramite.findById(req.params.id);
  if (!tramite || !(tramite as any).documento?.publicId) {
    return res.status(404).json({ error: "Documento no encontrado" });
  }

  if (!isAdmin(req)) {
    const usuario = await User.findOne({ auth0Id: req.auth?.sub });
    if (!usuario || String(tramite.clienteId) !== String(usuario._id)) {
      return res.status(403).json({ error: "No autorizado" });
    }
  }

  const url = generarUrlDescarga((tramite as any).documento.publicId);
  res.json({ url });
});

// Cliente: ver sus propios trámites
tramitesRouter.get("/mios", async (req: AuthedRequest, res) => {
  const auth0Id = req.auth?.sub;
  const usuario = await User.findOne({ auth0Id });
  if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });
  const tramites = await Tramite.find({ clienteId: usuario._id }).select(SIN_DOCUMENTO_INTERNO);
  res.json(tramites);
});

// Admin: ver el detalle de un trámite específico
tramitesRouter.get("/:id", requireAdmin, async (req, res) => {
  const tramite = await Tramite.findById(req.params.id).select(SIN_DOCUMENTO_INTERNO).populate("clienteId", "nombre email");
  if (!tramite) return res.status(404).json({ error: "Trámite no encontrado" });
  res.json(tramite);
});

import { Router } from "express";
import { Tramite } from "../models/Tramite";
import { User } from "../models/User";
import { requireAdmin, AuthedRequest } from "../middleware/requireAdmin";
import { enviarEmailEstado } from "../providers/resend";

export const tramitesRouter = Router();

// Admin: crear un trámite
tramitesRouter.post("/", requireAdmin, async (req, res) => {
  const { clienteId, plan, nombreEmpresa, notasInternas } = req.body;
  const codigo = `TRM-${new Date().getFullYear()}-${String(Date.now()).slice(-4)}`;
  const tramite = await Tramite.create({ codigo, clienteId, plan, nombreEmpresa, notasInternas });
  res.status(201).json(tramite);
});

// Admin: listar todos los trámites
tramitesRouter.get("/", requireAdmin, async (_req, res) => {
  const tramites = await Tramite.find().populate("clienteId", "nombre email");
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
  ).populate("clienteId", "nombre email");

  if (!tramite) return res.status(404).json({ error: "Trámite no encontrado" });

  const cliente: any = tramite.clienteId;
  if (cliente?.email) {
    enviarEmailEstado({
      to: cliente.email,
      nombreCliente: cliente.nombre,
      empresaNombre: tramite.codigo,
      codigo: tramite.codigo,
      estado,
    }); // sin await a propósito: no bloquea la respuesta al admin mientras el correo sale
  }

  res.json(tramite);
});

// Cliente: ver sus propios trámites
tramitesRouter.get("/mios", async (req: AuthedRequest, res) => {
  const auth0Id = req.auth?.sub;
  const usuario = await User.findOne({ auth0Id });
  if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });
  const tramites = await Tramite.find({ clienteId: usuario._id });
  res.json(tramites);
});

// Admin: ver el detalle de un trámite específico
tramitesRouter.get("/:id", requireAdmin, async (req, res) => {
  const tramite = await Tramite.findById(req.params.id).populate("clienteId", "nombre email");
  if (!tramite) return res.status(404).json({ error: "Trámite no encontrado" });
  res.json(tramite);
});

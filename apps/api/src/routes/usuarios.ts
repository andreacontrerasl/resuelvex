import { Router } from "express";
import { User } from "../models/User";
import { requireAdmin, AuthedRequest } from "../middleware/requireAdmin";

export const usuariosRouter = Router();

/**
 * Se llama justo después de que el usuario inicia sesión en el frontend.
 * Conecta su auth0Id con el registro que el admin ya creó por email,
 * o crea uno nuevo si es la primera vez que alguien entra sin haber
 * sido precreado.
 */
usuariosRouter.post("/sync", async (req: AuthedRequest, res) => {
  const auth0Id = req.auth?.sub;
  const email = req.auth?.["https://resuelvex.com/user"]?.email;

  if (!auth0Id || !email) {
    return res.status(400).json({ error: "Token sin sub o email" });
  }

  let usuario = await User.findOne({ auth0Id });
  if (usuario) return res.json(usuario);

  usuario = await User.findOne({ email });
  if (usuario) {
    usuario.auth0Id = auth0Id;
    await usuario.save();
    return res.json(usuario);
  }

  usuario = await User.create({ auth0Id, email, nombre: email, rol: "cliente" });
  res.status(201).json(usuario);
});

// Cliente: actualizar su propio teléfono de contacto
usuariosRouter.patch("/me", async (req: AuthedRequest, res) => {
  const auth0Id = req.auth?.sub;
  const { telefono } = req.body;
  const usuario = await User.findOneAndUpdate({ auth0Id }, { telefono }, { new: true });
  if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });
  res.json(usuario);
});

// Admin: listar todos los clientes
usuariosRouter.get("/", requireAdmin, async (_req, res) => {
  const clientes = await User.find({ rol: "cliente" }).sort({ createdAt: -1 });
  res.json(clientes);
});

// Admin: crear un cliente nuevo (antes de que esa persona tenga login propio)
usuariosRouter.post("/", requireAdmin, async (req, res) => {
  const { nombre, email, telefono, cedula } = req.body;
  const existente = await User.findOne({ email });
  if (existente) {
    return res.status(409).json({ error: "Ya existe un usuario con ese correo" });
  }
  const cliente = await User.create({ nombre, email, telefono, cedula, rol: "cliente" });
  res.status(201).json(cliente);
});

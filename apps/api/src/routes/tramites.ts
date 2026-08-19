import { Router } from "express";
import { Tramite } from "../models/Tramite";
import { requireAdmin, AuthedRequest } from "../middleware/requireAdmin";

export const tramitesRouter = Router();

// Admin: crear un trámite
tramitesRouter.post("/", requireAdmin, async (req, res) => {
  const { clienteId, plan, notas } = req.body;
  const codigo = `TRM-${new Date().getFullYear()}-${String(Date.now()).slice(-4)}`;
  const tramite = await Tramite.create({ codigo, clienteId, plan, notas });
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
  );
  if (!tramite) return res.status(404).json({ error: "Trámite no encontrado" });
  res.json(tramite);
});

// Cliente: ver sus propios trámites
tramitesRouter.get("/mios", async (req: AuthedRequest, res) => {
  const auth0Id = req.auth?.sub;
  const { User } = await import("../models/User.js");
  const usuario = await User.findOne({ auth0Id });
  if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });
  const tramites = await Tramite.find({ clienteId: usuario._id });
  res.json(tramites);
});

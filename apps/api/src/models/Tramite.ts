import { Schema, model } from "mongoose";
import { ESTADOS_TRAMITE } from "@resuelvex/shared";

const PLANES = ["solo_empresa", "empresa_rif", "empresa_completa", "empresa_100"] as const;

const tramiteSchema = new Schema({
  codigo: { type: String, required: true, unique: true },
  clienteId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  tipo: { type: String, enum: ["constitucion"], default: "constitucion" },
  nombreEmpresa: { type: String, required: true },
  plan: { type: String, enum: PLANES, required: true },
  estado: { type: String, enum: ESTADOS_TRAMITE, default: "documento_preparacion" },
  estadoHistorial: [{
    estado: { type: String, enum: ESTADOS_TRAMITE },
    fecha: { type: Date, default: Date.now },
    actualizadoPor: String,
  }],
  notasInternas: String,
  notasCliente: String,
}, { timestamps: true });

export const Tramite = model("Tramite", tramiteSchema);

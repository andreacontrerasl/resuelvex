import { Schema, model } from "mongoose";
import { ESTADOS_TRAMITE } from "@resuelvex/shared";

const tramiteSchema = new Schema({
  codigo: { type: String, required: true, unique: true },
  clienteId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  tipo: { type: String, enum: ["constitucion"], default: "constitucion" },
  plan: { type: String, enum: ["basico", "estandar", "full"], required: true },
  estado: { type: String, enum: ESTADOS_TRAMITE, default: "documento_preparacion" },
  estadoHistorial: [{
    estado: { type: String, enum: ESTADOS_TRAMITE },
    fecha: { type: Date, default: Date.now },
    actualizadoPor: String,
  }],
  notas: String,
}, { timestamps: true });

export const Tramite = model("Tramite", tramiteSchema);

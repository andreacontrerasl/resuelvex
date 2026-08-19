import { Schema, model } from "mongoose";

const userSchema = new Schema({
  auth0Id: { type: String, unique: true, sparse: true },
  email: { type: String, required: true, unique: true },
  nombre: { type: String, required: true },
  telefono: String,
  rol: { type: String, enum: ["cliente", "admin"], default: "cliente" },
}, { timestamps: true });

export const User = model("User", userSchema);

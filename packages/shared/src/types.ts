import type { EstadoTramite } from "./estados";

export type Rol = "cliente" | "admin";

export interface Usuario {
  _id: string;
  email: string;
  nombre: string;
  telefono?: string;
  rol: Rol;
}

export interface Tramite {
  _id: string;
  codigo: string;
  clienteId: string;
  tipo: "constitucion";
  plan: "basico" | "estandar" | "full";
  estado: EstadoTramite;
  estadoHistorial: { estado: EstadoTramite; fecha: string; actualizadoPor: string }[];
  notas?: string;
  createdAt: string;
  updatedAt: string;
}

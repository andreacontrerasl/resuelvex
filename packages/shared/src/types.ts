import type { EstadoTramite } from "./estados";

export type Rol = "cliente" | "admin";

export type Plan = "solo_empresa" | "empresa_rif" | "empresa_completa" | "empresa_100";

export const PLAN_LABELS: Record<Plan, string> = {
  solo_empresa: "Solo Empresa",
  empresa_rif: "Empresa + RIF",
  empresa_completa: "Empresa Completa",
  empresa_100: "Empresa 100% Lista",
};

export interface Usuario {
  _id: string;
  email: string;
  nombre: string;
  cedula?: string;
  telefono?: string;
  rol: Rol;
}


export const PLAN_INCLUYE: Record<Plan, string[]> = {
  solo_empresa: ["Documento constitutivo", "Trámite ante el Registro", "Comisario de confianza", "Publicación en diario mercantil"],
  empresa_rif: ["Todo lo de Solo Empresa", "Inscripción de RIF"],
  empresa_completa: ["Todo lo de Empresa + RIF", "Juego de libros mercantiles", "Sellado de libros"],
  empresa_100: ["Todo lo de Empresa Completa", "INCES, IVSS, BANAVIH/FAOV", "Patente de industria y comercio"],
};

export interface Tramite {
  _id: string;
  codigo: string;
  clienteId: string;
  tipo: "constitucion";
  nombreEmpresa: string;
  plan: Plan;
  estado: EstadoTramite;
  estadoHistorial: { estado: EstadoTramite; fecha: string; actualizadoPor: string }[];
  notasInternas?: string;
  notasCliente?: string;
  createdAt: string;
  updatedAt: string;
}

import { ETAPA_BASE, type EstadoTramite } from "@resuelvex/shared";

export const ESTADOS_ORDEN = [
  "documento_preparacion",
  "revision_cliente",
  "firma_coordinada",
  "reserva_nombre",
  "en_registro",
  "listo_transito",
  "entregado",
] as const;

export function getEstadoParaIndice(estadoActual: string, estadoHistorial: { estado: string }[] = []) {
  const etapaBase = ETAPA_BASE[estadoActual as EstadoTramite];
  if (etapaBase) return etapaBase;
  if (ESTADOS_ORDEN.includes(estadoActual as (typeof ESTADOS_ORDEN)[number])) return estadoActual;
  const ultimoEstadoConocido = [...estadoHistorial].reverse().find((h) => ESTADOS_ORDEN.includes(h.estado as (typeof ESTADOS_ORDEN)[number]));
  return ultimoEstadoConocido?.estado ?? "en_registro";
}

export function getIndiceActual(estadoActual: string, estadoHistorial: { estado: string }[] = []) {
  const estadoParaIndice = getEstadoParaIndice(estadoActual, estadoHistorial);
  return ESTADOS_ORDEN.indexOf(estadoParaIndice as any);
}

export function getProgreso(estadoActual: string, estadoHistorial: { estado: string }[] = []) {
  const index = getIndiceActual(estadoActual, estadoHistorial);
  return Math.max(0, Math.round((index / (ESTADOS_ORDEN.length - 1)) * 100));
}

export const ESTADOS_ORDEN = [
  "documento_preparacion",
  "firma_coordinada",
  "en_registro",
  "listo_transito",
  "entregado",
] as const;

export function getEstadoParaIndice(estadoActual: string, estadoHistorial: { estado: string }[] = []) {
  if (estadoActual !== "observaciones") return estadoActual;
  const ultimoEstadoReal = [...estadoHistorial].reverse().find((h) => h.estado !== "observaciones");
  return ultimoEstadoReal?.estado ?? "en_registro";
}

export function getIndiceActual(estadoActual: string, estadoHistorial: { estado: string }[] = []) {
  const estadoParaIndice = getEstadoParaIndice(estadoActual, estadoHistorial);
  return ESTADOS_ORDEN.indexOf(estadoParaIndice as any);
}

export function getProgreso(estadoActual: string, estadoHistorial: { estado: string }[] = []) {
  const index = getIndiceActual(estadoActual, estadoHistorial);
  return Math.max(0, Math.round((index / (ESTADOS_ORDEN.length - 1)) * 100));
}

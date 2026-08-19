export const ESTADOS_TRAMITE = [
  "documento_preparacion",
  "firma_coordinada",
  "en_registro",
  "observaciones",
  "listo_transito",
  "entregado",
] as const;

export type EstadoTramite = (typeof ESTADOS_TRAMITE)[number];

export const ESTADO_LABELS: Record<EstadoTramite, string> = {
  documento_preparacion: "Documento en preparación",
  firma_coordinada: "Firma coordinada",
  en_registro: "En registro",
  observaciones: "Observaciones",
  listo_transito: "Listo, en tránsito",
  entregado: "Entregado",
};

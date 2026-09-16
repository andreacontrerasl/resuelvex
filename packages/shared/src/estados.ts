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

export const ESTADO_MENSAJES: Record<EstadoTramite, string> = {
  documento_preparacion: "Estamos preparando tu documento constitutivo con los datos de tu empresa.",
  firma_coordinada: "Ya coordinamos la recogida de tu firma — nuestro mensajero pasará por la dirección indicada.",
  en_registro: "Tu trámite está en el Registro Mercantil. No necesitas hacer nada de tu parte — el tiempo estimado es de un mes.",
  observaciones: "El Registro hizo una observación sobre tu expediente. Te contactaremos por WhatsApp con el detalle y los próximos pasos.",
  listo_transito: "¡Tu empresa está lista! Estamos coordinando la entrega de tus documentos.",
  entregado: "Tu empresa quedó constituida y ya tienes tus documentos en mano. ¡Felicidades!",
};

export const ESTADOS_TRAMITE = [
  "documento_preparacion",
  "revision_cliente",
  "firma_coordinada",
  "reserva_nombre",
  "pago_reserva_nombre",
  "en_registro",
  "pago_registro",
  "observaciones",
  "listo_transito",
  "entregado",
] as const;

export type EstadoTramite = (typeof ESTADOS_TRAMITE)[number];

export const ESTADO_LABELS: Record<EstadoTramite, string> = {
  documento_preparacion: "Documento en preparación",
  revision_cliente: "Revisión del documento",
  firma_coordinada: "Firma coordinada",
  reserva_nombre: "Reserva de nombre",
  pago_reserva_nombre: "Pago de reserva de nombre",
  en_registro: "En registro",
  pago_registro: "PUB emitida",
  observaciones: "Observaciones",
  listo_transito: "Empresa registrada",
  entregado: "Documentos entregados",
};

export const ESTADO_MENSAJES: Record<EstadoTramite, string> = {
  documento_preparacion: "Estamos preparando tu documento constitutivo con los datos que nos diste. Te avisamos en cuanto esté listo para que lo revises.",
  revision_cliente: "Tu documento constitutivo ya está listo. Entra a tu panel para revisarlo con calma antes de coordinar la firma.",
  firma_coordinada: "Ya coordinamos la recogida de tu firma. Nuestro mensajero pasará por la dirección que indicaste; avísanos si necesitas reprogramar.",
  reserva_nombre: "Estamos solicitando ante el Registro Mercantil la reserva del nombre de tu empresa.",
  pago_reserva_nombre: "Para reservar el nombre de tu empresa, el Registro emitió una planilla (PUB) que debes pagar. Te escribimos con el monto exacto y coordinamos el pago contigo.",
  en_registro: "Tu trámite está en el Registro Mercantil. El tiempo estimado es de un mes y no necesitas hacer nada de tu parte por ahora.",
  pago_registro: "El Registro emitió la planilla (PUB) de los derechos de registro. Te indicamos el monto exacto y coordinamos el pago contigo.",
  observaciones: "El Registro hizo una observación sobre tu expediente. Te contactaremos por WhatsApp con el detalle y los próximos pasos.",
  listo_transito: "¡Tu empresa quedó registrada! Ahora estamos coordinando la entrega de tus documentos físicos.",
  entregado: "Tu empresa quedó constituida y ya tienes tus documentos en mano. ¡Felicidades, ya puedes operar!",
};

/*
 * Asunto del correo que se envía al cambiar de estado. Más concreto
 * que el label de la etapa, para que se entienda de un vistazo en
 * la bandeja de entrada.
 */

export const ESTADO_EMAIL_ASUNTOS: Record<EstadoTramite, string> = {
  documento_preparacion: "Estamos preparando tu documento constitutivo",
  revision_cliente: "Tu documento está listo para revisar",
  firma_coordinada: "Coordinamos la firma de tu documento",
  reserva_nombre: "Iniciamos la reserva del nombre de tu empresa",
  pago_reserva_nombre: "Pago pendiente: reserva del nombre",
  en_registro: "Tu trámite ya está en el Registro Mercantil",
  pago_registro: "Pago pendiente: derechos de registro",
  observaciones: "El Registro hizo una observación sobre tu expediente",
  listo_transito: "¡Tu empresa quedó registrada!",
  entregado: "Tus documentos fueron entregados",
};

/*
 * Algunos estados son "sub-etapas" de pago que ocurren a mitad de una
 * etapa principal (se emite una planilla PUB, el cliente paga, y el
 * trámite continúa dentro de la misma etapa). No tienen su propio paso
 * en el stepper: se muestran como un aviso dentro de la etapa base.
 */

export const ETAPA_BASE: Partial<Record<EstadoTramite, EstadoTramite>> = {
  pago_reserva_nombre: "reserva_nombre",
  pago_registro: "en_registro",
  observaciones: "en_registro",
};

import { Resend } from "resend";
import { ESTADO_LABELS, ESTADO_MENSAJES, ESTADO_EMAIL_ASUNTOS } from "@resuelvex/shared";

const FROM = process.env.EMAIL_FROM || "onboarding@resend.dev";

// Si falta la API key, el cliente queda en null en vez de tumbar el servidor.
// El envío de correos se vuelve "mejor esfuerzo": si no está configurado,
// simplemente no manda nada, mientras el resto de la API sigue funcionando.
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

interface DocumentoAdjunto {
  filename: string;
  contentBase64: string;
}

interface EnviarEstadoParams {
  to: string;
  nombreCliente: string;
  empresaNombre: string;
  codigo: string;
  estado: string;
  documentoAdjunto?: DocumentoAdjunto;
}

export async function enviarEmailEstado({ to, nombreCliente, empresaNombre, codigo, estado, documentoAdjunto }: EnviarEstadoParams) {
  if (!resend) {
    console.warn("RESEND_API_KEY no configurada — correo no enviado (esto es esperado en desarrollo si aún no la configuraste).");
    return;
  }

  const label = ESTADO_LABELS[estado as keyof typeof ESTADO_LABELS];
  const mensaje = ESTADO_MENSAJES[estado as keyof typeof ESTADO_MENSAJES];
  const asunto = ESTADO_EMAIL_ASUNTOS[estado as keyof typeof ESTADO_EMAIL_ASUNTOS] ?? label;

  // Alojado en Cloudinary (en vez de en el dominio de la web) para que el
  // logo cargue siempre, sin depender de APP_BASE_URL_WEB ni de que la web
  // esté desplegada en un dominio público.
  const LOGO_URL = "https://res.cloudinary.com/am6udi2t/image/upload/v1794324611/resuelvex/assets/logo-white.png";

  try {
    await resend.emails.send({
      from: `Resuelvex <${FROM}>`,
      to,
      subject: asunto,
      html: `
        <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1F305E, #00BFB3); padding: 24px; border-radius: 12px 12px 0 0;">
            <img src="${LOGO_URL}" alt="Resuelvex" style="height: 40px; display: block;" />
            <h1 style="color: white; font-size: 20px; margin: 16px 0 0;">${label}</h1>
          </div>
          <div style="border: 1px solid #E1E4EA; border-top: none; padding: 24px; border-radius: 0 0 12px 12px;">
            <p style="color: #1F305E; font-size: 15px;">Hola ${nombreCliente},</p>
            <p style="color: #5B6272; font-size: 14px; line-height: 1.6;">${mensaje}</p>
            ${documentoAdjunto ? `
            <div style="background: #EAFBF9; border: 1px solid #00BFB3; border-radius: 10px; padding: 14px 16px; margin-top: 16px;">
              <p style="color: #1F305E; font-size: 13px; margin: 0;">📎 Tu documento constitutivo va adjunto a este correo en PDF.</p>
            </div>
            ` : ""}
            <p style="color: #8792A6; font-size: 12px; margin-top: 20px;">${empresaNombre} · ${codigo}</p>
            <a href="${process.env.APP_BASE_URL_WEB}/panel" style="display: inline-block; margin-top: 16px; background: #1F305E; color: white; text-decoration: none; padding: 10px 20px; border-radius: 100px; font-size: 14px;">
              Ver mi trámite
            </a>
          </div>
        </div>
      `,
      attachments: documentoAdjunto
        ? [
            {
              filename: documentoAdjunto.filename,
              content: Buffer.from(documentoAdjunto.contentBase64, "base64"),
            },
          ]
        : undefined,
    });
  } catch (err) {
    console.error("Error al enviar email de estado:", err);
  }
}

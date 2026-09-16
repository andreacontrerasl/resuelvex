import { Resend } from "resend";
import { ESTADO_LABELS, ESTADO_MENSAJES } from "@resuelvex/shared";

const FROM = process.env.EMAIL_FROM || "onboarding@resend.dev";

// Si falta la API key, el cliente queda en null en vez de tumbar el servidor.
// El envío de correos se vuelve "mejor esfuerzo": si no está configurado,
// simplemente no manda nada, mientras el resto de la API sigue funcionando.
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

interface EnviarEstadoParams {
  to: string;
  nombreCliente: string;
  empresaNombre: string;
  codigo: string;
  estado: string;
}

export async function enviarEmailEstado({ to, nombreCliente, empresaNombre, codigo, estado }: EnviarEstadoParams) {
  if (!resend) {
    console.warn("RESEND_API_KEY no configurada — correo no enviado (esto es esperado en desarrollo si aún no la configuraste).");
    return;
  }

  const label = ESTADO_LABELS[estado as keyof typeof ESTADO_LABELS];
  const mensaje = ESTADO_MENSAJES[estado as keyof typeof ESTADO_MENSAJES];

  try {
    await resend.emails.send({
      from: `Resuelvex <${FROM}>`,
      to,
      subject: `Actualización de tu trámite — ${label}`,
      html: `
        <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1F305E, #00BFB3); padding: 24px; border-radius: 12px 12px 0 0;">
            <p style="color: white; font-size: 12px; letter-spacing: 0.05em; text-transform: uppercase; margin: 0;">Resuelvex</p>
            <h1 style="color: white; font-size: 20px; margin: 8px 0 0;">${label}</h1>
          </div>
          <div style="border: 1px solid #E1E4EA; border-top: none; padding: 24px; border-radius: 0 0 12px 12px;">
            <p style="color: #1F305E; font-size: 15px;">Hola ${nombreCliente},</p>
            <p style="color: #5B6272; font-size: 14px; line-height: 1.6;">${mensaje}</p>
            <p style="color: #8792A6; font-size: 12px; margin-top: 20px;">${empresaNombre} · ${codigo}</p>
            <a href="${process.env.APP_BASE_URL_WEB}/panel" style="display: inline-block; margin-top: 16px; background: #1F305E; color: white; text-decoration: none; padding: 10px 20px; border-radius: 100px; font-size: 14px;">
              Ver mi trámite
            </a>
          </div>
        </div>
      `,
    });
  } catch (err) {
    console.error("Error al enviar email de estado:", err);
  }
}

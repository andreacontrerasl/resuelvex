import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const CLOUDINARY_CONFIGURADO = Boolean(
  process.env.CLOUDINARY_CLOUD_NAME &&
    process.env.CLOUDINARY_API_KEY &&
    process.env.CLOUDINARY_API_SECRET
);

const CARPETA = "resuelvex/tramites";

interface DocumentoSubido {
  publicId: string;
}

export async function subirDocumento(tramiteId: string, dataBase64: string): Promise<DocumentoSubido> {
  if (!CLOUDINARY_CONFIGURADO) {
    throw new Error("Cloudinary no está configurado (faltan CLOUDINARY_CLOUD_NAME / API_KEY / API_SECRET).");
  }

  const resultado = await cloudinary.uploader.upload(`data:application/pdf;base64,${dataBase64}`, {
    resource_type: "raw",
    type: "private",
    format: "pdf",
    folder: CARPETA,
    public_id: `${tramiteId}-${Date.now()}`,
    overwrite: false,
  });

  return { publicId: resultado.public_id };
}

export function generarUrlDescarga(publicId: string) {
  return cloudinary.utils.private_download_url(publicId, "pdf", {
    resource_type: "raw",
    type: "private",
    attachment: false,
    expires_at: Math.floor(Date.now() / 1000) + 5 * 60, // 5 minutos
  });
}

// Usado cuando queremos adjuntar el PDF a un correo pero no tenemos ya el
// base64 a mano (p. ej. si el estado cambió a mano y no justo al subirlo).
export async function obtenerDocumentoBase64(publicId: string): Promise<string> {
  const url = generarUrlDescarga(publicId);
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`No se pudo descargar el documento de Cloudinary (${res.status})`);
  }
  const buffer = Buffer.from(await res.arrayBuffer());
  return buffer.toString("base64");
}

export async function eliminarDocumento(publicId: string) {
  try {
    await cloudinary.uploader.destroy(publicId, {
      resource_type: "raw",
      type: "private",
    });
  } catch (err) {
    // No bloqueamos el flujo si falla el borrado del archivo anterior.
    console.error("Error al eliminar documento anterior de Cloudinary:", err);
  }
}

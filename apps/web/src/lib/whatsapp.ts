export const WHATSAPP_NUMBER = "58XXXXXXXXXX";

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

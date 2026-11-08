export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://resuelvex.com";

export const SITE_NAME = "Resuelvex";

// Título completo: para contextos que NO pasan por el template del layout
// (title.default del layout raíz, og:title, twitter:title).
export const DEFAULT_TITLE =
  "Resuelvex | Constituye tu empresa en Venezuela sin complicarte";

// Título de la home sin la marca: el layout raíz la agrega vía template
// ("%s | Resuelvex"), así que aquí no se repite para evitar duplicarla.
export const HOME_TITLE = "Constituye tu empresa en Venezuela sin complicarte";

export const DEFAULT_DESCRIPTION =
  "Resuelvex gestiona la constitución de tu empresa en Venezuela de principio a fin: documentos, firma a domicilio y trámite ante el Registro Mercantil, con precio claro y seguimiento online.";

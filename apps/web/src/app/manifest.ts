import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — Constitución de empresas en Venezuela`,
    short_name: SITE_NAME,
    description:
      "Gestión de trámites para constituir tu empresa en Venezuela.",
    start_url: "/",
    display: "standalone",
    background_color: "#F4F5F7",
    theme_color: "#1F305E",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

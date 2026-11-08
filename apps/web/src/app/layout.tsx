import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import type { Metadata, Viewport } from "next";
import { MantineProvider, ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Inter, Space_Grotesk, IBM_Plex_Mono, Plus_Jakarta_Sans, DM_Mono } from "next/font/google";
import { theme } from "@/theme";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, SITE_NAME, SITE_URL } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const spaceGrotesk = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["800"], variable: "--font-display" });
const plexMono = DM_Mono({ subsets: ["latin"], weight: ["500"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "constituir empresa en Venezuela",
    "registro mercantil Venezuela",
    "constitución de compañías",
    "RIF Venezuela",
    "trámites legales Venezuela",
  ],
  authors: [{ name: SITE_NAME }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#1F305E",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo-color-no-bg.webp`,
  description: DEFAULT_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Caracas",
    addressCountry: "VE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "contacto@resuelvex.com",
    areaServed: "VE",
    availableLanguage: ["Spanish"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      {...mantineHtmlProps}
      className={`${inter.variable} ${spaceGrotesk.variable} ${plexMono.variable}`}
    >
      <head>
        <ColorSchemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body style={{ backgroundColor: theme.other?.paper ?? "#F4F5F7" }}>
        <MantineProvider theme={theme}>
          <Notifications />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}

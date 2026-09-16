import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { MantineProvider, ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Inter, Space_Grotesk, IBM_Plex_Mono, Plus_Jakarta_Sans, DM_Mono } from "next/font/google";
import { theme } from "@/theme";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const spaceGrotesk = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["800"], variable: "--font-display" });
const plexMono = DM_Mono({ subsets: ["latin"], weight: ["500"], variable: "--font-mono" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      {...mantineHtmlProps}
      className={`${inter.variable} ${spaceGrotesk.variable} ${plexMono.variable}`}
    >
      <head>
        <ColorSchemeScript />
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

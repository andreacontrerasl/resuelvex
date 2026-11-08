import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Política de cookies",
  description:
    "Qué cookies utiliza resuelvex.com y por qué no mostramos un aviso de consentimiento de cookies.",
  alternates: {
    canonical: "/cookies",
  },
};

const SECTIONS: LegalSection[] = [
  {
    heading: "Qué son las cookies",
    paragraphs: [
      "Las cookies son pequeños archivos que un sitio web guarda en tu navegador para recordar información entre visitas, como mantener tu sesión iniciada. Algunos sitios también usan cookies de terceros para medir tráfico o mostrar publicidad personalizada.",
    ],
  },
  {
    heading: "Qué cookies usa resuelvex.com",
    paragraphs: [
      "resuelvex.com solo utiliza la cookie de sesión que crea nuestro proveedor de autenticación (Auth0) cuando inicias sesión en tu panel de cliente o en el panel administrativo. Esta cookie es estrictamente necesaria: sin ella no podríamos mantenerte conectado ni mostrarte el estado de tu trámite.",
    ],
    list: [
      "No usamos cookies de publicidad ni de redes sociales.",
      "No usamos cookies de analítica ni de medición (Google Analytics, Meta Pixel u otras herramientas similares).",
      "No compartimos cookies con terceros con fines de perfilado o remarketing.",
    ],
  },
  {
    heading: "Por qué no mostramos un aviso de consentimiento de cookies",
    paragraphs: [
      "Un aviso de consentimiento de cookies es necesario cuando un sitio usa cookies no esenciales, como las de analítica o publicidad. Como la única cookie que usamos es la de inicio de sesión, estrictamente necesaria para prestarte el servicio que solicitaste, no te pedimos consentimiento adicional para ella, igual que no se pide consentimiento para que un sitio recuerde tu carrito de compras.",
      "Si en el futuro incorporamos herramientas de analítica o marketing que usen cookies no esenciales, actualizaremos esta página y agregaremos un aviso para que puedas aceptarlas o rechazarlas antes de que se activen.",
    ],
  },
  {
    heading: "Otros datos guardados en tu navegador",
    paragraphs: [
      "Además de la cookie de sesión, tu navegador puede guardar localmente (no como cookie, sino en el almacenamiento local del navegador) tu preferencia de tema claro u oscuro de la interfaz. Esta información no sale de tu dispositivo y no la usamos para identificarte ni para ningún otro fin.",
    ],
  },
  {
    heading: "Cómo controlar o eliminar cookies",
    paragraphs: [
      "Puedes revisar, bloquear o eliminar las cookies desde la configuración de tu navegador en cualquier momento. Ten en cuenta que si eliminas la cookie de sesión de Resuelvex, se cerrará tu sesión y deberás volver a iniciar sesión para acceder a tu panel.",
    ],
  },
  {
    heading: "Cambios a esta política",
    paragraphs: [
      "Podemos actualizar esta Política de Cookies si cambia la forma en que usamos cookies en el sitio. Publicaremos la versión vigente en esta misma página junto con la fecha de la última actualización.",
    ],
  },
  {
    heading: "Contacto",
    paragraphs: [
      "Si tienes dudas sobre el uso de cookies en resuelvex.com, escríbenos a contacto@resuelvex.com. Para más información sobre cómo tratamos tus datos personales, consulta nuestra Política de Privacidad.",
    ],
  },
];

export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Política de cookies"
      updatedAt="8 de noviembre de 2026"
      intro="Esta página explica qué cookies usa resuelvex.com, para qué sirven y por qué no necesitas aceptarlas con un aviso emergente."
      sections={SECTIONS}
    />
  );
}

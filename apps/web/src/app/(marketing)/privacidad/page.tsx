import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Política de privacidad | Resuelvex",
  description:
    "Cómo Resuelvex recopila, usa y protege los datos personales de sus clientes.",
};

const SECTIONS: LegalSection[] = [
  {
    heading: "Responsable del tratamiento",
    paragraphs: [
      "Resuelvex, con sede en Caracas, Venezuela, es responsable del tratamiento de los datos personales que recopilamos a través de resuelvex.com, nuestro panel de cliente y nuestros canales de contacto (WhatsApp y correo electrónico). Para cualquier consulta sobre esta política puedes escribirnos a contacto@resuelvex.com.",
    ],
  },
  {
    heading: "Qué datos recopilamos",
    list: [
      "Datos de identificación y contacto: nombre completo, cédula de identidad, número de teléfono y correo electrónico.",
      "Datos de tu empresa: denominación tentativa, objeto social, dirección fiscal, datos de socios y capital, y demás información necesaria para redactar el documento constitutivo y gestionar el trámite.",
      "Datos del trámite: plan contratado, estado del proceso, observaciones del Registro Mercantil y comunicaciones relacionadas.",
      "Comprobantes de pago: capturas o referencias de los pagos que realizas por Zelle, pago móvil o transferencia. No solicitamos ni almacenamos claves de acceso a tu banca en línea ni números completos de tarjetas.",
      "Datos de la cuenta: credenciales de acceso gestionadas a través de nuestro proveedor de autenticación.",
      "Datos técnicos básicos de navegación (como dirección IP y tipo de dispositivo) que se generan al usar el sitio.",
    ],
  },
  {
    heading: "Cómo recopilamos tus datos",
    paragraphs: [
      "Recopilamos tus datos cuando los ingresas directamente en los formularios del sitio o del panel de cliente, cuando nos escribes por WhatsApp o correo electrónico, cuando creas una cuenta para acceder a tu panel, y cuando nuestro equipo registra la información de tu trámite en el sistema.",
    ],
  },
  {
    heading: "Para qué usamos tus datos",
    list: [
      "Prestar el servicio contratado: preparar tu documentación, coordinar la firma y gestionar tu trámite ante el Registro Mercantil y otros entes.",
      "Comunicarnos contigo sobre el avance de tu trámite, solicitarte documentos o informarte observaciones.",
      "Verificar tus pagos y llevar el control administrativo y contable de tu trámite.",
      "Dar acceso y mantener tu cuenta en el panel de cliente.",
      "Cumplir con obligaciones legales o requerimientos de autoridades competentes.",
      "Mejorar nuestro sitio web y nuestros procesos internos.",
    ],
  },
  {
    heading: "Con quién compartimos tus datos",
    paragraphs: [
      "Para poder constituir tu empresa, es necesario compartir parte de tu información con terceros que participan directamente en el trámite, como el Registro Mercantil, el comisario designado y el diario donde se publica la constitución.",
      "También utilizamos proveedores tecnológicos que procesan datos en nuestro nombre para operar el sitio y el panel de cliente, como nuestro proveedor de autenticación (inicio de sesión), nuestro proveedor de hosting y nuestro proveedor de envío de correos electrónicos. Estos proveedores solo acceden a los datos necesarios para prestar su servicio.",
      "No vendemos ni alquilamos tus datos personales a terceros con fines publicitarios.",
    ],
  },
  {
    heading: "Dónde se almacenan tus datos",
    paragraphs: [
      "Algunos de los proveedores tecnológicos que utilizamos para operar nuestro sitio y nuestro panel de cliente pueden almacenar o procesar información en servidores ubicados fuera de Venezuela. En esos casos, exigimos a nuestros proveedores medidas de seguridad razonables para proteger tu información.",
    ],
  },
  {
    heading: "Cuánto tiempo conservamos tus datos",
    paragraphs: [
      "Conservamos tus datos mientras exista una relación contractual contigo y durante el tiempo adicional necesario para cumplir obligaciones legales, contables o para atender eventuales reclamos. Pasado ese plazo, eliminamos o anonimizamos la información que ya no sea necesaria.",
    ],
  },
  {
    heading: "Seguridad de la información",
    paragraphs: [
      "Aplicamos medidas técnicas y organizativas razonables para proteger tus datos contra accesos no autorizados, pérdida o uso indebido. El acceso al panel de cliente y al panel administrativo está protegido mediante autenticación, y limitamos el acceso a la información de cada trámite a nuestro personal autorizado.",
      "Ningún sistema es infalible; si llegara a ocurrir un incidente de seguridad que afecte tus datos, te lo notificaremos por los canales de contacto que tengamos registrados.",
    ],
  },
  {
    heading: "Tus derechos sobre tus datos",
    paragraphs: [
      "De acuerdo con el derecho constitucional de habeas data reconocido en el artículo 28 de la Constitución de la República Bolivariana de Venezuela, puedes solicitarnos en cualquier momento:",
    ],
    list: [
      "Acceder a los datos personales que tenemos sobre ti.",
      "Solicitar la rectificación de datos inexactos o desactualizados.",
      "Solicitar la eliminación de tus datos cuando ya no sean necesarios para la prestación del servicio o el cumplimiento de obligaciones legales.",
      "Oponerte al uso de tus datos para fines distintos a la gestión de tu trámite.",
    ],
  },
  {
    heading: "Cómo ejercer tus derechos",
    paragraphs: [
      "Puedes ejercer estos derechos escribiéndonos a contacto@resuelvex.com. Responderemos tu solicitud en un plazo razonable y te informaremos si existe algún impedimento legal o contractual para atenderla, por ejemplo, información que debamos conservar por obligaciones ante el Registro Mercantil u otras autoridades.",
    ],
  },
  {
    heading: "Cookies y tecnologías similares",
    paragraphs: [
      "Nuestro sitio puede utilizar cookies u otras tecnologías similares para recordar tu sesión, mantenerte conectado en el panel de cliente y entender cómo se utiliza el sitio. Puedes configurar tu navegador para rechazar cookies, aunque algunas funciones del sitio podrían dejar de funcionar correctamente.",
    ],
  },
  {
    heading: "Menores de edad",
    paragraphs: [
      "Nuestros servicios están dirigidos a personas mayores de edad con capacidad para contratar. No recopilamos intencionalmente datos de menores de edad. Si detectamos que hemos recopilado datos de un menor sin el consentimiento correspondiente, los eliminaremos.",
    ],
  },
  {
    heading: "Cambios a esta política",
    paragraphs: [
      "Podemos actualizar esta Política de Privacidad para reflejar cambios en nuestros servicios o en la normativa aplicable. Publicaremos la versión vigente en esta misma página junto con la fecha de la última actualización.",
    ],
  },
  {
    heading: "Contacto",
    paragraphs: [
      "Si tienes dudas sobre el tratamiento de tus datos personales o quieres ejercer alguno de tus derechos, escríbenos a contacto@resuelvex.com o por WhatsApp desde los enlaces de contacto de este sitio.",
    ],
  },
];

export default function PrivacidadPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Política de privacidad"
      updatedAt="8 de noviembre de 2026"
      intro="En Resuelvex nos tomamos en serio la protección de tus datos personales. Esta Política de Privacidad explica qué información recopilamos, cómo la usamos, con quién la compartimos y qué derechos tienes sobre ella."
      sections={SECTIONS}
    />
  );
}

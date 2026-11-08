import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description:
    "Términos y condiciones de uso del sitio web y de los servicios de gestión de trámites de Resuelvex.",
  alternates: {
    canonical: "/terminos",
  },
};

const SECTIONS: LegalSection[] = [
  {
    heading: "Quiénes somos y qué hacemos",
    paragraphs: [
      "Resuelvex es un servicio de gestión de trámites que ayuda a personas naturales y jurídicas a constituir compañías en Venezuela: preparamos la documentación requerida, coordinamos la firma, gestionamos el expediente ante el Registro Mercantil correspondiente y acompañamos el proceso hasta la entrega de los documentos.",
      "Resuelvex no es un despacho de abogados ni sustituye la asesoría legal, contable o tributaria especializada. Si tu caso particular requiere ese tipo de asesoría, te lo indicaremos antes de continuar con el trámite.",
    ],
  },
  {
    heading: "Quién puede contratar nuestros servicios",
    paragraphs: [
      "Para contratar un plan o crear una cuenta debes ser mayor de edad y tener capacidad legal para contratar. Si actúas en representación de un tercero (por ejemplo, de otro futuro socio), declaras contar con su autorización para suministrar sus datos y gestionar el trámite en su nombre.",
      "Al registrarte en nuestro panel de cliente te comprometes a proporcionar información veraz, completa y actualizada, y eres responsable de mantener la confidencialidad de tus credenciales de acceso.",
    ],
  },
  {
    heading: "Planes, precios y qué incluyen",
    paragraphs: [
      "En resuelvex.com publicamos distintos planes con el detalle de los trámites y servicios que incluye cada uno (redacción del documento constitutivo, gestión ante el Registro Mercantil, comisario y sus recaudos, publicación en diario mercantil, firma a domicilio, inscripción en el RIF, libros mercantiles y trámites parafiscales, según el plan contratado).",
      "El precio del plan no incluye las tasas oficiales del Registro Mercantil (Planilla Única Bancaria) ni la reserva de denominación comercial, que se pagan de forma independiente, usualmente en bolívares, y cuyo monto exacto te confirmaremos antes de que realices el pago correspondiente.",
      "Podemos actualizar los precios y el contenido de los planes publicados en el sitio en cualquier momento; el precio y alcance aplicable a tu trámite será el vigente al momento en que confirmes la contratación.",
    ],
  },
  {
    heading: "Forma de pago",
    paragraphs: [
      "El pago de nuestros planes se realiza a través de los medios habilitados al momento de iniciar el proceso (por ejemplo, Zelle, pago móvil o transferencia bancaria). Te indicaremos los datos de pago y te solicitaremos el comprobante correspondiente para confirmar tu trámite.",
      "Resuelvex no procesa pagos con tarjeta directamente en el sitio ni solicita claves de acceso a tu banca en línea. Nunca compartas contraseñas o claves de coordenadas por ningún canal, ni siquiera con nuestro equipo.",
    ],
  },
  {
    heading: "Cómo funciona el proceso del trámite",
    paragraphs: [
      "Una vez confirmado el pago, recopilamos la información necesaria de tu empresa (nombre tentativo, socios, capital, objeto social, dirección, entre otros), preparamos el documento constitutivo y coordinamos la firma en la dirección que nos indiques.",
      "Posteriormente presentamos el expediente ante el Registro Mercantil correspondiente. Puedes seguir el avance de tu trámite desde tu panel de cliente, donde reflejamos el estado actual.",
      "Los tiempos indicados en el sitio y en el panel son estimados. El tiempo final de constitución depende de los plazos internos del Registro Mercantil y de otros entes públicos, sobre los cuales Resuelvex no tiene control.",
      "Si el Registro Mercantil formula alguna observación sobre el expediente, te contactaremos por WhatsApp o correo electrónico con el detalle y los pasos a seguir para subsanarla.",
    ],
  },
  {
    heading: "Tus obligaciones como cliente",
    list: [
      "Suministrar información y documentos veraces, completos y dentro de los plazos que te indiquemos.",
      "Estar disponible para la firma de documentos en la fecha y dirección coordinadas.",
      "Revisar cuidadosamente los datos de tu empresa (denominación, objeto social, capital, socios) antes de aprobar la redacción final, ya que una vez presentado el expediente ante el Registro, las correcciones pueden implicar trámites y costos adicionales.",
      "Responder oportunamente nuestras consultas por WhatsApp, correo electrónico o el panel de cliente.",
    ],
  },
  {
    heading: "Cancelaciones y reembolsos",
    paragraphs: [
      "Puedes solicitar la cancelación de tu trámite antes de que iniciemos la preparación de la documentación; en ese caso, te reembolsaremos el monto pagado, descontando los gastos ya incurridos, si los hubiera.",
      "Una vez iniciada la preparación de la documentación o coordinada la firma, el reembolso solo procederá por el monto no ejecutado del servicio, descontando los honorarios de terceros ya comprometidos (comisario, publicación, mensajería, entre otros).",
      "No es posible reembolsar las tasas oficiales del Registro Mercantil u otros entes públicos una vez pagadas, ya que son recaudadas directamente por dichas entidades.",
      "Para solicitar una cancelación, escríbenos por WhatsApp o a contacto@resuelvex.com indicando el nombre o número de tu trámite.",
    ],
  },
  {
    heading: "Comunicaciones",
    paragraphs: [
      "Nos comunicaremos contigo principalmente por WhatsApp y correo electrónico para coordinar el trámite, solicitar documentos, informarte sobre su avance y notificarte observaciones. Es tu responsabilidad mantener actualizados tus datos de contacto en el panel de cliente.",
      "Al contratar nuestros servicios aceptas recibir comunicaciones operativas relacionadas con tu trámite por estos medios.",
    ],
  },
  {
    heading: "Propiedad intelectual",
    paragraphs: [
      "El contenido del sitio web (textos, diseño, logotipo, marca Resuelvex y los materiales que utilizamos para explicar nuestro servicio) es propiedad de Resuelvex o de sus licenciantes y está protegido por las leyes de propiedad intelectual aplicables. No está permitido reproducirlo, copiarlo o utilizarlo con fines comerciales sin nuestra autorización expresa.",
      "Los documentos que preparamos para tu trámite (documento constitutivo, estatutos y demás recaudos) son para tu uso exclusivo en la constitución de tu empresa.",
    ],
  },
  {
    heading: "Limitación de responsabilidad",
    paragraphs: [
      "Resuelvex gestiona tu trámite ante terceros (Registro Mercantil, comisarios, notarías, entes parafiscales, entre otros) cuyos tiempos, criterios y requisitos no dependen de nosotros. No somos responsables por demoras, observaciones o decisiones de dichas entidades.",
      "No somos responsables por retrasos o inconvenientes derivados de información incompleta, inexacta o entregada fuera de plazo por el cliente, ni por la imposibilidad de contactarte a través de los medios que nos proporcionaste.",
      "En la medida permitida por la ley, nuestra responsabilidad frente a cualquier reclamo relacionado con el servicio se limita al monto efectivamente pagado por el plan contratado.",
    ],
  },
  {
    heading: "Modificaciones de estos términos",
    paragraphs: [
      "Podemos actualizar estos Términos y Condiciones en cualquier momento. Publicaremos la versión vigente en esta misma página con la fecha de la última actualización. El uso continuado del sitio o de nuestros servicios después de una modificación implica tu aceptación de los nuevos términos.",
    ],
  },
  {
    heading: "Ley aplicable y jurisdicción",
    paragraphs: [
      "Estos términos se rigen por las leyes de la República Bolivariana de Venezuela. Cualquier controversia derivada de su interpretación o cumplimiento se someterá a los tribunales competentes de la ciudad de Caracas, salvo que la ley disponga otra cosa.",
    ],
  },
  {
    heading: "Contacto",
    paragraphs: [
      "Si tienes dudas sobre estos Términos y Condiciones, puedes escribirnos a contacto@resuelvex.com o por WhatsApp desde los enlaces de contacto de este sitio.",
    ],
  },
];

export default function TerminosPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Términos y condiciones"
      updatedAt="8 de noviembre de 2026"
      intro="Estos Términos y Condiciones regulan el uso del sitio web resuelvex.com y la contratación de los servicios de gestión de trámites que presta Resuelvex ('Resuelvex', 'nosotros'). Al utilizar nuestro sitio, crear una cuenta o contratar un plan, aceptas estos términos en su totalidad. Si no estás de acuerdo, te pedimos no utilizar el servicio."
      sections={SECTIONS}
    />
  );
}

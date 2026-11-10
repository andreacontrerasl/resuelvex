"use client";

import { useState } from "react";
import {
  Container,
  Title,
  Stack,
  Paper,
  UnstyledButton,
  Group,
  Text,
  Collapse,
  Box,
} from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

const FAQ_ITEMS = [
  {
    q: "¿Tengo que ir personalmente al Registro Mercantil?",
    a: "No. Nosotros gestionamos el trámite ante el Registro Mercantil y coordinamos la recolección de las firmas en la dirección que nos indiques.",
  },
  {
    q: "¿Cuánto tiempo toma constituir mi empresa?",
    a: "Aproximadamente un mes desde que presentamos tu expediente en el Registro. Es un estimado: los tiempos dependen del Registro Mercantil y no de nosotros. Puedes ver en todo momento en qué etapa va tu trámite.",
  },
  {
    q: "¿Cómo sé que mi trámite está avanzando?",
    a: "Desde tu cuenta ves en qué etapa está tu trámite, y te escribimos por correo en cada momento importante: cuando el nombre está aprobado, cuando el documento está listo para firmar, cuando lo presentamos en el Registro y cuando tu empresa está lista.",
  },
  {
    q: "¿Qué está incluido en el precio del plan?",
    a: "Todo lo que aparece en cada plan: documentos, firma a domicilio, comisario, trámite, publicación y entrega. El único pago aparte son los pagos oficiales al Registro.",
  },
  {
    q: "¿Hay algún pago adicional?",
    a: "Sí. Las tasas oficiales del Registro Mercantil y la reserva de la denominación comercial se pagan por separado y no están incluidas en el precio del plan. Antes de cada pago te decimos el monto exacto y coordinamos el pago contigo. Si el Registro pide correcciones, las hacemos sin costo adicional.",
  },
  {
    q: "¿Cómo funcionan los pagos al Registro Mercantil?",
    a: "Los derechos de registro (Planilla Única Bancaria) y la reserva del nombre de tu empresa son pagos oficiales que se hacen directamente al Registro Mercantil, por eso no forman parte del precio del plan. Antes de cada pago te decimos el monto exacto (posterior a la emisión y envío de la planilla) y coordinamos el pago contigo, para que no tengas que hacerlo solo.",
  },
  {
    q: "¿Qué medios de pago aceptan?",
    a: "Se puede pagar en dólares o bolívares (Zelle, efectivo, transferencia bancaria y pago móvil).",
  },
  {
    q: "¿Qué pasa si el nombre que quiero para mi empresa no está disponible?",
    a: "Nos das tres opciones en orden de preferencia. Si ninguna está disponible, te pedimos tres nuevas y hacemos otra búsqueda sin costo adicional.",
  },
  {
    q: "¿Puedo constituir cualquier tipo de empresa?",
    a: "Constituimos compañías anónimas (C.A.) para la mayoría de las actividades comerciales. Si tu actividad necesita un permiso previo de un ente regulador (banca, seguros, hidrocarburos, valores o telecomunicaciones, por ejemplo), tu caso necesita asesoría legal especializada y no un trámite estandarizado.",
  },
  {
    q: "¿Resuelvex es un escritorio de abogados?",
    a: "No. Resuelvex es un servicio de gestión de trámites para la constitución de empresas. Preparamos tu documentación a tu medida, conforme a los requisitos del Registro Mercantil y con el visado de abogado que exige la ley para su inscripción, y coordinamos todo el proceso ante el Registro. Si tu actividad necesita un permiso previo de un ente regulador, te avisamos antes de que pagues, porque ese caso requiere asesoría legal especializada.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Container size="lg" py={96} id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Stack gap={8} maw={620} mb={40}>
        <Title
          order={2}
          c="navy"
          style={{
            fontSize: "clamp(30px, 3vw, 40px)",
            lineHeight: 1.12,
            letterSpacing: "-0.025em",
          }}
        >
          Lo que más nos preguntan.
        </Title>

        <Text c="gray.7" size="md" lh={1.65}>
          Resolvemos algunas de las dudas más comunes antes de comenzar el
          proceso.
        </Text>
      </Stack>

      <Stack gap={10} maw={820}>
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <Paper
              key={item.q}
              radius="lg"
              bg="white"
              style={{
                border: isOpen
                  ? "1px solid rgba(0, 191, 179, 0.32)"
                  : "1px solid var(--mantine-color-gray-3)",
                overflow: "hidden",
                transition: "border-color 180ms ease",
              }}
            >
              <UnstyledButton
                onClick={() => setOpenIndex(isOpen ? null : index)}
                w="100%"
                px={{ base: "md", sm: "xl" }}
                py="lg"
              >
                <Group justify="space-between" wrap="nowrap" gap="lg">
                  <Text
                    fw={600}
                    size="sm"
                    c="navy"
                    lh={1.45}
                  >
                    {item.q}
                  </Text>

                  <Box
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: isOpen
                        ? "var(--mantine-color-teal-8)"
                        : "var(--mantine-color-teal-0)",
                      color: isOpen
                        ? "white"
                        : "var(--mantine-color-teal-9)",
                      transition:
                        "background-color 180ms ease, color 180ms ease",
                    }}
                  >
                    <IconPlus
                      size={15}
                      stroke={2}
                      style={{
                        transform: isOpen
                          ? "rotate(45deg)"
                          : "rotate(0deg)",
                        transition: "transform 180ms ease",
                      }}
                    />
                  </Box>
                </Group>
              </UnstyledButton>

              <Collapse expanded={isOpen}>
                <Box
                  px={{ base: "md", sm: "xl" }}
                  pb="lg"
                  maw={730}
                >
                  <Text
                    size="sm"
                    c="gray.7"
                    lh={1.65}
                  >
                    {item.a}
                  </Text>
                </Box>
              </Collapse>
            </Paper>
          );
        })}
      </Stack>
    </Container>
  );
}

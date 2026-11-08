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
    a: "En condiciones normales, el proceso ante el Registro toma aproximadamente un mes desde que se presenta el expediente. Es un tiempo estimado, ya que el plazo final depende de los tiempos internos del Registro Mercantil.",
  },
  {
    q: "¿Qué está incluido en el precio del plan?",
    a: "Cada plan indica exactamente los trámites y servicios que incluye. Todos incluyen la gestión ante el Registro Mercantil, la firma a domicilio, el comisario y sus recaudos, y la publicación mercantil.",
  },
  {
    q: "¿Hay algún pago adicional?",
    a: "Sí. Las tasas oficiales del Registro Mercantil y la reserva de la denominación comercial se pagan por separado y no están incluidas en el precio del plan. Te indicaremos el monto correspondiente antes de realizar cada pago.",
  },
  {
    q: "¿Qué medios de pago aceptan?",
    a: "Puedes pagar tu plan utilizando los medios de pago disponibles al momento de iniciar el proceso, incluyendo opciones en dólares y bolívares.",
  },
  {
    q: "¿Qué pasa si el nombre que quiero para mi empresa no está disponible?",
    a: "Te ayudamos a continuar con nuevas opciones hasta encontrar una denominación disponible para tu empresa.",
  },
  {
    q: "¿Puedo constituir cualquier tipo de empresa?",
    a: "Por ahora trabajamos con empresas cuyas actividades no requieren autorizaciones especiales para su constitución. Cuando nos cuentes a qué se dedicará tu empresa, podremos confirmar si podemos gestionar tu caso.",
  },
  {
    q: "¿Resuelvex es un bufete de abogados?",
    a: "No. Resuelvex es un servicio de gestión de trámites para la constitución de empresas. Nos encargamos de preparar la documentación y coordinar el proceso ante el Registro Mercantil. Si tu caso requiere asesoría legal específica, te lo indicaremos antes de continuar.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Container size="lg" py={96} id="faq">
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
          Lo que más nos preguntan
        </Title>

        <Text c="dimmed" size="md" lh={1.65}>
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
                        ? "var(--mantine-color-teal-6)"
                        : "var(--mantine-color-teal-0)",
                      color: isOpen
                        ? "white"
                        : "var(--mantine-color-teal-7)",
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
                    c="dimmed"
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

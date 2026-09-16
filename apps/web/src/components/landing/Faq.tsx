"use client";

import { useState } from "react";
import { Container, Title, Badge, Stack, Paper, UnstyledButton, Group, Text, Collapse } from "@mantine/core";

const FAQ_ITEMS = [
  { q: "¿Debo firmar en persona en alguna oficina?", a: "No. Coordinamos la recolección de tu firma en la dirección que nos indiques." },
  { q: "¿Cuánto tiempo toma el trámite?", a: "En condiciones normales, alrededor de un mes desde que el expediente se radica en el Registro. Es un tiempo estimado: el plazo final depende de los tiempos internos del Registro Mercantil, no de nosotros." },
  { q: "¿Qué medios de pago aceptan?", a: "Zelle, transferencia bancaria y pago móvil, entre otros medios habituales en Venezuela." },
  { q: "¿El precio del plan cubre todo el trámite?", a: "Cubre nuestros honorarios, el traslado y la gestión. La planilla del Registro se paga de forma independiente; te confirmamos el monto correspondiente a tu caso antes de que debas pagarla." },
  { q: "¿Resuelvex es un despacho de abogados?", a: "No. Somos un servicio de gestión y trámite: preparamos tu documentación con base en modelos ya utilizados en la práctica y coordinamos el proceso ante el Registro Mercantil. Si tu caso requiere asesoría legal específica, te lo indicamos antes de continuar." },
  { q: "¿Qué pasa si el nombre que elegí no está disponible?", a: "Buscamos nuevas opciones sin costo adicional, hasta encontrar un nombre disponible." },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Container size="lg" py={88} id="faq">
      <Stack gap={4} maw={600} mb="xl">
        <Text variant="light" c="#00BFB3" size="xs" ff="var(--font-mono)" tt="uppercase">
          Preguntas frecuentes
        </Text>
        <Title order={2} mt="xs" c="navy">Lo que más nos preguntan</Title>
      </Stack>

      <Stack gap="sm" maw={760}>
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <Paper key={item.q} withBorder radius="md" p="md">
              <UnstyledButton
                onClick={() => setOpenIndex(isOpen ? null : index)}
                w="100%"
              >
                <Group justify="space-between" wrap="nowrap">
                  <Text fw={600} size="sm" c="navy.9">{item.q}</Text>
                  <Text c="teal.6" fw={700} style={{ transform: isOpen ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>
                    +
                  </Text>
                </Group>
              </UnstyledButton>
              <Collapse expanded={isOpen}>
                <Text size="sm" c="dimmed" pt="sm">{item.a}</Text>
              </Collapse>
            </Paper>
          );
        })}
      </Stack>
    </Container>
  );
}

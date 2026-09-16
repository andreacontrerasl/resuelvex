import { Box, Container, Group, Text } from "@mantine/core";

const ITEMS = [
  "Registro Mercantil Segundo",
  "Recolección de firma incluida",
  "Zelle · Pago móvil · Transferencia",
  "Seguimiento por WhatsApp",
];

export function TrustStrip() {
  return (
    <Box py="lg" style={{ borderBottom: "1px solid var(--mantine-color-gray-3)" }}>
      <Container size="lg">
        <Group justify="space-between" wrap="wrap" gap="lg">
          <Text size="xs" ff="var(--font-mono)" c="dimmed">
            Tu trámite, cubierto de punta a punta
          </Text>
          <Group gap="lg" wrap="wrap">
            {ITEMS.map((item) => (
              <Text key={item} size="sm" c="dimmed" fw={500}>
                ✓ {item}
              </Text>
            ))}
          </Group>
        </Group>
      </Container>
    </Box>
  );
}

import { Box, Container, SimpleGrid, Text, Anchor, Stack, Divider, Group } from "@mantine/core";

export function Footer() {
  return (
    <Box component="footer" py={64} style={{ backgroundColor: "var(--mantine-color-navy-9)" }}>
      <Container size="lg">
        <SimpleGrid cols={{ base: 1, sm: 4 }} spacing="xl" pb="xl" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <div>
            <img src="/logo-white-no-bg.png" alt="Resuelvex" style={{ height: 50, filter: "brightness(0) invert(1)", marginBottom: 16 }} />
            <Text size="sm" c="gray.5">
              Servicio de gestión y trámite de documentos para emprendedores en el Gran Caracas.
            </Text>
          </div>

          <Stack gap={6}>
            <Text size="xs" c="gray.6" tt="uppercase" ff="var(--font-mono)" fw={600} mb={4}>Producto</Text>
            <Anchor href="#como-funciona" c="gray.3" size="sm">Cómo funciona</Anchor>
            <Anchor href="#planes" c="gray.3" size="sm">Planes</Anchor>
            <Anchor href="#faq" c="gray.3" size="sm">Preguntas frecuentes</Anchor>
          </Stack>

          <Stack gap={6}>
            <Text size="xs" c="gray.6" tt="uppercase" ff="var(--font-mono)" fw={600} mb={4}>Empresa</Text>
            <Anchor href="#por-que" c="gray.3" size="sm">Por qué Resuelvex</Anchor>
            <Anchor href="#" c="gray.3" size="sm">Contacto</Anchor>
          </Stack>

          <Stack gap={6}>
            <Text size="xs" c="gray.6" tt="uppercase" ff="var(--font-mono)" fw={600} mb={4}>Legal</Text>
            <Anchor href="#" c="gray.3" size="sm">Términos y condiciones</Anchor>
            <Anchor href="#" c="gray.3" size="sm">Privacidad</Anchor>
          </Stack>
        </SimpleGrid>

        <Text size="xs" c="gray.6" maw={640} pt="lg">
          Resuelvex es un servicio de gestión y trámite de documentos. No constituye un despacho
          de abogados ni presta asesoría jurídica personalizada.
        </Text>

        <Group justify="space-between" pt="lg" wrap="wrap">
          <Text size="xs" c="gray.6">© 2026 Resuelvex. Todos los derechos reservados.</Text>
          <Anchor href="#" size="xs" c="gray.5">@resuelvex</Anchor>
        </Group>
      </Container>
    </Box>
  );
}

import {
  Box,
  Container,
  SimpleGrid,
  Text,
  Anchor,
  Stack,
  Group,
} from "@mantine/core";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <Box
      component="footer"
      py={{ base: 48, md: 64 }}
      style={{
        backgroundColor: "var(--mantine-color-navy-9)",
      }}
    >
      <Container size="lg">
        <SimpleGrid
          cols={{ base: 1, xs: 2, md: 4 }}
          spacing={{ base: 32, md: "xl" }}
          pb={40}
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {/* BRAND */}
          <Box maw={300}>
            <img
              src="/logo-white-no-bg.webp"
              alt="Resuelvex"
              style={{
                height: 55,
                width: "auto",
                objectFit: "contain",
                marginBottom: 0,
              }}
            />

            <Text
              size="sm"
              c="gray.5"
              lh={1.65}
            >
              Te ayudamos a constituir tu empresa y coordinamos cada etapa del
              trámite para que puedas enfocarte en empezar tu negocio.
            </Text>
          </Box>

          {/* RESUELVEX */}
          <Stack gap={9}>
            <Text
              size="xs"
              c="gray.6"
              tt="uppercase"
              ff="var(--font-mono)"
              fw={600}
              mb={4}
              style={{ letterSpacing: "0.06em" }}
            >
              Resuelvex
            </Text>

            <Anchor
              href="#como-funciona"
              c="gray.3"
              size="sm"
              underline="never"
            >
              Cómo funciona
            </Anchor>

            <Anchor
              href="#planes"
              c="gray.3"
              size="sm"
              underline="never"
            >
              Planes y precios
            </Anchor>

            <Anchor
              href="#por-que"
              c="gray.3"
              size="sm"
              underline="never"
            >
              Por qué Resuelvex
            </Anchor>

            <Anchor
              href="#faq"
              c="gray.3"
              size="sm"
              underline="never"
            >
              Preguntas frecuentes
            </Anchor>
          </Stack>

          {/* CONTACTO */}
          <Stack gap={9}>
            <Text
              size="xs"
              c="gray.6"
              tt="uppercase"
              ff="var(--font-mono)"
              fw={600}
              mb={4}
              style={{ letterSpacing: "0.06em" }}
            >
              Contacto
            </Text>

            <Anchor
              href={buildWhatsAppLink(
                "Hola, quiero más información sobre cómo constituir mi empresa."
              )}
              target="_blank"
              rel="noopener noreferrer"
              c="gray.3"
              size="sm"
              underline="never"
            >
              WhatsApp
            </Anchor>

            <Anchor
              href="mailto:contacto@resuelvex.com"
              c="gray.3"
              size="sm"
              underline="never"
            >
              contacto@resuelvex.com
            </Anchor>

            <Anchor
              href="#"
              c="gray.3"
              size="sm"
              underline="never"
            >
              Instagram
            </Anchor>
          </Stack>

          {/* LEGAL */}
          <Stack gap={9}>
            <Text
              size="xs"
              c="gray.6"
              tt="uppercase"
              ff="var(--font-mono)"
              fw={600}
              mb={4}
              style={{ letterSpacing: "0.06em" }}
            >
              Legal
            </Text>

            <Anchor
              href="/terminos"
              c="gray.3"
              size="sm"
              underline="never"
            >
              Términos y condiciones
            </Anchor>

            <Anchor
              href="/privacidad"
              c="gray.3"
              size="sm"
              underline="never"
            >
              Política de privacidad
            </Anchor>
          </Stack>
        </SimpleGrid>

        {/* DISCLAIMER */}
        <Text
          size="xs"
          c="gray.6"
          maw={700}
          pt={24}
          lh={1.65}
        >
          Resuelvex es un servicio de gestión de trámites y documentos. No es
          un despacho de abogados ni presta asesoría jurídica personalizada.
        </Text>

        {/* BOTTOM */}
        <Group
          justify="space-between"
          pt={24}
          mt={24}
          wrap="wrap"
          gap="sm"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <Text size="xs" c="gray.6">
            © 2026 Resuelvex. Todos los derechos reservados.
          </Text>

          <Text
            size="xs"
            c="gray.6"
          >
            Caracas, Venezuela
          </Text>
        </Group>
      </Container>
    </Box>
  );
}

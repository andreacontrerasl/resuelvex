import {
  Container,
  Paper,
  Title,
  Text,
  Group,
  Button,
} from "@mantine/core";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function CtaFinal() {
  return (
    <Container size="lg" py={88}>
      <Paper
        radius="xl"
        p={{ base: "xl", md: 64 }}
        ta="center"
        style={{
          backgroundColor: "var(--mantine-color-teal-5)",
        }}
      >
        <Title
          order={2}
          c="navy.9"
          mb="sm"
          mx="auto"
          maw={620}
          style={{
            fontSize: "clamp(30px, 3vw, 42px)",
            lineHeight: 1.12,
            letterSpacing: "-0.025em",
          }}
        >
          ¿Listo para formalizar tu negocio?
        </Title>

        <Text
          c="navy.8"
          size="md"
          lh={1.6}
          mb={28}
          mx="auto"
          maw={500}
        >
          Precio fijo desde el inicio, firma donde estés y seguimiento de cada paso. Tú te enfocas en tu negocio y nosotros nos encargamos del resto.
        </Text>

        <Group justify="center" gap="sm">
          <Button
            component="a"
            href={buildWhatsAppLink(
              "Hola, quiero más información sobre cómo constituir mi empresa."
            )}
            target="_blank"
            rel="noopener noreferrer"
            color="navy"
            radius="xl"
            size="md"
            px={28}
          >
            Escríbenos por WhatsApp
          </Button>

          <Button
            component="a"
            href="#planes"
            variant="outline"
            color="navy"
            radius="xl"
            size="md"
            px={28}
          >
            Ver planes y precios
          </Button>
        </Group>

        <Text c="navy.8" size="xs" mt={14}>
          Te respondemos el mismo día.
        </Text>
      </Paper>
    </Container>
  );
}

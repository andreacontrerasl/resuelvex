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
          Empieza a constituir tu empresa.
        </Title>

        <Text
          c="navy.8"
          size="md"
          lh={1.6}
          mb={28}
          mx="auto"
          maw={500}
        >
          Elige el plan que necesitas y nosotros te acompañamos durante todo
          el proceso.
        </Text>

        <Group justify="center" gap="sm">
          <Button
            component="a"
            href="#planes"
            color="navy"
            radius="xl"
            size="md"
            px={28}
          >
            Ver planes y precios
          </Button>

          <Button
            component="a"
            href={buildWhatsAppLink(
              "Hola, quiero más información sobre cómo constituir mi empresa."
            )}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            color="navy"
            radius="xl"
            size="md"
            px={28}
          >
            Hablar por WhatsApp
          </Button>
        </Group>
      </Paper>
    </Container>
  );
}

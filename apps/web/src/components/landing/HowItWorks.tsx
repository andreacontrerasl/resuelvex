import { Container, Title, Text, SimpleGrid, Card, Badge, Stack } from "@mantine/core";
import classes from "./landing.module.css";

const STEPS = [
  { num: "01", title: "Elige tu plan", text: "Revisa qué incluye cada uno y decide con la información completa." },
  { num: "02", title: "Completa el formulario", text: "Datos simples: cuántos socios son, cómo se llamará tu empresa, a qué se dedicará." },
  { num: "03", title: "Coordinamos tu firma", text: "Un mensajero recoge tu firma en la dirección que nos indiques, en el horario que definas." },
  { num: "04", title: "Gestionamos el trámite", text: "Seguimiento ante el Registro Mercantil mientras ves el avance de tu caso." },
  { num: "05", title: "Recibes tu empresa", text: "Documentación física y digital, entregada en la dirección que nos indiques." },
];

export function HowItWorks() {
  return (
    <Container size="lg" py={88} id="como-funciona">
      <Stack gap={4} maw={600} mb="xl">
        <Text variant="light" c="#00BFB3" size="xs" ff="var(--font-mono)" tt="uppercase">
          El Proceso
        </Text>
        <Title order={1} mt="sm" c="navy">Cinco pasos, de principio a fin</Title>
        <Text c="dimmed">
          Sin oficinas que visitar ni citas que coordinar tú mismo. Tú avanzas desde el
          formulario; nosotros nos movemos en el Registro.
        </Text>
      </Stack>

      <SimpleGrid cols={{ base: 1, xs: 2, md: 5 }} spacing="md">
        {STEPS.map((step) => (
          <Card key={step.num} className={classes.foldCard} withBorder radius="lg" padding="lg">
            <Text size="xs" ff="var(--font-mono)" c="teal.6" fw={600} mb="sm">
              {step.num}
            </Text>
            <Text fw={600} size="sm" mb={6}>{step.title}</Text>
            <Text size="xs" c="dimmed">{step.text}</Text>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}

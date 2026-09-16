import { Container, SimpleGrid, Badge, Title, Text, Card, Group, TextInput, Button } from "@mantine/core";
import classes from "./landing.module.css";

export function NameSearch() {
  return (
    <Container size="lg" py={88} id="nombre">
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing={56}>
        <div>
          <Badge variant="light" color="teal" radius="sm" ff="var(--font-mono)" tt="uppercase" mb="md">
            Antes de decidir tu plan
          </Badge>
          <Title order={2} mb="sm" style={{ fontSize: "clamp(24px,2.6vw,32px)" }}>
            Consulta la disponibilidad de tu nombre
          </Title>
          <Text c="dimmed">
            Sin costo. Te avisamos el resultado por correo, para que llegues al formulario con
            esa decisión ya tomada.
          </Text>
        </div>

        <Card className={classes.foldCard} withBorder radius="lg" padding="xl">
          <Text size="xs" ff="var(--font-mono)" tt="uppercase" c="teal.6" fw={600} mb="md">
            Búsqueda de nombre
          </Text>
          <Group gap="xs" mb="sm">
            <TextInput placeholder="Ej: Postres Doña Inés" radius="xl" style={{ flex: 1 }} />
            <Button color="navy" radius="xl">Consultar</Button>
          </Group>
          <Text size="xs" c="dimmed">Te escribimos apenas tengamos el resultado.</Text>
        </Card>
      </SimpleGrid>
    </Container>
  );
}

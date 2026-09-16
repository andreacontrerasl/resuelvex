import { Container, Paper, Title, Text, Group, Button } from "@mantine/core";

export function CtaFinal() {
  return (
    <Container size="lg" py={88}>
      <Paper radius="xl" p={{ base: "xl", md: 64 }} ta="center" style={{ backgroundColor: "var(--mantine-color-teal-5)" }}>
        <Text size="xs" ff="var(--font-mono)" tt="uppercase" c="navy.9" fw={600} mb="xs">
          Empecemos
        </Text>
        <Title order={2} c="navy.9" mb="xs" mx="auto" maw={620}>
          ¿Listo para dar el siguiente paso?
        </Title>
        <Text c="navy.8" mb="lg" mx="auto" maw={460}>
          Revisa los planes y completa tu formulario cuando estés listo.
        </Text>
        <Group justify="center">
          <Button component="a" href="#planes" color="navy" radius="xl">
            Ver planes
          </Button>
          <Button component="a" href="#" variant="outline" color="navy" radius="xl">
            Escríbenos por WhatsApp
          </Button>
        </Group>
      </Paper>
    </Container>
  );
}

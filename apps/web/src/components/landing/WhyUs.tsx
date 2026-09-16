import { Container, Title, Text, Badge, Stack, Group, Box, Paper, Progress, ThemeIcon } from "@mantine/core";
import classes from "./landing.module.css";

const REASONS = [
  { num: "01", title: "Información completa desde el inicio", text: "Sabes qué incluye tu plan antes de pagar, sin condiciones que aparezcan después." },
  { num: "02", title: "Acompañamiento real", text: "Escríbenos por WhatsApp en cualquier momento del proceso y habla directamente con el equipo." },
  { num: "03", title: "Seguimiento visible", text: "Sabes en qué etapa está tu trámite en todo momento, sin quedarte a la espera sin información." },
];

const ROWS = [
  { name: "Postres Doña Inés, C.A.", id: "TRM-2026-0091", status: "En registro", color: "orange", highlight: true },
  { name: "Taller Ferretero Uribe, C.A.", id: "TRM-2026-0088", status: "Firma coordinada", color: "gray", highlight: false },
  { name: "Estudio Marín & Asoc., C.A.", id: "TRM-2026-0084", status: "Entregado", color: "teal", highlight: false },
];

export function WhyUs() {
  return (
    <Container size="lg" py={88} id="por-que">
      <Paper radius="xl" p={{ base: "lg", md: 64 }} className={classes.foldCard2}
      style={{ backgroundColor: "var(--mantine-color-navy-9)", position: "relative", overflow: "hidden" }}>
        <Box
          pos="absolute"
          bottom={-200}
          left={-120}
          w={500}
          h={500}
          style={{ borderRadius: "50%", background: "radial-gradient(circle, rgba(0,191,179,0.12) 0%, rgba(0,191,179,0) 70%)" }}
        />
        <Group align="center" gap={60} wrap="wrap" style={{ position: "relative", zIndex: 2 }}>
          <Box flex={1} miw={280}>
            <Text variant="light" c="#00BFB3" size="xs" ff="var(--font-mono)" tt="uppercase">
              Por qué Resuelvex
            </Text>
            <Title order={1} c="white" mt="md" mb="lg">
              Un proceso ordenado, no un favor que hay que pedir.
            </Title>

            <Stack gap="lg" mb="lg">
              {REASONS.map((r) => (
                <Group key={r.num} align="flex-start" wrap="nowrap">
                  <Text size="xs" ff="var(--font-mono)" c="teal.4" w={28}>{r.num}</Text>
                  <div>
                    <Text fw={600} c="white" size="sm" mb={4}>{r.title}</Text>
                    <Text size="xs" c="gray.5">{r.text}</Text>
                  </div>
                </Group>
              ))}
            </Stack>

            <Text size="sm" c="gray.5" style={{ borderTop: "1px solid rgba(255,255,255,0.14)", paddingTop: 20 }}>
              Resuelvex nace de la experiencia de ver de cerca lo complicado que puede resultar
              constituir una empresa en Venezuela para quien apenas está comenzando un negocio.
              Diseñamos un proceso claro y acompañado, para que ese primer paso no se convierta en
              un obstáculo.
            </Text>
          </Box>

          <Paper flex={1} miw={280} radius="lg" p="lg" shadow="xl">
            <Text size="xs" c="dimmed" mb="md">Panel de trámites</Text>
            <Stack gap="xs">
              {ROWS.map((row) => (
                <Group
                  key={row.id}
                  justify="space-between"
                  p="sm"
                  style={{
                    borderRadius: 12,
                    backgroundColor: row.highlight ? "var(--mantine-color-teal-0)" : "transparent",
                  }}
                >
                  <div>
                    <Text size="sm" fw={600} c="navy.9">{row.name}</Text>
                    <Text size="xs" c="dimmed" ff="var(--font-mono)">{row.id}</Text>
                  </div>
                  <Badge color={row.color} variant="light" size="sm" ff="var(--font-mono)">
                    {row.status}
                  </Badge>
                </Group>
              ))}
            </Stack>
            <Box mt="lg">
              <Progress value={64} color="teal" size="sm" radius="xl" />
              <Group justify="space-between" mt={8}>
                <Text size="xs" c="dimmed">12 trámites activos</Text>
                <Text size="xs" c="dimmed">64% en proceso</Text>
              </Group>
            </Box>
          </Paper>
        </Group>
      </Paper>
    </Container>
  );
}

import { Container, SimpleGrid, Title, Text, Group, Button, Box, Paper, Stack } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react"
import classes from "./landing.module.css";

export function Hero() {
  return (
    <Box component="section" pos="relative" pt={88} pb={60} style={{ overflow: "hidden" }}>
      <Container size="lg">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={56} verticalSpacing={56}>
          <Box style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Group gap={8} mb="md">
              <Box w={6} h={6} style={{ borderRadius: "50%", backgroundColor: "var(--mantine-color-teal-6)", flexShrink: 0 }} />
              <Text size="xs" fw={600} tt="uppercase" ff="var(--font-mono)" c="teal.7" style={{ letterSpacing: "0.08em" }}>
                Constitución de compañías · Gran Caracas
              </Text>
            </Group>

            <Title order={1} mb="md" c="#1F305E" style={{ fontSize: "clamp(34px,4.2vw,54px)", lineHeight: 1.06 }}>
              Convierte tu idea en una empresa{" "}
              <Text component="span" c="teal.6" inherit>constituida</Text>
              , sin moverte de casa.
            </Title>

            <Text c="dimmed" size="md" mb="lg">
              Eliges tu plan, completas un formulario y nosotros coordinamos todo con el Registro
              Mercantil — incluida la firma, que recogemos en la dirección que nos indiques.
            </Text>

            <Group mb="md">
              <Button component="a" href="#planes" color="navy" radius="xl">
                Conocer los planes
              </Button>
              <Button
                component="a"
                href="https://wa.me/58XXXXXXXXXX"
                target="_blank"
                variant="outline"
                color="navy"
                radius="xl"
              >
                Contáctanos
              </Button>
            </Group>
          </Box>
<Box pos="relative" className={classes.darkStage} h={{ base: 460, md: 480 }}>
  <div className={classes.heroGlow} />

  <Box pos="relative" className={classes.compositionWrap}>
    {/* Panel del status — ahora como ventana de navegador completa */}
    <Paper radius="lg" className={classes.browserWindow}>
      <div className={classes.browserTopbar}>
        <span className={classes.browserDot} style={{ background: "#FF5F57" }} />
        <span className={classes.browserDot} style={{ background: "#FEBC2E" }} />
        <span className={classes.browserDot} style={{ background: "#28C840" }} />
        <div className={classes.urlBar}>resuelvex.com/panel/inversiones-jr</div>
      </div>

      <div className={classes.browserContent}>
        {/* Sidebar angosto */}
        <div className={classes.sidebar}>
          <div className={classes.sidebarIcon} style={{ background: "#00BFB3" }} />
          <div className={classes.sidebarIcon} />
          <div className={classes.sidebarIcon} />
          <div className={classes.sidebarIcon} />
        </div>

        {/* Contenido, fondo claro */}
        <div className={classes.mainContent}>
          <Group justify="space-between" mb="sm" wrap="nowrap">
            <Box>
              <Text fw={700} size="sm" c="#1F305E">Inversiones JR, C.A.</Text>
              <Text size="xs" c="dimmed" ff="var(--font-mono)">TRM-2026-0091</Text>
            </Box>
            <span className={classes.activePill}>Activo</span>
          </Group>

          <Group gap={6} mb="md">
            <div className={classes.statMini}>
              <Text size="9px" c="dimmed" tt="uppercase">Plan</Text>
              <Text size="xs" fw={700} c="#1F305E">Estándar</Text>
            </div>
            <div className={classes.statMini}>
              <Text size="9px" c="dimmed" tt="uppercase">Estimado</Text>
              <Text size="xs" fw={700} c="#1F305E">1 mes</Text>
            </div>
          </Group>

          <Group gap={6} mb="md">
            <span className={classes.actionPill} style={{ background: "#1F305E" }}>Estado</span>
            <span className={classes.actionPill}>Documentos</span>
            <span className={classes.actionPill}>Pagos</span>
          </Group>

          <Stack gap={8}>
            <Group justify="space-between" wrap="nowrap">
              <Text size="xs" fw={500}>Documento preparado</Text>
              <span className={classes.checkDot}>✓</span>
            </Group>
            <Group justify="space-between" wrap="nowrap">
              <Text size="xs" fw={500}>Firma coordinada</Text>
              <span className={classes.checkDot}>✓</span>
            </Group>
            <Group justify="space-between" wrap="nowrap">
              <Text size="xs" fw={500} c="dimmed">En Registro Mercantil</Text>
              <span className={classes.checkDot} style={{ background: "#E1E4EA", color: "#8792A6" }}>···</span>
            </Group>
          </Stack>
        </div>
      </div>
    </Paper>

    {/* Documento constitutivo, montado a la derecha, encima del panel */}
    <Paper radius="lg" className={classes.docOverlapCard}>
      <div className={classes.docOverlapHeader} />
      <Stack gap={7} p="md" pt="sm">
        <Text size="xs" c="dimmed" ff="var(--font-mono)" tt="uppercase" style={{ letterSpacing: "0.05em" }}>
          Acta constitutiva
        </Text>
        <div className={classes.docTinyLine} style={{ width: "92%" }} />
        <div className={classes.docTinyLine} style={{ width: "78%" }} />
        <div className={classes.docTinyLine} style={{ width: "85%" }} />
        <div className={classes.docTinyLine} style={{ width: "60%" }} />
        <div className={classes.docTinyLine} style={{ width: "70%" }} />
      </Stack>
    </Paper>
  </Box>
</Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
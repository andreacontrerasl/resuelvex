import {
  Container,
  Title,
  Text,
  Stack,
  Group,
  Box,
  Paper,
  Badge,
} from "@mantine/core";
import {
  IconCheck,
  IconCircleFilled,
} from "@tabler/icons-react";
import classes from "./landing.module.css";

const STATUS_STEPS = [
  {
    label: "Información recibida",
    status: "completed",
  },
  {
    label: "Documentos preparados",
    status: "completed",
  },
  {
    label: "Firma completada",
    status: "completed",
  },
  {
    label: "En Registro Mercantil",
    status: "current",
  },
  {
    label: "Documentos listos",
    status: "pending",
  },
];

export function WhyUs() {
  return (
    <Container size="lg" py={96} id="por-que">
      <Paper
        radius="xl"
        p={{ base: 28, md: 64 }}
        className={classes.whyCard}
      >
        <Box className={classes.whyGlow} />

        <Group
          gap={48}
          wrap="wrap"
          className={classes.whyContent}
        >
          {/* LEFT SIDE */}
<Box flex={1} miw={280}>
  <Text
    size="xs"
    ff="var(--font-mono)"
    tt="uppercase"
    c="teal.4"
    fw={600}
    className={classes.whyEyebrow}
  >
    Por qué Resuelvex
  </Text>

  <Title
    order={2}
    c="white"
    mt={12}
    mb={20}
    className={classes.whyTitle}
  >
    Constituir tu empresa no debería frenarte.
  </Title>

  <Text
    c="gray.4"
    size="sm"
    lh={1.75}
    maw={480}
  >
    Resuelvex nace de la experiencia de ver de cerca lo complicado
    que puede resultar constituir una empresa en Venezuela para quien
    apenas está comenzando un negocio.
  </Text>

  <Text
    c="gray.4"
    size="sm"
    lh={1.75}
    maw={480}
    mt={16}
  >
    Por eso diseñamos un proceso claro y acompañado, para que puedas
    resolver este primer paso y concentrarte en empezar tu empresa.
  </Text>

  <Stack gap={12} mt={28}>
    <Group gap={10} wrap="nowrap">
      <Box
        style={{
          width: 20,
          height: 20,
          borderRadius: "50%",
          backgroundColor: "rgba(0, 191, 179, 0.14)",
          color: "var(--mantine-color-teal-4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <IconCheck size={11} stroke={3} />
      </Box>

      <Text size="sm" c="gray.2" fw={500}>
        Pensado para quienes están comenzando
      </Text>
    </Group>

    <Group gap={10} wrap="nowrap">
      <Box
        style={{
          width: 20,
          height: 20,
          borderRadius: "50%",
          backgroundColor: "rgba(0, 191, 179, 0.14)",
          color: "var(--mantine-color-teal-4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <IconCheck size={11} stroke={3} />
      </Box>

      <Text size="sm" c="gray.2" fw={500}>
        Elige solo los trámites que necesitas
      </Text>
    </Group>

    <Group gap={10} wrap="nowrap">
      <Box
        style={{
          width: 20,
          height: 20,
          borderRadius: "50%",
          backgroundColor: "rgba(0, 191, 179, 0.14)",
          color: "var(--mantine-color-teal-4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <IconCheck size={11} stroke={3} />
      </Box>

      <Text size="sm" c="gray.2" fw={500}>
        Acompañamiento durante todo el proceso
      </Text>
    </Group>
  </Stack>
</Box>

          {/* RIGHT SIDE — TRACKING */}
          <Paper
            flex={1}
            miw={280}
            maw={410}
            radius="lg"
            p={{ base: "lg", md: 28 }}
            className={classes.trackingCard}
            aria-hidden="true"
          >
            <Group
              justify="space-between"
              align="flex-start"
              mb={28}
            >
              <Box>
                <Text size="xs" c="gray.7" mb={5}>
                  Tu trámite
                </Text>

                <Text fw={700} c="navy" size="md">
                  Inversiones JR, C.A.
                </Text>

                <Text
                  size="xs"
                  c="gray.7"
                  ff="var(--font-mono)"
                  mt={2}
                >
                  TRM-2026-0091
                </Text>
              </Box>

              <Badge
                color="teal"
                variant="light"
                radius="xl"
                size="sm"
              >
                En proceso
              </Badge>
            </Group>

            <Stack gap={0}>
              {STATUS_STEPS.map((step, index) => {
                const completed = step.status === "completed";
                const current = step.status === "current";

                return (
                  <Box
                    key={step.label}
                    className={classes.trackingStep}
                  >
                    <Box className={classes.trackingIndicator}>
                      {completed ? (
                        <Box className={classes.trackingCompleted}>
                          <IconCheck size={11} stroke={3} />
                        </Box>
                      ) : current ? (
                        <Box className={classes.trackingCurrent}>
                          <IconCircleFilled size={8} />
                        </Box>
                      ) : (
                        <Box className={classes.trackingPending} />
                      )}

                      {index < STATUS_STEPS.length - 1 && (
                        <Box
                          className={`${classes.trackingLine} ${
                            completed
                              ? classes.trackingLineCompleted
                              : ""
                          }`}
                        />
                      )}
                    </Box>

                    <Box pb={24}>
                      <Text
                        size="sm"
                        fw={current ? 650 : 500}
                        c={
                          step.status === "pending"
                            ? "gray.5"
                            : "navy"
                        }
                      >
                        {step.label}
                      </Text>

                      {current && (
                        <Text size="xs" c="teal.9" mt={3}>
                          Etapa actual
                        </Text>
                      )}
                    </Box>
                  </Box>
                );
              })}
            </Stack>

            <Box className={classes.trackingUpdate}>
              <Text size="xs" c="gray.7">
                Última actualización
              </Text>

              <Text
                size="xs"
                fw={600}
                c="navy"
                mt={2}
              >
                28 sep · 10:42 a. m.
              </Text>
            </Box>
          </Paper>
        </Group>
      </Paper>
    </Container>
  );
}

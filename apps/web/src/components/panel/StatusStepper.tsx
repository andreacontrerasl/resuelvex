import {
  Box,
  Group,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";
import {
  IconAlertCircle,
  IconCheck,
} from "@tabler/icons-react";
import {
  ESTADO_LABELS,
  type EstadoTramite,
} from "@resuelvex/shared";

interface StatusStepperProps {
  estadoActual: EstadoTramite;

  estadoHistorial?: {
    estado: string;
    fecha?: string | Date;
  }[];
}

/* =========================================================
   NORMAL PROCESS
========================================================= */

const ETAPAS: EstadoTramite[] = [
  "documento_preparacion",
  "firma_coordinada",
  "en_registro",
  "listo_transito",
  "entregado",
];

/* =========================================================
   HELPERS
========================================================= */

function getIndiceActual(
  estadoActual: EstadoTramite,
  estadoHistorial: {
    estado: string;
  }[] = []
) {
  /*
   * Observaciones ocurre durante la etapa
   * del Registro Mercantil.
   */

  if (estadoActual === "observaciones") {
    return ETAPAS.indexOf(
      "en_registro"
    );
  }

  const index =
    ETAPAS.indexOf(estadoActual);

  if (index >= 0) {
    return index;
  }

  /*
   * Fallback por si tenemos un estado
   * extraño: buscamos el último estado
   * normal conocido en el historial.
   */

  for (
    let i =
      estadoHistorial.length - 1;
    i >= 0;
    i--
  ) {
    const historialIndex =
      ETAPAS.indexOf(
        estadoHistorial[i]
          .estado as EstadoTramite
      );

    if (historialIndex >= 0) {
      return historialIndex;
    }
  }

  return 0;
}

export function StatusStepper({
  estadoActual,
  estadoHistorial = [],
}: StatusStepperProps) {
  const esObservacion =
    estadoActual === "observaciones";

  const indexActual =
    getIndiceActual(
      estadoActual,
      estadoHistorial
    );

  return (
    <Stack gap={0}>
      {ETAPAS.map(
        (estado, index) => {
          const done =
            index < indexActual;

          const active =
            index === indexActual;

          const esUltimo =
            index ===
            ETAPAS.length - 1;

          const activeObservation =
            active && esObservacion;

          return (
            <Group
              key={estado}
              align="flex-start"
              wrap="nowrap"
              gap="md"
            >
              {/* ===============================
                  LINE + CIRCLE
              =============================== */}

              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flexShrink: 0,
                }}
              >
                <ThemeIcon
                  size={28}
                  radius="xl"
                  variant={
                    done || active
                      ? "filled"
                      : "light"
                  }
                  color={
                    done
                      ? "teal"
                      : activeObservation
                        ? "orange"
                        : active
                          ? "navy"
                          : "gray"
                  }
                  style={{
                    boxShadow: active
                      ? activeObservation
                        ? "0 0 0 4px rgba(230,140,0,0.12)"
                        : "0 0 0 4px rgba(31,48,94,0.10)"
                      : undefined,
                  }}
                >
                  {done ? (
                    <IconCheck
                      size={14}
                      stroke={2.5}
                    />
                  ) : activeObservation ? (
                    <IconAlertCircle
                      size={15}
                      stroke={2}
                    />
                  ) : (
                    <Text
                      size="11px"
                      fw={700}
                    >
                      {index + 1}
                    </Text>
                  )}
                </ThemeIcon>

                {!esUltimo && (
                  <Box
                    w={2}
                    h={38}
                    bg={
                      done
                        ? "teal.6"
                        : "gray.2"
                    }
                  />
                )}
              </Box>

              {/* ===============================
                  LABEL
              =============================== */}

              <Box
                pt={3}
                pb={
                  esUltimo
                    ? 0
                    : "sm"
                }
              >
                <Text
                  size="sm"
                  fw={
                    active || done
                      ? 600
                      : 400
                  }
                  c={
                    activeObservation
                      ? "orange.8"
                      : active || done
                        ? "navy.9"
                        : "gray.7"
                  }
                >
                  {ESTADO_LABELS[estado]}
                </Text>

                {activeObservation && (
                  <Text
                    size="xs"
                    c="orange.8"
                    mt={3}
                  >
                    El Registro hizo una
                    observación sobre el
                    expediente.
                  </Text>
                )}

                {active &&
                  !activeObservation && (
                    <Text
                      size="xs"
                      c="gray.7"
                      mt={3}
                    >
                      Etapa actual
                    </Text>
                  )}
              </Box>
            </Group>
          );
        }
      )}
    </Stack>
  );
}

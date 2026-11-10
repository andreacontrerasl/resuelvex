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
  IconCreditCard,
} from "@tabler/icons-react";
import {
  ESTADO_LABELS,
  ETAPA_BASE,
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
  "revision_cliente",
  "firma_coordinada",
  "reserva_nombre",
  "en_registro",
  "listo_transito",
  "entregado",
];

/*
 * Mensajes mostrados cuando el trámite está en una
 * sub-etapa de pago (se emite una PUB a mitad de la
 * etapa principal y el trámite continúa ahí mismo).
 */

const MENSAJE_PAGO: Partial<
  Record<EstadoTramite, string>
> = {
  pago_reserva_nombre:
    "Se emitió la planilla (PUB) para pagar la reserva del nombre.",
  pago_registro:
    "Se emitió la planilla (PUB) de los derechos de registro.",
};

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
   * Observaciones y las sub-etapas de pago (PUB) ocurren
   * a mitad de una etapa principal, así que se mapean de
   * vuelta a esa etapa en vez de tener su propio paso.
   */

  const etapaBase = ETAPA_BASE[estadoActual];

  if (etapaBase) {
    return ETAPAS.indexOf(etapaBase);
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

  const mensajePago =
    MENSAJE_PAGO[estadoActual];

  const esPagoPendiente =
    Boolean(mensajePago);

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

          const activePago =
            active && esPagoPendiente;

          const activeAlerta =
            activeObservation ||
            activePago;

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
                        : activePago
                          ? "grape"
                          : active
                            ? "navy"
                            : "gray"
                  }
                  style={{
                    boxShadow: active
                      ? activeObservation
                        ? "0 0 0 4px rgba(230,140,0,0.12)"
                        : activePago
                          ? "0 0 0 4px rgba(174,62,201,0.12)"
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
                  ) : activePago ? (
                    <IconCreditCard
                      size={14}
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
                      : activePago
                        ? "grape.8"
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

                {activePago && (
                  <Text
                    size="xs"
                    c="grape.8"
                    mt={3}
                  >
                    {mensajePago}
                  </Text>
                )}

                {active &&
                  !activeAlerta && (
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

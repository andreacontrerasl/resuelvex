import {
  Badge,
  Box,
  Divider,
  Group,
  Paper,
  Progress,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";
import {
  IconBuilding,
  IconCheck,
} from "@tabler/icons-react";
import {
  ESTADO_LABELS,
  type EstadoTramite,
  type Tramite,
} from "@resuelvex/shared";
import { StatusStepper } from "./StatusStepper";
import { NextStepBanner } from "./NextStepBanner";
import { DocumentoBanner } from "./DocumentoBanner";
import { PlanIncluye } from "./PlanIncluye";
import { getProgreso } from "./statusUtils";

function formatFecha(
  value?: string | Date
) {
  if (!value) {
    return null;
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return new Intl.DateTimeFormat(
    "es-VE",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  ).format(date);
}

const ESTADO_COLORS: Record<
  EstadoTramite,
  string
> = {
  documento_preparacion: "blue",
  revision_cliente: "blue",
  firma_coordinada: "indigo",
  reserva_nombre: "violet",
  pago_reserva_nombre: "grape",
  en_registro: "teal",
  pago_registro: "grape",
  observaciones: "orange",
  listo_transito: "cyan",
  entregado: "green",
};

export function TramiteCard({
  tramite,
}: {
  tramite: Tramite;
}) {
  const progreso = getProgreso(
    tramite.estado,
    tramite.estadoHistorial
  );

  const estado =
    tramite.estado as EstadoTramite;

  const fechaActualizacion =
    formatFecha(tramite.updatedAt);

  const entregado =
    estado === "entregado";

  return (
    <Paper
      radius="xl"
      withBorder
      style={{
        overflow: "hidden",
      }}
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <Box
        p={{
          base: "lg",
          sm: 28,
        }}
      >
        <Group
          justify="space-between"
          align="flex-start"
          gap="lg"
          wrap="nowrap"
        >
          <Group
            gap="md"
            wrap="nowrap"
            style={{
              minWidth: 0,
            }}
          >
            <ThemeIcon
              size={44}
              radius="lg"
              variant="light"
              color={
                entregado
                  ? "green"
                  : "teal"
              }
              style={{
                flexShrink: 0,
              }}
            >
              {entregado ? (
                <IconCheck
                  size={21}
                  stroke={1.8}
                />
              ) : (
                <IconBuilding
                  size={21}
                  stroke={1.7}
                />
              )}
            </ThemeIcon>

            <Box
              style={{
                minWidth: 0,
              }}
            >
              <Text
                size="11px"
                c="gray.7"
                fw={650}
                tt="uppercase"
                mb={4}
                style={{
                  letterSpacing: "0.06em",
                }}
              >
                Constitución de compañía
              </Text>

              <Text
                fw={750}
                size="xl"
                c="navy.9"
                lh={1.2}
              >
                {tramite.nombreEmpresa}
              </Text>
            </Box>
          </Group>

          <Badge
            color="gray"
            variant="light"
            ff="var(--font-mono)"
            radius="md"
            size="md"
            style={{
              flexShrink: 0,
            }}
          >
            {tramite.codigo}
          </Badge>
        </Group>

        {/* =================================================
            CURRENT STATUS
        ================================================= */}

        <Box mt={28}>
          <Group
            justify="space-between"
            align="center"
            mb="sm"
            gap="sm"
          >
            <Box>
              <Text
                size="xs"
                c="gray.7"
                mb={5}
              >
                Estado actual
              </Text>

              <Badge
                color={
                  ESTADO_COLORS[estado]
                }
                variant="light"
                radius="xl"
                size="lg"
              >
                {ESTADO_LABELS[estado]}
              </Badge>
            </Box>

            {fechaActualizacion && (
              <Text
                size="xs"
                c="gray.7"
                ta="right"
              >
                Actualizado el
                <br />
                {fechaActualizacion}
              </Text>
            )}
          </Group>

          {/* PROGRESS */}

          <Progress
            value={progreso}
            color={
              entregado
                ? "green"
                : "teal"
            }
            size={8}
            radius="xl"
            mt="lg"
          />

          <Group
            justify="space-between"
            mt={7}
          >
            <Text
              size="xs"
              c="gray.7"
            >
              Progreso del trámite
            </Text>

            <Text
              size="xs"
              fw={650}
              c="navy.9"
            >
              {progreso}%
            </Text>
          </Group>
        </Box>

        {/* =================================================
            MESSAGE
        ================================================= */}

        <NextStepBanner estado={estado} />

        {tramite.documento && (
          <DocumentoBanner
            tramiteId={tramite._id}
            documento={tramite.documento}
          />
        )}
      </Box>

      <Divider />

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <Box
        p={{
          base: "lg",
          sm: 28,
        }}
      >
        <Text
          fw={650}
          c="navy.9"
        >
          Avance de tu trámite
        </Text>

        <Text
          size="xs"
          c="gray.7"
          mt={3}
          mb="lg"
        >
          Estas son las etapas del proceso de
          constitución.
        </Text>

        <StatusStepper
          estadoActual={estado}
          estadoHistorial={
            tramite.estadoHistorial
          }
        />

        <Divider my="xl" />

        <PlanIncluye
          plan={tramite.plan}
        />
      </Box>
    </Paper>
  );
}

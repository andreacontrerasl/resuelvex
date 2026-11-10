import {
  Group,
  Paper,
  Text,
  ThemeIcon,
} from "@mantine/core";
import {
  IconAlertCircle,
  IconCheck,
  IconCreditCard,
  IconInfoCircle,
} from "@tabler/icons-react";
import {
  ESTADO_MENSAJES,
  type EstadoTramite,
} from "@resuelvex/shared";

export function NextStepBanner({
  estado,
}: {
  estado: EstadoTramite;
}) {
  const mensaje =
    ESTADO_MENSAJES[estado];

  const observacion =
    estado === "observaciones";

  const pagoPendiente =
    estado === "pago_reserva_nombre" ||
    estado === "pago_registro";

  const entregado =
    estado === "entregado";

  const color = observacion
    ? "orange"
    : pagoPendiente
      ? "grape"
      : entregado
        ? "green"
        : "teal";

  return (
    <Paper
      radius="lg"
      p="md"
      mt="xl"
      bg={`${color}.0`}
    >
      <Group
        gap="sm"
        wrap="nowrap"
        align="flex-start"
      >
        <ThemeIcon
          color={color}
          variant="light"
          radius="xl"
          size={30}
          style={{
            flexShrink: 0,
          }}
        >
          {observacion ? (
            <IconAlertCircle
              size={17}
              stroke={1.8}
            />
          ) : pagoPendiente ? (
            <IconCreditCard
              size={17}
              stroke={1.8}
            />
          ) : entregado ? (
            <IconCheck
              size={17}
              stroke={2}
            />
          ) : (
            <IconInfoCircle
              size={17}
              stroke={1.8}
            />
          )}
        </ThemeIcon>

        <div>
          <Text
            size="xs"
            fw={650}
            c={
              observacion
                ? "orange.9"
                : pagoPendiente
                  ? "grape.9"
                  : "navy.9"
            }
            mb={3}
          >
            {observacion
              ? "Hay una observación"
              : pagoPendiente
                ? "Pago pendiente"
                : entregado
                  ? "Proceso completado"
                  : "Sobre tu trámite"}
          </Text>

          <Text
            size="sm"
            c="navy.9"
            lh={1.55}
          >
            {mensaje}
          </Text>
        </div>
      </Group>
    </Paper>
  );
}
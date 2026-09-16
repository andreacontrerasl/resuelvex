import { Stack, Group, Box, Text } from "@mantine/core";
import { ESTADO_LABELS } from "@resuelvex/shared";
import { ESTADOS_ORDEN, getIndiceActual } from "./statusUtils";

interface StatusStepperProps {
  estadoActual: string;
  estadoHistorial?: { estado: string }[];
}

export function StatusStepper({ estadoActual, estadoHistorial = [] }: StatusStepperProps) {
  const esObservacion = estadoActual === "observaciones";
  const indexActual = getIndiceActual(estadoActual, estadoHistorial);

  return (
    <Stack gap={0} mt="md">
      {ESTADOS_ORDEN.map((estado, index) => {
        const done = index < indexActual;
        const active = index === indexActual;
        const esUltimo = index === ESTADOS_ORDEN.length - 1;

        let bg = "var(--mantine-color-gray-3)";
        if (done) bg = "var(--mantine-color-teal-6)";
        else if (active) bg = esObservacion ? "var(--mantine-color-orange-6)" : "var(--mantine-color-navy-9)";

        return (
          <Group key={estado} align="flex-start" wrap="nowrap" gap="sm" style={{ position: "relative" }}>
            <Box style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
              <Box
                w={24} h={24}
                style={{
                  borderRadius: "50%", backgroundColor: bg, flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "white", fontSize: 11, fontWeight: 700,
                  boxShadow: active ? `0 0 0 4px ${esObservacion ? "rgba(230,140,0,0.15)" : "rgba(31,48,94,0.15)"}` : undefined,
                }}
              >
                {done ? "✓" : index + 1}
              </Box>
              {!esUltimo && (
                <Box w={2} h={28} style={{ backgroundColor: done ? "var(--mantine-color-teal-6)" : "var(--mantine-color-gray-3)" }} />
              )}
            </Box>
            <Text size="sm" fw={active || done ? 600 : 400} c={active || done ? undefined : "dimmed"} pt={2} pb={esUltimo ? 0 : "sm"}>
              {ESTADO_LABELS[estado]}
              {active && esObservacion && " — con observación"}
            </Text>
          </Group>
        );
      })}
    </Stack>
  );
}

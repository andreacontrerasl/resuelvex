import { Paper, Group, Text, Badge, Divider, Progress, Box } from "@mantine/core";
import type { Tramite } from "@resuelvex/shared";
import { StatusStepper } from "./StatusStepper";
import { NextStepBanner } from "./NextStepBanner";
import { PlanIncluye } from "./PlanIncluye";
import { getProgreso } from "./statusUtils";

function formatFecha(iso: string) {
  return new Date(iso).toLocaleDateString("es-VE", { day: "numeric", month: "long" });
}

export function TramiteCard({ tramite }: { tramite: Tramite }) {
  const progreso = getProgreso(tramite.estado, tramite.estadoHistorial);

  return (
    <Paper radius="lg" p={{ base: "md", sm: "xl" }} withBorder >
      <Group justify="space-between" align="flex-start" mb={4} wrap="nowrap">
        <Box style={{ minWidth: 0 }}>
          <Text size="xs" c="teal.7" fw={600} tt="uppercase" ff="var(--font-mono)" mb={2}>
            Constitución de compañía
          </Text>
          <Text fw={800} size="xl" c="#1F305E" style={{ lineHeight: 1.2 }}>
            {tramite.nombreEmpresa}
          </Text>
        </Box>
        <Badge color="teal" variant="light" ff="var(--font-mono)" style={{ flexShrink: 0 }}>
          {tramite.codigo}
        </Badge>
      </Group>

      <Text size="xs" c="dimmed" mb="md">Actualizado el {formatFecha(tramite.updatedAt)}</Text>

      <Progress value={progreso} color="teal" size="sm" radius="xl" mb={4} />
      <Text size="xs" c="dimmed" mb="md">{progreso}% completado</Text>

      <NextStepBanner estado={tramite.estado} />

      <StatusStepper estadoActual={tramite.estado} estadoHistorial={tramite.estadoHistorial} />

      <Divider my="md" />
      <PlanIncluye plan={tramite.plan} />
    </Paper>
  );
}

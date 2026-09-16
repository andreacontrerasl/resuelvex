import { Group, Title, Text, Badge } from "@mantine/core";
import { ESTADO_LABELS } from "@resuelvex/shared";

export function TramiteDetalleHeader({ tramite }: { tramite: any }) {
  return (
    <Group justify="space-between" mb="xl">
      <div>
        <Title order={2} c="#1F305E">{tramite.clienteId?.nombre}</Title>
        <Text c="dimmed" size="sm" ff="var(--font-mono)">{tramite.codigo} · Plan {tramite.plan}</Text>
      </div>
      <Badge color="teal" variant="light" size="lg">{ESTADO_LABELS[tramite.estado as keyof typeof ESTADO_LABELS]}</Badge>
    </Group>
  );
}

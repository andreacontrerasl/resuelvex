import { Paper, Text } from "@mantine/core";

export function TramiteNotas({ notas }: { notas: string }) {
  return (
    <Paper radius="lg" p="xl" withBorder>
      <Text fw={600} mb="xs">Notas</Text>
      <Text size="sm" c="gray.7">{notas}</Text>
    </Paper>
  );
}

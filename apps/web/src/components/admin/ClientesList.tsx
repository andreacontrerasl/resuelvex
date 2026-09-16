import { Stack, Paper, Text } from "@mantine/core";

export function ClientesList({ clientes }: { clientes: any[] }) {
  if (clientes.length === 0) {
    return <Text c="dimmed">Todavía no hay clientes registrados.</Text>;
  }

  return (
    <Stack gap="sm">
      {clientes.map((c) => (
        <Paper key={c._id} radius="lg" p="lg" withBorder>
          <Text fw={600} c="#1F305E">{c.nombre}</Text>
          <Text size="sm" c="dimmed">{c.email}{c.cedula ? ` · ${c.cedula}` : ""}{c.telefono ? ` · ${c.telefono}` : ""}</Text>
        </Paper>
      ))}
    </Stack>
  );
}

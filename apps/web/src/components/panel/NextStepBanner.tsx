import { Paper, Text, Group, ThemeIcon } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import { ESTADO_MENSAJES } from "@resuelvex/shared";

export function NextStepBanner({ estado }: { estado: string }) {
  const mensaje = ESTADO_MENSAJES[estado as keyof typeof ESTADO_MENSAJES];
  return (
    <Paper radius="lg" p="md" style={{ backgroundColor: "var(--mantine-color-teal-0)" }}>
      <Group gap="sm" wrap="nowrap" align="flex-start">
        <ThemeIcon color="teal" variant="light" radius="xl" size={28}>
          <IconInfoCircle size={16} />
        </ThemeIcon>
        <Text size="sm" c="#1F305E">{mensaje}</Text>
      </Group>
    </Paper>
  );
}

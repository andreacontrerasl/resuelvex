import { Group, Text, Button } from "@mantine/core";

export function PanelHeader({ nombre }: { nombre?: string }) {
  return (
    <Group h="100%" px={{ base: "sm", sm: "lg" }} justify="space-between" wrap="nowrap">
      <img src="/logo-color-no-bg.png" alt="Resuelvex" style={{ height: 30, flexShrink: 0 }} />
      <Group gap="xs" wrap="nowrap" style={{ minWidth: 0 }}>
        <Text
          size="xs"
          c="dimmed"
          visibleFrom="xs"
          style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 160 }}
        >
          {nombre}
        </Text>
        <Button component="a" href="/auth/logout" variant="subtle" color="gray" size="xs" radius="xl" px="sm">
          Salir
        </Button>
      </Group>
    </Group>
  );
}

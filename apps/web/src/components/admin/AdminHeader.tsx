import { Group, Text, Button } from "@mantine/core";

export function AdminHeader({ email }: { email?: string | null }) {
  return (
    <Group h="100%" px="lg" justify="space-between">
      <img src="/logo.png" alt="Resuelvex" style={{ height: 22 }} />
      <Group gap="md">
        <Text size="sm" c="dimmed">{email}</Text>
        <Button component="a" href="/auth/logout" variant="subtle" color="gray" size="xs" radius="xl">
          Cerrar sesión
        </Button>
      </Group>
    </Group>
  );
}

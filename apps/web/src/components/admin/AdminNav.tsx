import { NavLink, Stack } from "@mantine/core";

export function AdminNav() {
  return (
    <Stack gap={4}>
      <NavLink component="a" href="/admin" label="Trámites" />
      <NavLink component="a" href="/admin/clientes" label="Clientes" />
    </Stack>
  );
}

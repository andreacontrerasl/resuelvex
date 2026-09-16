import { Container, Title, Text, Group } from "@mantine/core";
import { apiFetch } from "@/lib/api-client";
import { ClientesList } from "@/components/admin/ClientesList";
import { LinkButton } from "@/components/admin/LinkButton";

export default async function AdminClientesPage() {
  const clientes = await apiFetch("/api/usuarios");

  return (
    <Container size="md" py="xl">
      <Group justify="space-between" mb="xl">
        <div>
          <Title order={2} c="#1F305E">Clientes</Title>
          <Text c="dimmed" size="sm">{clientes.length} en total</Text>
        </div>
        <LinkButton href="/admin/clientes/nuevo">+ Nuevo cliente</LinkButton>
      </Group>

      <ClientesList clientes={clientes} />
    </Container>
  );
}

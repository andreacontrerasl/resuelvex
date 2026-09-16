import Link from "next/link";
import { Container, Title, Text, Group, Button } from "@mantine/core";
import { apiFetch } from "@/lib/api-client";
import type { Tramite } from "@resuelvex/shared";
import { TramitesList } from "@/components/admin/TramitesList";
import { LinkButton } from "@/components/admin/LinkButton";

export default async function AdminTramitesPage() {
  const tramites: Tramite[] = await apiFetch("/api/tramites");

  return (
    <Container size="md" py="xl">
      <Group justify="space-between" mb="xl">
        <div>
          <Title order={2} c="#1F305E">Trámites</Title>
          <Text c="dimmed" size="sm">{tramites.length} en total</Text>
        </div>
        <LinkButton href="/admin/tramites/nuevo">+ Nuevo trámite</LinkButton>
      </Group>

      <TramitesList tramites={tramites} />
    </Container>
  );
}

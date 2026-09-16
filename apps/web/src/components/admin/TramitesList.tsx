"use client";

import Link from "next/link";
import { Stack, Paper, Group, Text, Badge } from "@mantine/core";
import { ESTADO_LABELS } from "@resuelvex/shared";

export function TramitesList({ tramites }: { tramites: any[] }) {
  if (tramites.length === 0) {
    return <Text c="dimmed">Todavía no hay trámites creados.</Text>;
  }

  return (
    <Stack gap="sm">
      {tramites.map((t) => (
        <Paper key={t._id} component={Link} href={`/admin/tramites/${t._id}`} radius="lg" p="lg" withBorder
          style={{ display: "block", textDecoration: "none" }}>
          <Group justify="space-between">
            <div>
              <Text fw={600} c="#1F305E">{t.clienteId?.nombre ?? "Sin cliente"}</Text>
              <Text size="xs" c="dimmed" ff="var(--font-mono)">{t.codigo} · Plan {t.plan}</Text>
            </div>
            <Badge color="teal" variant="light">{ESTADO_LABELS[t.estado as keyof typeof ESTADO_LABELS]}</Badge>
          </Group>
        </Paper>
      ))}
    </Stack>
  );
}

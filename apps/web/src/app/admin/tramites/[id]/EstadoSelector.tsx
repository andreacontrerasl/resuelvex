"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Select, Button, Group } from "@mantine/core";
import { ESTADOS_TRAMITE, ESTADO_LABELS } from "@resuelvex/shared";

export function EstadoSelector({ tramiteId, estadoActual }: { tramiteId: string; estadoActual: string }) {
  const router = useRouter();
  const [estado, setEstado] = useState<string | null>(estadoActual);
  const [loading, setLoading] = useState(false);

  async function handleUpdate() {
    if (!estado) return;
    setLoading(true);
    await fetch(`/api/proxy/tramites/${tramiteId}/estado`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ estado }),
    });
    setLoading(false);
    router.refresh();
  }

  return (
    <Group>
      <Select
        data={ESTADOS_TRAMITE.map((e) => ({ value: e, label: ESTADO_LABELS[e] }))}
        value={estado}
        onChange={setEstado}
        style={{ flex: 1 }}
      />
      <Button color="navy" radius="xl" onClick={handleUpdate} loading={loading} disabled={estado === estadoActual}>
        Guardar
      </Button>
    </Group>
  );
}

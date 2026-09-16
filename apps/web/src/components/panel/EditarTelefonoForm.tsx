"use client";

import { useState } from "react";
import { TextInput, Button, Group } from "@mantine/core";

export function EditarTelefonoForm({ telefonoInicial }: { telefonoInicial?: string }) {
  const [telefono, setTelefono] = useState(telefonoInicial || "");
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  async function handleSave() {
    setLoading(true);
    await fetch("/api/proxy/usuarios/me", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ telefono }),
    });
    setLoading(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <Group align="flex-end" gap="xs">
      <TextInput label="Tu teléfono de contacto" value={telefono} onChange={(e) => setTelefono(e.currentTarget.value)} style={{ flex: 1 }} />
      <Button onClick={handleSave} loading={loading} color="navy" radius="xl" size="sm">
        {saved ? "Guardado ✓" : "Guardar"}
      </Button>
    </Group>
  );
}

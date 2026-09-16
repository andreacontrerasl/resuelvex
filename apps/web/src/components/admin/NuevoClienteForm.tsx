"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Paper, TextInput, Button, Stack, Alert } from "@mantine/core";

export function NuevoClienteForm() {
  const router = useRouter();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [cedula, setCedula] = useState("");
  const [telefono, setTelefono] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/proxy/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, cedula, telefono }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "No se pudo crear el cliente");
      }
      router.push("/admin/clientes");
      router.refresh();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Paper radius="lg" p="xl" withBorder>
      <form onSubmit={handleSubmit}>
        <Stack gap="md">
          {error && <Alert color="red" variant="light">{error}</Alert>}
          <TextInput label="Nombre completo" required value={nombre} onChange={(e) => setNombre(e.currentTarget.value)} />
          <TextInput label="Correo" type="email" required value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
          <TextInput label="Cédula" placeholder="V-12345678" value={cedula} onChange={(e) => setCedula(e.currentTarget.value)} />
          <TextInput label="Teléfono" value={telefono} onChange={(e) => setTelefono(e.currentTarget.value)} />
          <Button type="submit" color="navy" radius="xl" loading={loading}>
            Crear cliente
          </Button>
        </Stack>
      </form>
    </Paper>
  );
}

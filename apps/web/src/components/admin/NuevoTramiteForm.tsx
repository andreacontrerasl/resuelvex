"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Paper, Select, Textarea, Button, Stack, Alert, TextInput } from "@mantine/core";

export function NuevoTramiteForm() {
  const router = useRouter();
  const [clientes, setClientes] = useState<{ value: string; label: string }[]>([]);
  const [clienteId, setClienteId] = useState<string | null>(null);
  const [plan, setPlan] = useState<string | null>(null);
  const [notas, setNotas] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [nombreEmpresa, setNombreEmpresa] = useState("");

  useEffect(() => {
    fetch("/api/proxy/usuarios")
      .then((r) => r.json())
      .then((data) => setClientes(data.map((c: any) => ({ value: c._id, label: `${c.nombre} (${c.email})` }))));
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!clienteId || !plan) {
      setError("Selecciona el cliente y el plan");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/proxy/tramites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ clienteId, plan, notas }),
      });
      if (!res.ok) throw new Error("No se pudo crear el trámite");
      router.push("/admin");
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
          <Select
            label="Cliente"
            placeholder="Selecciona un cliente"
            data={clientes}
            value={clienteId}
            onChange={setClienteId}
            required
            searchable
          />
          <TextInput
            label="Nombre de la empresa"
            placeholder="Ej: Postres Doña Inés, C.A."
            required
            value={nombreEmpresa}
            onChange={(e) => setNombreEmpresa(e.currentTarget.value)}
          />
          <Select
            label="Plan"
            placeholder="Selecciona un plan"
            data={[
              { value: "solo_empresa", label: "Solo Empresa — $375" },
              { value: "empresa_rif", label: "Empresa + RIF — $450" },
              { value: "empresa_completa", label: "Empresa Completa — $570" },
              { value: "empresa_100", label: "Empresa 100% Lista — desde $570" },
            ]}
            value={plan}
            onChange={setPlan}
            required
          />
          <Textarea label="Notas (opcional)" value={notas} onChange={(e) => setNotas(e.currentTarget.value)} />
          <Button type="submit" color="navy" radius="xl" loading={loading}>
            Crear trámite
          </Button>
        </Stack>
      </form>
    </Paper>
  );
}

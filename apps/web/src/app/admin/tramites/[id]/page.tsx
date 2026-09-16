import { Container, Paper, Text } from "@mantine/core";
import { apiFetch } from "@/lib/api-client";
import { TramiteDetalleHeader } from "@/components/admin/TramiteDetalleHeader";
import { EstadoSelector } from "./EstadoSelector";
import { TramiteNotas } from "@/components/admin/TramiteNotas";

export default async function TramiteDetallePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const tramite: any = await apiFetch(`/api/tramites/${id}`);

  return (
    <Container size="sm" py="xl">
      <TramiteDetalleHeader tramite={tramite} />

      <Paper radius="lg" p="xl" withBorder mb="lg">
        <Text fw={600} mb="sm">Cambiar estado</Text>
        <EstadoSelector tramiteId={tramite._id} estadoActual={tramite.estado} />
      </Paper>

      {tramite.notas && <TramiteNotas notas={tramite.notas} />}
    </Container>
  );
}

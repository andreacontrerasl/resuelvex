import { Container, Title } from "@mantine/core";
import { NuevoTramiteForm } from "@/components/admin/NuevoTramiteForm";

export default function NuevoTramitePage() {
  return (
    <Container size="xs" py="xl">
      <Title order={2} c="#1F305E" mb="lg">Nuevo trámite</Title>
      <NuevoTramiteForm />
    </Container>
  );
}

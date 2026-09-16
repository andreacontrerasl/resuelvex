import { Container, Title } from "@mantine/core";
import { NuevoClienteForm } from "@/components/admin/NuevoClienteForm";

export default function NuevoClientePage() {
  return (
    <Container size="xs" py="xl">
      <Title order={2} c="#1F305E" mb="lg">Nuevo cliente</Title>
      <NuevoClienteForm />
    </Container>
  );
}

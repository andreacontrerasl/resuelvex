import {
  Box,
  Container,
  Group,
  Text,
  Title,
} from "@mantine/core";
import { apiFetch } from "@/lib/api-client";
import { ClientesList } from "@/components/admin/ClientesList";
import { LinkButton } from "@/components/admin/LinkButton";

export default async function AdminClientesPage() {
  const clientes = await apiFetch("/api/usuarios");

  return (
    <Container
      size="lg"
      py={{ base: "lg", md: 40 }}
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <Group
        justify="space-between"
        align="flex-start"
        gap="lg"
        mb={32}
      >
        <Box>
          <Title
            order={2}
            c="navy.9"
            style={{
              letterSpacing: "-0.025em",
            }}
          >
            Clientes
          </Title>

          <Text
            c="gray.7"
            size="sm"
            mt={5}
          >
            Consulta y gestiona los clientes registrados en Resuelvex.
          </Text>
        </Box>

        <LinkButton href="/admin/clientes/nuevo">
          + Nuevo cliente
        </LinkButton>
      </Group>

      {/* =====================================================
          CLIENTS
      ===================================================== */}

      <ClientesList clientes={clientes} />
    </Container>
  );
}

import {
  Box,
  Container,
  Group,
  Text,
  Title,
} from "@mantine/core";
import { apiFetch } from "@/lib/api-client";
import type { Tramite } from "@resuelvex/shared";
import { TramitesList } from "@/components/admin/TramitesList";
import { LinkButton } from "@/components/admin/LinkButton";

export default async function AdminTramitesPage() {
  const tramites: Tramite[] = await apiFetch("/api/tramites");

  return (
    <Container size="lg" py={{ base: "lg", md: 40 }}>
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
            Trámites
          </Title>

          <Text
            c="gray.7"
            size="sm"
            mt={5}
          >
            Gestiona y haz seguimiento a los trámites de tus clientes.
          </Text>
        </Box>

        <LinkButton href="/admin/tramites/nuevo">
          + Nuevo trámite
        </LinkButton>
      </Group>

      {/* =====================================================
          LIST
      ===================================================== */}

      <TramitesList tramites={tramites} />
    </Container>
  );
}
import Link from "next/link";
import {
  Box,
  Container,
  Group,
  Text,
  Title,
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { NuevoTramiteForm } from "@/components/admin/NuevoTramiteForm";

export default function NuevoTramitePage() {
  return (
    <Container
      size="md"
      py={{ base: "lg", md: 40 }}
    >
      {/* =====================================================
          BACK
      ===================================================== */}

      <Box mb="lg">
        <Link
          href="/admin/tramites"
          style={{
            display: "inline-block",
            textDecoration: "none",
            color: "var(--mantine-color-gray-6)",
          }}
        >
          <Group gap={7}>
            <IconArrowLeft
              size={16}
              stroke={1.8}
            />

            <Text
              size="sm"
              fw={500}
              c="gray.7"
            >
              Volver a trámites
            </Text>
          </Group>
        </Link>
      </Box>

      {/* =====================================================
          HEADER
      ===================================================== */}

      <Box mb={32}>
        <Title
          order={2}
          c="navy.9"
          style={{
            letterSpacing: "-0.025em",
          }}
        >
          Nuevo trámite
        </Title>

        <Text
          c="gray.7"
          size="sm"
          mt={5}
        >
          Crea un nuevo trámite de constitución para un cliente.
        </Text>
      </Box>

      {/* =====================================================
          FORM
      ===================================================== */}

      <NuevoTramiteForm />
    </Container>
  );
}

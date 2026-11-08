import Link from "next/link";
import {
  Box,
  Container,
  Group,
  Text,
  Title,
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { NuevoClienteForm } from "@/components/admin/NuevoClienteForm";

export default function NuevoClientePage() {
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
          href="/admin/clientes"
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
              c="dimmed"
            >
              Volver a clientes
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
          Nuevo cliente
        </Title>

        <Text
          c="dimmed"
          size="sm"
          mt={5}
        >
          Registra los datos del cliente para crear y gestionar sus trámites.
        </Text>
      </Box>

      {/* =====================================================
          FORM
      ===================================================== */}

      <NuevoClienteForm />
    </Container>
  );
}

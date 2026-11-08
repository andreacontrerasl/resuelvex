"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Alert,
  Box,
  Button,
  Divider,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
} from "@mantine/core";
import {
  IconAlertCircle,
  IconId,
  IconMail,
  IconPhone,
  IconUser,
} from "@tabler/icons-react";

export function NuevoClienteForm() {
  const router = useRouter();

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [cedula, setCedula] = useState("");
  const [telefono, setTelefono] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  /* =======================================================
     SUBMIT
  ======================================================= */

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    /* -----------------------------------------------------
       VALIDATION
    ----------------------------------------------------- */

    if (!nombre.trim()) {
      setError("Ingresa el nombre completo del cliente.");
      return;
    }

    if (!email.trim()) {
      setError("Ingresa el correo electrónico del cliente.");
      return;
    }

    /* -----------------------------------------------------
       CREATE CLIENT
    ----------------------------------------------------- */

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/proxy/usuarios", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          nombre: nombre.trim(),
          email: email.trim().toLowerCase(),
          cedula: cedula.trim() || undefined,
          telefono: telefono.trim() || undefined,
        }),
      });

      if (!response.ok) {
        const data = await response
          .json()
          .catch(() => null);

        throw new Error(
          data?.error ||
            data?.message ||
            "No se pudo crear el cliente"
        );
      }

      router.push("/admin/clientes");
      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "No se pudo crear el cliente"
      );
    } finally {
      setLoading(false);
    }
  }

  /* =======================================================
     CANCEL
  ======================================================= */

  function handleCancel() {
    router.push("/admin/clientes");
  }

  return (
    <Paper
      radius="lg"
      withBorder
      p={{ base: "lg", md: 28 }}
    >
      <form onSubmit={handleSubmit}>
        <Stack gap={28}>
          {/* =================================================
              ERROR
          ================================================= */}

          {error && (
            <Alert
              color="red"
              variant="light"
              radius="md"
              icon={
                <IconAlertCircle
                  size={18}
                  stroke={1.8}
                />
              }
              withCloseButton
              onClose={() => setError(null)}
            >
              {error}
            </Alert>
          )}

          {/* =================================================
              PERSONAL INFORMATION
          ================================================= */}

          <Box>
            <Group
              gap="sm"
              mb="lg"
              wrap="nowrap"
            >
              <ThemeIcon
                variant="light"
                color="teal"
                radius="md"
                size={38}
              >
                <IconUser
                  size={18}
                  stroke={1.8}
                />
              </ThemeIcon>

              <Box>
                <Text
                  fw={650}
                  c="navy.9"
                >
                  Información del cliente
                </Text>

                <Text
                  size="xs"
                  c="dimmed"
                  mt={1}
                >
                  Datos básicos para identificar al cliente.
                </Text>
              </Box>
            </Group>

            <Stack gap="md">
              {/* NAME */}

              <TextInput
                label="Nombre completo"
                placeholder="Ej. Andrea Contreras"
                required
                value={nombre}
                onChange={(event) =>
                  setNombre(event.currentTarget.value)
                }
                leftSection={
                  <IconUser
                    size={16}
                    stroke={1.7}
                  />
                }
              />

              {/* ID */}

              <TextInput
                label="Cédula"
                placeholder="Ej. V-12345678"
                description="Opcional"
                value={cedula}
                onChange={(event) =>
                  setCedula(event.currentTarget.value)
                }
                leftSection={
                  <IconId
                    size={16}
                    stroke={1.7}
                  />
                }
              />
            </Stack>
          </Box>

          <Divider />

          {/* =================================================
              CONTACT INFORMATION
          ================================================= */}

          <Box>
            <Group
              gap="sm"
              mb="lg"
              wrap="nowrap"
            >
              <ThemeIcon
                variant="light"
                color="teal"
                radius="md"
                size={38}
              >
                <IconMail
                  size={18}
                  stroke={1.8}
                />
              </ThemeIcon>

              <Box>
                <Text
                  fw={650}
                  c="navy.9"
                >
                  Datos de contacto
                </Text>

                <Text
                  size="xs"
                  c="dimmed"
                  mt={1}
                >
                  Información que usaremos para contactar al cliente.
                </Text>
              </Box>
            </Group>

            <SimpleGrid
              cols={{ base: 1, sm: 2 }}
              spacing="md"
            >
              {/* EMAIL */}

              <TextInput
                label="Correo electrónico"
                placeholder="cliente@email.com"
                type="email"
                required
                value={email}
                onChange={(event) =>
                  setEmail(event.currentTarget.value)
                }
                leftSection={
                  <IconMail
                    size={16}
                    stroke={1.7}
                  />
                }
              />

              {/* PHONE */}

              <TextInput
                label="Teléfono"
                placeholder="Ej. 0412-1234567"
                value={telefono}
                onChange={(event) =>
                  setTelefono(event.currentTarget.value)
                }
                leftSection={
                  <IconPhone
                    size={16}
                    stroke={1.7}
                  />
                }
              />
            </SimpleGrid>
          </Box>

          {/* =================================================
              ACTIONS
          ================================================= */}

          <Divider />

          <Group
            justify="flex-end"
            gap="sm"
          >
            <Button
              type="button"
              variant="default"
              radius="xl"
              onClick={handleCancel}
              disabled={loading}
            >
              Cancelar
            </Button>

            <Button
              type="submit"
              color="navy"
              radius="xl"
              loading={loading}
            >
              Crear cliente
            </Button>
          </Group>
        </Stack>
      </form>
    </Paper>
  );
}

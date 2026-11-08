"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import {
  Alert,
  Box,
  Button,
  Divider,
  Group,
  Paper,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
  ThemeIcon,
} from "@mantine/core";
import {
  IconAlertCircle,
  IconBuilding,
  IconFileText,
  IconUser,
} from "@tabler/icons-react";

/* =========================================================
   TYPES
========================================================= */

type Cliente = {
  _id: string;
  nombre: string;
  email: string;
};

type ClienteOption = {
  value: string;
  label: string;
};

/* =========================================================
   PLAN OPTIONS
========================================================= */

const PLAN_OPTIONS = [
  {
    value: "solo_empresa",
    label: "Solo Empresa — $375",
  },
  {
    value: "empresa_rif",
    label: "Empresa + RIF — $450",
  },
  {
    value: "empresa_completa",
    label: "Empresa Completa — $570",
  },
  {
    value: "empresa_100",
    label: "Empresa 100% Lista",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export function NuevoTramiteForm() {
  const router = useRouter();

  const [clientes, setClientes] =
    useState<Cliente[]>([]);

  const [clienteId, setClienteId] =
    useState<string | null>(null);

  const [nombreEmpresa, setNombreEmpresa] =
    useState("");

  const [plan, setPlan] =
    useState<string | null>(null);

  const [notasInternas, setNotasInternas] =
    useState("");

  const [error, setError] =
    useState<string | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [loadingClientes, setLoadingClientes] =
    useState(true);

  /* =======================================================
     LOAD CLIENTS
  ======================================================= */

  useEffect(() => {
    async function loadClientes() {
      try {
        setLoadingClientes(true);

        const response = await fetch(
          "/api/proxy/usuarios"
        );

        if (!response.ok) {
          throw new Error(
            "No se pudieron cargar los clientes"
          );
        }

        const data: Cliente[] =
          await response.json();

        setClientes(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "No se pudieron cargar los clientes"
        );
      } finally {
        setLoadingClientes(false);
      }
    }

    loadClientes();
  }, []);

  /* =======================================================
     CLIENT OPTIONS
  ======================================================= */

  const clienteOptions: ClienteOption[] =
    useMemo(() => {
      return clientes.map((cliente) => ({
        value: cliente._id,
        label: `${cliente.nombre} · ${cliente.email}`,
      }));
    }, [clientes]);

  /* =======================================================
     SELECTED CLIENT
  ======================================================= */

  const selectedCliente =
    useMemo(() => {
      if (!clienteId) {
        return null;
      }

      return (
        clientes.find(
          (cliente) =>
            cliente._id === clienteId
        ) ?? null
      );
    }, [clienteId, clientes]);

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

    if (!clienteId) {
      setError(
        "Selecciona el cliente del trámite."
      );
      return;
    }

    if (!nombreEmpresa.trim()) {
      setError(
        "Ingresa el nombre de la empresa."
      );
      return;
    }

    if (!plan) {
      setError(
        "Selecciona el plan del trámite."
      );
      return;
    }

    /* -----------------------------------------------------
       CREATE
    ----------------------------------------------------- */

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "/api/proxy/tramites",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            clienteId,
            nombreEmpresa:
              nombreEmpresa.trim(),
            plan,

            notasInternas:
              notasInternas.trim() ||
              undefined,
          }),
        }
      );

      if (!response.ok) {
        const data = await response
          .json()
          .catch(() => null);

        throw new Error(
          data?.message ||
            data?.error ||
            "No se pudo crear el trámite"
        );
      }

      const tramite = await response
        .json()
        .catch(() => null);

      /*
       * Si el API devuelve el trámite creado,
       * vamos directamente al detalle.
       *
       * Si no devuelve _id, volvemos a la lista.
       */

      if (tramite?._id) {
        router.push(
          `/admin/tramites/${tramite._id}`
        );
      } else {
        router.push("/admin");
      }

      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "No se pudo crear el trámite"
      );
    } finally {
      setLoading(false);
    }
  }

  /* =======================================================
     CANCEL
  ======================================================= */

  function handleCancel() {
    router.push("/admin/tramites");
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
              CLIENT
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
                  Cliente
                </Text>

                <Text
                  size="xs"
                  c="gray.7"
                  mt={1}
                >
                  Selecciona a quién pertenece
                  este trámite.
                </Text>
              </Box>
            </Group>

            <Select
              label="Cliente"
              placeholder={
                loadingClientes
                  ? "Cargando clientes..."
                  : "Selecciona un cliente"
              }
              data={clienteOptions}
              value={clienteId}
              onChange={setClienteId}
              searchable
              required
              disabled={loadingClientes}
              nothingFoundMessage="No encontramos clientes"
              comboboxProps={{
                shadow: "md",
              }}
            />

            {/* SELECTED CLIENT */}

            {selectedCliente && (
              <Paper
                radius="md"
                p="sm"
                mt="sm"
                bg="gray.0"
                withBorder
              >
                <Group
                  gap="sm"
                  wrap="nowrap"
                >
                  <ThemeIcon
                    variant="light"
                    color="gray"
                    radius="xl"
                    size={32}
                  >
                    <IconUser
                      size={15}
                      stroke={1.8}
                    />
                  </ThemeIcon>

                  <Box
                    style={{
                      minWidth: 0,
                    }}
                  >
                    <Text
                      size="sm"
                      fw={600}
                      c="navy.9"
                      truncate
                    >
                      {selectedCliente.nombre}
                    </Text>

                    <Text
                      size="xs"
                      c="gray.7"
                      truncate
                    >
                      {selectedCliente.email}
                    </Text>
                  </Box>
                </Group>
              </Paper>
            )}
          </Box>

          <Divider />

          {/* =================================================
              COMPANY
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
                <IconBuilding
                  size={18}
                  stroke={1.8}
                />
              </ThemeIcon>

              <Box>
                <Text
                  fw={650}
                  c="navy.9"
                >
                  Empresa
                </Text>

                <Text
                  size="xs"
                  c="gray.7"
                  mt={1}
                >
                  Indica la empresa que se va a
                  constituir.
                </Text>
              </Box>
            </Group>

            <TextInput
              label="Nombre de la empresa"
              placeholder="Ej. Inversiones JR, C.A."
              description="Ingresa el nombre que se utilizará para identificar el trámite."
              required
              value={nombreEmpresa}
              onChange={(event) =>
                setNombreEmpresa(
                  event.currentTarget.value
                )
              }
            />
          </Box>

          <Divider />

          {/* =================================================
              TRÁMITE
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
                <IconFileText
                  size={18}
                  stroke={1.8}
                />
              </ThemeIcon>

              <Box>
                <Text
                  fw={650}
                  c="navy.9"
                >
                  Trámite
                </Text>

                <Text
                  size="xs"
                  c="gray.7"
                  mt={1}
                >
                  Define el plan y cualquier
                  información interna relevante.
                </Text>
              </Box>
            </Group>

            <Stack gap="md">
              <Select
                label="Plan"
                placeholder="Selecciona un plan"
                data={PLAN_OPTIONS}
                value={plan}
                onChange={setPlan}
                required
              />

              <Textarea
                label="Notas internas"
                description="Solo serán visibles para el equipo de Resuelvex."
                placeholder="Agrega cualquier información relevante sobre este trámite..."
                value={notasInternas}
                onChange={(event) =>
                  setNotasInternas(
                    event.currentTarget.value
                  )
                }
                minRows={4}
                autosize
              />
            </Stack>
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
              Crear trámite
            </Button>
          </Group>
        </Stack>
      </form>
    </Paper>
  );
}

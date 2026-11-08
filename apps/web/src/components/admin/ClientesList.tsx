"use client";

import { useMemo, useState } from "react";
import {
  Box,
  Center,
  Group,
  Paper,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
} from "@mantine/core";
import {
  IconMail,
  IconPhone,
  IconSearch,
  IconUser,
  IconUsers,
} from "@tabler/icons-react";

/* =========================================================
   TYPES
========================================================= */

type Cliente = {
  _id: string;

  auth0Id?: string;

  email: string;

  nombre: string;

  cedula?: string;

  telefono?: string;

  rol?: "cliente" | "admin";

  createdAt?: string | Date;

  updatedAt?: string | Date;
};

type ClientesListProps = {
  clientes: Cliente[];
};

/* =========================================================
   HELPERS
========================================================= */

function getInitials(nombre: string) {
  const parts = nombre
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (parts.length === 0) {
    return "—";
  }

  if (parts.length === 1) {
    return parts[0]
      .slice(0, 2)
      .toUpperCase();
  }

  return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
}

function formatDate(
  value?: string | Date
) {
  if (!value) {
    return null;
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return new Intl.DateTimeFormat(
    "es-VE",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    }
  ).format(date);
}

/* =========================================================
   COMPONENT
========================================================= */

export function ClientesList({
  clientes,
}: ClientesListProps) {
  const [search, setSearch] =
    useState("");

  /* =======================================================
     FILTER
  ======================================================= */

  const filteredClientes =
    useMemo(() => {
      const query = search
        .trim()
        .toLowerCase();

      if (!query) {
        return clientes;
      }

      return clientes.filter(
        (cliente) => {
          return (
            cliente.nombre
              ?.toLowerCase()
              .includes(query) ||
            cliente.email
              ?.toLowerCase()
              .includes(query) ||
            cliente.cedula
              ?.toLowerCase()
              .includes(query) ||
            cliente.telefono
              ?.toLowerCase()
              .includes(query)
          );
        }
      );
    }, [clientes, search]);

  /* =======================================================
     EMPTY STATE
  ======================================================= */

  if (clientes.length === 0) {
    return (
      <Paper
        withBorder
        radius="lg"
        p={{ base: 32, md: 48 }}
      >
        <Center>
          <Stack
            align="center"
            gap="sm"
            maw={380}
          >
            <ThemeIcon
              size={48}
              radius="xl"
              variant="light"
              color="teal"
            >
              <IconUsers
                size={22}
                stroke={1.7}
              />
            </ThemeIcon>

            <Text
              fw={650}
              c="navy.9"
              ta="center"
            >
              Todavía no hay clientes
            </Text>

            <Text
              size="sm"
              c="dimmed"
              ta="center"
              lh={1.55}
            >
              Cuando registres el primer
              cliente aparecerá aquí.
            </Text>
          </Stack>
        </Center>
      </Paper>
    );
  }

  return (
    <Stack gap="lg">
      {/* =====================================================
          SEARCH
      ===================================================== */}

      <Paper
        withBorder
        radius="lg"
        p="md"
      >
        <TextInput
          placeholder="Buscar por nombre, email, cédula o teléfono..."
          leftSection={
            <IconSearch
              size={16}
              stroke={1.8}
            />
          }
          value={search}
          onChange={(event) =>
            setSearch(
              event.currentTarget.value
            )
          }
        />
      </Paper>

      {/* =====================================================
          RESULTS
      ===================================================== */}

      <Group
        justify="space-between"
        px={4}
      >
        <Text
          size="sm"
          fw={650}
          c="navy.9"
        >
          {filteredClientes.length}{" "}
          {filteredClientes.length === 1
            ? "cliente"
            : "clientes"}
        </Text>

        {search && (
          <Text
            size="xs"
            c="dimmed"
          >
            de {clientes.length} en total
          </Text>
        )}
      </Group>

      {/* =====================================================
          NO SEARCH RESULTS
      ===================================================== */}

      {filteredClientes.length === 0 ? (
        <Paper
          withBorder
          radius="lg"
          p={40}
        >
          <Center>
            <Stack
              align="center"
              gap={7}
            >
              <ThemeIcon
                size={42}
                radius="xl"
                variant="light"
                color="gray"
              >
                <IconSearch
                  size={19}
                  stroke={1.7}
                />
              </ThemeIcon>

              <Text
                fw={600}
                c="navy.9"
                mt={4}
              >
                No encontramos clientes
              </Text>

              <Text
                size="sm"
                c="dimmed"
                ta="center"
              >
                Prueba buscando otro nombre,
                email, cédula o teléfono.
              </Text>
            </Stack>
          </Center>
        </Paper>
      ) : (
        /* ===================================================
            CLIENT LIST
        =================================================== */

        <Stack gap="sm">
          {filteredClientes.map(
            (cliente) => {
              const createdAt =
                formatDate(
                  cliente.createdAt
                );

              return (
                <Paper
                  key={cliente._id}
                  radius="lg"
                  p={{
                    base: "md",
                    sm: "lg",
                  }}
                  withBorder
                >
                  <Group
                    justify="space-between"
                    align="center"
                    gap="xl"
                  >
                    {/* ===============================
                        CLIENT
                    =============================== */}

                    <Group
                      gap="md"
                      wrap="nowrap"
                      style={{
                        minWidth: 0,
                      }}
                    >
                      {/* AVATAR */}

                      <Box
                        style={{
                          width: 44,
                          height: 44,

                          display: "flex",
                          alignItems:
                            "center",
                          justifyContent:
                            "center",

                          flexShrink: 0,

                          borderRadius: "var(--mantine-radius-lg)",

                          background:
                            "rgba(0, 168, 157, 0.08)",

                          color: "var(--mantine-color-teal-8)",

                          fontSize: 12,
                          fontWeight: 700,

                          letterSpacing:
                            "0.02em",
                        }}
                      >
                        {getInitials(
                          cliente.nombre
                        )}
                      </Box>

                      <Box
                        style={{
                          minWidth: 0,
                        }}
                      >
                        {/* NAME */}

                        <Text
                          fw={650}
                          c="navy.9"
                          truncate
                        >
                          {cliente.nombre}
                        </Text>

                        {/* EMAIL */}

                        <Group
                          gap={5}
                          mt={3}
                          wrap="nowrap"
                        >
                          <IconMail
                            size={13}
                            stroke={1.7}
                            color="var(--mantine-color-gray-5)"
                            style={{
                              flexShrink: 0,
                            }}
                          />

                          <Text
                            size="sm"
                            c="dimmed"
                            truncate
                          >
                            {cliente.email}
                          </Text>
                        </Group>
                      </Box>
                    </Group>

                    {/* ===============================
                        DETAILS
                    =============================== */}

                    <Group
                      gap={36}
                      wrap="nowrap"
                    >
                      {/* ID */}

                      {cliente.cedula && (
                        <Box>
                          <Text
                            size="11px"
                            fw={600}
                            c="dimmed"
                            tt="uppercase"
                            style={{
                              letterSpacing:
                                "0.05em",
                            }}
                          >
                            Cédula
                          </Text>

                          <Text
                            size="sm"
                            c="navy.9"
                            mt={3}
                            ff="var(--font-mono)"
                          >
                            {cliente.cedula}
                          </Text>
                        </Box>
                      )}

                      {/* PHONE */}

                      {cliente.telefono && (
                        <Box>
                          <Text
                            size="11px"
                            fw={600}
                            c="dimmed"
                            tt="uppercase"
                            style={{
                              letterSpacing:
                                "0.05em",
                            }}
                          >
                            Teléfono
                          </Text>

                          <Group
                            gap={5}
                            mt={3}
                            wrap="nowrap"
                          >
                            <IconPhone
                              size={13}
                              stroke={1.7}
                              color="var(--mantine-color-gray-5)"
                            />

                            <Text
                              size="sm"
                              c="navy.9"
                            >
                              {cliente.telefono}
                            </Text>
                          </Group>
                        </Box>
                      )}

                      {/* CREATED */}

                      {createdAt && (
                        <Box>
                          <Text
                            size="11px"
                            fw={600}
                            c="dimmed"
                            tt="uppercase"
                            style={{
                              letterSpacing:
                                "0.05em",
                            }}
                          >
                            Cliente desde
                          </Text>

                          <Text
                            size="sm"
                            c="navy.9"
                            mt={3}
                          >
                            {createdAt}
                          </Text>
                        </Box>
                      )}
                    </Group>
                  </Group>
                </Paper>
              );
            }
          )}
        </Stack>
      )}
    </Stack>
  );
}

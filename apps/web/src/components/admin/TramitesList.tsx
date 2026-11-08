"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ActionIcon,
  Badge,
  Box,
  Center,
  Group,
  Paper,
  Select,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
} from "@mantine/core";
import {
  IconAlertCircle,
  IconBuilding,
  IconChevronRight,
  IconFileText,
  IconSearch,
} from "@tabler/icons-react";
import {
  ESTADO_LABELS,
  ESTADOS_TRAMITE,
  type EstadoTramite,
  type Tramite,
} from "@resuelvex/shared";

/* =========================================================
   TYPES
========================================================= */

type ClientePopulado = {
  _id?: string;
  nombre?: string;
  email?: string;
};

type EstadoHistorialItem = {
  estado: EstadoTramite;
  fecha?: string | Date;
  actualizadoPor?: string;
};

type TramiteLista = Omit<
  Tramite,
  "clienteId" | "estadoHistorial"
> & {
  _id: string;

  clienteId?: ClientePopulado | string;

  estadoHistorial?: EstadoHistorialItem[];

  createdAt?: string | Date;
  updatedAt?: string | Date;
};

type TramitesListProps = {
  tramites: Tramite[];
};

/* =========================================================
   PLAN LABELS
========================================================= */

const PLAN_LABELS: Record<string, string> = {
  solo_empresa: "Solo Empresa",
  empresa_rif: "Empresa + RIF",
  empresa_completa: "Empresa Completa",
  empresa_100: "Empresa 100% Lista",
};

/* =========================================================
   STATUS COLORS
========================================================= */

const ESTADO_COLORS: Record<
  EstadoTramite,
  string
> = {
  documento_preparacion: "blue",
  firma_coordinada: "indigo",
  en_registro: "teal",
  observaciones: "orange",
  listo_transito: "cyan",
  entregado: "green",
};

/* =========================================================
   HELPERS
========================================================= */

function getCliente(
  clienteId: ClientePopulado | string | undefined
) {
  if (
    clienteId &&
    typeof clienteId === "object"
  ) {
    return {
      nombre:
        clienteId.nombre || "Cliente sin nombre",

      email:
        clienteId.email || null,
    };
  }

  return {
    nombre: "Sin cliente",
    email: null,
  };
}

function formatPlan(plan?: string) {
  if (!plan) {
    return "Sin plan";
  }

  return PLAN_LABELS[plan] ?? plan;
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

  return new Intl.DateTimeFormat("es-VE", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

function getLastUpdate(
  tramite: TramiteLista
) {
  /*
   * Preferimos la última entrada del historial
   * porque representa un cambio real de estado.
   *
   * Si no existe historial, usamos updatedAt.
   */

  const historial =
    tramite.estadoHistorial ?? [];

  if (historial.length > 0) {
    const latest = [...historial]
      .filter((item) => item.fecha)
      .sort(
        (a, b) =>
          new Date(
            b.fecha as string | Date
          ).getTime() -
          new Date(
            a.fecha as string | Date
          ).getTime()
      )[0];

    if (latest?.fecha) {
      return formatDate(latest.fecha);
    }
  }

  return formatDate(tramite.updatedAt);
}

/* =========================================================
   COMPONENT
========================================================= */

export function TramitesList({
  tramites,
}: TramitesListProps) {
  const typedTramites =
    tramites as TramiteLista[];

  const [search, setSearch] =
    useState("");

  const [estado, setEstado] =
    useState<string | null>(null);

  /* =======================================================
     FILTER OPTIONS
  ======================================================= */

  const estadoOptions =
    ESTADOS_TRAMITE.map((estado) => ({
      value: estado,
      label: ESTADO_LABELS[estado],
    }));

  /* =======================================================
     FILTER TRÁMITES
  ======================================================= */

  const filteredTramites =
    useMemo(() => {
      const query = search
        .trim()
        .toLowerCase();

      return typedTramites.filter(
        (tramite) => {
          const cliente =
            getCliente(
              tramite.clienteId
            );

          const matchesSearch =
            !query ||
            tramite.nombreEmpresa
              ?.toLowerCase()
              .includes(query) ||
            tramite.codigo
              ?.toLowerCase()
              .includes(query) ||
            cliente.nombre
              .toLowerCase()
              .includes(query) ||
            cliente.email
              ?.toLowerCase()
              .includes(query);

          const matchesEstado =
            !estado ||
            tramite.estado === estado;

          return (
            matchesSearch &&
            matchesEstado
          );
        }
      );
    }, [
      typedTramites,
      search,
      estado,
    ]);

  /* =======================================================
     EMPTY STATE
  ======================================================= */

  if (typedTramites.length === 0) {
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
              <IconFileText
                size={22}
                stroke={1.7}
              />
            </ThemeIcon>

            <Text
              fw={650}
              c="navy.9"
              ta="center"
            >
              Todavía no hay trámites
            </Text>

            <Text
              size="sm"
              c="gray.7"
              ta="center"
              lh={1.55}
            >
              Cuando crees el primer
              trámite aparecerá aquí para
              que puedas gestionar su
              progreso.
            </Text>
          </Stack>
        </Center>
      </Paper>
    );
  }

  return (
    <Stack gap="lg">
      {/* =====================================================
          TOOLBAR
      ===================================================== */}

      <Paper
        withBorder
        radius="lg"
        p="md"
      >
        <Group
          justify="space-between"
          gap="sm"
        >
          {/* SEARCH */}

          <TextInput
            placeholder="Buscar por empresa, cliente o código..."
            leftSection={
              <IconSearch
                size={16}
                stroke={1.8}
              />
            }
            value={search}
            onChange={(event) =>
              setSearch(
                event.currentTarget
                  .value
              )
            }
            style={{
              flex: 1,
              minWidth: 260,
            }}
          />

          {/* STATUS FILTER */}

          <Select
            placeholder="Todos los estados"
            data={estadoOptions}
            value={estado}
            onChange={setEstado}
            clearable
            w={230}
          />
        </Group>
      </Paper>

      {/* =====================================================
          RESULT HEADER
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
          {filteredTramites.length}{" "}
          {filteredTramites.length === 1
            ? "trámite"
            : "trámites"}
        </Text>

        {(search || estado) && (
          <Text
            size="xs"
            c="gray.7"
          >
            de {typedTramites.length} en total
          </Text>
        )}
      </Group>

      {/* =====================================================
          NO RESULTS
      ===================================================== */}

      {filteredTramites.length ===
      0 ? (
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
                No encontramos trámites
              </Text>

              <Text
                size="sm"
                c="gray.7"
                ta="center"
              >
                Prueba buscando otra
                empresa, cliente, código o
                estado.
              </Text>
            </Stack>
          </Center>
        </Paper>
      ) : (
        /* ===================================================
            TRÁMITES
        =================================================== */

        <Stack gap="sm">
          {filteredTramites.map(
            (tramite) => {
              const cliente =
                getCliente(
                  tramite.clienteId
                );

              const estadoTramite =
                tramite.estado as EstadoTramite;

              const lastUpdate =
                getLastUpdate(tramite);

              const hasObservaciones =
                estadoTramite ===
                "observaciones";

              return (
                <Paper
                  key={tramite._id}
                  component={Link}
                  href={`/admin/tramites/${tramite._id}`}
                  withBorder
                  radius="lg"
                  p={{
                    base: "md",
                    sm: "lg",
                  }}
                  style={{
                    display: "block",
                    textDecoration:
                      "none",
                    transition:
                      "border-color 160ms ease, box-shadow 160ms ease, transform 160ms ease",
                  }}
                >
                  <Group
                    justify="space-between"
                    align="center"
                    wrap="nowrap"
                    gap="xl"
                  >
                    {/* ===============================
                        COMPANY
                    =============================== */}

                    <Group
                      gap="md"
                      wrap="nowrap"
                      style={{
                        minWidth: 0,
                      }}
                    >
                      <ThemeIcon
                        size={44}
                        radius="lg"
                        variant="light"
                        color={
                          hasObservaciones
                            ? "orange"
                            : "teal"
                        }
                        style={{
                          flexShrink: 0,
                        }}
                      >
                        {hasObservaciones ? (
                          <IconAlertCircle
                            size={21}
                            stroke={1.7}
                          />
                        ) : (
                          <IconBuilding
                            size={21}
                            stroke={1.7}
                          />
                        )}
                      </ThemeIcon>

                      <Box
                        style={{
                          minWidth: 0,
                        }}
                      >
                        {/* COMPANY NAME */}

                        <Text
                          fw={650}
                          c="navy.9"
                          truncate
                        >
                          {tramite.nombreEmpresa}
                        </Text>

                        {/* CLIENT */}

                        <Text
                          size="sm"
                          c="gray.7"
                          truncate
                          mt={1}
                        >
                          {cliente.nombre}
                        </Text>

                        {/* CODE + PLAN */}

                        <Group
                          gap={7}
                          mt={7}
                          wrap="wrap"
                        >
                          <Text
                            size="xs"
                            c="gray.7"
                            ff="var(--font-mono)"
                          >
                            {tramite.codigo}
                          </Text>

                          <Text
                            size="xs"
                            c="gray.7"
                          >
                            •
                          </Text>

                          <Text
                            size="xs"
                            c="gray.7"
                          >
                            {formatPlan(
                              tramite.plan
                            )}
                          </Text>
                        </Group>
                      </Box>
                    </Group>

                    {/* ===============================
                        STATUS
                    =============================== */}

                    <Group
                      gap="lg"
                      wrap="nowrap"
                      style={{
                        flexShrink: 0,
                      }}
                    >
                      <Stack
                        gap={5}
                        align="flex-end"
                      >
                        <Badge
                          color={
                            ESTADO_COLORS[
                              estadoTramite
                            ]
                          }
                          variant="light"
                          radius="xl"
                          size="md"
                        >
                          {
                            ESTADO_LABELS[
                              estadoTramite
                            ]
                          }
                        </Badge>

                        {lastUpdate && (
                          <Text
                            size="11px"
                            c="gray.7"
                          >
                            Actualizado{" "}
                            {lastUpdate}
                          </Text>
                        )}
                      </Stack>

                      <ActionIcon
                        variant="subtle"
                        color="gray"
                        radius="xl"
                        component="span"
                        aria-label="Ver trámite"
                      >
                        <IconChevronRight
                          size={18}
                          stroke={1.8}
                        />
                      </ActionIcon>
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

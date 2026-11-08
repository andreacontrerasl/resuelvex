import { redirect } from "next/navigation";
import {
  Container,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { auth0 } from "@/lib/auth0";
import { apiFetch } from "@/lib/api-client";
import type { Tramite } from "@resuelvex/shared";
import { TramiteCard } from "@/components/panel/TramiteCard";
import { EmptyTramites } from "@/components/panel/EmptyTramites";
import { WhatsAppButton } from "@/components/panel/WhatsAppButton";

export default async function PanelPage() {
  const session = await auth0.getSession();

  if (!session) {
    redirect("/auth/login");
  }

  const usuario: any = await apiFetch(
    "/api/usuarios/sync",
    {
      method: "POST",
    }
  );

  const tramites: Tramite[] = await apiFetch(
    "/api/tramites/mios"
  );

  const primerNombre =
    usuario?.nombre?.split(" ")[0] || "";

  return (
    <Container
      size="md"
      py={{ base: 24, sm: 40 }}
      px={{ base: "md", sm: "lg" }}
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <Group
        justify="space-between"
        align="flex-end"
        mb={32}
      >
        <div>
          <Title
            order={2}
            c="navy.9"
            style={{
              fontSize: "clamp(24px, 5vw, 30px)",
              letterSpacing: "-0.025em",
            }}
          >
            Hola
            {primerNombre
              ? `, ${primerNombre}`
              : ""}
          </Title>

          <Text
            c="gray.7"
            size="sm"
            mt={5}
          >
            Aquí puedes consultar el avance de{" "}
            {tramites.length > 1
              ? "tus trámites."
              : "tu trámite."}
          </Text>
        </div>
      </Group>

      {/* =====================================================
          EMPTY
      ===================================================== */}

      {tramites.length === 0 && (
        <EmptyTramites />
      )}

      {/* =====================================================
          TRÁMITES
      ===================================================== */}

      {tramites.length > 0 && (
        <Stack gap="xl">
          {tramites.map((tramite) => (
            <TramiteCard
              key={tramite._id}
              tramite={tramite}
            />
          ))}

          <WhatsAppButton />
        </Stack>
      )}
    </Container>
  );
}

import { redirect } from "next/navigation";
import { Container, Title, Text, Stack } from "@mantine/core";
import { auth0 } from "@/lib/auth0";
import { apiFetch } from "@/lib/api-client";
import type { Tramite } from "@resuelvex/shared";
import { TramiteCard } from "@/components/panel/TramiteCard";
import { EmptyTramites } from "@/components/panel/EmptyTramites";
import { WhatsAppButton } from "@/components/panel/WhatsAppButton";

export default async function PanelPage() {
  const session = await auth0.getSession();
  if (!session) redirect("/auth/login");

  const usuario: any = await apiFetch("/api/usuarios/sync", { method: "POST" });
  const tramites: Tramite[] = await apiFetch("/api/tramites/mios");

  const primerNombre = usuario?.nombre?.split(" ")[0] || "";

  return (
    <Container size="sm" py={{ base: "md", sm: "xl" }} px={{ base: "sm", sm: "md" }}>
      <Title order={2} c="#1F305E" mb={4} style={{ fontSize: "clamp(20px, 5vw, 28px)" }}>
        Hola{primerNombre ? `, ${primerNombre}` : ""}
      </Title>
      <Text c="dimmed" mb="xl" size="sm">Este es el estado de tu trámite.</Text>

      {tramites.length === 0 && <EmptyTramites />}

      <Stack gap="lg">
        {tramites.map((tramite) => (
          <TramiteCard key={tramite._id} tramite={tramite} />
        ))}
      </Stack>

      <WhatsAppButton />
    </Container>
  );
}

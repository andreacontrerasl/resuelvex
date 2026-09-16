import { redirect } from "next/navigation";
import { Box } from "@mantine/core";
import { auth0 } from "@/lib/auth0";
import { apiFetch } from "@/lib/api-client";
import { PanelHeader } from "@/components/panel/PanelHeader";

export default async function PanelLayout({ children }: { children: React.ReactNode }) {
  const session = await auth0.getSession();
  if (!session) redirect("/auth/login");

  const usuario: any = await apiFetch("/api/usuarios/sync", { method: "POST" });

  return (
    <Box mih="100vh" style={{ backgroundColor: "#F4F5F7" }}>
      <Box
        component="header"
        h={64}
        style={{
          position: "sticky", top: 0, zIndex: 50,
          backgroundColor: "white",
          borderBottom: "1px solid var(--mantine-color-gray-3)",
        }}
      >
        <PanelHeader nombre={usuario?.nombre} />
      </Box>
      <Box p="md">{children}</Box>
    </Box>
  );
}

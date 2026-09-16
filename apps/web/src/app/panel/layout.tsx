import { redirect } from "next/navigation";
import { Box } from "@mantine/core";
import { auth0 } from "@/lib/auth0";
import { PanelHeader } from "@/components/panel/PanelHeader";

export default async function PanelLayout({ children }: { children: React.ReactNode }) {
  const session = await auth0.getSession();
  if (!session) redirect("/auth/login");

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
        <PanelHeader email={session.user.email} />
      </Box>
      <Box p="md">{children}</Box>
    </Box>
  );
}

import { redirect } from "next/navigation";
import { Box, Flex } from "@mantine/core";
import { jwtDecode } from "jwt-decode";
import { auth0 } from "@/lib/auth0";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminNav } from "@/components/admin/AdminNav";

function isAdmin(session: any): boolean {
  try {
    const decoded: any = jwtDecode(session.tokenSet.idToken);
    const info = decoded["https://resuelvex.com/user"];
    return info?.roles?.includes("admin") ?? false;
  } catch {
    return false;
  }
}

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth0.getSession();
  if (!session) redirect("/auth/login");
  if (!isAdmin(session)) redirect("/panel");

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
        <AdminHeader email={session.user.email} />
      </Box>
      <Flex>
        <Box w={220} p="md" style={{ borderRight: "1px solid var(--mantine-color-gray-3)", minHeight: "calc(100vh - 64px)" }}>
          <AdminNav />
        </Box>
        <Box p="md" style={{ flex: 1 }}>
          {children}
        </Box>
      </Flex>
    </Box>
  );
}

import { redirect } from "next/navigation";
import { auth0 } from "@/lib/auth0";
import { apiFetch } from "@/lib/api-client";
import type { Tramite } from "@resuelvex/shared";

export default async function PanelPage() {
  const session = await auth0.getSession();
  if (!session) redirect("/auth/login");

  const tramites: Tramite[] = await apiFetch("/api/tramites/mios");

  return (
    <div>
      <h1>Hola, {session.user.name}</h1>
      {/* aquí va el timeline de estado por cada trámite */}
    </div>
  );
}

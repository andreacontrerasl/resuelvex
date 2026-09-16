import { jwtDecode } from "jwt-decode";
import { auth0 } from "./auth0";

export async function getUserSession() {
  const session = await auth0.getSession();
  if (!session) {
    return { isLoggedIn: false, dashboardHref: "/panel" };
  }

  if (!session.tokenSet.idToken) {
    return { isLoggedIn: true, dashboardHref: "/panel" };
  }

  let isAdmin = false;
  try {
    const decoded: any = jwtDecode(session.tokenSet.idToken);
    isAdmin = decoded["https://resuelvex.com/user"]?.roles?.includes("admin") ?? false;
  } catch {
    // si no se puede decodificar, tratamos como cliente normal
  }

  return { isLoggedIn: true, dashboardHref: isAdmin ? "/admin" : "/panel" };
}

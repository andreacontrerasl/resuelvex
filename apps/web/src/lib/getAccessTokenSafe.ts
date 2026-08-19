import { redirect } from "next/navigation";
import { auth0 } from "./auth0";

/**
 * Envoltorio seguro sobre auth0.getAccessToken() (SDK v4).
 * Si la sesión no puede producir un access token válido (expiró,
 * el refresh token fue revocado, no hay refresh token porque el login
 * no pidió offline_access, etc.), redirige a /auth/login en vez de
 * dejar que el error se propague sin control.
 */
export async function getAccessTokenSafe(): Promise<string> {
  try {
    const { token } = await auth0.getAccessToken();
    return token;
  } catch (error: any) {
    console.error("No se pudo obtener el access token, redirigiendo a login:", {
      code: error?.code,
      message: error?.message,
    });
    redirect("/auth/login");
  }
}

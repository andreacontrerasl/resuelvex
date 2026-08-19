import { getAccessTokenSafe } from "./getAccessTokenSafe";

export async function apiFetch(path: string, options: RequestInit = {}) {
  const token = await getAccessTokenSafe();

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`Error en la API: ${res.status}`);
  }
  return res.json();
}

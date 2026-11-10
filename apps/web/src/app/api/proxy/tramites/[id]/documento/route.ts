import { NextRequest, NextResponse } from "next/server";
import { getAccessTokenSafe } from "@/lib/getAccessTokenSafe";

// Admin: carga el documento constitutivo (JSON con el PDF en base64)
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const token = await getAccessTokenSafe();
  const body = await req.json();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tramites/${id}/documento`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}

// Admin o cliente dueño: obtiene un link de descarga temporal (Cloudinary,
// privado) y redirige ahí al navegador en vez de transmitir el archivo.
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const token = await getAccessTokenSafe();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tramites/${id}/documento`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  const data = await res.json().catch(() => ({ error: "No se pudo obtener el documento" }));

  if (!res.ok || !data.url) {
    return NextResponse.json(data, { status: res.ok ? 502 : res.status });
  }

  return NextResponse.redirect(data.url);
}

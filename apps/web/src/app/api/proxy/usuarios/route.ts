import { NextRequest, NextResponse } from "next/server";
import { getAccessTokenSafe } from "@/lib/getAccessTokenSafe";

export async function GET() {
  const token = await getAccessTokenSafe();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/usuarios`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}

export async function POST(req: NextRequest) {
  const token = await getAccessTokenSafe();
  const body = await req.json();

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/usuarios`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}

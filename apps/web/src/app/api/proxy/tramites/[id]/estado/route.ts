import { NextRequest, NextResponse } from "next/server";
import { getAccessTokenSafe } from "@/lib/getAccessTokenSafe";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const token = await getAccessTokenSafe();
  const body = await req.json();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tramites/${id}/estado`, {
    method: "PATCH",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}

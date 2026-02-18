import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();

  console.log("[CONTACT_BRIEF_MOCK]", payload);

  return NextResponse.json({ success: true, message: "Brief accepted" }, { status: 200 });
}
import { NextResponse } from "next/server";
import { prisma, ensureSchema } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    await ensureSchema();
    const body = (await req.json().catch(() => null)) as
      | { name?: string; phone?: string; topic?: string; comment?: string; source?: string }
      | null;
    if (!body || typeof body.name !== "string" || typeof body.phone !== "string") {
      return NextResponse.json({ error: "Невірні дані" }, { status: 400 });
    }
    const name = body.name.trim().slice(0, 80);
    const phone = body.phone.trim().slice(0, 40);
    if (!name || name.length < 2) {
      return NextResponse.json({ error: "Вкажіть ім'я" }, { status: 400 });
    }
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 9) {
      return NextResponse.json({ error: "Вкажіть коректний номер" }, { status: 400 });
    }
    const row = await prisma.callbackRequest.create({
      data: {
        name,
        phone,
        topic: body.topic?.toString().slice(0, 80) || null,
        comment: body.comment?.toString().slice(0, 500) || null,
        source: body.source?.toString().slice(0, 80) || null,
      },
    });
    return NextResponse.json({ ok: true, id: row.id });
  } catch (e) {
    console.error("callback error", e);
    return NextResponse.json({ error: "Помилка сервера" }, { status: 500 });
  }
}

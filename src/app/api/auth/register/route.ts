import { NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { ensureSchema, prisma } from "@/lib/prisma";
import { createSession } from "@/lib/auth";

const schema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  phone: z.string().max(30).optional().or(z.literal("")),
  password: z.string().min(6).max(200),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Некоректні дані" }, { status: 400 });
    }
    const { name, email, phone, password } = parsed.data;
    const emailNormalized = email.toLowerCase().trim();

    await ensureSchema();
    const existing = await prisma.user.findUnique({ where: { email: emailNormalized } });
    if (existing) {
      return NextResponse.json(
        { error: "Користувач з таким email уже існує" },
        { status: 409 }
      );
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email: emailNormalized,
        name,
        phone: phone || null,
        passwordHash,
      },
    });

    await createSession({ userId: user.id, email: user.email });
    return NextResponse.json({ ok: true, user: { id: user.id, email: user.email, name: user.name } });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Помилка сервера" }, { status: 500 });
  }
}

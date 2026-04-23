import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

const itemSchema = z.object({
  productId: z.string(),
  title: z.string(),
  size: z.string().optional().nullable(),
  price: z.number().int().nonnegative(),
  quantity: z.number().int().positive(),
});

const schema = z.object({
  customerName: z.string().min(1).max(200),
  phone: z.string().min(5).max(30),
  email: z.string().email().optional().or(z.literal("")),
  city: z.string().min(1).max(100),
  np: z.string().min(1).max(100),
  payment: z.string().min(1).max(50),
  comment: z.string().max(1000).optional().or(z.literal("")),
  items: z.array(itemSchema).min(1),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Некоректні дані замовлення" }, { status: 400 });
    }
    const data = parsed.data;
    const session = await getSession();

    const total = data.items.reduce((s, i) => s + i.price * i.quantity, 0);

    const order = await prisma.order.create({
      data: {
        userId: session?.userId ?? null,
        customerName: data.customerName,
        phone: data.phone,
        email: data.email || null,
        city: data.city,
        np: data.np,
        payment: data.payment,
        comment: data.comment || null,
        total,
        items: {
          create: data.items.map((i) => ({
            productId: i.productId,
            title: i.title,
            size: i.size || null,
            price: i.price,
            quantity: i.quantity,
          })),
        },
      },
    });

    return NextResponse.json({ ok: true, orderId: order.id });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Помилка сервера" }, { status: 500 });
  }
}

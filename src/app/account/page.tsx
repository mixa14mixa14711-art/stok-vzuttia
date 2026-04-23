import { redirect } from "next/navigation";
import Link from "next/link";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { formatUAH } from "@/lib/products";
import { LogoutButton } from "./LogoutButton";

export const dynamic = "force-dynamic";

export default async function AccountPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  const orders = await prisma.order.findMany({
    where: { userId: user.id },
    include: { items: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Мій кабінет</h1>
          <p className="text-neutral-600 mt-1">
            {user.name || user.email}
            <span className="text-neutral-400"> · {user.email}</span>
          </p>
        </div>
        <LogoutButton />
      </div>

      <section className="mt-8">
        <h2 className="text-lg font-semibold mb-3">Мої замовлення</h2>
        {orders.length === 0 ? (
          <div className="text-neutral-500 bg-white border border-neutral-200 rounded p-5">
            У вас ще немає замовлень.{" "}
            <Link href="/" className="text-brand-700 hover:underline">Перейти до каталогу</Link>.
          </div>
        ) : (
          <ul className="space-y-3">
            {orders.map((order) => (
              <li key={order.id} className="border border-neutral-200 rounded-lg bg-white p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">Замовлення #{order.id.slice(-8)}</div>
                    <div className="text-xs text-neutral-500">
                      {new Date(order.createdAt).toLocaleString("uk-UA")} · Статус: {order.status}
                    </div>
                  </div>
                  <div className="font-bold">{formatUAH(order.total)}</div>
                </div>
                <ul className="mt-3 text-sm text-neutral-700 space-y-1">
                  {order.items.map((i) => (
                    <li key={i.id}>
                      {i.title}
                      {i.size ? <span className="text-neutral-500"> · {i.size}</span> : null}{" "}
                      × {i.quantity} — {formatUAH(i.price * i.quantity)}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

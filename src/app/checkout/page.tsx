"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/CartProvider";
import { useGeo } from "@/components/GeoProvider";
import { formatUAH } from "@/lib/products";
import Link from "next/link";

export default function CheckoutPage() {
  const { items, total, clear } = useCart();
  const router = useRouter();
  const geo = useGeo();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    customerName: "",
    phone: "",
    email: "",
    city: "",
    np: "",
    payment: "np-cod",
    comment: "",
  });

  useEffect(() => {
    if (geo.status === "granted" && geo.city && !form.city) {
      setForm((f) => ({ ...f, city: geo.city as string }));
    }
  }, [geo.status, geo.city, form.city]);

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) {
      setError("Кошик порожній");
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          items: items.map((i) => ({
            productId: i.productId,
            title: i.title,
            size: i.size,
            price: i.price,
            quantity: i.quantity,
          })),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Помилка оформлення замовлення");
      }
      clear();
      router.push(`/checkout/success?order=${data.orderId}`);
      router.refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Невідома помилка");
    } finally {
      setSubmitting(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10 text-center">
        <h1 className="text-2xl font-bold">Оформлення замовлення</h1>
        <p className="text-neutral-600 mt-3">Кошик порожній. Додайте товари, перш ніж оформлювати замовлення.</p>
        <Link
          href="/"
          className="inline-block mt-5 bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded"
        >
          До каталогу
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold">Оформлення замовлення</h1>

      <form onSubmit={submit} className="mt-6 grid md:grid-cols-[1fr_360px] gap-8">
        <div className="space-y-5 bg-white border border-neutral-200 rounded-lg p-5">
          <div>
            <h2 className="font-semibold mb-3">Контактні дані</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Field label="Ім'я та прізвище" required>
                <input required value={form.customerName} onChange={update("customerName")} className={inputCls} />
              </Field>
              <Field label="Телефон" required>
                <input required type="tel" value={form.phone} onChange={update("phone")} placeholder="+380..." className={inputCls} />
              </Field>
              <Field label="Email">
                <input type="email" value={form.email} onChange={update("email")} className={inputCls} />
              </Field>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-semibold">Доставка — Нова Пошта</h2>
              {geo.status !== "granted" ? (
                <button
                  type="button"
                  onClick={geo.request}
                  className="text-xs text-brand-600 hover:underline"
                >
                  Визначити моє місто автоматично
                </button>
              ) : geo.city ? (
                <span className="text-xs text-neutral-500">
                  За геолокацією: <b className="text-neutral-800">{geo.city}</b>
                </span>
              ) : null}
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <Field label="Місто" required>
                <input required value={form.city} onChange={update("city")} placeholder="Київ" className={inputCls} />
              </Field>
              <Field label="№ відділення / поштомат" required>
                <input required value={form.np} onChange={update("np")} placeholder="№ 25" className={inputCls} />
              </Field>
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-3">Оплата</h2>
            <div className="space-y-2">
              {[
                { v: "np-cod", l: "Післяплата (накладений платіж Нової Пошти)" },
                { v: "prepay-card", l: "Повна передоплата на карту Приват / Моно" },
              ].map((opt) => (
                <label key={opt.v} className="flex items-center gap-3 border border-neutral-200 rounded px-3 py-2 cursor-pointer hover:border-brand-400">
                  <input
                    type="radio"
                    name="payment"
                    value={opt.v}
                    checked={form.payment === opt.v}
                    onChange={update("payment")}
                  />
                  <span className="text-sm">{opt.l}</span>
                </label>
              ))}
            </div>
          </div>

          <Field label="Коментар до замовлення">
            <textarea value={form.comment} onChange={update("comment")} rows={3} className={inputCls} />
          </Field>

          {error && <div className="text-sm text-red-600">{error}</div>}
        </div>

        <aside className="bg-white border border-neutral-200 rounded-lg p-5 h-fit md:sticky top-20">
          <h2 className="font-semibold mb-3">Ваше замовлення</h2>
          <ul className="divide-y divide-neutral-200 mb-3">
            {items.map((i) => (
              <li key={`${i.productId}-${i.size ?? ""}`} className="py-2 flex justify-between gap-3 text-sm">
                <span className="flex-1">
                  {i.title}
                  {i.size ? <span className="text-neutral-500"> · {i.size}</span> : null}
                  <span className="text-neutral-500"> × {i.quantity}</span>
                </span>
                <span className="font-medium">{formatUAH(i.price * i.quantity)}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between py-2 border-t">
            <span className="text-neutral-600">Разом</span>
            <span className="font-bold text-lg">{formatUAH(total)}</span>
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="mt-4 w-full bg-brand-600 hover:bg-brand-700 disabled:opacity-60 text-white font-medium px-4 py-3 rounded"
          >
            {submitting ? "Надсилаємо..." : "Підтвердити замовлення"}
          </button>
        </aside>
      </form>
    </div>
  );
}

const inputCls =
  "w-full border border-neutral-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-brand-400";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm text-neutral-700 mb-1">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </span>
      {children}
    </label>
  );
}

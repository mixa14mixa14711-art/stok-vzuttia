"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { formatUAH } from "@/lib/products";

export default function CartPage() {
  const { items, total, updateQuantity, removeItem, clear } = useCart();

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold">Ваш кошик</h1>

      {items.length === 0 ? (
        <div className="mt-8 text-center py-16 border border-dashed border-neutral-300 rounded-lg">
          <p className="text-neutral-600">Кошик порожній.</p>
          <Link
            href="/"
            className="inline-block mt-4 bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded"
          >
            До каталогу
          </Link>
        </div>
      ) : (
        <div className="mt-6 grid md:grid-cols-[1fr_320px] gap-8">
          <ul className="divide-y divide-neutral-200 border border-neutral-200 rounded-lg bg-white">
            {items.map((item) => (
              <li
                key={`${item.productId}-${item.size ?? ""}`}
                className="flex gap-4 p-4"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-24 object-cover rounded bg-neutral-100 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <Link
                    href={`/product/${item.slug}`}
                    className="font-medium hover:text-brand-600 block"
                  >
                    {item.title}
                  </Link>
                  {item.size && (
                    <div className="text-sm text-neutral-500">Розмір: {item.size}</div>
                  )}
                  <div className="mt-2 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.productId, item.size, item.quantity - 1)}
                      className="w-8 h-8 border border-neutral-300 rounded hover:border-brand-400"
                      aria-label="Зменшити"
                    >
                      −
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.productId, item.size, item.quantity + 1)}
                      className="w-8 h-8 border border-neutral-300 rounded hover:border-brand-400"
                      aria-label="Збільшити"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">{formatUAH(item.price * item.quantity)}</div>
                  <button
                    type="button"
                    onClick={() => removeItem(item.productId, item.size)}
                    className="text-xs text-neutral-500 hover:text-red-600 mt-2"
                  >
                    Видалити
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <aside className="border border-neutral-200 rounded-lg bg-white p-5 h-fit sticky top-20">
            <div className="flex justify-between py-2">
              <span className="text-neutral-600">Разом</span>
              <span className="font-bold text-lg">{formatUAH(total)}</span>
            </div>
            <Link
              href="/checkout"
              className="mt-3 block text-center bg-brand-600 hover:bg-brand-700 text-white font-medium px-4 py-3 rounded"
            >
              Оформити замовлення
            </Link>
            <button
              type="button"
              onClick={clear}
              className="mt-2 w-full text-sm text-neutral-500 hover:text-red-600"
            >
              Очистити кошик
            </button>
          </aside>
        </div>
      )}
    </div>
  );
}

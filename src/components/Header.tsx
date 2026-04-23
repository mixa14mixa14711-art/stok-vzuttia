"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";
import { DEPARTMENTS } from "@/lib/products";
import { SHOP_INFO } from "@/lib/shop-info";
import { useState } from "react";

type Props = {
  user: { email: string; name: string | null } | null;
};

export function Header({ user }: Props) {
  const { itemCount } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-neutral-200 bg-white sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href="/" className="flex flex-col leading-tight">
            <span className="font-bold text-lg text-brand-700">{SHOP_INFO.name}</span>
            <span className="text-[11px] text-neutral-500">{SHOP_INFO.tagline}</span>
          </Link>

          <nav className="hidden md:flex items-center gap-5 text-sm font-medium">
            {DEPARTMENTS.map((d) => (
              <Link
                key={d.slug}
                href={`/catalog/${d.slug}`}
                className="hover:text-brand-600 transition-colors"
              >
                {d.title}
              </Link>
            ))}
            <Link href="/delivery" className="hover:text-brand-600">
              Доставка і оплата
            </Link>
            <Link href="/contacts" className="hover:text-brand-600">
              Контакти
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            {user ? (
              <Link href="/account" className="hidden sm:block text-sm hover:text-brand-600">
                {user.name || user.email}
              </Link>
            ) : (
              <div className="hidden sm:flex items-center gap-2 text-sm">
                <Link href="/login" className="hover:text-brand-600">
                  Увійти
                </Link>
                <span className="text-neutral-300">/</span>
                <Link href="/register" className="hover:text-brand-600">
                  Реєстрація
                </Link>
              </div>
            )}
            <Link
              href="/cart"
              className="relative inline-flex items-center gap-2 rounded-full bg-brand-600 text-white px-4 py-2 text-sm font-medium hover:bg-brand-700"
            >
              Кошик
              {itemCount > 0 && (
                <span className="inline-flex items-center justify-center min-w-[22px] h-[22px] rounded-full bg-white text-brand-700 text-xs font-bold px-1">
                  {itemCount}
                </span>
              )}
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Меню"
              className="md:hidden p-2 -mr-2"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-neutral-200 py-3 flex flex-col gap-2 text-sm">
            {DEPARTMENTS.map((d) => (
              <Link
                key={d.slug}
                href={`/catalog/${d.slug}`}
                onClick={() => setOpen(false)}
                className="py-1"
              >
                {d.title}
              </Link>
            ))}
            <Link href="/delivery" onClick={() => setOpen(false)} className="py-1">
              Доставка і оплата
            </Link>
            <Link href="/contacts" onClick={() => setOpen(false)} className="py-1">
              Контакти
            </Link>
            {!user && (
              <div className="flex gap-3 pt-2 border-t border-neutral-100">
                <Link href="/login" onClick={() => setOpen(false)}>Увійти</Link>
                <Link href="/register" onClick={() => setOpen(false)}>Реєстрація</Link>
              </div>
            )}
            {user && (
              <Link href="/account" onClick={() => setOpen(false)} className="pt-2 border-t border-neutral-100">
                Мій кабінет
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

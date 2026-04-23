"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";
import { DEPARTMENTS } from "@/lib/products";
import { SHOP_INFO } from "@/lib/shop-info";
import { GeoBadge } from "./GeoBadge";
import { useState } from "react";

type Props = {
  user: { email: string; name: string | null } | null;
};

export function Header({ user }: Props) {
  const { itemCount } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40">
      {/* Top bar */}
      <div className="bg-sport-bg text-sport-ink text-xs border-b border-sport-line">
        <div className="mx-auto max-w-6xl px-4 py-1.5 flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
          <div className="flex items-center gap-3">
            <a href={`tel:${SHOP_INFO.phoneDigits}`} className="hover:text-sport-lime">
              {SHOP_INFO.phone}
            </a>
            <a
              href={`viber://chat?number=${SHOP_INFO.viber}`}
              className="hover:text-sport-lime"
              aria-label="Viber"
            >
              Viber
            </a>
            <a
              href={SHOP_INFO.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sport-lime"
            >
              TikTok {SHOP_INFO.tiktok}
            </a>
            <span className="hidden sm:inline text-sport-mute">·</span>
            <GeoBadge />
          </div>
          <div className="text-sport-mute">{SHOP_INFO.workHours}</div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white/90 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between h-16 gap-4">
            <Link href="/" className="flex items-center gap-2 leading-tight">
              <span className="inline-block w-2 h-8 bg-brand-600 rounded-sm" />
              <div className="flex flex-col">
                <span className="font-display text-xl tracking-wide text-neutral-900">
                  {SHOP_INFO.name}
                </span>
                <span className="text-[11px] text-neutral-500 -mt-1">{SHOP_INFO.tagline}</span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-5 text-sm font-semibold uppercase tracking-wide">
              {DEPARTMENTS.map((d) => (
                <Link
                  key={d.slug}
                  href={`/catalog/${d.slug}`}
                  className="hover:text-brand-600 transition-colors"
                >
                  {d.title}
                </Link>
              ))}
              <Link href="/brands" className="hover:text-brand-600">Бренди</Link>
              <Link href="/sale" className="text-brand-600 hover:text-brand-700">Акції</Link>
              <Link href="/wholesale" className="hover:text-brand-600">Опт</Link>
              <Link href="/contacts" className="hover:text-brand-600">Контакти</Link>
            </nav>

            <div className="flex items-center gap-3">
              {user ? (
                <Link href="/account" className="hidden sm:block text-sm hover:text-brand-600">
                  {user.name || user.email}
                </Link>
              ) : (
                <div className="hidden sm:flex items-center gap-2 text-sm">
                  <Link href="/login" className="hover:text-brand-600">Увійти</Link>
                  <span className="text-neutral-300">/</span>
                  <Link href="/register" className="hover:text-brand-600">Реєстрація</Link>
                </div>
              )}
              <Link
                href="/cart"
                className="relative inline-flex items-center gap-2 rounded bg-brand-600 text-white px-4 py-2 text-sm font-bold uppercase tracking-wide hover:bg-brand-700 shadow-glow"
              >
                Кошик
                {itemCount > 0 && (
                  <span className="inline-flex items-center justify-center min-w-[22px] h-[22px] rounded-full bg-sport-lime text-neutral-900 text-xs font-bold px-1">
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
                <Link key={d.slug} href={`/catalog/${d.slug}`} onClick={() => setOpen(false)} className="py-1">
                  {d.title}
                </Link>
              ))}
              <Link href="/brands" onClick={() => setOpen(false)} className="py-1">Бренди</Link>
              <Link href="/sale" onClick={() => setOpen(false)} className="py-1 text-brand-600">Акції</Link>
              <Link href="/wholesale" onClick={() => setOpen(false)} className="py-1">Опт</Link>
              <Link href="/delivery" onClick={() => setOpen(false)} className="py-1">Доставка і оплата</Link>
              <Link href="/contacts" onClick={() => setOpen(false)} className="py-1">Контакти</Link>
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
      </div>
    </header>
  );
}

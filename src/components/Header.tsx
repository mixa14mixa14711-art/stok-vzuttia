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
      {/* Top bar — cosmic contact strip */}
      <div className="bg-gradient-to-r from-cosmos-void via-cosmos-deep to-cosmos-nebula text-cosmos-ink border-b border-cosmos-line">
        <div className="mx-auto max-w-6xl px-4 py-2.5 flex flex-wrap items-center justify-between gap-x-5 gap-y-2">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a
              href={`tel:${SHOP_INFO.phoneDigits}`}
              className="group inline-flex items-center gap-2 font-display text-lg md:text-xl font-bold tracking-wide text-cosmos-aqua hover:text-cosmos-fuchsia transition-colors"
              aria-label={`Телефонувати ${SHOP_INFO.phone}`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
                className="drop-shadow-[0_0_10px_rgba(34,211,238,0.75)]"
              >
                <path d="M6.6 10.8c1.5 2.9 3.9 5.3 6.8 6.8l2.3-2.3c.3-.3.7-.4 1.1-.3 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.8 21 3 13.2 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1.1L6.6 10.8z"/>
              </svg>
              <span>{SHOP_INFO.phone}</span>
            </a>
            <a
              href={`viber://chat?number=${SHOP_INFO.viber}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-cosmos-purple/60 px-3 py-1 text-xs md:text-sm font-semibold text-cosmos-fuchsia hover:bg-cosmos-purple hover:text-white transition-colors"
              aria-label="Viber"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M18.8 3c1.2 0 2.2 1 2.2 2.2v9.3c0 1.2-1 2.2-2.2 2.2h-3.1l-3.9 3.2V16.7H5.2C4 16.7 3 15.7 3 14.5V5.2C3 4 4 3 5.2 3h13.6zm-6.6 3.7c-2.5 0-4.4 1.7-4.5 4 0 .2.1.3.3.3h.6c.2 0 .3-.1.3-.3.1-1.6 1.5-2.7 3.3-2.7s3.2 1.1 3.3 2.7c0 .2.1.3.3.3h.6c.2 0 .3-.1.3-.3-.1-2.3-2-4-4.5-4zm0 1.8c-1.5 0-2.6 1-2.7 2.4 0 .2.1.3.3.3h.6c.2 0 .3-.1.3-.2.1-.9.7-1.5 1.5-1.5s1.4.6 1.5 1.5c0 .1.1.2.3.2h.6c.2 0 .3-.1.3-.3-.1-1.4-1.2-2.4-2.7-2.4zm-5.2 2.1c-.3 0-.5.2-.5.5v.2c.3 3.3 2.8 5.7 6.1 6h.2c.2 0 .4-.2.4-.5v-.9c0-.3-.2-.5-.5-.6-.3 0-.7-.1-1-.2-.2 0-.4 0-.5.2l-.6.6c-.9-.5-1.7-1.2-2.2-2.2l.6-.6c.1-.1.2-.3.2-.5-.1-.3-.2-.7-.2-1-.1-.3-.3-.5-.6-.5h-.4z"/>
              </svg>
              Viber
            </a>
            <a
              href={SHOP_INFO.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-cosmos-aqua/60 px-3 py-1 text-xs md:text-sm font-semibold text-cosmos-aqua hover:bg-cosmos-aqua hover:text-cosmos-void transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M19.5 7.8c-1.8 0-3.3-1.4-3.3-3.2V4h-3.1v12.4c0 1.2-1 2.2-2.2 2.2a2.2 2.2 0 1 1 0-4.4c.2 0 .4 0 .6.1V11a5.3 5.3 0 1 0 4.7 5.3V9.6c1 .7 2.2 1.1 3.5 1.1V7.8h-.2z"/>
              </svg>
              TikTok {SHOP_INFO.tiktok}
            </a>
            <span className="hidden md:inline text-cosmos-line">·</span>
            <GeoBadge />
          </div>
          <div className="text-cosmos-mute text-xs md:text-sm">{SHOP_INFO.workHours}</div>
        </div>
      </div>

      {/* Main nav — cosmic */}
      <div className="bg-cosmos-deep/80 backdrop-blur-md border-b border-cosmos-line">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between h-16 gap-4">
            <Link href="/" className="flex items-center gap-2 leading-tight">
              <span className="inline-block w-2 h-8 rounded-sm bg-gradient-to-b from-cosmos-fuchsia to-cosmos-cyan shadow-[0_0_14px_rgba(217,70,239,0.7)]" />
              <div className="flex flex-col">
                <span className="font-display text-xl tracking-wide text-cosmos-ink">
                  {SHOP_INFO.name}
                </span>
                <span className="text-[11px] text-cosmos-mute -mt-1">{SHOP_INFO.tagline}</span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-3 lg:gap-4 text-[13px] font-semibold uppercase tracking-wide text-cosmos-ink">
              {DEPARTMENTS.filter((d) => ["women", "men", "kids", "shoes"].includes(d.slug)).map((d) => (
                <Link key={d.slug} href={`/catalog/${d.slug}`} className="hover:text-cosmos-fuchsia">
                  {d.title}
                </Link>
              ))}
              {DEPARTMENTS.filter((d) => ["accessories", "home", "sport", "mix"].includes(d.slug)).map((d) => (
                <Link
                  key={d.slug}
                  href={`/catalog/${d.slug}`}
                  className="hidden xl:inline hover:text-cosmos-fuchsia"
                >
                  {d.title}
                </Link>
              ))}
              <Link href="/brands" className="hover:text-cosmos-fuchsia">Бренди</Link>
              <Link href="/sale" className="text-cosmos-fuchsia hover:text-cosmos-pink">Акції</Link>
              <Link href="/wholesale" className="hidden lg:inline hover:text-cosmos-fuchsia">Опт</Link>
              <Link href="/size-guide" className="hidden lg:inline hover:text-cosmos-fuchsia">Розміри</Link>
              <Link href="/contacts" className="hover:text-cosmos-fuchsia">Контакти</Link>
            </nav>

            <div className="flex items-center gap-3">
              {user ? (
                <Link href="/account" className="hidden sm:block text-sm text-cosmos-ink hover:text-cosmos-fuchsia">
                  {user.name || user.email}
                </Link>
              ) : (
                <div className="hidden sm:flex items-center gap-2 text-sm text-cosmos-ink">
                  <Link href="/login" className="hover:text-cosmos-fuchsia">Увійти</Link>
                  <span className="text-cosmos-line">/</span>
                  <Link href="/register" className="hover:text-cosmos-fuchsia">Реєстрація</Link>
                </div>
              )}
              <Link
                href="/cart"
                className="relative inline-flex items-center gap-2 rounded-full btn-cosmos px-4 py-2 text-sm font-bold uppercase tracking-wide"
              >
                Кошик
                {itemCount > 0 && (
                  <span className="inline-flex items-center justify-center min-w-[22px] h-[22px] rounded-full bg-cosmos-aqua text-cosmos-void text-xs font-bold px-1">
                    {itemCount}
                  </span>
                )}
              </Link>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-label="Меню"
                className="md:hidden p-2 -mr-2 text-cosmos-ink"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              </button>
            </div>
          </div>

          {open && (
            <div className="md:hidden border-t border-cosmos-line py-3 flex flex-col gap-2 text-sm text-cosmos-ink">
              {DEPARTMENTS.map((d) => (
                <Link key={d.slug} href={`/catalog/${d.slug}`} onClick={() => setOpen(false)} className="py-1">
                  {d.title}
                </Link>
              ))}
              <Link href="/brands" onClick={() => setOpen(false)} className="py-1">Бренди</Link>
              <Link href="/sale" onClick={() => setOpen(false)} className="py-1 text-cosmos-fuchsia">Акції</Link>
              <Link href="/new" onClick={() => setOpen(false)} className="py-1">Нові надходження</Link>
              <Link href="/wholesale" onClick={() => setOpen(false)} className="py-1">Опт</Link>
              <Link href="/size-guide" onClick={() => setOpen(false)} className="py-1">Таблиця розмірів</Link>
              <Link href="/loyalty" onClick={() => setOpen(false)} className="py-1">Програма лояльності</Link>
              <Link href="/reviews" onClick={() => setOpen(false)} className="py-1">Відгуки</Link>
              <Link href="/delivery" onClick={() => setOpen(false)} className="py-1">Доставка і оплата</Link>
              <Link href="/returns" onClick={() => setOpen(false)} className="py-1">Обмін та повернення</Link>
              <Link href="/faq" onClick={() => setOpen(false)} className="py-1">FAQ</Link>
              <Link href="/contacts" onClick={() => setOpen(false)} className="py-1">Контакти</Link>
              {!user && (
                <div className="flex gap-3 pt-2 border-t border-cosmos-line">
                  <Link href="/login" onClick={() => setOpen(false)}>Увійти</Link>
                  <Link href="/register" onClick={() => setOpen(false)}>Реєстрація</Link>
                </div>
              )}
              {user && (
                <Link href="/account" onClick={() => setOpen(false)} className="pt-2 border-t border-cosmos-line">
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

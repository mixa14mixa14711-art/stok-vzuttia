import Link from "next/link";
import { SHOP_INFO } from "@/lib/shop-info";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-4 text-sm">
        <div>
          <div className="font-bold text-brand-700 text-base">{SHOP_INFO.name}</div>
          <p className="mt-2 text-neutral-600">{SHOP_INFO.tagline}</p>
          <p className="mt-1 text-neutral-500 text-xs">Джерело: {SHOP_INFO.source}</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Покупцям</div>
          <ul className="space-y-1 text-neutral-700">
            <li><Link href="/delivery">Доставка і оплата</Link></li>
            <li><Link href="/about">Про нас</Link></li>
            <li><Link href="/contacts">Контакти</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Відділи</div>
          <ul className="space-y-1 text-neutral-700">
            <li><Link href="/catalog/women">Жінкам</Link></li>
            <li><Link href="/catalog/men">Чоловікам</Link></li>
            <li><Link href="/catalog/kids">Дітям</Link></li>
            <li><Link href="/catalog/shoes">Взуття</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Контакти</div>
          <ul className="space-y-1 text-neutral-700">
            <li>{SHOP_INFO.phone}</li>
            <li>{SHOP_INFO.email}</li>
            <li>Telegram: {SHOP_INFO.telegram}</li>
            <li>TikTok: {SHOP_INFO.tiktok}</li>
            <li className="text-neutral-500 text-xs pt-1">{SHOP_INFO.workHours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-200 py-4 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} {SHOP_INFO.name}. Усі права захищені.
      </div>
    </footer>
  );
}

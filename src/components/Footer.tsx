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
            <li><Link href="/wholesale">Опт / Великий гурт</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Каталог</div>
          <ul className="space-y-1 text-neutral-700">
            <li><Link href="/catalog/women">Жінкам</Link></li>
            <li><Link href="/catalog/men">Чоловікам</Link></li>
            <li><Link href="/catalog/kids">Дітям</Link></li>
            <li><Link href="/catalog/shoes">Взуття</Link></li>
            <li><Link href="/catalog/mix">Мікс</Link></li>
            <li><Link href="/brands">Бренди</Link></li>
            <li><Link href="/new">Нові надходження</Link></li>
            <li><Link href="/sale" className="text-red-600">Акції</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Контакти</div>
          <ul className="space-y-1 text-neutral-700">
            <li>
              <a href={`tel:${SHOP_INFO.phoneDigits}`} className="hover:text-brand-600">
                {SHOP_INFO.phone}
              </a>
            </li>
            <li>
              <a
                href={`viber://chat?number=${SHOP_INFO.viber}`}
                className="hover:text-brand-600"
              >
                Viber: {SHOP_INFO.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SHOP_INFO.email}`} className="hover:text-brand-600">
                {SHOP_INFO.email}
              </a>
            </li>
            <li>
              Telegram:{" "}
              <a
                href={`https://t.me/${SHOP_INFO.telegram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-600"
              >
                {SHOP_INFO.telegram}
              </a>
            </li>
            <li>
              TikTok:{" "}
              <a
                href={SHOP_INFO.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-600"
              >
                {SHOP_INFO.tiktok}
              </a>
            </li>
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

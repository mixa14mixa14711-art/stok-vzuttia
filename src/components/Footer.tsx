import Link from "next/link";
import { SHOP_INFO } from "@/lib/shop-info";

export function Footer() {
  return (
    <footer className="mt-20 bg-sport-bg text-sport-ink border-t border-sport-line">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-4 text-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-8 bg-brand-600 rounded-sm" />
            <div className="font-display text-2xl tracking-wide">{SHOP_INFO.name}</div>
          </div>
          <p className="mt-3 text-sport-mute">{SHOP_INFO.tagline}</p>
          <p className="mt-2 text-sport-mute/70 text-xs">Джерело: {SHOP_INFO.source}</p>
        </div>
        <div>
          <div className="font-display text-lg text-sport-lime mb-3 uppercase tracking-widest">Покупцям</div>
          <ul className="space-y-1.5 text-sport-ink/80">
            <li><Link href="/delivery" className="hover:text-sport-lime">Доставка і оплата</Link></li>
            <li><Link href="/about" className="hover:text-sport-lime">Про нас</Link></li>
            <li><Link href="/contacts" className="hover:text-sport-lime">Контакти</Link></li>
            <li><Link href="/wholesale" className="hover:text-sport-lime">Опт / Великий гурт</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-display text-lg text-sport-lime mb-3 uppercase tracking-widest">Каталог</div>
          <ul className="space-y-1.5 text-sport-ink/80">
            <li><Link href="/catalog/women" className="hover:text-sport-lime">Жінкам</Link></li>
            <li><Link href="/catalog/men" className="hover:text-sport-lime">Чоловікам</Link></li>
            <li><Link href="/catalog/kids" className="hover:text-sport-lime">Дітям</Link></li>
            <li><Link href="/catalog/shoes" className="hover:text-sport-lime">Взуття</Link></li>
            <li><Link href="/catalog/mix" className="hover:text-sport-lime">Мікс</Link></li>
            <li><Link href="/brands" className="hover:text-sport-lime">Бренди</Link></li>
            <li><Link href="/new" className="hover:text-sport-lime">Нові надходження</Link></li>
            <li><Link href="/sale" className="text-brand-500 hover:text-brand-400">Акції</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-display text-lg text-sport-lime mb-3 uppercase tracking-widest">Контакти</div>
          <ul className="space-y-1.5 text-sport-ink/80">
            <li>
              <a href={`tel:${SHOP_INFO.phoneDigits}`} className="hover:text-sport-lime">
                {SHOP_INFO.phone}
              </a>
            </li>
            <li>
              <a
                href={`viber://chat?number=${SHOP_INFO.viber}`}
                className="hover:text-sport-lime"
              >
                Viber: {SHOP_INFO.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SHOP_INFO.email}`} className="hover:text-sport-lime">
                {SHOP_INFO.email}
              </a>
            </li>
            <li>
              Telegram:{" "}
              <a
                href={`https://t.me/${SHOP_INFO.telegram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sport-lime"
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
                className="hover:text-sport-lime"
              >
                {SHOP_INFO.tiktok}
              </a>
            </li>
            <li className="text-sport-mute/70 text-xs pt-1">{SHOP_INFO.workHours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-sport-line py-4 text-center text-xs text-sport-mute">
        © {new Date().getFullYear()} {SHOP_INFO.name}. Усі права захищені.
      </div>
    </footer>
  );
}

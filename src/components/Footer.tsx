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
            <li><Link href="/returns" className="hover:text-sport-lime">Обмін та повернення</Link></li>
            <li><Link href="/size-guide" className="hover:text-sport-lime">Таблиця розмірів</Link></li>
            <li><Link href="/loyalty" className="hover:text-sport-lime">Програма лояльності</Link></li>
            <li><Link href="/reviews" className="hover:text-sport-lime">Відгуки клієнтів</Link></li>
            <li><Link href="/about" className="hover:text-sport-lime">Про нас</Link></li>
            <li><Link href="/wholesale" className="hover:text-sport-lime">Опт / Великий гурт</Link></li>
            <li><Link href="/offer" className="hover:text-sport-lime">Публічна оферта</Link></li>
            <li><Link href="/privacy" className="hover:text-sport-lime">Політика конфіденційності</Link></li>
            <li><Link href="/sitemap-page" className="hover:text-sport-lime">Мапа сайту</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-display text-lg text-sport-lime mb-3 uppercase tracking-widest">Каталог</div>
          <ul className="space-y-1.5 text-sport-ink/80">
            <li><Link href="/catalog/women" className="hover:text-sport-lime">Жінкам</Link></li>
            <li><Link href="/catalog/men" className="hover:text-sport-lime">Чоловікам</Link></li>
            <li><Link href="/catalog/kids" className="hover:text-sport-lime">Дітям</Link></li>
            <li><Link href="/catalog/shoes" className="hover:text-sport-lime">Взуття</Link></li>
            <li><Link href="/catalog/accessories" className="hover:text-sport-lime">Аксесуари</Link></li>
            <li><Link href="/catalog/home" className="hover:text-sport-lime">Для дому</Link></li>
            <li><Link href="/catalog/sport" className="hover:text-sport-lime">Спорт</Link></li>
            <li><Link href="/catalog/mix" className="hover:text-sport-lime">Мікс</Link></li>
            <li><Link href="/brands" className="hover:text-sport-lime">Бренди</Link></li>
            <li><Link href="/new" className="hover:text-sport-lime">Нові надходження</Link></li>
            <li><Link href="/sale" className="text-brand-500 hover:text-brand-400">Акції</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-display text-lg text-sport-blue mb-3 uppercase tracking-widest">Контакти</div>
          <ul className="space-y-1.5 text-sport-ink/80">
            <li>
              <a
                href={`tel:${SHOP_INFO.phoneDigits}`}
                className="text-sport-blue font-display text-xl tracking-wide hover:text-white"
              >
                {SHOP_INFO.phone}
              </a>
            </li>
            <li>
              <a
                href={`viber://chat?number=${SHOP_INFO.viber}`}
                className="text-sport-blue hover:text-white"
              >
                Viber: {SHOP_INFO.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SHOP_INFO.email}`} className="text-sport-blue hover:text-white">
                {SHOP_INFO.email}
              </a>
            </li>
            <li>
              <span className="text-sport-mute">Telegram:</span>{" "}
              <a
                href={`https://t.me/${SHOP_INFO.telegram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sport-blue hover:text-white"
              >
                {SHOP_INFO.telegram}
              </a>
            </li>
            <li>
              <span className="text-sport-mute">TikTok:</span>{" "}
              <a
                href={SHOP_INFO.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sport-blue hover:text-white"
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

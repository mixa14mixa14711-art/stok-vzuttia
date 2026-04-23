import Link from "next/link";
import { SHOP_INFO } from "@/lib/shop-info";

export function Footer() {
  return (
    <footer className="mt-20 bg-cosmos-void text-cosmos-ink border-t border-cosmos-line">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-4 text-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-8 bg-cosmos-purple rounded-sm" />
            <div className="font-display text-2xl tracking-wide">{SHOP_INFO.name}</div>
          </div>
          <p className="mt-3 text-cosmos-mute">{SHOP_INFO.tagline}</p>
          <p className="mt-2 text-cosmos-mute/70 text-xs">Джерело: {SHOP_INFO.source}</p>
        </div>
        <div>
          <div className="font-display text-lg text-cosmos-fuchsia mb-3 uppercase tracking-widest">Покупцям</div>
          <ul className="space-y-1.5 text-cosmos-ink/80">
            <li><Link href="/delivery" className="hover:text-cosmos-fuchsia">Доставка і оплата</Link></li>
            <li><Link href="/returns" className="hover:text-cosmos-fuchsia">Обмін та повернення</Link></li>
            <li><Link href="/size-guide" className="hover:text-cosmos-fuchsia">Таблиця розмірів</Link></li>
            <li><Link href="/loyalty" className="hover:text-cosmos-fuchsia">Програма лояльності</Link></li>
            <li><Link href="/reviews" className="hover:text-cosmos-fuchsia">Відгуки клієнтів</Link></li>
            <li><Link href="/about" className="hover:text-cosmos-fuchsia">Про нас</Link></li>
            <li><Link href="/wholesale" className="hover:text-cosmos-fuchsia">Опт / Великий гурт</Link></li>
            <li><Link href="/offer" className="hover:text-cosmos-fuchsia">Публічна оферта</Link></li>
            <li><Link href="/privacy" className="hover:text-cosmos-fuchsia">Політика конфіденційності</Link></li>
            <li><Link href="/sitemap-page" className="hover:text-cosmos-fuchsia">Мапа сайту</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-display text-lg text-cosmos-fuchsia mb-3 uppercase tracking-widest">Каталог</div>
          <ul className="space-y-1.5 text-cosmos-ink/80">
            <li><Link href="/catalog/women" className="hover:text-cosmos-fuchsia">Жінкам</Link></li>
            <li><Link href="/catalog/men" className="hover:text-cosmos-fuchsia">Чоловікам</Link></li>
            <li><Link href="/catalog/kids" className="hover:text-cosmos-fuchsia">Дітям</Link></li>
            <li><Link href="/catalog/shoes" className="hover:text-cosmos-fuchsia">Взуття</Link></li>
            <li><Link href="/catalog/accessories" className="hover:text-cosmos-fuchsia">Аксесуари</Link></li>
            <li><Link href="/catalog/home" className="hover:text-cosmos-fuchsia">Для дому</Link></li>
            <li><Link href="/catalog/sport" className="hover:text-cosmos-fuchsia">Спорт</Link></li>
            <li><Link href="/catalog/mix" className="hover:text-cosmos-fuchsia">Мікс</Link></li>
            <li><Link href="/brands" className="hover:text-cosmos-fuchsia">Бренди</Link></li>
            <li><Link href="/new" className="hover:text-cosmos-fuchsia">Нові надходження</Link></li>
            <li><Link href="/sale" className="text-cosmos-pink hover:text-cosmos-fuchsia">Акції</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-display text-lg text-cosmos-aqua mb-3 uppercase tracking-widest">Контакти</div>
          <ul className="space-y-1.5 text-cosmos-ink/80">
            <li>
              <a
                href={`tel:${SHOP_INFO.phoneDigits}`}
                className="text-cosmos-aqua font-display text-xl tracking-wide hover:text-white"
              >
                {SHOP_INFO.phone}
              </a>
            </li>
            <li>
              <a
                href={`viber://chat?number=${SHOP_INFO.viber}`}
                className="text-cosmos-aqua hover:text-white"
              >
                Viber: {SHOP_INFO.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SHOP_INFO.email}`} className="text-cosmos-aqua hover:text-white">
                {SHOP_INFO.email}
              </a>
            </li>
            <li>
              <span className="text-cosmos-mute">Telegram:</span>{" "}
              <a
                href={`https://t.me/${SHOP_INFO.telegram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cosmos-aqua hover:text-white"
              >
                {SHOP_INFO.telegram}
              </a>
            </li>
            <li>
              <span className="text-cosmos-mute">TikTok:</span>{" "}
              <a
                href={SHOP_INFO.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cosmos-aqua hover:text-white"
              >
                {SHOP_INFO.tiktok}
              </a>
            </li>
            <li className="text-cosmos-mute/70 text-xs pt-1">{SHOP_INFO.workHours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cosmos-line py-4 text-center text-xs text-cosmos-mute">
        © {new Date().getFullYear()} {SHOP_INFO.name}. Усі права захищені.
      </div>
    </footer>
  );
}

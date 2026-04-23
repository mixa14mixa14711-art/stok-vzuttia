import Link from "next/link";
import { DEPARTMENTS, getAllBrands } from "@/lib/products";

export const metadata = {
  title: "Мапа сайту — Nata Stok",
  description: "Повна мапа сторінок Nata Stok: каталог, бренди, інформаційні розділи.",
};

const INFO_LINKS: [string, string][] = [
  ["/about", "Про нас"],
  ["/delivery", "Доставка і оплата"],
  ["/returns", "Обмін та повернення"],
  ["/reviews", "Відгуки клієнтів"],
  ["/loyalty", "Програма лояльності"],
  ["/contacts", "Контакти"],
  ["/wholesale", "Опт / Великий гурт"],
  ["/size-guide", "Таблиця розмірів"],
  ["/privacy", "Політика конфіденційності"],
  ["/offer", "Публічна оферта"],
];

const SERVICE_LINKS: [string, string][] = [
  ["/", "Головна"],
  ["/new", "Нові надходження"],
  ["/sale", "Акції"],
  ["/brands", "Усі бренди"],
  ["/cart", "Кошик"],
  ["/checkout", "Оформлення замовлення"],
  ["/login", "Вхід"],
  ["/register", "Реєстрація"],
  ["/account", "Особистий кабінет"],
];

export default function SitemapPage() {
  const brands = getAllBrands();
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="font-display text-3xl md:text-4xl uppercase tracking-wide">Мапа сайту</h1>
      <p className="text-neutral-600 mt-2">Усі розділи магазину на одній сторінці.</p>

      <div className="grid md:grid-cols-3 gap-8 mt-8">
        <Column title="Каталог">
          <ul className="space-y-1.5 text-neutral-700">
            {DEPARTMENTS.map((d) => (
              <li key={d.slug}>
                <Link href={`/catalog/${d.slug}`} className="hover:text-sport-blueDeep">
                  {d.title}
                </Link>
              </li>
            ))}
          </ul>
        </Column>

        <Column title="Інформація">
          <ul className="space-y-1.5 text-neutral-700">
            {INFO_LINKS.map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="hover:text-sport-blueDeep">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </Column>

        <Column title="Сервіси">
          <ul className="space-y-1.5 text-neutral-700">
            {SERVICE_LINKS.map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="hover:text-sport-blueDeep">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </Column>
      </div>

      <div className="mt-10">
        <h2 className="font-display text-xl uppercase tracking-wide mb-3">Бренди</h2>
        <div className="flex flex-wrap gap-2">
          {brands.map((b) => (
            <Link
              key={b}
              href={`/brands/${encodeURIComponent(b.toLowerCase())}`}
              className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-3 py-1 text-sm hover:border-sport-blue hover:text-sport-blueDeep"
            >
              {b}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-xl uppercase tracking-wide mb-3 text-sport-blueDeep">
        {title}
      </h2>
      {children}
    </div>
  );
}

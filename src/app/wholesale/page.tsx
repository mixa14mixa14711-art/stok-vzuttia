import Link from "next/link";
import { SHOP_INFO } from "@/lib/shop-info";

export const metadata = { title: "Опт / Великий гурт" };

export default function WholesalePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <nav className="text-sm text-neutral-500 mb-2">
        <Link href="/" className="hover:underline">Головна</Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-700">Опт</span>
      </nav>
      <h1 className="text-2xl md:text-3xl font-bold">Стоковий одяг оптом</h1>
      <p className="mt-3 text-neutral-700">
        Для власників магазинів, бутиків та ринкових точок — можливість закупити стокові колекції
        одягу та взуття з Європи оптом на вигідних умовах.
      </p>

      <section className="mt-6 grid sm:grid-cols-3 gap-3">
        <Info title="Оригінальні бренди" text="Zara, H&M, Reserved, Mango, Bershka, Nike, Adidas, Lacoste, Jack&Jones та ін." />
        <Info title="Мікс-лоти" text="Готові мікси: жіночий, чоловічий, дитячий, мікс-взуття." />
        <Info title="Великий гурт" text="Можлива закупівля від 10 од.; запит на індивідуальний прайс." />
      </section>

      <section className="mt-8 bg-white border border-neutral-200 rounded-lg p-5">
        <h2 className="font-semibold">Як замовити оптом</h2>
        <ol className="mt-3 list-decimal list-inside space-y-1 text-neutral-700">
          <li>Напишіть у Viber або Telegram з переліком потрібних позицій.</li>
          <li>Ми підбираємо лот з актуального стоку та надсилаємо фото/прайс.</li>
          <li>Оплата за реквізитами або на картку, відправлення Новою Поштою/транспортом.</li>
        </ol>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <a
            href={`viber://chat?number=${SHOP_INFO.viber}`}
            className="inline-flex items-center px-4 py-2 rounded bg-brand-600 text-white hover:bg-brand-700"
          >
            Написати у Viber
          </a>
          <a
            href={`tel:${SHOP_INFO.phoneDigits}`}
            className="inline-flex items-center px-4 py-2 rounded border border-neutral-300 hover:border-brand-400"
          >
            Подзвонити {SHOP_INFO.phone}
          </a>
          <a
            href={SHOP_INFO.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded border border-neutral-300 hover:border-brand-400"
          >
            TikTok {SHOP_INFO.tiktok}
          </a>
        </div>
      </section>
    </div>
  );
}

function Info({ title, text }: { title: string; text: string }) {
  return (
    <div className="border border-neutral-200 bg-white rounded-lg p-4">
      <div className="font-semibold">{title}</div>
      <p className="text-sm text-neutral-600 mt-1">{text}</p>
    </div>
  );
}

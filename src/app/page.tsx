import Link from "next/link";
import { PRODUCTS, DEPARTMENTS } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { SHOP_INFO } from "@/lib/shop-info";

const HERO_IMG = "https://picsum.photos/seed/natashum-hero/1600/600";

const DEPT_IMAGES: Record<string, string> = {
  women: "https://picsum.photos/seed/dept-women/600/700",
  men: "https://picsum.photos/seed/dept-men/600/700",
  kids: "https://picsum.photos/seed/dept-kids/600/700",
  shoes: "https://picsum.photos/seed/dept-shoes/600/700",
  mix: "https://picsum.photos/seed/dept-mix/600/700",
};

export default function HomePage() {
  const featured = PRODUCTS.filter((p) => p.badge).slice(0, 8);
  const newArrivals = PRODUCTS.slice(0, 8);

  return (
    <div>
      {/* HERO */}
      <section className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={HERO_IMG} alt="" className="w-full h-[360px] md:h-[460px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-6xl px-4 w-full">
            <div className="max-w-xl text-white">
              <div className="uppercase tracking-widest text-xs mb-2 text-brand-200">
                {SHOP_INFO.source}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                {SHOP_INFO.tagline}
              </h1>
              <p className="mt-4 text-white/90">
                Оригінальні бренди: Zara, H&M, Reserved, Next, Primark, Nike, Adidas та інші.
                Доставка по всій Україні Новою Поштою.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/catalog/women"
                  className="bg-brand-600 hover:bg-brand-700 text-white font-medium px-6 py-3 rounded"
                >
                  Каталог жінкам
                </Link>
                <Link
                  href="/catalog/shoes"
                  className="bg-white/95 hover:bg-white text-neutral-900 font-medium px-6 py-3 rounded"
                >
                  Взуття
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEPARTMENTS */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-xl md:text-2xl font-bold mb-5">Відділи</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {DEPARTMENTS.map((d) => (
            <Link
              key={d.slug}
              href={`/catalog/${d.slug}`}
              className="group relative rounded-lg overflow-hidden aspect-[4/5] bg-neutral-200"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={DEPT_IMAGES[d.slug]}
                alt={d.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="text-white text-lg font-semibold">{d.title}</div>
                <div className="text-white/80 text-xs mt-1">
                  Перейти до каталогу →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex items-baseline justify-between mb-5">
          <h2 className="text-xl md:text-2xl font-bold">Акції та хіти</h2>
          <Link href="/catalog/women" className="text-sm text-brand-700 hover:underline">
            Увесь каталог →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* NEW */}
      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex items-baseline justify-between mb-5">
          <h2 className="text-xl md:text-2xl font-bold">Нові надходження</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {newArrivals.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { t: "100% оригінал", d: "Стокові речі з європейських магазинів. Бірки, якість." },
            { t: "Доставка 1–2 дні", d: "Нова Пошта по всій Україні. Можлива післяплата." },
            { t: "Зручна оплата", d: "На карту Приват/Моно або накладеним платежем." },
          ].map((b) => (
            <div key={b.t} className="rounded-lg border border-neutral-200 bg-white p-5">
              <div className="font-semibold text-brand-700">{b.t}</div>
              <div className="text-sm text-neutral-600 mt-1">{b.d}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

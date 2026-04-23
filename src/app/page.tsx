import Link from "next/link";
import dynamic from "next/dynamic";
import { PRODUCTS, DEPARTMENTS } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { SHOP_INFO } from "@/lib/shop-info";

const Hero3D = dynamic(() => import("@/components/Hero3D"), {
  ssr: false,
  loading: () => null,
});

const DEPT_IMAGES: Record<string, string> = {
  women: "https://picsum.photos/seed/dept-women/600/700",
  men: "https://picsum.photos/seed/dept-men/600/700",
  kids: "https://picsum.photos/seed/dept-kids/600/700",
  shoes: "https://picsum.photos/seed/dept-shoes/600/700",
  mix: "https://picsum.photos/seed/dept-mix/600/700",
};

const MARQUEE = [
  "ZARA", "H&M", "Reserved", "Bershka", "Pull&Bear", "Mango", "Next",
  "Primark", "Lacoste", "Jack&Jones", "Stradivarius", "Nike", "Adidas",
  "Puma", "Timberland", "Ecco",
];

export default function HomePage() {
  const featured = PRODUCTS.filter((p) => p.badge).slice(0, 8);
  const newArrivals = PRODUCTS.slice(0, 8);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden sport-bg noise clip-slant">
        <div className="absolute inset-0 sport-grid opacity-40" />
        <div className="absolute inset-0">
          <Hero3D />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-sport-lime mb-4">
              <span className="w-8 h-px bg-sport-lime" />
              {SHOP_INFO.source}
            </div>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95] text-white">
              СТОК<br />
              <span className="text-brand-500">З ЄВРОПИ.</span><br />
              НА СТАРТ.
            </h1>
            <p className="mt-5 text-white/80 max-w-md">
              Оригінальні бренди — Zara, H&M, Reserved, Bershka, Nike, Adidas. Жіночий,
              чоловічий, дитячий одяг та взуття + мікс-лоти оптом. Доставка Новою Поштою
              по всій Україні.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/new"
                className="bg-brand-600 hover:bg-brand-700 text-white font-bold uppercase tracking-wide px-6 py-3 rounded shadow-glow animate-pulseGlow"
              >
                Нові надходження
              </Link>
              <Link
                href="/catalog/mix"
                className="bg-sport-lime hover:bg-sport-lime/90 text-neutral-900 font-bold uppercase tracking-wide px-6 py-3 rounded shadow-limeGlow"
              >
                Мікс-лоти
              </Link>
              <Link
                href="/wholesale"
                className="border border-white/30 text-white hover:border-white hover:bg-white/5 font-bold uppercase tracking-wide px-6 py-3 rounded"
              >
                Опт
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND MARQUEE */}
      <section className="bg-neutral-900 text-white py-4 overflow-hidden border-y border-sport-line">
        <div className="flex gap-12 whitespace-nowrap animate-marquee w-max">
          {[...MARQUEE, ...MARQUEE].map((b, i) => (
            <span key={i} className="font-display text-2xl tracking-widest text-white/80">
              {b} <span className="text-brand-500 mx-3">★</span>
            </span>
          ))}
        </div>
      </section>

      {/* DEPARTMENTS */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between mb-6">
          <h2 className="font-display text-3xl md:text-4xl">Відділи</h2>
          <Link href="/brands" className="text-sm text-brand-600 font-semibold hover:underline">
            Усі бренди →
          </Link>
        </div>
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
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-3 left-3 right-3 flex justify-between">
                <span className="text-[10px] uppercase tracking-widest text-sport-lime">{d.slug}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="font-display text-white text-2xl tracking-wide">{d.title}</div>
                <div className="text-white/70 text-xs mt-1 group-hover:text-brand-400 transition">
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
          <h2 className="font-display text-3xl md:text-4xl">
            Акції та хіти <span className="text-brand-600">—</span>
          </h2>
          <Link href="/sale" className="text-sm text-brand-700 font-semibold hover:underline">
            Усі акції →
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
          <h2 className="font-display text-3xl md:text-4xl">Нові надходження</h2>
          <Link href="/new" className="text-sm text-brand-700 font-semibold hover:underline">
            Всі →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {newArrivals.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { t: "100% оригінал", d: "Стокові речі з європейських магазинів. Бірки, якість." },
            { t: "Доставка 1–2 дні", d: "Нова Пошта по всій Україні. Можлива післяплата." },
            { t: "Зручна оплата", d: "На карту Приват/Моно або накладеним платежем." },
          ].map((b) => (
            <div key={b.t} className="relative overflow-hidden rounded-lg bg-neutral-900 text-white p-6">
              <div className="absolute -right-4 -top-4 w-20 h-20 rounded-full bg-brand-600/30 blur-2xl" />
              <div className="absolute -left-2 -bottom-2 w-16 h-16 rounded-full bg-sport-lime/20 blur-2xl" />
              <div className="font-display text-2xl text-sport-lime">{b.t}</div>
              <p className="mt-2 text-white/70 text-sm">{b.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

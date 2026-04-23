import Link from "next/link";
import dynamic from "next/dynamic";
import { PRODUCTS, DEPARTMENTS } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { SHOP_INFO } from "@/lib/shop-info";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { FeaturesStrip } from "@/components/FeaturesStrip";
import { VideosSection } from "@/components/VideosSection";
import { TelegramStrip } from "@/components/TelegramStrip";

const Hero3D = dynamic(() => import("@/components/Hero3D"), {
  ssr: false,
  loading: () => null,
});

const DEPT_IMAGES: Record<string, string> = {
  women: "https://picsum.photos/seed/dept-women/600/700",
  men: "https://picsum.photos/seed/dept-men/600/700",
  kids: "https://picsum.photos/seed/dept-kids/600/700",
  shoes: "https://picsum.photos/seed/dept-shoes/600/700",
  accessories: "https://picsum.photos/seed/dept-access/600/700",
  home: "https://picsum.photos/seed/dept-home/600/700",
  sport: "https://picsum.photos/seed/dept-sport/600/700",
  mix: "https://picsum.photos/seed/dept-mix/600/700",
};

const MARQUEE = [
  "ZARA", "H&M", "Reserved", "Bershka", "Pull&Bear", "Mango", "Next",
  "Primark", "Lacoste", "Jack&Jones", "Stradivarius", "Nike", "Adidas",
  "Puma", "Timberland", "Ecco",
];

export default function HomePage() {
  const featured = PRODUCTS.filter((p) => p.badge).slice(0, 8);
  const newArrivals = PRODUCTS.slice().reverse().slice(0, 8);

  return (
    <div>
      {/* HERO — cosmic */}
      <section className="relative overflow-hidden cosmos-bg noise clip-slant">
        <div className="absolute inset-0 cosmos-grid opacity-30" />
        <div className="absolute inset-0">
          <ErrorBoundary fallback={null}>
            <Hero3D />
          </ErrorBoundary>
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-cosmos-aqua mb-3">
              <span className="w-8 h-px bg-cosmos-aqua" />
              {SHOP_INFO.source}
            </div>
            <div className="inline-flex items-center gap-2 mb-4 rounded-full border border-sport-lime/60 bg-sport-lime/10 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-sport-lime shadow-[0_0_28px_-4px_rgba(212,255,0,0.55)]">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
              </svg>
              Speed · Style · Stock
            </div>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95] text-white drop-shadow-[0_0_20px_rgba(168,85,247,0.45)]">
              СТОК<br />
              <span className="cosmos-text">З ЄВРОПИ.</span><br />
              У ЦІЙ ГАЛАКТИЦІ.
            </h1>
            <p className="mt-5 text-cosmos-mute max-w-md">
              Оригінальні бренди — Zara, H&M, Reserved, Bershka, Nike, Adidas. Жіночий,
              чоловічий, дитячий одяг та взуття + мікс-лоти оптом. Доставка Новою Поштою
              по всій Україні.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/new"
                className="btn-cosmos font-bold uppercase tracking-wide px-6 py-3 rounded-full animate-cosmicPulse"
              >
                Нові надходження
              </Link>
              <Link
                href="/catalog/mix"
                className="bg-cosmos-aqua hover:bg-cosmos-cyan text-cosmos-void font-bold uppercase tracking-wide px-6 py-3 rounded-full shadow-[0_0_40px_-5px_rgba(34,211,238,0.6)]"
              >
                Мікс-лоти
              </Link>
              <Link
                href="/wholesale"
                className="border border-cosmos-purple/50 text-cosmos-ink hover:border-cosmos-purple hover:bg-cosmos-purple/10 font-bold uppercase tracking-wide px-6 py-3 rounded-full"
              >
                Опт
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND MARQUEE — cosmic bar */}
      <section className="relative bg-gradient-to-r from-cosmos-void via-cosmos-deep to-cosmos-void text-white py-4 overflow-hidden border-y border-cosmos-line">
        <div className="flex gap-12 whitespace-nowrap animate-marquee w-max">
          {[...MARQUEE, ...MARQUEE].map((b, i) => (
            <span key={i} className="font-display text-2xl tracking-widest text-cosmos-ink/90">
              {b} <span className="text-cosmos-fuchsia mx-3">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* DEPARTMENTS */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between mb-6">
          <h2 className="font-display text-3xl md:text-4xl text-cosmos-ink">
            Галактика <span className="cosmos-text">відділів</span>
          </h2>
          <Link href="/brands" className="text-sm text-cosmos-aqua font-semibold hover:text-cosmos-fuchsia">
            Усі бренди →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-4">
          {DEPARTMENTS.map((d) => (
            <Link
              key={d.slug}
              href={`/catalog/${d.slug}`}
              className="group relative rounded-xl overflow-hidden aspect-[4/5] cosmos-card"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={DEPT_IMAGES[d.slug]}
                alt={d.title}
                className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-void/95 via-cosmos-deep/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-cosmos-purple/25 via-transparent to-cosmos-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-3 left-3 right-3 flex justify-between">
                <span className="text-[10px] uppercase tracking-widest text-cosmos-aqua">{d.slug}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="font-display text-white text-2xl tracking-wide drop-shadow-[0_0_14px_rgba(168,85,247,0.6)]">
                  {d.title}
                </div>
                <div className="text-cosmos-mute text-xs mt-1 group-hover:text-cosmos-fuchsia transition">
                  Відкрити каталог →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex items-baseline justify-between mb-5">
          <h2 className="font-display text-3xl md:text-4xl text-cosmos-ink">
            <span className="cosmos-text">Акції</span> та хіти
          </h2>
          <Link href="/sale" className="text-sm text-cosmos-fuchsia font-semibold hover:text-cosmos-pink">
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
          <h2 className="font-display text-3xl md:text-4xl text-cosmos-ink">
            Нові <span className="cosmos-text">надходження</span>
          </h2>
          <Link href="/new" className="text-sm text-cosmos-aqua font-semibold hover:text-cosmos-fuchsia">
            Всі →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {newArrivals.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* FEATURES — "Why Nata Stok" 6-tile strip */}
      <FeaturesStrip />

      {/* VIDEOS — TikTok live clips grid */}
      <VideosSection />

      {/* TELEGRAM / TIKTOK subscribe strip */}
      <TelegramStrip />

      {/* BENEFITS — cosmic glass cards */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { t: "100% оригінал", d: "Стокові речі з європейських магазинів. Бірки, якість.", c: "text-cosmos-fuchsia" },
            { t: "Доставка 1–2 дні", d: "Нова Пошта по всій Україні. Можлива післяплата.", c: "text-cosmos-aqua" },
            { t: "Зручна оплата", d: "Онлайн-картка, Приват/Моно або накладеним платежем.", c: "text-cosmos-gold" },
          ].map((b) => (
            <div key={b.t} className="relative overflow-hidden rounded-xl cosmos-card p-6 shadow-cosmos">
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-cosmos-purple/40 blur-3xl" />
              <div className="absolute -left-4 -bottom-4 w-24 h-24 rounded-full bg-cosmos-cyan/30 blur-3xl" />
              <div className={`font-display text-2xl ${b.c}`}>{b.t}</div>
              <p className="mt-2 text-cosmos-mute text-sm">{b.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

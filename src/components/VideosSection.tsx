import { SHOP_INFO } from "@/lib/shop-info";

type Clip = { title: string; seed: string; tag: string };

const CLIPS: Clip[] = [
  { title: "Нове надходження — жіночий одяг", seed: "tt1", tag: "NEW" },
  { title: "Огляд мікс-лоту дитячого", seed: "tt2", tag: "MIX" },
  { title: "Кросівки Nike / Adidas — розпаковка", seed: "tt3", tag: "HIT" },
  { title: "Як обрати розмір без примірки", seed: "tt4", tag: "TIPS" },
];

export function VideosSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex items-end justify-between mb-5 flex-wrap gap-3">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-cosmos-aqua mb-1">Live</div>
          <h2 className="font-display text-3xl md:text-4xl text-cosmos-ink">
            Дивіться як <span className="cosmos-text">ми працюємо</span>
          </h2>
          <p className="text-cosmos-mute text-sm mt-1">
            Щоденні огляди на TikTok {SHOP_INFO.tiktok} — реальні фото та відео товарів.
          </p>
        </div>
        <a
          href={SHOP_INFO.tiktokUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cosmos-fuchsia via-cosmos-pink to-sport-red text-white px-5 py-2.5 font-bold uppercase tracking-wide text-sm shadow-[0_0_40px_-5px_rgba(255,45,45,0.55)] hover:scale-[1.03] transition"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M19.5 7.8c-1.8 0-3.3-1.4-3.3-3.2V4h-3.1v12.4c0 1.2-1 2.2-2.2 2.2a2.2 2.2 0 1 1 0-4.4c.2 0 .4 0 .6.1V11a5.3 5.3 0 1 0 4.7 5.3V9.6c1 .7 2.2 1.1 3.5 1.1V7.8h-.2z" />
          </svg>
          Усі відео на TikTok
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {CLIPS.map((c) => (
          <a
            key={c.seed}
            href={SHOP_INFO.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-[9/16] rounded-2xl overflow-hidden cosmos-card shadow-cosmos"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://picsum.photos/seed/${c.seed}/540/960`}
              alt={c.title}
              className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cosmos-void via-cosmos-void/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-cosmos-purple/30 via-transparent to-sport-lime/20 opacity-0 group-hover:opacity-100 transition" />

            {/* play button */}
            <div className="absolute inset-0 grid place-items-center">
              <span className="w-14 h-14 grid place-items-center rounded-full bg-white/90 text-cosmos-void shadow-[0_0_30px_rgba(212,255,0,0.7)] group-hover:scale-110 transition">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </div>

            <span className="absolute top-3 left-3 inline-flex items-center bg-sport-lime text-cosmos-void text-[10px] font-bold px-2 py-1 rounded shadow-[0_0_14px_rgba(212,255,0,0.7)] uppercase tracking-wider">
              {c.tag}
            </span>

            <div className="absolute bottom-0 left-0 right-0 p-3">
              <div className="text-white font-semibold text-sm leading-tight drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">
                {c.title}
              </div>
              <div className="mt-1 text-[11px] text-cosmos-aqua uppercase tracking-widest">
                TikTok {SHOP_INFO.tiktok}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

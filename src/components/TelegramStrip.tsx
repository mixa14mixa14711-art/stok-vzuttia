import { SHOP_INFO } from "@/lib/shop-info";

export function TelegramStrip() {
  const tg = SHOP_INFO.telegram.replace("@", "");
  return (
    <section className="mx-auto max-w-6xl px-4 py-6">
      <div className="relative overflow-hidden rounded-2xl cosmos-card p-6 md:p-8 shadow-cosmos">
        <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-cosmos-aqua/30 blur-3xl" />
        <div className="absolute -left-10 -bottom-10 w-56 h-56 rounded-full bg-sport-lime/20 blur-3xl" />
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-sport-lime mb-1">Stay tuned</div>
            <h2 className="font-display text-2xl md:text-3xl text-cosmos-ink">
              Хочеш бачити <span className="cosmos-text">новинки</span> першим?
            </h2>
            <p className="text-cosmos-mute text-sm mt-1 max-w-lg">
              Підпишись на наш Telegram-канал — щоденні надходження, закриті акції та мікс-лоти.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href={`https://t.me/${tg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cosmos-aqua text-cosmos-void px-5 py-3 font-bold uppercase tracking-wide text-sm hover:bg-cosmos-cyan shadow-[0_0_35px_-5px_rgba(34,211,238,0.7)]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.8 15.2l-.4 4.1c.6 0 .8-.2 1.2-.5l2.7-2.4 5.6 4.1c1 .6 1.8.3 2-.9l3.7-17.3c.3-1.4-.5-2-1.5-1.6L1.4 8c-1.4.6-1.4 1.4-.2 1.8l5.4 1.7L18.9 4c.6-.4 1.1-.1.7.3z" />
              </svg>
              Telegram {SHOP_INFO.telegram}
            </a>
            <a
              href={SHOP_INFO.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full btn-cosmos px-5 py-3 font-bold uppercase tracking-wide text-sm"
            >
              TikTok {SHOP_INFO.tiktok}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

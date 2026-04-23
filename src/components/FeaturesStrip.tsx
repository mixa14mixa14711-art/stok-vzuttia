const FEATURES: { t: string; d: string; icon: React.ReactNode; c: string }[] = [
  {
    t: "Індивідуальний підбір",
    d: "Допоможемо з розміром, фасоном, забарвленням. Відповімо у Viber за 15 хв.",
    c: "text-cosmos-aqua",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c1.5-4 5-6 8-6s6.5 2 8 6" />
      </svg>
    ),
  },
  {
    t: "Бренди, що продаються",
    d: "Zara, H&M, Reserved, Nike, Adidas, Puma — перевірений асортимент.",
    c: "text-cosmos-fuchsia",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 7l9-4 9 4-9 4-9-4z" />
        <path d="M3 12l9 4 9-4" />
        <path d="M3 17l9 4 9-4" />
      </svg>
    ),
  },
  {
    t: "Вигідні гуртові ціни",
    d: "Мікс-лоти від 20 кг. Чим більший лот — тим нижча ціна одиниці.",
    c: "text-sport-lime",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20 7L9 18l-5-5" />
        <path d="M13 3l-2 6h5l-2 6" />
      </svg>
    ),
  },
  {
    t: "Відправка в день замовлення",
    d: "Замовлення до 14:00 — їде Новою Поштою того ж дня.",
    c: "text-sport-fire",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
      </svg>
    ),
  },
  {
    t: "Нові колекції",
    d: "Поповнення асортименту щотижня. Стежте у TikTok @natashumkiv.",
    c: "text-cosmos-gold",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polygon points="12 3 14.5 9.5 21 10.5 16 15 17.5 22 12 18.5 6.5 22 8 15 3 10.5 9.5 9.5" />
      </svg>
    ),
  },
  {
    t: "Реальні фото та відео",
    d: "Ми знімаємо товар наживо — без «відретушованих» стоків.",
    c: "text-cosmos-pink",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="6" width="14" height="12" rx="2" />
        <path d="M17 10l5-3v10l-5-3z" />
      </svg>
    ),
  },
];

export function FeaturesStrip() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-6">
        <div className="text-xs uppercase tracking-[0.3em] text-sport-lime mb-1">Why us</div>
        <h2 className="font-display text-3xl md:text-4xl text-cosmos-ink">
          Чому обирають <span className="cosmos-text">Nata Stok</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {FEATURES.map((f) => (
          <div
            key={f.t}
            className="relative overflow-hidden rounded-xl cosmos-card p-5 group transition hover:shadow-cosmos"
          >
            <div
              className={`${f.c} w-12 h-12 rounded-xl grid place-items-center bg-cosmos-void/60 border border-current/40 shadow-[0_0_20px_-5px_currentColor]`}
            >
              {f.icon}
            </div>
            <div className="mt-4 font-display text-xl text-cosmos-ink">{f.t}</div>
            <p className="mt-1 text-cosmos-mute text-sm leading-relaxed">{f.d}</p>
            <div className="absolute -right-10 -top-10 w-28 h-28 rounded-full bg-cosmos-purple/25 blur-3xl opacity-0 group-hover:opacity-100 transition" />
          </div>
        ))}
      </div>
    </section>
  );
}

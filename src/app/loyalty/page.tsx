import Link from "next/link";

export const metadata = {
  title: "Програма лояльності — Nata Stok",
  description:
    "Накопичувальні знижки для постійних клієнтів Nata Stok. Чим більше замовлень — тим більша персональна знижка.",
};

const TIERS = [
  { name: "Start", color: "from-neutral-200 to-neutral-100", accent: "text-neutral-700", from: 0, discount: 0 },
  { name: "Silver", color: "from-sport-blue/30 to-sport-blue/10", accent: "text-sport-blueDeep", from: 3000, discount: 3 },
  { name: "Gold", color: "from-amber-200 to-yellow-100", accent: "text-brand-500", from: 8000, discount: 7 },
  { name: "Platinum", color: "from-rose-200 to-red-100", accent: "text-sport-red", from: 20000, discount: 12 },
];

const PERKS = [
  "Кешбек 1% бонусами на кожне замовлення",
  "Закритий доступ до розпродажів за 24 години до старту",
  "Подарунок до дня народження (—10% на будь-яке замовлення місяця)",
  "Пріоритетна обробка замовлення та безкоштовна упаковка",
  "Персональний менеджер у Viber для Gold / Platinum",
];

export default function LoyaltyPage() {
  return (
    <div className="bg-sport-bg text-sport-ink">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-sport-blue mb-3">
          <span className="w-8 h-px bg-sport-blue" /> Клуб Nata Stok
        </div>
        <h1 className="font-display text-4xl md:text-5xl uppercase tracking-wide">
          Програма <span className="text-sport-red">лояльності</span>
        </h1>
        <p className="text-sport-mute mt-3 max-w-2xl">
          Чим більше Ви купуєте — тим більша персональна знижка. Статус зберігається назавжди після
          досягнення: Ваша знижка нікуди не зникне.
        </p>

        <div className="mt-8 grid md:grid-cols-4 gap-4">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className="relative rounded-xl border border-sport-line bg-sport-surface p-5 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${t.color} opacity-10`} />
              <div className="relative">
                <div className={`font-display text-2xl uppercase tracking-wide ${t.accent}`}>
                  {t.name}
                </div>
                <div className="mt-2 text-4xl font-display text-sport-ink">
                  —{t.discount}
                  <span className="text-2xl">%</span>
                </div>
                <div className="mt-1 text-sport-mute text-sm">
                  {t.from === 0 ? "Стартовий рівень" : `Від ${t.from.toLocaleString("uk-UA")} ₴ замовлень`}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-[1fr_auto] gap-6 items-center rounded-xl border border-sport-line bg-sport-surface p-6">
          <div>
            <h2 className="font-display text-2xl uppercase tracking-wide mb-3">Переваги учасників</h2>
            <ul className="space-y-2 text-sport-ink/90">
              {PERKS.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-sport-blue mt-2" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded bg-sport-blue text-sport-bg font-bold uppercase tracking-wide px-6 py-3 hover:brightness-110"
            >
              Приєднатись
            </Link>
            <Link
              href="/account"
              className="inline-flex items-center justify-center rounded border border-sport-line text-sport-ink px-6 py-3 hover:border-sport-blue"
            >
              Мій статус
            </Link>
          </div>
        </div>

        <div className="mt-8 text-xs text-sport-mute/80">
          Знижки не підсумовуються з акціями; застосовуються автоматично при оформленні замовлення в
          особистому кабінеті. Сума замовлень рахується за 12 останніх місяців.
        </div>
      </div>
    </div>
  );
}

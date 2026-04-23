import Link from "next/link";
import { SHOP_INFO } from "@/lib/shop-info";

export const metadata = {
  title: "Часті питання (FAQ) — Nata Stok",
  description: "Відповіді на популярні запитання про сток-одяг, доставку, оплату, розміри, повернення та опт у Nata Stok.",
};

const FAQS: { q: string; a: React.ReactNode; cat: string }[] = [
  {
    cat: "Про товар",
    q: "Чи це оригінальні брендові речі?",
    a: (
      <>Так, 100% оригінал. Усі позиції — це стокові залишки з офіційних європейських магазинів (Zara, H&M, Reserved, Bershka, Pull&Bear, Next, Primark, Nike, Adidas, Puma тощо). Бірки, етикетки, якість — без підробок.</>
    ),
  },
  {
    cat: "Про товар",
    q: "Що означає «сток»?",
    a: (
      <>Сток — це нові, не ношені речі минулих колекцій, які не продалися у сезон і йдуть з офіційних складів з великою знижкою. На відміну від «секонд-хенду» — усе нове, з бірками.</>
    ),
  },
  {
    cat: "Про товар",
    q: "Чи можу я замовити кілька розмірів одного товару?",
    a: <>Так. Якщо потрібно приміряти — додайте позиції з різними розмірами у кошик. Під час оформлення вкажіть у коментарі, які з них хочете залишити.</>,
  },
  {
    cat: "Доставка",
    q: "Скільки триває доставка?",
    a: (
      <>Відправляємо у день замовлення (якщо оформили до 14:00) Новою Поштою. Зазвичай 1–2 дні по Україні. Детальніше на <Link href="/delivery" className="text-cosmos-aqua hover:text-cosmos-fuchsia">/delivery</Link>.</>
    ),
  },
  {
    cat: "Доставка",
    q: "Чи є самовивіз у Києві?",
    a: <>Так, за попереднім узгодженням. Напишіть нам у Viber або Telegram — узгодимо адресу та час.</>,
  },
  {
    cat: "Оплата",
    q: "Які способи оплати?",
    a: (
      <>
        <ul className="list-disc pl-5 space-y-1">
          <li>Онлайн-картка Visa / Mastercard (3-D Secure)</li>
          <li>Переказ на картку Приват/Моно</li>
          <li>Накладений платіж (Нова Пошта) — +20 ₴ комісія Нової Пошти</li>
        </ul>
      </>
    ),
  },
  {
    cat: "Оплата",
    q: "Чи безпечна оплата карткою?",
    a: <>Так. Ми не зберігаємо повні реквізити картки — у нашу базу записується тільки маска `•••• XXXX` та статус платежу. Транзакція обробляється за стандартом PCI DSS з 3-D Secure підтвердженням.</>,
  },
  {
    cat: "Розміри",
    q: "Як дізнатися свій розмір?",
    a: (
      <>Скористайтеся <Link href="/size-guide" className="text-cosmos-aqua hover:text-cosmos-fuchsia">онлайн-калькулятором</Link> — введіть ОГ/ОТ/ОС або довжину стопи, і ми покажемо EU/UA/US/INTL.</>
    ),
  },
  {
    cat: "Повернення",
    q: "Чи можна повернути або обміняти товар?",
    a: (
      <>Так, протягом 14 днів згідно ЗУ «Про захист прав споживачів». Деталі на <Link href="/returns" className="text-cosmos-aqua hover:text-cosmos-fuchsia">/returns</Link>.</>
    ),
  },
  {
    cat: "Опт",
    q: "Чи є опт / великий гурт?",
    a: (
      <>Так. Мікс-лоти (жіночий / чоловічий / дитячий / взуття) від 20 кг. Ціни і умови — <Link href="/wholesale" className="text-cosmos-aqua hover:text-cosmos-fuchsia">/wholesale</Link> або напишіть у Viber.</>
    ),
  },
  {
    cat: "Опт",
    q: "Чи можу я зайти і побачити товар наживо?",
    a: <>Так, для оптових клієнтів — за попереднім записом. Домовимось у Viber/Telegram.</>,
  },
  {
    cat: "Акції",
    q: "Чи є програма лояльності?",
    a: (
      <>Так, накопичувальна знижка 0 → 3% → 7% → 12% залежно від суми покупок. Деталі: <Link href="/loyalty" className="text-cosmos-aqua hover:text-cosmos-fuchsia">/loyalty</Link>.</>
    ),
  },
  {
    cat: "Контакти",
    q: "Як швидко відповідаєте?",
    a: (
      <>
        У робочі години (Пн–Нд 10:00–20:00) — впродовж 15 хв. Швидше за все через{" "}
        <a href={`viber://chat?number=${SHOP_INFO.viber}`} className="text-cosmos-aqua hover:text-cosmos-fuchsia">
          Viber
        </a>{" "}
        або{" "}
        <a href={`tel:${SHOP_INFO.phoneDigits}`} className="text-cosmos-aqua hover:text-cosmos-fuchsia">
          {SHOP_INFO.phone}
        </a>
        .
      </>
    ),
  },
];

const CATEGORIES = Array.from(new Set(FAQS.map((f) => f.cat)));

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="text-xs uppercase tracking-[0.3em] text-cosmos-aqua mb-2">FAQ</div>
      <h1 className="font-display text-3xl md:text-5xl uppercase tracking-wide text-cosmos-ink">
        Часті <span className="cosmos-text">питання</span>
      </h1>
      <p className="text-cosmos-mute mt-2">
        Не знайшли відповіді? Натисніть «Передзвоніть мені» у кутку екрану або напишіть у Viber.
      </p>

      <div className="mt-8 space-y-8">
        {CATEGORIES.map((cat) => (
          <section key={cat}>
            <h2 className="font-display text-xl uppercase tracking-widest text-cosmos-fuchsia mb-3">
              {cat}
            </h2>
            <div className="space-y-2">
              {FAQS.filter((f) => f.cat === cat).map((f, i) => (
                <details
                  key={i}
                  className="group cosmos-card rounded-xl p-4 open:shadow-cosmos"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-3 list-none">
                    <span className="font-medium text-cosmos-ink">{f.q}</span>
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-cosmos-purple/25 text-cosmos-fuchsia transition-transform group-open:rotate-45">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <div className="mt-3 text-cosmos-mute text-sm leading-relaxed">{f.a}</div>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 rounded-2xl cosmos-card p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-cosmos">
        <div>
          <div className="font-display text-xl text-cosmos-ink">Не знайшли відповідь?</div>
          <div className="text-cosmos-mute text-sm">Напишіть нам — відповімо протягом 15 хв.</div>
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href={`viber://chat?number=${SHOP_INFO.viber}`}
            className="rounded-full px-4 py-2 font-bold uppercase tracking-wide text-sm btn-cosmos"
          >
            Viber
          </a>
          <a
            href={`tel:${SHOP_INFO.phoneDigits}`}
            className="rounded-full px-4 py-2 font-bold uppercase tracking-wide text-sm bg-cosmos-aqua text-cosmos-void hover:bg-cosmos-cyan"
          >
            {SHOP_INFO.phone}
          </a>
        </div>
      </div>
    </div>
  );
}

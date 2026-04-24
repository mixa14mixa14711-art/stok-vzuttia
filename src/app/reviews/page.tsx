import { SHOP_INFO } from "@/lib/shop-info";

export const metadata = {
  title: "Відгуки клієнтів — Nata Stok",
  description: "Реальні відгуки покупців про товари та сервіс Nata Stok.",
};

type Review = {
  name: string;
  city: string;
  rating: number;
  date: string;
  text: string;
};

const REVIEWS: Review[] = [
  {
    name: "Ольга К.",
    city: "Київ",
    rating: 5,
    date: "12.04.2025",
    text: "Замовляла жакет Zara і сукню H&M. Речі оригінал, розмір як у таблиці. Дівчина підтвердила замовлення через 10 хв, наступного дня вже була у відділенні Нової Пошти. Буду замовляти ще.",
  },
  {
    name: "Андрій П.",
    city: "Львів",
    rating: 5,
    date: "03.04.2025",
    text: "Брав бомбер Next і кросівки Adidas. Якість — клас, все нове з ярликами. Сподобалось, що прорахували розмір по моїх замірах — взуття сіло ідеально.",
  },
  {
    name: "Тетяна М.",
    city: "Дніпро",
    rating: 5,
    date: "28.03.2025",
    text: "Мікс дитячий (10 одиниць) за 1800 грн — це просто знахідка! У дитини одразу гардероб на весну. Усі речі чисті, випрані, з бірками. Дякую!",
  },
  {
    name: "Марія В.",
    city: "Харків",
    rating: 4,
    date: "21.03.2025",
    text: "Пальто Reserved — супер. Одна зірка знята за те, що хотіла іншого кольору, але на сайті заглушки. Дівчата запропонували іншу модель і надіслали фото — дякую за клієнтоорієнтованість.",
  },
  {
    name: "Ігор С.",
    city: "Одеса",
    rating: 5,
    date: "14.03.2025",
    text: "Опт, 2 мішки — беру щотижня. Стабільна якість, адекватні ціни, завжди на звʼязку у Viber. Рекомендую колегам-продавцям.",
  },
  {
    name: "Наталія Д.",
    city: "Вінниця",
    rating: 5,
    date: "08.03.2025",
    text: "Замовила постільну білизну Zara Home і плед. Якість просто вау, у магазині таке було б вдвічі дорожче. Упаковане було акуратно.",
  },
  {
    name: "Олена Т.",
    city: "Запоріжжя",
    rating: 5,
    date: "27.02.2025",
    text: "Легінси Nike Pro — як у бутіку, але втричі дешевше. Оригінал, усі бірки на місці. Буду замовляти чоловіку і дітям.",
  },
  {
    name: "Роман Л.",
    city: "Тернопіль",
    rating: 4,
    date: "15.02.2025",
    text: "Сорочка Zara Oxford — відмінна якість. Довелося почекати 3 дні замість 2, бо була черга у відділенні НП — до магазину питань немає.",
  },
];

const avg = (REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length).toFixed(1);

export default function ReviewsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
        <div>
          <h1 className="font-display text-3xl md:text-4xl uppercase tracking-wide">
            Відгуки <span className="text-sport-red">клієнтів</span>
          </h1>
          <p className="text-neutral-600 mt-2">
            Реальні історії покупців. Більше — у TikTok та на нашій сторінці в Instagram.
          </p>
        </div>
        <div className="rounded-lg border border-neutral-200 bg-white px-5 py-3 text-center">
          <div className="text-3xl font-display text-sport-blueDeep">{avg}</div>
          <div className="text-xs text-neutral-500 uppercase tracking-wide">
            Середній рейтинг · {REVIEWS.length} відгуків
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {REVIEWS.map((r, i) => (
          <article
            key={i}
            className="rounded-lg border border-neutral-200 bg-white p-5 hover:border-sport-blue transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">{r.name}</div>
                <div className="text-xs text-neutral-500">
                  {r.city} · {r.date}
                </div>
              </div>
              <Stars rating={r.rating} />
            </div>
            <p className="mt-3 text-neutral-700 text-sm leading-relaxed">{r.text}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-neutral-200 bg-neutral-50 p-6 text-center">
        <h2 className="font-display text-xl uppercase">Поділіться враженнями</h2>
        <p className="text-neutral-600 mt-2">
          Надішліть відгук у Viber або відмітьте нас у TikTok —{" "}
          <a
            href={SHOP_INFO.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sport-blueDeep font-semibold"
          >
            {SHOP_INFO.tiktok}
          </a>
        </p>
        <div className="mt-4 flex justify-center gap-3">
          <a
            href={`viber://chat?number=${SHOP_INFO.viber}`}
            className="inline-flex items-center rounded bg-sport-blueDeep text-white font-bold uppercase tracking-wide px-5 py-2.5 hover:brightness-110"
          >
            Написати у Viber
          </a>
        </div>
      </div>
    </div>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="text-sport-red" aria-label={`${rating} з 5`}>
      {"★".repeat(rating)}
      <span className="text-neutral-300">{"★".repeat(5 - rating)}</span>
    </div>
  );
}

import Link from "next/link";
import { SHOP_INFO } from "@/lib/shop-info";

export const metadata = {
  title: "Обмін та повернення — Nata Stok",
  description:
    "Умови обміну та повернення товару. 14 днів на повернення згідно з ЗУ «Про захист прав споживачів».",
};

export default function ReturnsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="font-display text-3xl md:text-4xl uppercase tracking-wide">
        Обмін та <span className="text-sport-red">повернення</span>
      </h1>
      <p className="text-neutral-600 mt-3">
        Ми хочемо, щоб Ви залишилися задоволеними. Якщо товар не підійшов — його можна обміняти
        або повернути протягом <b>14 днів</b> з моменту отримання (ст. 9 ЗУ «Про захист прав споживачів»).
      </p>

      <Section title="Умови повернення">
        <ul className="list-disc pl-5 space-y-2 text-neutral-700">
          <li>Товар не був у використанні, збережений товарний вигляд, ярлики, етикетки.</li>
          <li>Повернення протягом 14 календарних днів з дня отримання.</li>
          <li>Обов’язково збережіть чек або експрес-накладну Нової Пошти.</li>
          <li>Не підлягають обміну: нижня білизна, купальники, шкарпетки, засоби гігієни.</li>
        </ul>
      </Section>

      <Section title="Як повернути товар — 3 кроки">
        <ol className="list-decimal pl-5 space-y-2 text-neutral-700">
          <li>
            Зателефонуйте або напишіть нам у Viber:{" "}
            <a href={`tel:${SHOP_INFO.phoneDigits}`} className="text-sport-blueDeep font-semibold">
              {SHOP_INFO.phone}
            </a>
            .
          </li>
          <li>
            Заповніть заяву на повернення (ми надішлемо шаблон) і запакуйте товар у ту саму
            упаковку.
          </li>
          <li>
            Відправте Новою Поштою на адресу, яку ми вкажемо. Кошти повертаємо протягом 3 робочих
            днів з дня отримання посилки.
          </li>
        </ol>
      </Section>

      <Section title="Обмін розміру">
        <p className="text-neutral-700">
          Якщо не підійшов розмір — ми безкоштовно відправимо інший (за наявності). Різниця в ціні
          оплачується додатково. Допоможемо вибрати розмір —{" "}
          <Link href="/size-guide" className="text-sport-blueDeep font-semibold underline">
            скористайтесь калькулятором розмірів
          </Link>
          .
        </p>
      </Section>

      <Section title="Гроші">
        <p className="text-neutral-700">
          Повернення коштів — на ту саму картку / реквізити, з яких була проведена оплата. Строк
          зарахування на картку — від 1 до 5 банківських днів (залежить від банку).
        </p>
      </Section>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href={`viber://chat?number=${SHOP_INFO.viber}`}
          className="inline-flex items-center rounded bg-sport-blueDeep text-white font-bold uppercase tracking-wide px-5 py-2.5 hover:brightness-110"
        >
          Viber: {SHOP_INFO.phone}
        </a>
        <a
          href={`tel:${SHOP_INFO.phoneDigits}`}
          className="inline-flex items-center rounded border border-neutral-300 px-5 py-2.5 hover:border-sport-blueDeep"
        >
          Зателефонувати
        </a>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="font-display text-xl uppercase tracking-wide mb-3">{title}</h2>
      {children}
    </section>
  );
}

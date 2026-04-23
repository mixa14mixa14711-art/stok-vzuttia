import { SHOP_INFO } from "@/lib/shop-info";

export const metadata = { title: "Доставка і оплата" };

export default function DeliveryPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 prose prose-neutral">
      <h1 className="text-2xl md:text-3xl font-bold">Доставка і оплата</h1>

      <h2 className="mt-6 text-xl font-semibold">Доставка</h2>
      <ul className="mt-2 space-y-1 list-disc pl-5">
        {SHOP_INFO.delivery.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
      <p className="mt-3 text-neutral-700">
        Відправлення виконуються <strong>протягом 1 робочого дня</strong> після підтвердження
        замовлення. Термін доставки Новою Поштою — зазвичай 1–2 робочі дні.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Оплата</h2>
      <ul className="mt-2 space-y-1 list-disc pl-5">
        {SHOP_INFO.payment.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <p className="mt-3 text-neutral-700">
        При післяплаті стягується комісія Нової Пошти (2% + 20 грн).
      </p>

      <h2 className="mt-8 text-xl font-semibold">Обмін та повернення</h2>
      <p className="mt-2 text-neutral-700">
        Ви можете обміняти або повернути товар протягом <strong>14 днів</strong> з моменту отримання, за
        умови збереження товарного вигляду, бірок та оригінальної упаковки. Доставку при поверненні
        з причини «не підійшов розмір» оплачує покупець.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Питання?</h2>
      <p className="mt-2 text-neutral-700">
        Напишіть нам у Telegram {SHOP_INFO.telegram} або телефонуйте {SHOP_INFO.phone}.
      </p>
    </div>
  );
}

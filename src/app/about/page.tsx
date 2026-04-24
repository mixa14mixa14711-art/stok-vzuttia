import { SHOP_INFO } from "@/lib/shop-info";

export const metadata = { title: "Про нас" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 prose prose-neutral">
      <h1 className="text-2xl md:text-3xl font-bold">Про нас</h1>
      <p className="mt-4 text-neutral-700">
        {SHOP_INFO.name} — магазин стокового одягу та взуття з Європи. Ми відбираємо оригінальні
        речі популярних брендів (Zara, H&M, Reserved, Next, Primark, Nike, Adidas та інших) і
        пропонуємо їх за цінами, значно нижчими за магазинні.
      </p>
      <p className="mt-3 text-neutral-700">
        Нас можна знайти на TikTok — {SHOP_INFO.source}. Там ви побачите живі огляди товарів, нові
        надходження та акції. На сайті можна зручно замовити те, що сподобалось, із доставкою по
        всій Україні.
      </p>
      <ul className="mt-5 list-disc pl-5 space-y-1 text-neutral-700">
        <li>Тільки оригінали — без підробок.</li>
        <li>Прозора ціна і швидка відправка.</li>
        <li>Жіночий, чоловічий, дитячий відділи — одяг і взуття.</li>
        <li>Особистий менеджер у Telegram.</li>
      </ul>
    </div>
  );
}

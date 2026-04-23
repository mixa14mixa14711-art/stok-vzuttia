import { SHOP_INFO } from "@/lib/shop-info";

export const metadata = { title: "Контакти" };

export default function ContactsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-bold">Контакти</h1>
      <p className="text-neutral-600 mt-2">
        Ми у соцмережах та на зв&apos;язку щодня. Пишіть у Viber, Telegram або TikTok.
      </p>

      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <Card
          title="Телефон"
          value={SHOP_INFO.phone}
          href={`tel:${SHOP_INFO.phoneDigits}`}
        />
        <Card
          title="Viber"
          value={SHOP_INFO.phone}
          href={`viber://chat?number=${SHOP_INFO.viber}`}
        />
        <Card
          title="TikTok"
          value={SHOP_INFO.tiktok}
          href={SHOP_INFO.tiktokUrl}
        />
        <Card
          title="Telegram"
          value={SHOP_INFO.telegram}
          href={`https://t.me/${SHOP_INFO.telegram.replace("@", "")}`}
        />
        <Card
          title="Instagram"
          value={`@${SHOP_INFO.instagram}`}
          href={`https://instagram.com/${SHOP_INFO.instagram}`}
        />
        <Card title="Email" value={SHOP_INFO.email} href={`mailto:${SHOP_INFO.email}`} />
        <Card title="Графік роботи" value={SHOP_INFO.workHours} />
        <Card title="Місто" value={SHOP_INFO.city} />
      </div>
    </div>
  );
}

function Card({ title, value, href }: { title: string; value: string; href?: string }) {
  const Inner = (
    <div className="border border-neutral-200 rounded-lg bg-white p-5 hover:border-brand-400 transition-colors">
      <div className="text-xs uppercase text-neutral-500 tracking-wide">{title}</div>
      <div className="mt-1 font-medium">{value}</div>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">{Inner}</a>
  ) : (
    Inner
  );
}

import { SHOP_INFO } from "@/lib/shop-info";
import { StoreSection } from "@/components/StoreSection";

export const metadata = { title: "Контакти" };

export default function ContactsPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="text-xs uppercase tracking-[0.3em] text-cosmos-aqua mb-2">Contacts</div>
        <h1 className="font-display text-3xl md:text-5xl text-cosmos-ink">
          Як з нами <span className="cosmos-text">звʼязатись</span>
        </h1>
        <p className="text-cosmos-mute mt-2 max-w-xl">
          Ми у соцмережах та на звʼязку щодня. Пишіть у Viber, Telegram або TikTok — відповімо впродовж 15 хв.
        </p>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card title="Телефон" value={SHOP_INFO.phone} href={`tel:${SHOP_INFO.phoneDigits}`} />
          <Card title="Viber" value={SHOP_INFO.phone} href={`viber://chat?number=${SHOP_INFO.viber}`} />
          <Card title="TikTok" value={SHOP_INFO.tiktok} href={SHOP_INFO.tiktokUrl} />
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
          <Card
            title="Магазин (офлайн)"
            value={`${SHOP_INFO.store.city}, ${SHOP_INFO.store.address}`}
          />
          <Card title="Доставка" value="Нова Пошта по всій Україні" />
        </div>
      </div>

      <StoreSection />
    </>
  );
}

function Card({ title, value, href }: { title: string; value: string; href?: string }) {
  const Inner = (
    <div className="rounded-xl cosmos-card p-5 transition hover:shadow-cosmos">
      <div className="text-xs uppercase text-cosmos-aqua tracking-[0.2em]">{title}</div>
      <div className="mt-1 font-display text-xl text-cosmos-ink">{value}</div>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {Inner}
    </a>
  ) : (
    Inner
  );
}

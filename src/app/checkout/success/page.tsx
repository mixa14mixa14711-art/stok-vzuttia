import Link from "next/link";

export default function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: { order?: string };
}) {
  return (
    <div className="mx-auto max-w-xl px-4 py-16 text-center">
      <div className="text-5xl">🎉</div>
      <h1 className="mt-3 text-2xl md:text-3xl font-bold">Дякуємо за замовлення!</h1>
      <p className="mt-3 text-neutral-700">
        Ваше замовлення прийнято. Менеджер зв&apos;яжеться з вами найближчим часом для підтвердження.
      </p>
      {searchParams.order && (
        <p className="mt-2 text-sm text-neutral-500">
          Номер замовлення: <span className="font-mono">{searchParams.order}</span>
        </p>
      )}
      <div className="mt-6 flex gap-3 justify-center">
        <Link href="/" className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded">
          На головну
        </Link>
        <Link
          href="/account"
          className="border border-brand-600 text-brand-700 hover:bg-brand-50 px-5 py-2.5 rounded"
        >
          Мої замовлення
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";
import { getAllBrands, getProductsByBrand } from "@/lib/products";

export const metadata = { title: "Бренди" };

export default function BrandsPage() {
  const brands = getAllBrands();
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <nav className="text-sm text-neutral-500 mb-2">
        <Link href="/" className="hover:underline">Головна</Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-700">Бренди</span>
      </nav>
      <h1 className="text-2xl md:text-3xl font-bold">Бренди</h1>
      <p className="mt-2 text-neutral-600">
        Всі стокові бренди, що є у продажу. Натисніть на бренд, щоб побачити його товари.
      </p>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {brands.map((b) => {
          const count = getProductsByBrand(b).length;
          return (
            <Link
              key={b}
              href={`/brands/${encodeURIComponent(b)}`}
              className="border border-neutral-200 bg-white rounded-lg p-4 hover:border-brand-400 transition-colors"
            >
              <div className="font-semibold">{b}</div>
              <div className="text-xs text-neutral-500 mt-1">{count} товар(ів)</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

import Link from "next/link";
import { getSaleProducts } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const metadata = { title: "Акції" };

export default function SalePage() {
  const products = getSaleProducts();
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <nav className="text-sm text-neutral-500 mb-2">
        <Link href="/" className="hover:underline">Головна</Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-700">Акції</span>
      </nav>
      <h1 className="text-2xl md:text-3xl font-bold">Акції та знижки</h1>
      <p className="mt-2 text-neutral-600">Усі товари, на які зараз діє знижка від прайсу.</p>

      {products.length === 0 ? (
        <div className="mt-10 text-center text-neutral-500">Акційних позицій наразі немає.</div>
      ) : (
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}

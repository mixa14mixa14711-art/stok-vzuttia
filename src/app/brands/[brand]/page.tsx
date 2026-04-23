import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllBrands, getProductsByBrand } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export function generateStaticParams() {
  return getAllBrands().map((b) => ({ brand: encodeURIComponent(b) }));
}

export default function BrandPage({ params }: { params: { brand: string } }) {
  const brand = decodeURIComponent(params.brand);
  const products = getProductsByBrand(brand);
  if (products.length === 0) return notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <nav className="text-sm text-neutral-500 mb-2">
        <Link href="/" className="hover:underline">Головна</Link>
        <span className="mx-2">/</span>
        <Link href="/brands" className="hover:underline">Бренди</Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-700">{brand}</span>
      </nav>
      <h1 className="text-2xl md:text-3xl font-bold">{brand}</h1>
      <p className="mt-1 text-neutral-600 text-sm">{products.length} товар(ів) у наявності</p>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

import { notFound } from "next/navigation";
import Link from "next/link";
import {
  CATEGORIES,
  DEPARTMENTS,
  getProductsByDepartment,
  type Department,
} from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export function generateStaticParams() {
  return DEPARTMENTS.map((d) => ({ department: d.slug }));
}

export default function DepartmentPage({
  params,
  searchParams,
}: {
  params: { department: string };
  searchParams: { category?: string };
}) {
  const dep = DEPARTMENTS.find((d) => d.slug === params.department);
  if (!dep) return notFound();

  const allProducts = getProductsByDepartment(dep.slug as Department);
  const activeCategory = searchParams.category;
  const products = activeCategory
    ? allProducts.filter((p) => p.category === activeCategory)
    : allProducts;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <nav className="text-sm text-neutral-500 mb-2">
        <Link href="/" className="hover:underline">Головна</Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-700">{dep.title}</span>
      </nav>
      <h1 className="text-2xl md:text-3xl font-bold">{dep.title}</h1>

      <div className="mt-4 flex flex-wrap gap-2">
        <Link
          href={`/catalog/${dep.slug}`}
          className={`px-3 py-1.5 rounded-full text-sm border ${
            !activeCategory
              ? "bg-brand-600 text-white border-brand-600"
              : "bg-white border-neutral-300 hover:border-brand-400"
          }`}
        >
          Усі
        </Link>
        {dep.categories.map((c) => (
          <Link
            key={c}
            href={`/catalog/${dep.slug}?category=${c}`}
            className={`px-3 py-1.5 rounded-full text-sm border ${
              activeCategory === c
                ? "bg-brand-600 text-white border-brand-600"
                : "bg-white border-neutral-300 hover:border-brand-400"
            }`}
          >
            {CATEGORIES[c].title}
          </Link>
        ))}
      </div>

      {products.length === 0 ? (
        <div className="mt-10 text-center text-neutral-500">
          У цій категорії поки немає товарів.
        </div>
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

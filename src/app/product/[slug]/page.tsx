import { notFound } from "next/navigation";
import Link from "next/link";
import {
  CATEGORIES,
  PRODUCTS,
  formatUAH,
  getProductBySlug,
  getProductsByCategory,
} from "@/lib/products";
import { AddToCartForm } from "@/components/AddToCartForm";
import { ProductCard } from "@/components/ProductCard";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) return notFound();

  const category = CATEGORIES[product.category];
  const related = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <nav className="text-sm text-neutral-500 mb-4">
        <Link href="/" className="hover:underline">Головна</Link>
        <span className="mx-2">/</span>
        <Link href={`/catalog/${category.department}`} className="hover:underline">
          {category.title}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-700">{product.title}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-3">
          {product.images.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={src}
              alt={`${product.title} — фото ${i + 1}`}
              className="w-full rounded-lg object-cover aspect-[4/5] bg-neutral-100"
            />
          ))}
        </div>

        <div>
          <div className="text-xs uppercase tracking-wide text-neutral-500">{product.brand}</div>
          <h1 className="text-2xl md:text-3xl font-bold mt-1">{product.title}</h1>

          <div className="mt-3 flex items-baseline gap-3">
            <span className="text-2xl font-bold text-brand-700">{formatUAH(product.price)}</span>
            {product.oldPrice && (
              <span className="line-through text-neutral-400">{formatUAH(product.oldPrice)}</span>
            )}
            {product.badge && (
              <span className="inline-flex items-center bg-brand-100 text-brand-700 text-xs font-semibold px-2 py-0.5 rounded">
                {product.badge}
              </span>
            )}
          </div>

          <p className="mt-4 text-neutral-700 leading-relaxed">{product.description}</p>

          <AddToCartForm product={product} />

          <div className="mt-8 space-y-2 text-sm text-neutral-600 border-t pt-5">
            <div>🚚 Відправлення Новою Поштою протягом 1 робочого дня.</div>
            <div>💳 Передоплата на карту або післяплата.</div>
            <div>↩️ Обмін / повернення — 14 днів за умови збереження товарного вигляду.</div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="text-xl font-bold mb-5">Схожі товари</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

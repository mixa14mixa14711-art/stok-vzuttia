import Link from "next/link";
import { formatUAH, type Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block rounded-lg border border-neutral-200 overflow-hidden bg-white hover:shadow-md transition-shadow"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
          loading="lazy"
        />
        {product.badge && (
          <span className="absolute top-2 left-2 inline-flex items-center bg-brand-600 text-white text-xs font-semibold px-2 py-1 rounded">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-3">
        <div className="text-xs text-neutral-500 uppercase tracking-wide">{product.brand}</div>
        <div className="font-medium text-sm line-clamp-2 mt-0.5 min-h-[2.5rem]">{product.title}</div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="font-bold text-brand-700">{formatUAH(product.price)}</span>
          {product.oldPrice && (
            <span className="text-xs line-through text-neutral-400">{formatUAH(product.oldPrice)}</span>
          )}
        </div>
      </div>
    </Link>
  );
}

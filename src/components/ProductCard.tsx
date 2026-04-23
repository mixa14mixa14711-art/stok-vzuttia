import Link from "next/link";
import { formatUAH, type Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block rounded-xl overflow-hidden cosmos-card transition-all hover:shadow-cosmos"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-cosmos-deep">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-full object-cover opacity-90 group-hover:scale-[1.04] group-hover:opacity-100 transition-all duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cosmos-void/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition" />
        {product.badge && (
          <span className="absolute top-2 left-2 inline-flex items-center bg-gradient-to-r from-cosmos-fuchsia to-cosmos-pink text-white text-xs font-bold px-2 py-1 rounded shadow-[0_0_14px_rgba(217,70,239,0.6)]">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-3">
        <div className="text-[11px] text-cosmos-aqua uppercase tracking-widest">{product.brand}</div>
        <div className="font-medium text-sm text-cosmos-ink line-clamp-2 mt-0.5 min-h-[2.5rem]">
          {product.title}
        </div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="font-display text-lg text-cosmos-fuchsia">{formatUAH(product.price)}</span>
          {product.oldPrice && (
            <span className="text-xs line-through text-cosmos-mute/70">
              {formatUAH(product.oldPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

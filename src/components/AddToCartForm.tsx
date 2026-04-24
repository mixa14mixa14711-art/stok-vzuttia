"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "./CartProvider";
import type { Product } from "@/lib/products";

export function AddToCartForm({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [size, setSize] = useState<string>(product.sizes[0] ?? "");
  const [added, setAdded] = useState(false);
  const router = useRouter();

  const handleAdd = () => {
    addItem({
      productId: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      image: product.images[0],
      size: size || undefined,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addItem({
      productId: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      image: product.images[0],
      size: size || undefined,
    });
    router.push("/checkout");
  };

  return (
    <div className="mt-4 space-y-4">
      {product.sizes.length > 0 && (
        <div>
          <div className="text-sm font-medium mb-2">Розмір:</div>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSize(s)}
                className={`px-3 py-2 rounded border text-sm transition-colors ${
                  size === s
                    ? "border-brand-600 bg-brand-600 text-white"
                    : "border-neutral-300 hover:border-brand-400"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleAdd}
          className="flex-1 min-w-[180px] bg-brand-600 hover:bg-brand-700 text-white font-medium px-6 py-3 rounded"
        >
          {added ? "Додано ✓" : "Додати в кошик"}
        </button>
        <button
          type="button"
          onClick={handleBuyNow}
          className="flex-1 min-w-[180px] border border-brand-600 text-brand-700 hover:bg-brand-50 font-medium px-6 py-3 rounded"
        >
          Купити зараз
        </button>
      </div>
    </div>
  );
}

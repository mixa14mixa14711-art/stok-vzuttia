"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type CartItem = {
  productId: string;
  slug: string;
  title: string;
  price: number;
  image: string;
  size?: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  total: number;
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  updateQuantity: (productId: string, size: string | undefined, quantity: number) => void;
  removeItem: (productId: string, size: string | undefined) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "stok-vzuttia-cart-v1";

function keyOf(productId: string, size: string | undefined) {
  return `${productId}::${size ?? ""}`;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items, hydrated]);

  const addItem: CartContextValue["addItem"] = useCallback((item, quantity = 1) => {
    setItems((prev) => {
      const k = keyOf(item.productId, item.size);
      const existing = prev.find((p) => keyOf(p.productId, p.size) === k);
      if (existing) {
        return prev.map((p) =>
          keyOf(p.productId, p.size) === k ? { ...p, quantity: p.quantity + quantity } : p
        );
      }
      return [...prev, { ...item, quantity }];
    });
  }, []);

  const updateQuantity: CartContextValue["updateQuantity"] = useCallback(
    (productId, size, quantity) => {
      setItems((prev) =>
        prev
          .map((p) =>
            keyOf(p.productId, p.size) === keyOf(productId, size)
              ? { ...p, quantity: Math.max(0, quantity) }
              : p
          )
          .filter((p) => p.quantity > 0)
      );
    },
    []
  );

  const removeItem: CartContextValue["removeItem"] = useCallback((productId, size) => {
    setItems((prev) =>
      prev.filter((p) => keyOf(p.productId, p.size) !== keyOf(productId, size))
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo<CartContextValue>(() => {
    const itemCount = items.reduce((s, i) => s + i.quantity, 0);
    const total = items.reduce((s, i) => s + i.quantity * i.price, 0);
    return { items, itemCount, total, addItem, updateQuantity, removeItem, clear };
  }, [items, addItem, updateQuantity, removeItem, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}

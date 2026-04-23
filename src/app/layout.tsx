import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getCurrentUser } from "@/lib/auth";
import { SHOP_INFO } from "@/lib/shop-info";

export const metadata: Metadata = {
  title: `${SHOP_INFO.name} — ${SHOP_INFO.tagline}`,
  description:
    "Магазин стокового одягу та взуття з Європи. Оригінальні бренди: Zara, H&M, Reserved, Next, Primark, Nike, Adidas. Жіночий, чоловічий, дитячий відділи.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();
  return (
    <html lang="uk">
      <body>
        <CartProvider>
          <Header user={user ? { email: user.email, name: user.name } : null} />
          <main className="min-h-[70vh]">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import { GeoProvider } from "@/components/GeoProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CallbackFab } from "@/components/CallbackFab";
import { getCurrentUser } from "@/lib/auth";
import { SHOP_INFO } from "@/lib/shop-info";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-sans", display: "swap" });
const display = Oswald({ subsets: ["latin", "cyrillic"], weight: ["500", "700"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  title: `${SHOP_INFO.name} — ${SHOP_INFO.tagline}`,
  description:
    "Магазин стокового одягу та взуття з Європи. Оригінальні бренди: Zara, H&M, Reserved, Next, Primark, Nike, Adidas. Жіночий, чоловічий, дитячий відділи.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();
  return (
    <html lang="uk" className={`${inter.variable} ${display.variable}`}>
      <body>
        <GeoProvider>
          <CartProvider>
            <Header user={user ? { email: user.email, name: user.name } : null} />
            <main className="min-h-[70vh]">{children}</main>
            <Footer />
            <CallbackFab />
          </CartProvider>
        </GeoProvider>
      </body>
    </html>
  );
}

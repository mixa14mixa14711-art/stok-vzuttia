export type Category =
  | "women-clothing"
  | "men-clothing"
  | "kids-clothing"
  | "women-shoes"
  | "men-shoes"
  | "kids-shoes"
  | "mix";

export type Department = "women" | "men" | "kids" | "shoes" | "mix";

export type Product = {
  id: string;
  slug: string;
  title: string;
  brand: string;
  category: Category;
  price: number;
  oldPrice?: number;
  sizes: string[];
  description: string;
  images: string[];
  badge?: string;
};

export const CATEGORIES: Record<Category, { title: string; department: Department }> = {
  "women-clothing": { title: "Жіночий одяг", department: "women" },
  "men-clothing": { title: "Чоловічий одяг", department: "men" },
  "kids-clothing": { title: "Дитячий одяг", department: "kids" },
  "women-shoes": { title: "Жіноче взуття", department: "shoes" },
  "men-shoes": { title: "Чоловіче взуття", department: "shoes" },
  "kids-shoes": { title: "Дитяче взуття", department: "shoes" },
  "mix": { title: "Мікс", department: "mix" },
};

export const DEPARTMENTS: {
  slug: Department;
  title: string;
  categories: Category[];
}[] = [
  { slug: "women", title: "Жінкам", categories: ["women-clothing", "women-shoes"] },
  { slug: "men", title: "Чоловікам", categories: ["men-clothing", "men-shoes"] },
  { slug: "kids", title: "Дітям", categories: ["kids-clothing", "kids-shoes"] },
  { slug: "shoes", title: "Взуття", categories: ["women-shoes", "men-shoes", "kids-shoes"] },
  { slug: "mix", title: "Мікс", categories: ["mix"] },
];

const img = (id: string) => `https://picsum.photos/seed/${id}/800/1000`;

export const PRODUCTS: Product[] = [
  // WOMEN CLOTHING
  {
    id: "w1",
    slug: "zhaket-zara-stokovyi",
    title: "Жакет Zara стоковий",
    brand: "Zara",
    category: "women-clothing",
    price: 890,
    oldPrice: 1490,
    sizes: ["XS", "S", "M", "L"],
    description:
      "Класичний приталений жакет Zara з нової колекції. Стоковий, оригінал з Європи. Підкладка, дві внутрішні кишені.",
    images: [img("w1a"), img("w1b")],
    badge: "-40%",
  },
  {
    id: "w2",
    slug: "sukniia-hm-midi",
    title: "Сукня-міді H&M",
    brand: "H&M",
    category: "women-clothing",
    price: 650,
    sizes: ["S", "M", "L"],
    description: "Легка сукня-міді з натуральної віскози. Оригінал H&M, сток з Німеччини.",
    images: [img("w2a"), img("w2b")],
  },
  {
    id: "w3",
    slug: "paltor-reserved-kamel",
    title: "Пальто Reserved camel",
    brand: "Reserved",
    category: "women-clothing",
    price: 1890,
    oldPrice: 2990,
    sizes: ["S", "M", "L"],
    description: "Осіннє пальто кольору camel. Оригінал Reserved, сток із Польщі. Вовна 30%.",
    images: [img("w3a"), img("w3b")],
    badge: "HIT",
  },
  {
    id: "w4",
    slug: "dzhynsy-mango-slim",
    title: "Джинси Mango Slim",
    brand: "Mango",
    category: "women-clothing",
    price: 720,
    sizes: ["26", "27", "28", "29", "30"],
    description: "Жіночі джинси Mango slim fit, висока посадка. Оригінал, сток з Іспанії.",
    images: [img("w4a"), img("w4b")],
  },

  // MEN CLOTHING
  {
    id: "m1",
    slug: "kurtka-next-bomber",
    title: "Куртка Next Bomber",
    brand: "Next",
    category: "men-clothing",
    price: 1490,
    sizes: ["M", "L", "XL", "XXL"],
    description: "Чоловіча куртка-бомбер Next. Оригінал, сток з Великої Британії. Демісезон.",
    images: [img("m1a"), img("m1b")],
  },
  {
    id: "m2",
    slug: "futbolka-hm-basic-pack",
    title: "Футболка H&M Basic",
    brand: "H&M",
    category: "men-clothing",
    price: 290,
    oldPrice: 450,
    sizes: ["S", "M", "L", "XL"],
    description: "Класична базова футболка 100% бавовна. Оригінал H&M, сток із Німеччини.",
    images: [img("m2a"), img("m2b")],
    badge: "SALE",
  },
  {
    id: "m3",
    slug: "sorochka-zara-oxford",
    title: "Сорочка Zara Oxford",
    brand: "Zara",
    category: "men-clothing",
    price: 690,
    sizes: ["S", "M", "L", "XL"],
    description: "Сорочка Zara Oxford regular fit, оригінал, сток з Іспанії.",
    images: [img("m3a"), img("m3b")],
  },
  {
    id: "m4",
    slug: "sviter-primark-knit",
    title: "Светр Primark Knit",
    brand: "Primark",
    category: "men-clothing",
    price: 490,
    sizes: ["M", "L", "XL"],
    description: "Теплий светр крупної в’язки. Оригінал Primark, сток із Ірландії.",
    images: [img("m4a"), img("m4b")],
  },

  // KIDS CLOTHING
  {
    id: "k1",
    slug: "komplekt-next-3-v-1",
    title: "Комплект Next 3 в 1",
    brand: "Next",
    category: "kids-clothing",
    price: 590,
    sizes: ["74", "80", "86", "92", "98"],
    description: "Дитячий комплект Next: боді + штани + кофтинка. Оригінал, сток з UK.",
    images: [img("k1a"), img("k1b")],
  },
  {
    id: "k2",
    slug: "suknia-zara-kids",
    title: "Сукня Zara Kids",
    brand: "Zara",
    category: "kids-clothing",
    price: 490,
    sizes: ["104", "110", "116", "122"],
    description: "Дитяча сукня Zara Kids з бавовни. Оригінал, сток з Іспанії.",
    images: [img("k2a"), img("k2b")],
  },
  {
    id: "k3",
    slug: "kurtka-lindex-puhovyk",
    title: "Пуховик дитячий Lindex",
    brand: "Lindex",
    category: "kids-clothing",
    price: 1290,
    oldPrice: 1890,
    sizes: ["98", "104", "110", "116"],
    description: "Зимовий пуховик Lindex, водовідштовхувальна тканина. Оригінал, сток зі Швеції.",
    images: [img("k3a"), img("k3b")],
    badge: "ЗИМА",
  },
  {
    id: "k4",
    slug: "dzhynsy-hm-kids",
    title: "Джинси H&M Kids",
    brand: "H&M",
    category: "kids-clothing",
    price: 390,
    sizes: ["104", "110", "116", "122", "128"],
    description: "Класичні дитячі джинси H&M, еластичний пояс. Оригінал, сток з ЄС.",
    images: [img("k4a"), img("k4b")],
  },

  // WOMEN SHOES
  {
    id: "ws1",
    slug: "krosivky-nike-air-max",
    title: "Кросівки Nike Air Max",
    brand: "Nike",
    category: "women-shoes",
    price: 2490,
    oldPrice: 3290,
    sizes: ["36", "37", "38", "39", "40"],
    description: "Оригінальні жіночі кросівки Nike Air Max. Сток з Німеччини.",
    images: [img("ws1a"), img("ws1b")],
    badge: "ORIGINAL",
  },
  {
    id: "ws2",
    slug: "chereviki-timberland-zh",
    title: "Черевики Timberland жіночі",
    brand: "Timberland",
    category: "women-shoes",
    price: 3290,
    sizes: ["36", "37", "38", "39"],
    description: "Класичні жовті черевики Timberland. Оригінал, сток із США/ЄС.",
    images: [img("ws2a"), img("ws2b")],
  },
  {
    id: "ws3",
    slug: "chovyki-tamaris-baleto",
    title: "Човники Tamaris Balerinas",
    brand: "Tamaris",
    category: "women-shoes",
    price: 990,
    sizes: ["36", "37", "38", "39", "40"],
    description: "Елегантні човники Tamaris. Оригінал, сток з Німеччини.",
    images: [img("ws3a"), img("ws3b")],
  },

  // MEN SHOES
  {
    id: "ms1",
    slug: "krosivky-adidas-samba",
    title: "Кросівки Adidas Samba",
    brand: "Adidas",
    category: "men-shoes",
    price: 2790,
    sizes: ["40", "41", "42", "43", "44", "45"],
    description: "Легендарні Adidas Samba. Оригінал, сток з Німеччини.",
    images: [img("ms1a"), img("ms1b")],
    badge: "HIT",
  },
  {
    id: "ms2",
    slug: "chereviki-ecco-chol",
    title: "Черевики Ecco чоловічі",
    brand: "Ecco",
    category: "men-shoes",
    price: 2990,
    sizes: ["41", "42", "43", "44"],
    description: "Шкіряні черевики Ecco. Оригінал, сток з Данії.",
    images: [img("ms2a"), img("ms2b")],
  },
  {
    id: "ms3",
    slug: "krosivky-puma-rs-x",
    title: "Кросівки Puma RS-X",
    brand: "Puma",
    category: "men-shoes",
    price: 1990,
    oldPrice: 2590,
    sizes: ["41", "42", "43", "44", "45"],
    description: "Чоловічі кросівки Puma RS-X. Оригінал, сток з ЄС.",
    images: [img("ms3a"), img("ms3b")],
  },

  // KIDS SHOES
  {
    id: "ks1",
    slug: "krosivky-nike-kids",
    title: "Кросівки Nike Kids",
    brand: "Nike",
    category: "kids-shoes",
    price: 1290,
    sizes: ["28", "29", "30", "31", "32", "33"],
    description: "Дитячі кросівки Nike, оригінал. Сток із Німеччини.",
    images: [img("ks1a"), img("ks1b")],
  },
  {
    id: "ks2",
    slug: "cheviky-geox-kids",
    title: "Черевики Geox Kids",
    brand: "Geox",
    category: "kids-shoes",
    price: 1490,
    sizes: ["27", "28", "29", "30", "31"],
    description: "Дитячі черевики Geox «дихаюча» підошва. Оригінал, сток з Італії.",
    images: [img("ks2a"), img("ks2b")],
  },
  {
    id: "ks3",
    slug: "kedy-puma-kids",
    title: "Кеди Puma Kids",
    brand: "Puma",
    category: "kids-shoes",
    price: 990,
    oldPrice: 1390,
    sizes: ["30", "31", "32", "33", "34"],
    description: "Дитячі кеди Puma, легка підошва. Оригінал, сток з ЄС.",
    images: [img("ks3a"), img("ks3b")],
    badge: "-30%",
  },

  // WOMEN CLOTHING — extra brands
  {
    id: "w5",
    slug: "sviter-bershka-oversize",
    title: "Светр Bershka oversize",
    brand: "Bershka",
    category: "women-clothing",
    price: 590,
    sizes: ["S", "M", "L"],
    description: "Тепла в'язка, крупна текстура. Оригінал Bershka, сток з Іспанії.",
    images: [img("w5a"), img("w5b")],
  },
  {
    id: "w6",
    slug: "topok-pull-bear-krop",
    title: "Топ Pull&Bear кроп",
    brand: "Pull&Bear",
    category: "women-clothing",
    price: 390,
    oldPrice: 590,
    sizes: ["XS", "S", "M"],
    description: "Укорочений топ Pull&Bear 100% бавовна. Оригінал, сток з Іспанії.",
    images: [img("w6a"), img("w6b")],
    badge: "SALE",
  },
  {
    id: "w7",
    slug: "bluzka-stradivarius-satin",
    title: "Блуза Stradivarius сатин",
    brand: "Stradivarius",
    category: "women-clothing",
    price: 520,
    sizes: ["XS", "S", "M", "L"],
    description: "Сатинова блуза Stradivarius, оригінал. Сток з Іспанії.",
    images: [img("w7a"), img("w7b")],
  },

  // MEN CLOTHING — extra brands
  {
    id: "m5",
    slug: "sorochka-jackjones-linen",
    title: "Сорочка Jack&Jones льон",
    brand: "Jack&Jones",
    category: "men-clothing",
    price: 790,
    sizes: ["S", "M", "L", "XL"],
    description: "Льняна сорочка Jack&Jones, регуляр крій. Оригінал, сток із ЄС.",
    images: [img("m5a"), img("m5b")],
  },
  {
    id: "m6",
    slug: "polo-lacoste-classic",
    title: "Поло Lacoste Classic",
    brand: "Lacoste",
    category: "men-clothing",
    price: 1490,
    oldPrice: 2190,
    sizes: ["M", "L", "XL"],
    description: "Класичне поло Lacoste, піке. Оригінал, сток з Франції.",
    images: [img("m6a"), img("m6b")],
    badge: "-30%",
  },

  // KIDS CLOTHING — extra brand
  {
    id: "k5",
    slug: "futbolka-boboli-kids",
    title: "Футболка Boboli Kids",
    brand: "Boboli Kids",
    category: "kids-clothing",
    price: 290,
    sizes: ["92", "98", "104", "110", "116"],
    description: "Яскрава дитяча футболка Boboli Kids 100% бавовна. Оригінал, сток з Іспанії.",
    images: [img("k5a"), img("k5b")],
  },

  // MIX (gурт/мікс-лоти)
  {
    id: "mx1",
    slug: "miks-zhinochyi-10kh",
    title: "Мікс жіночий — 10 одиниць",
    brand: "MIX",
    category: "mix",
    price: 2900,
    sizes: ["Лот"],
    description:
      "Мікс-лот жіночого одягу (10 одиниць) від Zara, Bershka, H&M, Mango, Stradivarius тощо. Оригінал, сток з Європи.",
    images: [img("mx1a"), img("mx1b")],
    badge: "ЛОТ",
  },
  {
    id: "mx2",
    slug: "miks-cholovichyi-10kh",
    title: "Мікс чоловічий — 10 одиниць",
    brand: "MIX",
    category: "mix",
    price: 2700,
    sizes: ["Лот"],
    description:
      "Мікс-лот чоловічого одягу (10 одиниць) від Jack&Jones, Zara, H&M, Tom Tailor, Gant. Оригінал, сток з Європи.",
    images: [img("mx2a"), img("mx2b")],
    badge: "ЛОТ",
  },
  {
    id: "mx3",
    slug: "miks-dytyachyi-10kh",
    title: "Мікс дитячий — 10 одиниць",
    brand: "MIX BRANDS KIDS",
    category: "mix",
    price: 1800,
    sizes: ["Лот"],
    description:
      "Мікс-лот дитячого одягу (10 одиниць) від H&M, Zara Kids, Boboli, Next, Lindex. Оригінал, сток з Європи.",
    images: [img("mx3a"), img("mx3b")],
    badge: "ЛОТ",
  },
  {
    id: "mx4",
    slug: "miks-vzuttia-5par",
    title: "Мікс взуття — 5 пар",
    brand: "SPORTS MIX",
    category: "mix",
    price: 3500,
    sizes: ["Лот"],
    description:
      "Мікс-лот взуття (5 пар) Nike / Adidas / Puma. Оригінал, асортиментне сортування, сток з Європи.",
    images: [img("mx4a"), img("mx4b")],
    badge: "ЛОТ",
  },
];

export function getProductsByCategory(category: Category): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getProductsByDepartment(dep: Department): Product[] {
  const categories = DEPARTMENTS.find((d) => d.slug === dep)?.categories ?? [];
  return PRODUCTS.filter((p) => categories.includes(p.category));
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getSaleProducts(): Product[] {
  return PRODUCTS.filter((p) => typeof p.oldPrice === "number" && p.oldPrice > p.price);
}

export function getProductsByBrand(brand: string): Product[] {
  return PRODUCTS.filter((p) => p.brand.toLowerCase() === brand.toLowerCase());
}

export function getAllBrands(): string[] {
  const s = new Set<string>();
  PRODUCTS.forEach((p) => s.add(p.brand));
  return Array.from(s).sort((a, b) => a.localeCompare(b, "uk"));
}

export function formatUAH(value: number): string {
  return new Intl.NumberFormat("uk-UA", {
    style: "currency",
    currency: "UAH",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

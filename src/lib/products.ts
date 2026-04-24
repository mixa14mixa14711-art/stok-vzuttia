export type Category =
  | "women-clothing"
  | "men-clothing"
  | "kids-clothing"
  | "women-shoes"
  | "men-shoes"
  | "kids-shoes"
  | "accessories"
  | "home"
  | "sport"
  | "mix";

export type Department =
  | "women"
  | "men"
  | "kids"
  | "shoes"
  | "accessories"
  | "home"
  | "sport"
  | "mix";

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
  "accessories": { title: "Аксесуари", department: "accessories" },
  "home": { title: "Товари для дому", department: "home" },
  "sport": { title: "Спорт та відпочинок", department: "sport" },
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
  { slug: "accessories", title: "Аксесуари", categories: ["accessories"] },
  { slug: "home", title: "Для дому", categories: ["home"] },
  { slug: "sport", title: "Спорт", categories: ["sport"] },
  { slug: "mix", title: "Мікс", categories: ["mix"] },
];

// Category-matched photos from Flickr (public, tag-filtered).
// `tags` is a comma-separated list of English tags; `lock` guarantees the
// same image for the same product, but two different products with the same
// tags will share the image — so use a unique lock per product.
const img = (tags: string, lock: number) =>
  `https://loremflickr.com/800/1000/${tags}?lock=${lock}`;

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
    images: [img("blazer,jacket,fashion", 101), img("blazer,woman,fashion", 102)],
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
    images: [img("dress,midi,fashion", 103), img("dress,summer,fashion", 104)],
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
    images: [img("coat,camel,overcoat", 105), img("coat,winter,woman", 106)],
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
    images: [img("jeans,denim,woman", 107), img("jeans,denim,slimfit", 108)],
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
    images: [img("bomber,jacket,menswear", 109), img("bomberjacket,men", 110)],
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
    images: [img("tshirt,basic,men", 111), img("tshirt,cotton,plain", 112)],
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
    images: [img("oxfordshirt,men", 113), img("buttonshirt,men", 114)],
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
    images: [img("sweater,knit,men", 115), img("sweater,wool,men", 116)],
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
    images: [img("babyclothes,infant,outfit", 117), img("babyclothes,boy,girl", 118)],
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
    images: [img("girldress,kids,fashion", 119), img("childrensdress", 120)],
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
    images: [img("kidswinterjacket,puffer", 121), img("kidsjacket,snow", 122)],
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
    images: [img("kidsjeans,denim", 123), img("kidsjeans,boy", 124)],
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
    images: [img("sneakers,airmax,nike", 125), img("sneakers,running,woman", 126)],
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
    images: [img("boots,timberland,leather", 127), img("boots,hiking,yellow", 128)],
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
    images: [img("balletflats,shoes,woman", 129), img("ballerinashoes", 130)],
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
    images: [img("sneakers,adidas,samba", 131), img("sneakers,retro,men", 132)],
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
    images: [img("leathershoes,men,oxford", 133), img("dressshoes,leather", 134)],
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
    images: [img("sneakers,puma,men", 135), img("runningshoes,men", 136)],
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
    images: [img("kidssneakers,nike", 137), img("kidsshoes,sport", 138)],
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
    images: [img("kidsshoes,geox", 139), img("kidsboots,leather", 140)],
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
    images: [img("kidssneakers,puma", 141), img("kidsshoes,kids", 142)],
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
    images: [img("sweater,knit,oversize", 143), img("pullover,knitwear,woman", 144)],
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
    images: [img("croptop,tshirt,woman", 145), img("croptop,fashion", 146)],
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
    images: [img("blouse,satin,silk", 147), img("blouse,woman,fashion", 148)],
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
    images: [img("linenshirt,men,summer", 149), img("shirt,linen,men", 150)],
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
    images: [img("poloshirt,men,classic", 151), img("poloshirt,cotton", 152)],
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
    images: [img("kidstshirt,toddler", 153), img("kidstshirt,print", 154)],
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
    images: [img("womensclothing,wardrobe", 155), img("womenswear,rack,fashion", 156)],
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
    images: [img("menswear,wardrobe,rack", 157), img("menswear,fashion,shop", 158)],
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
    images: [img("kidsclothes,wardrobe", 159), img("childrenclothes,family", 160)],
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
    images: [img("sneakers,collection,shoes", 161), img("sneakers,shoes,sport", 162)],
    badge: "ЛОТ",
  },

  // ACCESSORIES
  {
    id: "a1",
    slug: "sumka-mango-hobo",
    title: "Сумка Mango Hobo",
    brand: "Mango",
    category: "accessories",
    price: 890,
    oldPrice: 1290,
    sizes: ["One size"],
    description:
      "Жіноча сумка-hobo з екошкіри. Довгий регульований ремінь, внутрішня кишеня. Оригінал, сток з Іспанії.",
    images: [img("handbag,purse,woman", 163), img("handbag,leather,fashion", 164)],
    badge: "-30%",
  },
  {
    id: "a2",
    slug: "remin-zara-naturalna-shkira",
    title: "Ремінь Zara (натуральна шкіра)",
    brand: "Zara",
    category: "accessories",
    price: 390,
    sizes: ["85", "90", "95", "100", "105"],
    description: "Чоловічий ремінь зі 100% натуральної шкіри. Класична металева пряжка. Сток, оригінал Zara.",
    images: [img("leatherbelt,belt,men", 165), img("belt,buckle,leather", 166)],
  },
  {
    id: "a3",
    slug: "shapka-hm-merino",
    title: "Шапка H&M Merino",
    brand: "H&M",
    category: "accessories",
    price: 290,
    sizes: ["One size"],
    description: "Унісекс-шапка з 60% мериносової вовни. Подвійна вʼязка, теплий комірець-відворот.",
    images: [img("beanie,woolhat,winter", 167), img("knitbeanie,hat", 168)],
  },
  {
    id: "a4",
    slug: "sharf-reserved-wool",
    title: "Шарф Reserved Wool",
    brand: "Reserved",
    category: "accessories",
    price: 450,
    oldPrice: 690,
    sizes: ["One size"],
    description: "Теплий вовняний шарф у клітинку. 180×28 см. Оригінал Reserved, сток з Польщі.",
    images: [img("scarf,wool,plaid", 169), img("scarf,winter,knit", 170)],
    badge: "SALE",
  },
  {
    id: "a5",
    slug: "rukavychky-next-leather",
    title: "Рукавички Next Leather",
    brand: "Next",
    category: "accessories",
    price: 520,
    sizes: ["S", "M", "L"],
    description: "Жіночі шкіряні рукавички з підкладкою. Сенсорні кінчики пальців. Оригінал Next.",
    images: [img("gloves,leather,woman", 171), img("gloves,winter", 172)],
  },
  {
    id: "a6",
    slug: "okuljary-pullbear-aviator",
    title: "Сонцезахисні окуляри Pull&Bear",
    brand: "Pull&Bear",
    category: "accessories",
    price: 349,
    sizes: ["One size"],
    description: "Окуляри у стилі «авіатор», полікарбонат, UV400. Оригінал Pull&Bear, сток з Іспанії.",
    images: [img("sunglasses,aviator", 173), img("sunglasses,fashion", 174)],
  },

  // HOME — текстиль для дому
  {
    id: "h1",
    slug: "postil-ikea-180x200",
    title: "Постільна білизна IKEA 180×200",
    brand: "IKEA",
    category: "home",
    price: 990,
    oldPrice: 1390,
    sizes: ["Двоспальний"],
    description:
      "Комплект постільної білизни IKEA: підодіяльник 180×200 + 2 наволочки 50×70. 100% бавовна-ранфорс. Сток з Німеччини.",
    images: [img("bedding,bedsheets,bedroom", 175), img("bedlinen,pillows", 176)],
    badge: "-28%",
  },
  {
    id: "h2",
    slug: "rushnyk-hm-home-banyi",
    title: "Рушник H&M Home банний",
    brand: "H&M Home",
    category: "home",
    price: 340,
    sizes: ["70×140"],
    description: "Махровий банний рушник H&M Home, 500 г/м². 100% бавовна. Оригінал, сток з Європи.",
    images: [img("towel,bathroom,bath", 177), img("towel,spa", 178)],
  },
  {
    id: "h3",
    slug: "pled-zara-home-knit",
    title: "Плед Zara Home Knit",
    brand: "Zara Home",
    category: "home",
    price: 1290,
    sizes: ["130×170"],
    description: "Плед великої вʼязки Zara Home. Акрил + шерсть. Дуже теплий і легкий.",
    images: [img("blanket,knit,throw", 179), img("chunkyknit,blanket", 180)],
    badge: "HIT",
  },
  {
    id: "h4",
    slug: "postil-reserved-satin-200x220",
    title: "Постільна білизна Reserved Satin 200×220",
    brand: "Reserved Home",
    category: "home",
    price: 1490,
    sizes: ["Євро"],
    description:
      "Комплект євро: підодіяльник 200×220 + 2 наволочки 70×70 + простирадло 240×260. Сатин, 100% бавовна.",
    images: [img("bedlinen,satin,bedroom", 181), img("bedding,luxury,bed", 182)],
  },
  {
    id: "h5",
    slug: "kylym-hm-home-90x150",
    title: "Килим H&M Home 90×150",
    brand: "H&M Home",
    category: "home",
    price: 890,
    sizes: ["90×150"],
    description: "Декоративний килим короткого ворсу. Бавовна + поліестер. Антиковзке дно.",
    images: [img("rug,carpet,interior", 183), img("rug,floor,modern", 184)],
  },
  {
    id: "h6",
    slug: "svichky-set-4",
    title: "Набір ароматичних свічок (4 шт.)",
    brand: "H&M Home",
    category: "home",
    price: 390,
    sizes: ["Set"],
    description: "Набір з 4 ароматичних свічок у скляних підсвічниках. Аромат: ваніль, цитрус, лаванда, кава.",
    images: [img("candle,aromatic,home", 185), img("candle,scented,decor", 186)],
  },

  // SPORT — спортивний одяг/інвентар
  {
    id: "s1",
    slug: "legginsy-nike-pro-w",
    title: "Легінси Nike Pro (жін.)",
    brand: "Nike",
    category: "sport",
    price: 890,
    oldPrice: 1290,
    sizes: ["XS", "S", "M", "L"],
    description:
      "Жіночі компресійні легінси Nike Pro Dri-FIT. Щільна фіксація, потовідведення. Оригінал, сток.",
    images: [img("leggings,fitness,woman", 187), img("sportswear,woman,gym", 188)],
    badge: "SPORT",
  },
  {
    id: "s2",
    slug: "futbolka-adidas-climacool-m",
    title: "Футболка Adidas Climacool",
    brand: "Adidas",
    category: "sport",
    price: 590,
    sizes: ["S", "M", "L", "XL"],
    description: "Спортивна футболка Adidas з технологією Climacool. Швидко сохне. Оригінал, сток з Німеччини.",
    images: [img("sporttshirt,running,men", 189), img("athletic,tshirt,men", 190)],
  },
  {
    id: "s3",
    slug: "shorty-puma-training",
    title: "Шорти Puma Training",
    brand: "Puma",
    category: "sport",
    price: 490,
    sizes: ["S", "M", "L", "XL"],
    description: "Тренувальні шорти Puma з еластичним поясом. Вентиляційні вставки. Оригінал.",
    images: [img("sportshorts,training", 191), img("shorts,athletic,men", 192)],
  },
  {
    id: "s4",
    slug: "kofta-nike-therma-fit",
    title: "Кофта Nike Therma-FIT",
    brand: "Nike",
    category: "sport",
    price: 1190,
    oldPrice: 1590,
    sizes: ["S", "M", "L"],
    description: "Тренувальна кофта Nike Therma-FIT. Зберігає тепло під час інтенсивних тренувань.",
    images: [img("hoodie,sport,men", 193), img("trainingjacket,sport", 194)],
    badge: "-25%",
  },
  {
    id: "s5",
    slug: "ryukzak-adidas-linear-25l",
    title: "Рюкзак Adidas Linear 25L",
    brand: "Adidas",
    category: "sport",
    price: 690,
    sizes: ["25L"],
    description: "Спортивний рюкзак Adidas Linear. Відділення для ноутбука, два бокові сітчасті кармани.",
    images: [img("backpack,sport,black", 195), img("backpack,gym,bag", 196)],
  },
  {
    id: "s6",
    slug: "shkarpetky-nike-3pack-sport",
    title: "Шкарпетки Nike (3 пари)",
    brand: "Nike",
    category: "sport",
    price: 290,
    sizes: ["38-42", "42-46"],
    description: "Набір з 3 пар спортивних шкарпеток Nike. Посилена пʼятка, сітчасті вставки.",
    images: [img("sportsocks,athletic", 197), img("socks,running,pair", 198)],
  },
  {
    id: "s7",
    slug: "mat-joga-5mm",
    title: "Йога-килимок 5мм",
    brand: "H&M Sport",
    category: "sport",
    price: 390,
    oldPrice: 590,
    sizes: ["183×61 см"],
    description: "Йога-килимок 5 мм з TPE-піни. Нековзке покриття. У комплекті ремінь для переноски.",
    images: [img("yogamat,yoga,exercise", 199), img("yoga,mat,fitness", 200)],
    badge: "SALE",
  },
  {
    id: "s8",
    slug: "termos-sport-500ml",
    title: "Пляшка-термос 500 мл",
    brand: "H&M Sport",
    category: "sport",
    price: 220,
    sizes: ["500 мл"],
    description: "Спортивна пляшка-термос із нержавіючої сталі. Тримає холод 24 год, тепло 12 год.",
    images: [img("waterbottle,sport,stainless", 201), img("thermos,bottle,gym", 202)],
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

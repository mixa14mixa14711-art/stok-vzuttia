import Link from "next/link";
import SizeCalculator from "./SizeCalculator";

export const metadata = {
  title: "Таблиця розмірів — Nata Stok",
  description:
    "Онлайн-калькулятор розмірів одягу та взуття. Переведення см → EU / UA / US. Жіночий, чоловічий, дитячий одяг, взуття.",
};

const womenClothes = [
  ["XS", "34", "40", "82–86", "64–68", "90–94"],
  ["S", "36", "42", "86–92", "68–72", "94–98"],
  ["M", "38", "44", "92–96", "72–76", "98–102"],
  ["L", "40", "46", "96–102", "76–82", "102–108"],
  ["XL", "42", "48", "102–108", "82–88", "108–114"],
  ["XXL", "44", "50", "108–114", "88–94", "114–120"],
];

const menClothes = [
  ["XS", "44", "34", "86–92", "72–76"],
  ["S", "46", "36", "92–96", "76–80"],
  ["M", "48", "38", "96–100", "80–84"],
  ["L", "50", "40", "100–104", "84–88"],
  ["XL", "52", "42", "104–110", "88–94"],
  ["XXL", "54", "44", "110–116", "94–100"],
  ["3XL", "56", "46", "116–124", "100–108"],
];

const shoesTable = [
  ["22.5", "36", "3.5", "5.5"],
  ["23.0", "37", "4", "6"],
  ["23.5", "38", "5", "7"],
  ["24.0", "39", "6", "7.5"],
  ["24.5", "40", "6.5", "8"],
  ["25.0", "41", "7.5", "8.5"],
  ["25.5", "42", "8", "9"],
  ["26.0", "43", "9", "10"],
  ["26.5", "44", "9.5", "10.5"],
  ["27.0", "45", "10.5", "11.5"],
  ["27.5", "46", "11", "12"],
];

const kidsTable = [
  ["80–86", "1–1.5 р.", "46–48", "45–48"],
  ["86–92", "1.5–2 р.", "50–52", "49–51"],
  ["92–98", "2–3 р.", "52–54", "51–54"],
  ["98–104", "3–4 р.", "54–56", "52–55"],
  ["104–110", "4–5 р.", "56–58", "53–57"],
  ["110–116", "5–6 р.", "58–60", "54–58"],
  ["116–122", "6–7 р.", "60–62", "55–59"],
  ["122–128", "7–8 р.", "62–64", "57–60"],
  ["128–134", "8–9 р.", "64–68", "58–62"],
  ["134–140", "9–10 р.", "68–72", "60–64"],
  ["140–146", "10–11 р.", "72–76", "62–66"],
  ["146–152", "11–12 р.", "76–80", "64–68"],
];

export default function SizeGuidePage() {
  return (
    <div className="bg-sport-bg text-sport-ink min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-sport-lime mb-3">
            <span className="w-8 h-px bg-sport-lime" /> Онлайн-калькулятор
          </div>
          <h1 className="font-display text-4xl md:text-5xl uppercase tracking-wide">
            Таблиця <span className="text-sport-red">розмірів</span>
          </h1>
          <p className="text-sport-mute mt-3 max-w-2xl">
            Виберіть категорію і введіть ваші заміри в сантиметрах. Система підбере відповідник
            у європейській (EU), українській (UA) та американській (US) системах.
          </p>
        </div>

        <SizeCalculator />

        <section className="mt-12">
          <h2 className="font-display text-2xl uppercase tracking-wide mb-4">Жіночий одяг</h2>
          <TableBlock
            head={["Розмір", "EU", "UA", "Груди, см", "Талія, см", "Стегна, см"]}
            rows={womenClothes}
          />
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl uppercase tracking-wide mb-4">Чоловічий одяг</h2>
          <TableBlock
            head={["Розмір", "EU/UA", "US", "Груди, см", "Талія, см"]}
            rows={menClothes}
          />
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl uppercase tracking-wide mb-4">Дитячий одяг</h2>
          <TableBlock
            head={["Зріст (розмір)", "Вік", "Груди, см", "Талія, см"]}
            rows={kidsTable}
          />
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl uppercase tracking-wide mb-4">Взуття</h2>
          <TableBlock
            head={["Ступня, см", "EU", "UK", "US"]}
            rows={shoesTable}
          />
        </section>

        <div className="mt-12 rounded-xl border border-sport-line bg-sport-surface p-5 md:p-7">
          <h3 className="font-display text-xl uppercase tracking-wide mb-2">Як зняти заміри</h3>
          <ul className="text-sport-mute space-y-2 list-disc pl-5 text-sm md:text-base">
            <li>
              <b className="text-sport-ink">Груди</b> — горизонтально, по найвищих точках, сантиметр не перетягувати.
            </li>
            <li>
              <b className="text-sport-ink">Талія</b> — у найвужчому місці.
            </li>
            <li>
              <b className="text-sport-ink">Стегна</b> — по найширших точках.
            </li>
            <li>
              <b className="text-sport-ink">Ступня</b> — стати на аркуш, обвести, виміряти від п&apos;яти до великого пальця.
              Знімайте ввечері — нога трохи більша.
            </li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/catalog/women"
              className="inline-flex items-center rounded bg-sport-lime text-sport-bg font-bold uppercase tracking-wide px-5 py-2.5 hover:brightness-110"
            >
              Обрати розмір у каталозі
            </Link>
            <Link
              href="/contacts"
              className="inline-flex items-center rounded border border-sport-line text-sport-ink px-5 py-2.5 hover:border-sport-lime"
            >
              Допомога з вибором
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableBlock({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-sport-line">
      <table className="min-w-[640px] w-full text-sm md:text-base">
        <thead>
          <tr className="bg-sport-surface">
            {head.map((h) => (
              <th key={h} className="px-4 py-3 text-left font-display uppercase tracking-wide text-sport-lime border-b border-sport-line">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 ? "bg-sport-bg" : "bg-sport-surface/60"}>
              {r.map((c, j) => (
                <td key={j} className="px-4 py-2.5 border-b border-sport-line/60 text-sport-ink">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

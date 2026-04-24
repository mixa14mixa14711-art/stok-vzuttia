"use client";

import { useMemo, useState } from "react";

type Category = "women-top" | "women-bottom" | "men-top" | "men-bottom" | "kids" | "shoes-adult" | "shoes-kids";

const womenTops: { chest: [number, number]; eu: string; ua: string; us: string; intl: string }[] = [
  { chest: [76, 82], eu: "32", ua: "40", us: "2", intl: "XXS" },
  { chest: [82, 88], eu: "34", ua: "42", us: "4", intl: "XS" },
  { chest: [88, 94], eu: "36", ua: "44", us: "6", intl: "S" },
  { chest: [94, 100], eu: "38", ua: "46", us: "8", intl: "M" },
  { chest: [100, 106], eu: "40", ua: "48", us: "10", intl: "L" },
  { chest: [106, 112], eu: "42", ua: "50", us: "12", intl: "XL" },
  { chest: [112, 120], eu: "44", ua: "52", us: "14", intl: "XXL" },
];

const womenBottoms: { waist: [number, number]; eu: string; ua: string; us: string; intl: string }[] = [
  { waist: [60, 64], eu: "32", ua: "40", us: "2", intl: "XXS" },
  { waist: [64, 68], eu: "34", ua: "42", us: "4", intl: "XS" },
  { waist: [68, 72], eu: "36", ua: "44", us: "6", intl: "S" },
  { waist: [72, 78], eu: "38", ua: "46", us: "8", intl: "M" },
  { waist: [78, 84], eu: "40", ua: "48", us: "10", intl: "L" },
  { waist: [84, 92], eu: "42", ua: "50", us: "12", intl: "XL" },
  { waist: [92, 100], eu: "44", ua: "52", us: "14", intl: "XXL" },
];

const menTops: { chest: [number, number]; eu: string; ua: string; us: string; intl: string }[] = [
  { chest: [86, 92], eu: "44", ua: "44", us: "34", intl: "XS" },
  { chest: [92, 98], eu: "46", ua: "46", us: "36", intl: "S" },
  { chest: [98, 104], eu: "48", ua: "48", us: "38", intl: "M" },
  { chest: [104, 110], eu: "50", ua: "50", us: "40", intl: "L" },
  { chest: [110, 116], eu: "52", ua: "52", us: "42", intl: "XL" },
  { chest: [116, 124], eu: "54", ua: "54", us: "44", intl: "XXL" },
  { chest: [124, 132], eu: "56", ua: "56", us: "46", intl: "3XL" },
];

const menBottoms: { waist: [number, number]; eu: string; us: string }[] = [
  { waist: [72, 76], eu: "44", us: "28" },
  { waist: [76, 80], eu: "46", us: "30" },
  { waist: [80, 84], eu: "48", us: "32" },
  { waist: [84, 88], eu: "50", us: "34" },
  { waist: [88, 94], eu: "52", us: "36" },
  { waist: [94, 100], eu: "54", us: "38" },
  { waist: [100, 108], eu: "56", us: "40" },
];

const kids: { height: [number, number]; label: string; age: string }[] = [
  { height: [80, 86], label: "80–86", age: "1–1.5 р." },
  { height: [86, 92], label: "86–92", age: "1.5–2 р." },
  { height: [92, 98], label: "92–98", age: "2–3 р." },
  { height: [98, 104], label: "98–104", age: "3–4 р." },
  { height: [104, 110], label: "104–110", age: "4–5 р." },
  { height: [110, 116], label: "110–116", age: "5–6 р." },
  { height: [116, 122], label: "116–122", age: "6–7 р." },
  { height: [122, 128], label: "122–128", age: "7–8 р." },
  { height: [128, 134], label: "128–134", age: "8–9 р." },
  { height: [134, 140], label: "134–140", age: "9–10 р." },
  { height: [140, 146], label: "140–146", age: "10–11 р." },
  { height: [146, 152], label: "146–152", age: "11–12 р." },
];

const shoesAdult: { foot: [number, number]; eu: string; uk: string; us: string }[] = [
  { foot: [22.0, 22.5], eu: "35", uk: "2.5", us: "4.5" },
  { foot: [22.5, 23.0], eu: "36", uk: "3.5", us: "5.5" },
  { foot: [23.0, 23.5], eu: "37", uk: "4", us: "6" },
  { foot: [23.5, 24.0], eu: "38", uk: "5", us: "7" },
  { foot: [24.0, 24.5], eu: "39", uk: "6", us: "7.5" },
  { foot: [24.5, 25.0], eu: "40", uk: "6.5", us: "8" },
  { foot: [25.0, 25.5], eu: "41", uk: "7.5", us: "8.5" },
  { foot: [25.5, 26.0], eu: "42", uk: "8", us: "9" },
  { foot: [26.0, 26.5], eu: "43", uk: "9", us: "10" },
  { foot: [26.5, 27.0], eu: "44", uk: "9.5", us: "10.5" },
  { foot: [27.0, 27.5], eu: "45", uk: "10.5", us: "11.5" },
  { foot: [27.5, 28.5], eu: "46", uk: "11", us: "12" },
];

const shoesKids: { foot: [number, number]; eu: string; uk: string; us: string }[] = [
  { foot: [11.0, 11.5], eu: "19", uk: "3", us: "4" },
  { foot: [11.5, 12.0], eu: "20", uk: "4", us: "5" },
  { foot: [12.0, 12.5], eu: "21", uk: "4.5", us: "5.5" },
  { foot: [12.5, 13.0], eu: "22", uk: "5", us: "6" },
  { foot: [13.0, 13.5], eu: "23", uk: "6", us: "7" },
  { foot: [13.5, 14.0], eu: "24", uk: "7", us: "7.5" },
  { foot: [14.0, 14.5], eu: "25", uk: "7.5", us: "8.5" },
  { foot: [14.5, 15.5], eu: "26", uk: "8", us: "9" },
  { foot: [15.5, 16.0], eu: "27", uk: "9", us: "9.5" },
  { foot: [16.0, 17.0], eu: "28", uk: "10", us: "10.5" },
  { foot: [17.0, 17.5], eu: "29", uk: "11", us: "11.5" },
  { foot: [17.5, 18.0], eu: "30", uk: "11.5", us: "12" },
  { foot: [18.0, 19.0], eu: "31", uk: "12.5", us: "13" },
  { foot: [19.0, 19.5], eu: "32", uk: "13", us: "1" },
  { foot: [19.5, 20.5], eu: "33", uk: "1", us: "2" },
  { foot: [20.5, 21.0], eu: "34", uk: "2", us: "3" },
  { foot: [21.0, 22.0], eu: "35", uk: "2.5", us: "3.5" },
];

function findRow<T extends { [k: string]: unknown }>(rows: T[], key: keyof T, value: number): T | null {
  for (const r of rows) {
    const range = r[key] as unknown as [number, number];
    if (value >= range[0] && value < range[1]) return r;
  }
  const last = rows[rows.length - 1];
  const lastRange = last?.[key] as unknown as [number, number] | undefined;
  if (lastRange && value >= lastRange[1]) return last;
  return null;
}

export default function SizeCalculator() {
  const [cat, setCat] = useState<Category>("women-top");
  const [chest, setChest] = useState("");
  const [waist, setWaist] = useState("");
  const [hips, setHips] = useState("");
  const [height, setHeight] = useState("");
  const [foot, setFoot] = useState("");

  const result = useMemo(() => {
    const num = (s: string) => {
      const n = parseFloat(s.replace(",", "."));
      return Number.isFinite(n) && n > 0 ? n : null;
    };
    if (cat === "women-top") {
      const n = num(chest);
      if (!n) return null;
      const r = findRow(womenTops, "chest", n);
      return r && (
        <>
          EU <b className="text-sport-blue">{r.eu}</b> · UA {r.ua} · US {r.us} · {r.intl}
        </>
      );
    }
    if (cat === "women-bottom") {
      const n = num(waist);
      if (!n) return null;
      const r = findRow(womenBottoms, "waist", n);
      return r && (
        <>
          EU <b className="text-sport-blue">{r.eu}</b> · UA {r.ua} · US {r.us} · {r.intl}
        </>
      );
    }
    if (cat === "men-top") {
      const n = num(chest);
      if (!n) return null;
      const r = findRow(menTops, "chest", n);
      return r && (
        <>
          EU/UA <b className="text-sport-blue">{r.eu}</b> · US {r.us} · {r.intl}
        </>
      );
    }
    if (cat === "men-bottom") {
      const n = num(waist);
      if (!n) return null;
      const r = findRow(menBottoms, "waist", n);
      return r && (
        <>
          EU <b className="text-sport-blue">{r.eu}</b> · US {r.us}
        </>
      );
    }
    if (cat === "kids") {
      const n = num(height);
      if (!n) return null;
      const r = findRow(kids, "height", n);
      return r && (
        <>
          Розмір <b className="text-sport-blue">{r.label}</b> · орієнтовно {r.age}
        </>
      );
    }
    if (cat === "shoes-adult" || cat === "shoes-kids") {
      const n = num(foot);
      if (!n) return null;
      const rows = cat === "shoes-adult" ? shoesAdult : shoesKids;
      const r = findRow(rows, "foot", n);
      return r && (
        <>
          EU <b className="text-sport-blue">{r.eu}</b> · UK {r.uk} · US {r.us}
        </>
      );
    }
    return null;
  }, [cat, chest, waist, height, foot]);

  const labels: Record<Category, string> = {
    "women-top": "Жіночий верх (блузи, сукні)",
    "women-bottom": "Жіночий низ (штани, спідниці)",
    "men-top": "Чоловічий верх (сорочки, футболки)",
    "men-bottom": "Чоловічий низ (штани, джинси)",
    kids: "Дитячий одяг",
    "shoes-adult": "Взуття дорослі",
    "shoes-kids": "Взуття діти",
  };

  return (
    <div className="rounded-xl border border-sport-line bg-sport-surface text-sport-ink p-5 md:p-6 shadow-blueGlow">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[11px] uppercase tracking-[0.3em] text-sport-blue">Калькулятор</span>
        <span className="text-[11px] text-sport-mute">см → EU / UA / US</span>
      </div>
      <div className="flex flex-wrap gap-2 mb-5">
        {(Object.keys(labels) as Category[]).map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setCat(k)}
            className={
              "rounded-full px-3 py-1.5 text-xs md:text-sm font-semibold uppercase tracking-wide border transition-colors " +
              (cat === k
                ? "bg-sport-blue text-sport-bg border-sport-blue"
                : "border-sport-line text-sport-mute hover:text-sport-ink hover:border-sport-ink")
            }
          >
            {labels[k]}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          {(cat === "women-top" || cat === "men-top") && (
            <LabeledInput label="Обхват грудей, см" value={chest} onChange={setChest} hint="вимірюйте по найвищих точках" />
          )}
          {(cat === "women-bottom" || cat === "men-bottom") && (
            <>
              <LabeledInput label="Обхват талії, см" value={waist} onChange={setWaist} />
              {cat === "women-bottom" && (
                <LabeledInput label="Обхват стегон, см (опціонально)" value={hips} onChange={setHips} />
              )}
            </>
          )}
          {cat === "kids" && (
            <LabeledInput label="Зріст дитини, см" value={height} onChange={setHeight} hint="наприклад 110" />
          )}
          {(cat === "shoes-adult" || cat === "shoes-kids") && (
            <LabeledInput label="Довжина ступні, см" value={foot} onChange={setFoot} hint="від п’яти до великого пальця" />
          )}
        </div>
        <div className="rounded-lg bg-sport-bg border border-sport-line px-4 py-4 min-h-[80px] flex flex-col justify-center">
          <div className="text-[11px] uppercase tracking-[0.3em] text-sport-mute">Ваш розмір</div>
          <div className="mt-1 text-xl md:text-2xl font-display">
            {result ?? <span className="text-sport-mute">Введіть заміри</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

function LabeledInput({
  label,
  value,
  onChange,
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wide text-sport-mute">{label}</span>
      <input
        value={value}
        inputMode="decimal"
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-md bg-sport-bg border border-sport-line px-3 py-2.5 text-lg font-display text-sport-ink outline-none focus:border-sport-blue"
        placeholder="—"
      />
      {hint && <span className="block text-[11px] text-sport-mute mt-1">{hint}</span>}
    </label>
  );
}

"use client";

import { useMemo } from "react";

export type CardPayment = {
  number: string;
  holder: string;
  exp: string;
  cvv: string;
};

export function luhnCheck(raw: string) {
  const digits = raw.replace(/\D/g, "");
  if (digits.length < 12) return false;
  let sum = 0;
  let alt = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    let n = parseInt(digits[i], 10);
    if (alt) {
      n *= 2;
      if (n > 9) n -= 9;
    }
    sum += n;
    alt = !alt;
  }
  return sum % 10 === 0;
}

function formatNumber(raw: string) {
  const d = raw.replace(/\D/g, "").slice(0, 19);
  return d.replace(/(.{4})/g, "$1 ").trim();
}

function formatExp(raw: string) {
  const d = raw.replace(/\D/g, "").slice(0, 4);
  if (d.length < 3) return d;
  return d.slice(0, 2) + "/" + d.slice(2);
}

function detectBrand(raw: string) {
  const d = raw.replace(/\D/g, "");
  if (/^4/.test(d)) return "Visa";
  if (/^(5[1-5]|2[2-7])/.test(d)) return "Mastercard";
  if (/^(34|37)/.test(d)) return "American Express";
  return null;
}

type Props = {
  value: CardPayment;
  onChange: (v: CardPayment) => void;
};

export function CardPaymentForm({ value, onChange }: Props) {
  const brand = useMemo(() => detectBrand(value.number), [value.number]);
  const digits = value.number.replace(/\D/g, "");
  const valid = luhnCheck(digits);
  const expValid = /^\d{2}\/\d{2}$/.test(value.exp);
  const cvvValid = /^\d{3,4}$/.test(value.cvv);

  return (
    <div className="rounded-lg border border-sport-line bg-sport-bg p-4 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.25em] text-sport-lime">Оплата карткою онлайн</span>
        <span className="text-[11px] text-sport-mute">Захищений платіж · 3-D Secure</span>
      </div>

      <label className="block">
        <span className="block text-xs text-sport-mute mb-1">Номер картки</span>
        <div className="relative">
          <input
            inputMode="numeric"
            autoComplete="cc-number"
            value={value.number}
            onChange={(e) => onChange({ ...value, number: formatNumber(e.target.value) })}
            placeholder="0000 0000 0000 0000"
            className={
              "w-full bg-sport-surface border rounded px-3 py-2.5 font-display text-lg tracking-wider text-sport-ink outline-none transition-colors " +
              (digits.length === 0
                ? "border-sport-line focus:border-sport-lime"
                : valid
                  ? "border-sport-lime/70"
                  : "border-sport-red/70")
            }
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-sport-mute">
            {brand ?? ""}
          </span>
        </div>
      </label>

      <label className="block">
        <span className="block text-xs text-sport-mute mb-1">Власник картки</span>
        <input
          autoComplete="cc-name"
          value={value.holder}
          onChange={(e) => onChange({ ...value, holder: e.target.value.toUpperCase() })}
          placeholder="IVAN PETRENKO"
          className="w-full bg-sport-surface border border-sport-line rounded px-3 py-2.5 uppercase tracking-wide text-sport-ink outline-none focus:border-sport-lime"
        />
      </label>

      <div className="grid grid-cols-2 gap-3">
        <label className="block">
          <span className="block text-xs text-sport-mute mb-1">Термін дії (MM/YY)</span>
          <input
            inputMode="numeric"
            autoComplete="cc-exp"
            value={value.exp}
            onChange={(e) => onChange({ ...value, exp: formatExp(e.target.value) })}
            placeholder="MM/YY"
            className={
              "w-full bg-sport-surface border rounded px-3 py-2.5 font-display text-lg tracking-wider text-sport-ink outline-none " +
              (value.exp.length === 0
                ? "border-sport-line focus:border-sport-lime"
                : expValid
                  ? "border-sport-lime/70"
                  : "border-sport-red/70")
            }
          />
        </label>
        <label className="block">
          <span className="block text-xs text-sport-mute mb-1">CVV</span>
          <input
            inputMode="numeric"
            autoComplete="cc-csc"
            type="password"
            value={value.cvv}
            onChange={(e) => onChange({ ...value, cvv: e.target.value.replace(/\D/g, "").slice(0, 4) })}
            placeholder="•••"
            className={
              "w-full bg-sport-surface border rounded px-3 py-2.5 font-display text-lg tracking-wider text-sport-ink outline-none " +
              (value.cvv.length === 0
                ? "border-sport-line focus:border-sport-lime"
                : cvvValid
                  ? "border-sport-lime/70"
                  : "border-sport-red/70")
            }
          />
        </label>
      </div>

      <div className="flex items-center gap-3 text-[11px] text-sport-mute">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2 4 5v6c0 5 3.5 9.3 8 11 4.5-1.7 8-6 8-11V5l-8-3zm-1 15-4-4 1.4-1.4L11 14.2l4.6-4.6L17 11l-6 6z" />
        </svg>
        Ми не зберігаємо реквізити картки. Платіж обробляється на стороні банку (3-D Secure, PCI DSS).
      </div>
    </div>
  );
}

export function cardPaymentValid(v: CardPayment) {
  const digits = v.number.replace(/\D/g, "");
  return (
    luhnCheck(digits) &&
    /^\d{2}\/\d{2}$/.test(v.exp) &&
    /^\d{3,4}$/.test(v.cvv) &&
    v.holder.trim().length >= 3
  );
}

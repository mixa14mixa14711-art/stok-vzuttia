"use client";

import { useEffect, useState } from "react";

type Status = "idle" | "sending" | "ok" | "error";

export function CallbackFab() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+380");
  const [topic, setTopic] = useState("Підбір товару");
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError(null);
    try {
      const res = await fetch("/api/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          topic,
          comment,
          source: typeof window !== "undefined" ? window.location.pathname : "unknown",
        }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error || "Помилка");
      }
      setStatus("ok");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Помилка");
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setStatus("idle");
          setOpen(true);
        }}
        aria-label="Замовити зворотний дзвінок"
        className="fixed z-40 bottom-5 right-5 inline-flex items-center gap-2 rounded-full px-5 py-3 font-display uppercase tracking-wide text-sm text-cosmos-void bg-gradient-to-r from-sport-lime via-cosmos-aqua to-cosmos-fuchsia shadow-[0_0_40px_-5px_rgba(212,255,0,0.75)] hover:scale-[1.04] hover:shadow-[0_0_60px_-5px_rgba(217,70,239,0.8)] transition"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M6.6 10.8c1.5 2.9 3.9 5.3 6.8 6.8l2.3-2.3c.3-.3.7-.4 1.1-.3 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.8 21 3 13.2 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1.1L6.6 10.8z" />
        </svg>
        Передзвоніть мені
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-cosmos-void/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-md rounded-2xl cosmos-card p-6 shadow-cosmos">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Закрити"
              className="absolute top-3 right-3 text-cosmos-mute hover:text-cosmos-fuchsia"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>

            {status === "ok" ? (
              <div className="text-center py-4">
                <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-sport-lime/20 flex items-center justify-center shadow-[0_0_30px_rgba(212,255,0,0.6)]">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d4ff00" strokeWidth="3">
                    <path d="M4 12l5 5L20 6" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-cosmos-ink">Прийнято!</h3>
                <p className="text-cosmos-mute mt-2">
                  Ми передзвонимо вам найближчим часом у робочі години (Пн–Нд 10:00–20:00).
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="mt-5 btn-cosmos px-5 py-2.5 rounded-full font-bold uppercase tracking-wide text-sm"
                >
                  Закрити
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-3">
                <div>
                  <h3 className="font-display text-2xl text-cosmos-ink">
                    <span className="cosmos-text">Зворотний</span> дзвінок
                  </h3>
                  <p className="text-cosmos-mute text-sm mt-1">
                    Залиште заявку — перетелефонуємо впродовж 15 хвилин.
                  </p>
                </div>

                <label className="block">
                  <span className="text-xs uppercase tracking-widest text-cosmos-aqua">Ім&apos;я</span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    minLength={2}
                    maxLength={80}
                    autoComplete="name"
                    className="mt-1 w-full rounded-lg bg-cosmos-deep/60 border border-cosmos-line focus:border-cosmos-fuchsia outline-none px-3 py-2 text-cosmos-ink"
                  />
                </label>

                <label className="block">
                  <span className="text-xs uppercase tracking-widest text-cosmos-aqua">Телефон</span>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="+380 __ ___ __ __"
                    className="mt-1 w-full rounded-lg bg-cosmos-deep/60 border border-cosmos-line focus:border-cosmos-fuchsia outline-none px-3 py-2 text-cosmos-ink"
                  />
                </label>

                <label className="block">
                  <span className="text-xs uppercase tracking-widest text-cosmos-aqua">Тема</span>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="mt-1 w-full rounded-lg bg-cosmos-deep/60 border border-cosmos-line focus:border-cosmos-fuchsia outline-none px-3 py-2 text-cosmos-ink"
                  >
                    <option>Підбір товару</option>
                    <option>Опт / Великий гурт</option>
                    <option>Доставка та оплата</option>
                    <option>Обмін / повернення</option>
                    <option>Інше</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-xs uppercase tracking-widest text-cosmos-aqua">Коментар</span>
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    rows={3}
                    maxLength={500}
                    className="mt-1 w-full rounded-lg bg-cosmos-deep/60 border border-cosmos-line focus:border-cosmos-fuchsia outline-none px-3 py-2 text-cosmos-ink"
                  />
                </label>

                {error && <div className="text-sm text-cosmos-pink">{error}</div>}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full btn-cosmos px-5 py-3 rounded-full font-bold uppercase tracking-wide text-sm disabled:opacity-60 animate-cosmicPulse"
                >
                  {status === "sending" ? "Надсилаємо…" : "Замовити дзвінок"}
                </button>
                <p className="text-[11px] text-cosmos-mute text-center">
                  Натискаючи кнопку, ви погоджуєтесь з{" "}
                  <a href="/privacy" className="text-cosmos-aqua hover:text-cosmos-fuchsia">
                    політикою конфіденційності
                  </a>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

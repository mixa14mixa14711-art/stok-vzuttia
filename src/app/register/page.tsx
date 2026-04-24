"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Помилка реєстрації");
      router.push("/account");
      router.refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Помилка реєстрації");
    } finally {
      setLoading(false);
    }
  };

  const change = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <div className="mx-auto max-w-md px-4 py-10">
      <h1 className="text-2xl font-bold">Реєстрація</h1>
      <form onSubmit={submit} className="mt-5 space-y-3 bg-white border border-neutral-200 rounded-lg p-5">
        <label className="block">
          <span className="block text-sm mb-1">Ім&apos;я</span>
          <input required value={form.name} onChange={change("name")} className="w-full border border-neutral-300 rounded px-3 py-2" />
        </label>
        <label className="block">
          <span className="block text-sm mb-1">Email</span>
          <input required type="email" value={form.email} onChange={change("email")} className="w-full border border-neutral-300 rounded px-3 py-2" />
        </label>
        <label className="block">
          <span className="block text-sm mb-1">Телефон</span>
          <input type="tel" value={form.phone} onChange={change("phone")} placeholder="+380..." className="w-full border border-neutral-300 rounded px-3 py-2" />
        </label>
        <label className="block">
          <span className="block text-sm mb-1">Пароль (мін. 6 символів)</span>
          <input required minLength={6} type="password" value={form.password} onChange={change("password")} className="w-full border border-neutral-300 rounded px-3 py-2" />
        </label>
        {error && <div className="text-sm text-red-600">{error}</div>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-brand-600 hover:bg-brand-700 disabled:opacity-60 text-white font-medium px-4 py-3 rounded"
        >
          {loading ? "Створюємо акаунт..." : "Зареєструватись"}
        </button>
      </form>
      <p className="text-sm mt-4 text-neutral-600">
        Вже є акаунт?{" "}
        <Link href="/login" className="text-brand-700 hover:underline">
          Увійти
        </Link>
      </p>
    </div>
  );
}

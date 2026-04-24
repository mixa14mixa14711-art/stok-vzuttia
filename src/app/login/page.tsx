"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Невірні дані");
      router.push("/account");
      router.refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Помилка входу");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-md px-4 py-10">
      <h1 className="text-2xl font-bold">Вхід</h1>
      <form onSubmit={submit} className="mt-5 space-y-3 bg-white border border-neutral-200 rounded-lg p-5">
        <label className="block">
          <span className="block text-sm mb-1">Email</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="w-full border border-neutral-300 rounded px-3 py-2"
          />
        </label>
        <label className="block">
          <span className="block text-sm mb-1">Пароль</span>
          <input
            required
            type="password"
            value={form.password}
            onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
            className="w-full border border-neutral-300 rounded px-3 py-2"
          />
        </label>
        {error && <div className="text-sm text-red-600">{error}</div>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-brand-600 hover:bg-brand-700 disabled:opacity-60 text-white font-medium px-4 py-3 rounded"
        >
          {loading ? "Вхід..." : "Увійти"}
        </button>
      </form>
      <p className="text-sm mt-4 text-neutral-600">
        Немає акаунту?{" "}
        <Link href="/register" className="text-brand-700 hover:underline">
          Зареєструватись
        </Link>
      </p>
    </div>
  );
}

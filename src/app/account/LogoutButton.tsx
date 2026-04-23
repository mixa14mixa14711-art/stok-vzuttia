"use client";

import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        router.push("/");
        router.refresh();
      }}
      className="text-sm text-neutral-500 hover:text-red-600 border border-neutral-300 rounded px-3 py-1.5"
    >
      Вийти
    </button>
  );
}

"use client";

import { useGeo } from "./GeoProvider";

export function GeoBadge({ compact = false }: { compact?: boolean }) {
  const geo = useGeo();

  if (geo.status === "granted" && geo.city) {
    return (
      <span className="inline-flex items-center gap-1 text-xs text-sport-lime">
        <Pin />
        <span className="hidden sm:inline">Доставляємо у</span>
        <b className="font-semibold">{geo.city}</b>
      </span>
    );
  }

  if (geo.status === "loading") {
    return <span className="text-xs text-neutral-400">Визначаємо локацію…</span>;
  }

  return (
    <button
      type="button"
      onClick={geo.request}
      className="inline-flex items-center gap-1 text-xs text-neutral-300 hover:text-sport-lime"
      title="Визначити місто для доставки"
    >
      <Pin />
      {compact ? "Моє місто" : "Визначити моє місто"}
    </button>
  );
}

function Pin() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
    </svg>
  );
}

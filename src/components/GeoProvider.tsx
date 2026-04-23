"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type GeoState = {
  status: "idle" | "loading" | "granted" | "denied" | "error";
  city: string | null;
  country: string | null;
  coords: { lat: number; lon: number } | null;
  request: () => void;
};

const STORAGE_KEY = "geo-state-v1";

const GeoContext = createContext<GeoState>({
  status: "idle",
  city: null,
  country: null,
  coords: null,
  request: () => {},
});

export function GeoProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<Omit<GeoState, "request">>({
    status: "idle",
    city: null,
    country: null,
    coords: null,
  });

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Omit<GeoState, "request">;
        if (parsed?.city) setState(parsed);
      }
    } catch {}
  }, []);

  async function reverseGeocode(lat: number, lon: number) {
    try {
      const res = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=uk`
      );
      if (!res.ok) throw new Error("geo");
      const data = await res.json();
      return {
        city: data.city || data.locality || data.principalSubdivision || null,
        country: data.countryName || null,
      };
    } catch {
      return { city: null, country: null };
    }
  }

  function request() {
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      setState((s) => ({ ...s, status: "error" }));
      return;
    }
    setState((s) => ({ ...s, status: "loading" }));
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude: lat, longitude: lon } = pos.coords;
        const { city, country } = await reverseGeocode(lat, lon);
        const next: Omit<GeoState, "request"> = {
          status: "granted",
          city,
          country,
          coords: { lat, lon },
        };
        setState(next);
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        } catch {}
      },
      () => setState((s) => ({ ...s, status: "denied" })),
      { enableHighAccuracy: false, timeout: 8000, maximumAge: 60_000 }
    );
  }

  return (
    <GeoContext.Provider value={{ ...state, request }}>{children}</GeoContext.Provider>
  );
}

export function useGeo() {
  return useContext(GeoContext);
}

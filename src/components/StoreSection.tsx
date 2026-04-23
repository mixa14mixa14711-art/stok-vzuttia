import { SHOP_INFO } from "@/lib/shop-info";

type Props = { compact?: boolean };

export function StoreSection({ compact = false }: Props) {
  const s = SHOP_INFO.store;
  const bbox = `${s.lng - 0.004},${s.lat - 0.002},${s.lng + 0.004},${s.lat + 0.002}`;
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${s.lat},${s.lng}`;
  const osmLink = `https://www.openstreetmap.org/?mlat=${s.lat}&mlon=${s.lng}#map=18/${s.lat}/${s.lng}`;
  const gmapsDir = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    s.mapQuery
  )}`;
  const gmapsView = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.mapQuery)}`;

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      {!compact && (
        <div className="mb-6">
          <div className="text-xs uppercase tracking-[0.3em] text-cosmos-aqua mb-1">Offline</div>
          <h2 className="font-display text-3xl md:text-4xl text-cosmos-ink">
            Наш <span className="cosmos-text">фізичний магазин</span>
          </h2>
          <p className="text-cosmos-mute text-sm mt-1">
            Завітайте приміряти — шоурум в Івано-Франківську.
          </p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        {/* Info card */}
        <div className="relative overflow-hidden rounded-2xl cosmos-card p-6 shadow-cosmos">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-sport-lime mb-3">
            <span className="w-2 h-2 rounded-full bg-sport-lime shadow-[0_0_12px_rgba(212,255,0,0.85)] animate-pulseGlow" />
            Шоурум відкритий
          </div>
          <div className="font-display text-2xl md:text-3xl text-cosmos-ink leading-tight">
            {SHOP_INFO.name}
            <span className="block text-cosmos-aqua text-lg mt-1">{s.city}</span>
          </div>
          <dl className="mt-5 space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-cosmos-aqua">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 21s7-7.6 7-12a7 7 0 1 0-14 0c0 4.4 7 12 7 12z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </span>
              <div>
                <dt className="text-cosmos-mute text-xs uppercase tracking-widest">Адреса</dt>
                <dd className="text-cosmos-ink font-medium">
                  {s.address}, <span className="text-cosmos-mute">{s.city}</span>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-cosmos-aqua">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </span>
              <div>
                <dt className="text-cosmos-mute text-xs uppercase tracking-widest">Графік</dt>
                <dd className="text-cosmos-ink font-medium">{s.hours}</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-cosmos-aqua">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.6 10.8c1.5 2.9 3.9 5.3 6.8 6.8l2.3-2.3c.3-.3.7-.4 1.1-.3 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.8 21 3 13.2 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1.1L6.6 10.8z" />
                </svg>
              </span>
              <div>
                <dt className="text-cosmos-mute text-xs uppercase tracking-widest">Телефон</dt>
                <dd>
                  <a href={`tel:${SHOP_INFO.phoneDigits}`} className="text-cosmos-ink font-medium hover:text-cosmos-aqua">
                    {SHOP_INFO.phone}
                  </a>
                </dd>
              </div>
            </div>
          </dl>

          <div className="mt-6 flex flex-wrap gap-2">
            <a
              href={gmapsDir}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full btn-cosmos px-5 py-2.5 font-bold uppercase tracking-wide text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 11l18-8-8 18-2-8-8-2z" />
              </svg>
              Прокласти маршрут
            </a>
            <a
              href={gmapsView}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cosmos-aqua text-cosmos-void px-5 py-2.5 font-bold uppercase tracking-wide text-sm hover:bg-cosmos-cyan"
            >
              Google Maps
            </a>
            <a
              href={osmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cosmos-line text-cosmos-ink px-5 py-2.5 font-bold uppercase tracking-wide text-sm hover:border-cosmos-aqua hover:text-cosmos-aqua"
            >
              OpenStreetMap
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="relative rounded-2xl overflow-hidden cosmos-card shadow-cosmos min-h-[320px]">
          <iframe
            title={`Мапа: ${s.address}, ${s.city}`}
            src={mapSrc}
            className="absolute inset-0 w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute bottom-3 right-3 bg-cosmos-void/80 backdrop-blur-sm rounded-full px-3 py-1 text-[11px] text-cosmos-ink border border-cosmos-line">
            © OpenStreetMap
          </div>
        </div>
      </div>
    </section>
  );
}

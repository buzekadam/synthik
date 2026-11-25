import { CheckCircle2, AlertTriangle, Globe, Laptop, Lock, Music2 } from 'lucide-react';

export default function App() {
  // Kontrola, zda je nastaveno Spotify Client ID v .env (hodnotu nikdy nevypisujeme)
  const hasSpotifyClientId = Boolean(import.meta.env.VITE_SPOTIFY_CLIENT_ID);

  // Detekce běhového prostředí (lokální vývoj vs. nasazený hosting)
  const hostname = typeof window !== 'undefined' ? window.location.hostname : '';
  const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1';

  return (
    <main className="min-h-[100dvh] bg-synthik-bg text-synthik-text flex items-center justify-center p-5">
      <div className="w-full max-w-md space-y-6">
        {/* Hlavička aplikace */}
        <header className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-synthik-accent/15 border border-synthik-accent/30 text-synthik-accent mb-1">
            <Music2 size={28} />
          </div>
          <h1 className="text-3xl font-bold tracking-tight lowercase">synthik</h1>
          <p className="text-sm text-synthik-muted">
            Vertikální objevování hudby napojené na Spotify Web API.
          </p>
        </header>

        {/* Kartička stavu prostředí pro milník T4 */}
        <section className="bg-synthik-card border border-synthik-border rounded-2xl p-5 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-synthik-border pb-3">
            <h2 className="text-sm font-semibold text-white">Stav prostředí (T4)</h2>
            <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-synthik-accent/15 text-synthik-accent border border-synthik-accent/30">
              Příprava a prostředí
            </span>
          </div>

          <ul className="space-y-3 text-sm">
            {/* Stav React + Vite + TypeScript */}
            <li className="flex items-center justify-between gap-3">
              <span className="text-synthik-muted">React + Vite + TypeScript</span>
              <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
                <CheckCircle2 size={16} />
                Připraveno
              </span>
            </li>

            {/* Stav proměnné VITE_SPOTIFY_CLIENT_ID */}
            <li className="flex items-center justify-between gap-3">
              <span className="text-synthik-muted">Spotify API klíč</span>
              {hasSpotifyClientId ? (
                <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium text-right">
                  <CheckCircle2 size={16} className="shrink-0" />
                  Spotify Client ID načteno z .env
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-amber-400 font-medium text-right">
                  <AlertTriangle size={16} className="shrink-0" />
                  Chybí VITE_SPOTIFY_CLIENT_ID
                </span>
              )}
            </li>

            {/* Informace o hostingu */}
            <li className="flex items-center justify-between gap-3">
              <span className="text-synthik-muted">Prostředí běhu</span>
              <span className="inline-flex items-center gap-1.5 text-white font-medium text-right">
                {isLocalhost ? (
                  <>
                    <Laptop size={16} className="text-synthik-accent shrink-0" />
                    Lokálně ({hostname})
                  </>
                ) : (
                  <>
                    <Globe size={16} className="text-synthik-accent shrink-0" />
                    Nasazený hosting ({hostname || 'produkce'})
                  </>
                )}
              </span>
            </li>
          </ul>
        </section>

        {/* Přehled nejbližšího kroku (milník T5) */}
        <section className="bg-synthik-surface/60 border border-synthik-border rounded-2xl p-5 space-y-3 text-center">
          <button
            type="button"
            disabled
            className="w-full py-3 px-4 rounded-xl bg-synthik-accent/50 text-white/75 font-semibold text-sm flex items-center justify-center gap-2 cursor-not-allowed border border-synthik-accent/30"
          >
            <Lock size={16} />
            Přihlásit se přes Spotify (plánováno v T5)
          </button>
          <p className="text-xs text-synthik-muted">
            Další fází projektu je implementace Spotify OAuth 2.0 autentizace.
          </p>
        </section>
      </div>
    </main>
  );
}

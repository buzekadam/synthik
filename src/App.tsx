import { Lock, Music2 } from 'lucide-react';

export default function App() {
  return (
    <main className="relative min-h-[100dvh] bg-synthik-bg text-synthik-text flex items-center justify-center p-5 overflow-hidden">

      <div className="relative w-full max-w-sm space-y-8 text-center">
        {/* Logo, název a hlavní slogan */}
        <header className="space-y-3">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-synthik-accent/15 border border-synthik-accent/30 text-synthik-accent shadow-lg shadow-synthik-accent/10">
            <Music2 size={32} />
          </div>
          <h1 className="text-4xl font-bold tracking-tight lowercase text-white">
            synthik
          </h1>
          <p className="text-sm text-synthik-muted leading-relaxed">
            Objevuj nekonečně novou hudbu. <br /> Ukázky napojené přímo na tvé Spotify.
          </p>
        </header>

        {/* Přihlášení přes Spotify (zatím uzamčeno) */}
        <div>
          <button
            type="button"
            disabled
            aria-disabled="true"
            className="w-full py-3.5 px-5 rounded-full bg-synthik-accent/50 text-white/80 font-semibold text-sm flex items-center justify-center gap-2 cursor-not-allowed border border-synthik-accent/30"
          >
            <Lock size={16} />
            Přihlásit se přes Spotify
          </button>
        </div>
      </div>
    </main>
  );
}

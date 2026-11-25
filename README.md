# Synthik

**Synthik** je webová aplikace pro vertikální objevování hudby (ve stylu krátkých hudebních ukázek) napojená na Spotify Web API.

## Použité technologie

- **React 18** + **TypeScript**
- **Vite** (vývojový server a produkční build)
- **Tailwind CSS** (tmavý responzivní design)
- **Lucide React** (ikony)

## Lokální spuštění

1. Nainstaluj závislosti:
   ```bash
   npm install
   ```

2. Vytvoř soubor `.env` podle vzoru `.env.example` a doplň své Spotify Client ID ze Spotify Developer Dashboardu:
   ```bash
   cp .env.example .env
   ```
   V `.env` nastav:
   ```env
   VITE_SPOTIFY_CLIENT_ID=your_spotify_client_id_here
   ```

3. Spusť vývojový server (`http://127.0.0.1:5173`):
   ```bash
   npm run dev
   ```

## Produkční build (Vercel / Netlify)

```bash
npm run build
```
Výstupní statické soubory se vygenerují do složky `dist/`. Na hostingu je potřeba v nastavení projektu přidat proměnnou prostředí `VITE_SPOTIFY_CLIENT_ID`.

## Aktuální stav projektu

- **Dokončeno:** **Fáze T4 – Příprava a prostředí**
  - Založen čistý React + TypeScript + Vite + Tailwind projekt.
  - Připravena konfigurace prostředí pro Spotify Web API (`.env.example`, `vite-env.d.ts`).
  - Vytvořena úvodní obrazovka se zamčeným buttonem pro přihlášení.
- **Další krok (T5):** Implementace přihlášení uživatele přes Spotify OAuth 2.0.

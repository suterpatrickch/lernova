# Lernova – Zensical Proof of Concept

Dieses Repository enthält einen statischen Lernova-Prototyp mit Zensical.

## Lokal bauen

```bash
pip install -r requirements.txt
zensical build
```

Output: `site/`

## GitHub Pages

1. Repository → Settings → Pages → Source: GitHub Actions
2. `.github/workflows/deploy.yml` verwenden
3. In `zensical.toml` `site_url` anpassen, z. B. `https://USERNAME.github.io/REPO/`

## Cloudflare Pages

Build command:

```bash
pip install -r requirements.txt && zensical build
```

Build output directory:

```text
site
```

## Didaktische Struktur

Jede Lernseite folgt genau drei Bereichen:

- **Verstehen** – Grundlagen, Begriffe, Modelle
- **Anwenden** – Situationen, Übungen, Checks
- **Beurteilen** – Abwägen, Realitätscheck, KI-Training

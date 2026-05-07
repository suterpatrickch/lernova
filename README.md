# Lernova – Zensical PoC 3

Diese Version reduziert die Navigation auf Fachbereiche und nutzt pro Lernseite drei sichtbare Tabs:

- 🟢 Verstehen
- 🔵 Anwenden
- 🟣 Beurteilen

Zusätzlich enthält sie:

- „Mehr anzeigen“-Bereiche, damit weniger gescrollt wird
- interne Mini-Quizze ohne externe Plattform
- Prompt-kopieren-Buttons
- kursartige Startseite inspiriert von modernen Onlinekursen
- keine Lernwege, keine Lektionslabels, kein eigener Methoden-/KI-Bereich

## Deployment auf GitHub Pages

1. `site_url` in `zensical.toml` anpassen:

```toml
site_url = "https://DEIN-GITHUB-NAME.github.io/DEIN-REPO-NAME/"
```

2. Dateien ins GitHub-Repo hochladen.
3. GitHub → Settings → Pages → Source: GitHub Actions.
4. Commit pushen.

# Lernova – Zensical PoC 6

Diese Version ist bewusst ruhiger gestaltet:

- keine Nomenzeilen direkt unter Seitentiteln
- einheitlichere Schriftgrössen
- kompakte Tabs für Verstehen / Anwenden / Beurteilen
- kein Sticky-Tab-Header, damit Text nicht überdeckt wird
- Fussnavigation ausgeblendet
- Unterunterkapitel weiterhin als klickbare Buttons auf Übersichtsseiten

Deployment:

```bash
pip install -r requirements.txt && zensical build
```

Output-Ordner: `site`

Für GitHub Pages in `zensical.toml` anpassen:

```toml
site_url = "https://DEIN-GITHUB-NAME.github.io/DEIN-REPO-NAME/"
```

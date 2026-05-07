# Lernova – Zensical Proof of Concept 2

Dieser Proof of Concept zeigt eine moderne, statische Lernplattform für Wirtschaft & Recht mit:

- Zensical statt MkDocs
- Tabs pro Lernseite: Verstehen · Anwenden · Beurteilen
- didaktischen Zeitlabels: 1L Basis · 1L Kompetenz · 2L Vertiefung · Projekt
- internen Mini-Quiz-Elementen ohne externe Plattform
- Prompt-Kopierbuttons für Bring-your-own-AI
- optionalen Linkkarten / Realitätschecks
- GitHub Pages Workflow

## Lokaler Build

```bash
pip install -r requirements.txt
zensical build
```

Der Output liegt im Ordner `site/`.

## GitHub Pages

1. Repository auf GitHub erstellen.
2. Dateien aus diesem ZIP hochladen.
3. In `zensical.toml` die `site_url` anpassen:

```toml
site_url = "https://DEIN-GITHUB-NAME.github.io/DEIN-REPO-NAME/"
```

4. GitHub → Settings → Pages → Source: GitHub Actions.
5. Commit pushen. Der Workflow `.github/workflows/deploy.yml` baut und deployed automatisch.

## Seitenprinzip

Jede konkrete Lernseite hat drei Tabs:

- 🟢 Verstehen: Begriffe, Modelle, Mini-Check
- 🔵 Anwenden: Situation, Aufgabe, Prompt, interne Interaktion
- 🟣 Beurteilen: Transfer, Urteil, Reflexion, Realitätscheck

## Lektionenlogik

- 1L Basis: Verstehen + kurze Anwendung
- 1L Kompetenz: Verstehen + Anwendung mit Fall
- 2L Vertiefung: Lektion 1 Verstehen/Anwenden, Lektion 2 Beurteilen/Diskussion
- Projekt: mehrere Lektionen mit Quellenarbeit oder Produkt

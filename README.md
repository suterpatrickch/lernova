# Lernova Proof of Concept

Dies ist ein statischer Proof of Concept für Lernova mit MkDocs Material.

## Lokal testen

```bash
pip install -r requirements.txt
mkdocs serve
```

Dann im Browser öffnen: http://127.0.0.1:8000

## Build für Hosting

```bash
mkdocs build
```

Die fertige Webseite liegt danach im Ordner `site/`.

## Deployment auf Cloudflare Pages

Empfohlen:

1. Repository auf GitHub erstellen.
2. Diese Dateien hochladen.
3. In Cloudflare Pages neues Projekt erstellen.
4. GitHub-Repository verbinden.
5. Build command: `mkdocs build`
6. Build output directory: `site`
7. Veröffentlichen.

Kostenlose Test-Domain z.B.: `lernova.pages.dev`

Hinweis: Falls du `lenovapages.def` meintest, ist vermutlich `lernova.pages.dev` gemeint.

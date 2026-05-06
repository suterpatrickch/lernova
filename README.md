# Lernova – Zensical Modern Design

Moderner Proof of Concept für eine kostenlose, statische Lernplattform.

## Lokal testen

```bash
pip install -r requirements.txt
zensical serve
```

## Build

```bash
zensical build
```

Der fertige Output liegt im Ordner `site/`.

## GitHub Pages

Nutze GitHub Actions und deploye den Ordner `site`.

## Cloudflare Pages

Build command:

```bash
pip install -r requirements.txt && zensical build
```

Build output directory:

```text
site
```

## Design

Das Design liegt in:

```text
docs/stylesheets/extra.css
```

Die Startseite mit Hero, Cards und Lernräumen liegt in:

```text
docs/index.md
```

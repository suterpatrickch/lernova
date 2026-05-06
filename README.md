# Lernova – Zensical Proof of Concept

Dies ist eine moderne Zensical-Version des Lernova-Prototyps.

## Cloudflare Pages / Workers & Pages

Build command:

```bash
pip install -r requirements.txt && zensical build
```

Deploy command, falls Cloudflare es verlangt:

```bash
npx wrangler pages deploy site --project-name DEIN-PROJEKTNAME
```

Beispiel:

```bash
npx wrangler pages deploy site --project-name lernova2
```

Root directory:

```text
/
```

## Struktur

```text
docs/               Inhalte im Markdown-Format
docs/stylesheets/   Lernova Design-CSS
zensical.toml        Zensical-Konfiguration
requirements.txt     Python-Abhängigkeit
```

## Lokal testen

```bash
pip install -r requirements.txt
zensical serve
```

## Build lokal

```bash
zensical build
```

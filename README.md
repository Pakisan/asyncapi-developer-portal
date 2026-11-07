# asyncapi.pavelon.dev

AsyncAPI tools and reference by Pavel Bodiachevskii: the JetBrains plugin, JAsyncAPI, the language server, and docs for
every AsyncAPI protocol binding and schema. Built with [Astro](https://astro.build) and
[Starlight](https://starlight.astro.build), hosted on [Vercel](https://vercel.com).

The JSON Schemas themselves live in the registry, [schemas.asyncapi.pavelon.dev](https://schemas.asyncapi.pavelon.dev),
which is built from its own repository. This repository holds none of them.

## Run

Node 22 and npm.

```shell
npm ci
npm run dev       # http://localhost:4321
npm run build     # into dist/
npm run preview   # serve dist/
```

`dev` and `build` first download the JSON Schemas the docs are generated from (binding version history and fields,
security scheme fields) from the registry into `node_modules/.cache/json-schemas`. They are never committed or
deployed. Run `npm run fetch:schemas` on its own to refresh them.

## Where things are

| What | Where |
|---|---|
| Docs pages (Markdown) | `src/content/docs/` |
| Home and plugin landing pages | `src/pages/`, `src/components/` |
| Sidebar, SEO and JSON-LD, FAQ answers | `src/data/` |
| Pages generated from the schemas | `src/data/binding-*.ts`, `src/data/security-*.ts` |
| Redirects | `redirects.txt` |
| Internal guides | `docs-internal/` |

Pages are served at their `.html` URLs (`/bindings/amqp/0.3.0/channel.html`); index pages at `dir/`
(`/bindings/amqp/`).

## Redirects and `vercel.json`

`redirects.txt` is the one list of redirect rules. `vercel.json` is generated from it:

```shell
npm run vercel:config
```

The build fails when `vercel.json` is out of date, so commit both together.

To check that URLs search engines know still work on the built site (each must be served, or reach a served page
through one redirect), pass sitemaps, Search Console exports or plain URL lists:

```shell
npm run check:urls -- dist/sitemap-0.xml path/to/search-console-export.csv
```

## Registry `<head>` snippet

`registry/head.html` links each page of the schema registry to the page that documents it here. It is generated from
the docs and pasted into the registry's configuration:

```shell
npm run registry:head
```

The build fails when it is out of date.

## Deploying on Vercel

- Framework: Astro. Install and build commands come from `vercel.json` (`npm ci`, `npm run build`), output `dist`.
- Set the environment variable `VERCEL_DEEP_CLONE=true`. The sitemap's `<lastmod>` dates come from git history, and
  Vercel clones shallow by default; the build log warns when the clone is shallow.
- The build needs network access to the schema registry and the JetBrains Marketplace API (the plugin page falls back
  to committed values when the Marketplace is unreachable).

## IndexNow

After a production deploy, tell Bing, Yandex and the other IndexNow engines what changed:

```shell
npm run indexnow            # dry run: lists new and changed pages
npm run indexnow -- --send  # sends them; commit indexnow.json afterwards
```

Setup and details: [docs-internal/indexnow.md](docs-internal/indexnow.md).

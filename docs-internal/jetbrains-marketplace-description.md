# JetBrains Marketplace: changes to paste

The Marketplace page has no author markup and links back to this site only through the "Documentation" field. These edits
connect it to the plugin landing (which carries the Person, SoftwareApplication and rating markup) and to the docs, so
search engines and AI answers can tie the plugin, its docs and its author together.

Edit at <https://plugins.jetbrains.com/plugin/15673-asyncapi/edit>. Nothing below changes what the plugin does or what is Free and Pro.

## 1. Plugin URLs (Edit plugin → URLs)

| Field | Now | Set to |
| --- | --- | --- |
| Website | empty | `https://asyncapi.pavelon.dev/jetbrains-plugin/` |
| Documentation | `https://asyncapi.pavelon.dev/jetbrains-plugin/` | `https://asyncapi.pavelon.dev/jetbrains-plugin/features` |

## 2. Vendor profile

| Field | Now | Set to |
| --- | --- | --- |
| Website | `https://github.com/Pakisan` | `https://pavelon.dev` (GitHub stays reachable from there) |

## 3. Description: replace the second paragraph

Current text starts with "Turn IntelliJ IDEA, WebStorm, …". Replace that paragraph with:

```html
<p>
  Turn IntelliJ IDEA, WebStorm, PyCharm, GoLand, PhpStorm, Rider, RustRover, CLion, and Android Studio into a
  full <a href="https://www.asyncapi.com/">AsyncAPI</a> studio: create, validate, autocomplete, preview, and
  navigate event-driven API specifications without leaving your IDE. Full support for AsyncAPI
  <strong>2.0.0–2.6.0</strong> and <strong>3.0.0 / 3.1.0</strong>, in YAML and JSON, for Apache Kafka, MQTT,
  AMQP, WebSockets, NATS, Solace, Redis, and more.
</p>
<p>
  Built and maintained by Pavel Bodiachevskii, AsyncAPI Technical Steering Committee member and maintainer of
  <a href="https://github.com/asyncapi/jasyncapi">JAsyncAPI</a>.
  Overview, guides and examples: <a href="https://asyncapi.pavelon.dev/jetbrains-plugin/">asyncapi.pavelon.dev/jetbrains-plugin</a>.
</p>
```

## 4. Description: link each section to its guide

Add one line at the end of each section. The links point to pages that already exist.

After the **For engineers working with Spring applications** heading:

```html
<p>How Spring code maps to AsyncAPI, with examples:
  <a href="https://asyncapi.pavelon.dev/jetbrains-plugin/frameworks/spring/apache-kafka/">Spring for Apache Kafka to AsyncAPI</a>.</p>
```

After **Catch messaging bugs before they ship — Free**:

```html
<p>Every inspection, with code: <a href="https://asyncapi.pavelon.dev/jetbrains-plugin/frameworks/spring/apache-kafka/inspections">Kafka inspections</a>.</p>
```

After **Lint with Spectral or Redocly — Pro**:

```html
<p>Setup: <a href="https://asyncapi.pavelon.dev/jetbrains-plugin/linters/">linters</a>.</p>
```

After the **Supported protocols, bindings &amp; components** list:

```html
<p>What every binding field means, per broker and version:
  <a href="https://asyncapi.pavelon.dev/bindings/">AsyncAPI bindings reference</a>.
  The JSON Schemas the plugin validates with: <a href="https://asyncapi.pavelon.dev/schemas/registry">AsyncAPI JSON Schema registry</a>.</p>
```

After the **What's free / What's Pro** list:

```html
<p>Why there is a Pro tier: <a href="https://asyncapi.pavelon.dev/jetbrains-plugin/freemium-model">the freemium model</a>.</p>
```

## 5. Keep in sync

`src/data/jetbrains-plugin.ts` (landing copy) and `src/content/docs/jetbrains-plugin/features.md` (full list) follow this
description. When a release moves a feature between Free and Pro, change all three. Version, downloads and rating on the
landing come from the Marketplace API at build time, so they need no edits.

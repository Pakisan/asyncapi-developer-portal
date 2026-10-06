---
title: AsyncAPI JSON Schema Registry
description: Validate and autocomplete AsyncAPI documents, bindings and security schemes with the AsyncAPI JSON Schema registry. Works in IDEs, CI pipelines and with AI agents.
layout: doc
head:
  - - meta
    - name: keywords
      content: AsyncAPI JSON Schema, AsyncAPI schema registry, validate AsyncAPI, AsyncAPI autocompletion, AsyncAPI JSON Schema URL, AsyncAPI bindings JSON Schema, AsyncAPI LLM, AsyncAPI AI agents
---

# Validate and autocomplete AsyncAPI with the schema registry

[schemas.asyncapi.pavelon.dev](https://schemas.asyncapi.pavelon.dev) is a registry of AsyncAPI JSON Schemas. Point a tool, a pipeline or an AI agent at a schema URL and it can validate an AsyncAPI document, autocomplete it, or learn the structure of the specification.

It is a separate thing from this documentation:

|  | Documentation (this site) | Schema registry |
|---|---|---|
| Purpose | Explains the schemas and bindings with examples | Machine-readable schemas to validate and complete documents |
| Audience | People writing or generating AsyncAPI | IDEs, CI, code generators, AI agents and LLMs |
| Where | [/schemas/](/schemas/) and [/bindings/](/bindings/) | [schemas.asyncapi.pavelon.dev](https://schemas.asyncapi.pavelon.dev) |

::: info Nightly channel
The registry is a nightly build channel with refactored and improved AsyncAPI JSON Schemas. It carries the latest changes first.
:::

## Where the schemas are

Every schema is served as `application/schema+json` with open CORS, so browsers, editors and agents can fetch it directly. URLs have no `.json` extension.

| What | URL |
|---|---|
| AsyncAPI 3.0.0 document | `https://schemas.asyncapi.pavelon.dev/draft-07/schemas/v3.0.0/asyncapi` |
| AsyncAPI 3.1.0 document | `https://schemas.asyncapi.pavelon.dev/draft-07/schemas/v3.1.0/asyncapi` |
| Schema Object | `https://schemas.asyncapi.pavelon.dev/draft-07/schemas/schema` |
| Multi-format schema | `https://schemas.asyncapi.pavelon.dev/draft-07/schemas/multiformatschema` |
| Shared v3 parts (servers, channels, operations, security, tags) | `https://schemas.asyncapi.pavelon.dev/draft-07/schemas/v3/` |
| A broker binding, for example Kafka 0.5.0 channel | `https://schemas.asyncapi.pavelon.dev/draft-07/bindings/apache-kafka/0.5.0/channel` |
| Avro and OpenAPI schema formats | `https://schemas.asyncapi.pavelon.dev/draft-07/integrations/` |

Browse the registry to find any other schema. Older AsyncAPI 2.x documents are listed under `/draft-07/schemas/`.

Learn what each schema means in the [bindings documentation](/bindings/) and the [schemas documentation](/schemas/).

## Use it in your editor

### YAML files (VS Code and other editors with the YAML language server)

Add a comment at the top of the file:

```yaml
# yaml-language-server: $schema=https://schemas.asyncapi.pavelon.dev/draft-07/schemas/v3.0.0/asyncapi
asyncapi: 3.0.0
info:
  title: Orders
  version: 1.0.0
```

Or map it once for the whole project in `settings.json`:

```json
{
  "yaml.schemas": {
    "https://schemas.asyncapi.pavelon.dev/draft-07/schemas/v3.0.0/asyncapi": "asyncapi*.yaml"
  }
}
```

### JetBrains IDEs

Open **Settings → Languages & Frameworks → Schemas and DTDs → JSON Schema Mappings**, add a mapping, paste the schema URL, choose **JSON Schema version 7** and map it to your AsyncAPI files.

The [AsyncAPI plugin for JetBrains IDEs](/jetbrains-plugin/) validates and completes AsyncAPI out of the box, so you don't need a mapping for it.

## Validate in CI

[check-jsonschema](https://check-jsonschema.readthedocs.io) reads the schema from a URL and validates YAML or JSON:

```bash
pip install check-jsonschema
check-jsonschema \
  --schemafile https://schemas.asyncapi.pavelon.dev/draft-07/schemas/v3.0.0/asyncapi \
  asyncapi.yaml
```

A document with a missing required field fails with a message such as `$.info: 'version' is a required property`.

Validate just one part, such as a Kafka channel binding:

```bash
check-jsonschema \
  --schemafile https://schemas.asyncapi.pavelon.dev/draft-07/bindings/apache-kafka/0.5.0/channel \
  kafka-channel-binding.json
```

## Use it with AI agents and LLMs

The schemas are the most precise description of what a valid AsyncAPI document looks like. An agent can use them in three ways:

1. **Learn the structure.** Fetch the document schema and the binding schema for your broker before writing a document, instead of guessing field names.
2. **Validate what it generated.** Run the generated document against the schema (for example with the CI command above) and fix every reported error before showing the result.
3. **Constrain one part.** Use a single binding or component schema to generate only that piece, such as a Kafka channel binding, and drop it into the document.

Tip for prompts: give the agent the exact schema URL for your AsyncAPI version and the binding versions you target.

---
title: JSON Schema in AsyncAPI - message payloads, examples, maps and $ref
description: How AsyncAPI uses JSON Schema for message payloads. AsyncAPI vs JSON Schema, where examples go, maps with additionalProperties, conditional required fields, $ref to other schemas, and plain JSON Schema files.
head:
  - tag: meta
    attrs:
      name: keywords
      content: AsyncAPI JSON Schema, AsyncAPI payload schema, AsyncAPI message payload example, JSON Schema vs AsyncAPI, AsyncAPI schema examples, AsyncAPI additionalProperties map, AsyncAPI $ref schema, AsyncAPI conditionally required, application/schema+json
heading: "JSON Schema in AsyncAPI"
---

AsyncAPI describes message payloads with JSON Schema. A payload without a `schemaFormat` is an [AsyncAPI Schema Object](/schemas/schema.html): JSON Schema Draft 07 plus a few AsyncAPI keywords. This page answers the questions that come up most when writing those payloads.

## AsyncAPI vs JSON Schema

They describe different things and work together:

- **AsyncAPI** describes an event-driven API: servers, channels, operations (send and receive), messages, bindings and security.
- **JSON Schema** describes the shape of data. AsyncAPI uses it for each message's `payload` and `headers`.

An AsyncAPI document is itself validated by a JSON Schema (see the [schema registry](/schemas/registry.html)), which is a third, separate thing.

The AsyncAPI Schema Object adds these keywords to Draft 07:

| Keyword | What it adds |
|---|---|
| `discriminator` | The property that tells which `oneOf`/`allOf` variant a value is |
| `externalDocs` | A link to external documentation for this schema |
| `deprecated` | Marks the schema as no longer to be used |
| `x-…` | Specification extensions for your own tooling |

## A payload with JSON Schema

```yaml
asyncapi: 3.0.0
info:
  title: Orders
  version: 1.0.0
channels:
  orderPlaced:
    address: orders.placed
    messages:
      orderPlaced:
        $ref: '#/components/messages/orderPlaced'
operations:
  onOrderPlaced:
    action: receive
    channel:
      $ref: '#/channels/orderPlaced'
components:
  messages:
    orderPlaced:
      contentType: application/json
      payload:
        $ref: '#/components/schemas/OrderPlaced'
      examples:
        - name: smallOrder
          summary: An order with one line
          payload:
            orderId: 9f4c2a1e-0b7d-4f43-9a51-2a4f0c6f2d10
            placedAt: '2026-11-06T10:15:00Z'
            lines:
              - sku: BOOK-42
                quantity: 1
  schemas:
    OrderPlaced:
      type: object
      required: [orderId, placedAt, lines]
      properties:
        orderId:
          type: string
          format: uuid
        placedAt:
          type: string
          format: date-time
        lines:
          type: array
          minItems: 1
          items:
            $ref: '#/components/schemas/OrderLine'
    OrderLine:
      type: object
      required: [sku, quantity]
      properties:
        sku:
          type: string
        quantity:
          type: integer
          minimum: 1
```

## Where examples go

There are two places, for two purposes:

- **The message's `examples`**: whole example messages, each with an optional `name`, `summary`, `headers` and `payload`, as above. Documentation and mock servers show these.
- **The schema's `examples`** keyword: example values for one schema or property, for example `examples: [BOOK-42]` on `sku`. Use it for single fields.

The specification doesn't require tools to check message examples against the payload schema. AsyncAPI CLI does for 2.x documents (rule `asyncapi2-message-examples`), so keep them valid either way.

## A map whose values follow another schema

A JSON object with free-form keys is a map. Describe the values with `additionalProperties`:

```yaml
components:
  schemas:
    StockLevels:
      description: Stock per warehouse ID
      type: object
      additionalProperties:
        $ref: '#/components/schemas/Stock'
      propertyNames:
        pattern: '^WH-[0-9]{3}$'
    Stock:
      type: object
      properties:
        available:
          type: integer
        reserved:
          type: integer
```

`propertyNames` is optional and constrains the keys.

## A field required only in some cases

Draft 07 has no `dependentRequired`; use `if`/`then` (or `dependencies`):

```yaml
type: object
properties:
  paymentMethod:
    type: string
    enum: [card, invoice]
  cardToken:
    type: string
if:
  properties:
    paymentMethod:
      const: card
then:
  required: [cardToken]
```

`cardToken` is required only when `paymentMethod` is `card`.

## Reference other schemas

- In the same document: `$ref: '#/components/schemas/OrderLine'`.
- In another file: `$ref: './schemas/order-line.json'` or a URL. The file is a schema, not a whole AsyncAPI document.
- Into another file: `$ref: './common.yaml#/components/schemas/Money'`.

## Use plain JSON Schema files

If your schemas are standalone JSON Schema Draft 07 files, say so with `schemaFormat`, so tools don't read AsyncAPI keywords into them:

```yaml
components:
  messages:
    orderPlaced:
      payload:
        schemaFormat: application/schema+json;version=draft-07
        schema:
          $ref: './schemas/order-placed.schema.json'
```

Use `application/schema+yaml;version=draft-07` for YAML files. In AsyncAPI 2.x, put `schemaFormat` on the message and the `$ref` directly in `payload`. To convert a JSON Schema into an AsyncAPI document, reference it like this from a message: the rest of the document (channels, operations) has to be written, since JSON Schema doesn't know about them.

## Related

- [Schema Object](/schemas/schema.html) and [Multi Format Schema Object](/schemas/multiFormatSchema.html)
- [Avro schemas in AsyncAPI](/schemas/formats/avro.html)
- [Protobuf schemas in AsyncAPI](/schemas/formats/protobuf.html)
- [Validate AsyncAPI with the schema registry](/schemas/registry.html)

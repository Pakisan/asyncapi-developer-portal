---
title: Protobuf schemas in AsyncAPI - .proto messages as payloads
description: How to describe a Protocol Buffers (Protobuf) message as an AsyncAPI 3.0 or 2.x payload, with the schemaFormat value, a full example, and what to do when a tool says the schema format is unsupported.
head:
  - tag: meta
    attrs:
      name: keywords
      content: AsyncAPI Protobuf, AsyncAPI protocol buffers, AsyncAPI proto, application/vnd.google.protobuf, Protobuf schemaFormat, AsyncAPI gRPC, AsyncAPI Kafka Protobuf, unsupported schemaFormat
heading: "Protobuf schemas in AsyncAPI"
---

A Protocol Buffers message can be an AsyncAPI payload. Wrap the `.proto` source in a [Multi Format Schema Object](/schemas/multiFormatSchema.html) with `schemaFormat: application/vnd.google.protobuf;version=3` (or `version=2` for proto2), and put the source text in `schema`.

Unlike Avro, the schema is a string: the content of a `.proto` file, not a JSON or YAML object.

## AsyncAPI 3.0

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
      contentType: application/x-protobuf
      payload:
        schemaFormat: application/vnd.google.protobuf;version=3
        schema: |
          syntax = "proto3";

          package example.orders;

          message OrderPlaced {
            string order_id = 1;
            string customer_id = 2;
            repeated LineItem items = 3;
            int64 placed_at = 4; // Unix epoch, milliseconds
          }

          message LineItem {
            string sku = 1;
            int32 quantity = 2;
          }
```

When the source holds several messages, the payload is the one no other message uses as a field type: here `OrderPlaced`, because `LineItem` is a field of it. If more than one message qualifies, mark the payload with a `// @RootNode` comment, or parsing fails. Leading comments become descriptions.

## AsyncAPI 2.x

`schemaFormat` belongs to the message, and the `.proto` text goes in `payload`:

```yaml
asyncapi: 2.6.0
info:
  title: Orders
  version: 1.0.0
channels:
  orders.placed:
    subscribe:
      message:
        schemaFormat: application/vnd.google.protobuf;version=3
        contentType: application/x-protobuf
        payload: |
          syntax = "proto3";
          message OrderPlaced {
            string order_id = 1;
          }
```

## "Unsupported schemaFormat" errors

AsyncAPI tools must understand JSON Schema and AsyncAPI schemas; every other format is a plugin. Protobuf support lives in `@asyncapi/protobuf-schema-parser`. AsyncAPI CLI and Studio include it. If another validator or generator reports that `application/vnd.google.protobuf` is unsupported, it runs the parser without that plugin. With the JavaScript parser, register it yourself:

```js
import { Parser } from '@asyncapi/parser'
import { ProtoBuffSchemaParser } from '@asyncapi/protobuf-schema-parser'

const parser = new Parser()
parser.registerSchemaParser(ProtoBuffSchemaParser())
const { document, diagnostics } = await parser.parse(asyncapiYaml)
```

JSON Schema validators that only check the document's structure, such as the [registry schemas](/schemas/registry.html), accept any string in `schema` for Protobuf; they don't compile it.

## Related

- [Multi Format Schema Object](/schemas/multiFormatSchema.html)
- [Avro schemas in AsyncAPI](/schemas/formats/avro.html)
- [JSON Schema in AsyncAPI](/schemas/formats/json-schema.html)

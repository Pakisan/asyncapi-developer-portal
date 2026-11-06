---
title: Avro schemas in AsyncAPI - inline, $ref to .avsc, Kafka schema registry
description: How to use an Apache Avro schema as a message payload in AsyncAPI 3.0 and 2.x, inline or from an .avsc file, with the right schemaFormat, contentType and Kafka schema registry settings.
head:
  - tag: meta
    attrs:
      name: keywords
      content: AsyncAPI Avro, AsyncAPI avsc, Avro schemaFormat, application/vnd.apache.avro, AsyncAPI Kafka Avro, AsyncAPI schema registry, Confluent schema registry AsyncAPI, embed Avro schema in AsyncAPI
heading: "Avro schemas in AsyncAPI"
---

AsyncAPI describes a message payload with JSON Schema by default. To use an Avro schema instead, wrap it in a [Multi Format Schema Object](/schemas/multiFormatSchema.html): a `schemaFormat` that says "this is Avro" and a `schema` with the Avro definition. You can write the Avro schema inline or point to your existing `.avsc` file.

## AsyncAPI 3.0

In 3.0 the payload itself is the Multi Format Schema Object, so `schemaFormat` and `schema` sit under `payload`:

```yaml
asyncapi: 3.0.0
info:
  title: Users
  version: 1.0.0
channels:
  userSignedUp:
    address: user.signedup
    messages:
      userSignedUp:
        $ref: '#/components/messages/userSignedUp'
operations:
  onUserSignedUp:
    action: receive
    channel:
      $ref: '#/channels/userSignedUp'
components:
  messages:
    userSignedUp:
      contentType: application/octet-stream
      payload:
        schemaFormat: application/vnd.apache.avro;version=1.9.0
        schema:
          type: record
          name: UserSignedUp
          namespace: com.example.users
          fields:
            - name: userId
              type: string
            - name: email
              type: string
            - name: signedUpAt
              type:
                type: long
                logicalType: timestamp-millis
```

The Avro schema is written as YAML here; it is the same object as the JSON in an `.avsc` file.

### Reference an .avsc file

Keep the Avro schema where your build already uses it and reference it:

```yaml
components:
  messages:
    userSignedUp:
      payload:
        schemaFormat: application/vnd.apache.avro;version=1.9.0
        schema:
          $ref: './avro/user-signed-up.avsc'
```

The specification requires the referenced file to be in the same format as the `schemaFormat` that references it: an Avro schema can only reference Avro.

## AsyncAPI 2.x

In 2.x `schemaFormat` belongs to the message, next to `payload`:

```yaml
asyncapi: 2.6.0
info:
  title: Users
  version: 1.0.0
channels:
  user.signedup:
    subscribe:
      message:
        schemaFormat: application/vnd.apache.avro;version=1.9.0
        contentType: application/octet-stream
        payload:
          type: record
          name: UserSignedUp
          namespace: com.example.users
          fields:
            - name: userId
              type: string
            - name: email
              type: string
```

A `payload: { $ref: './avro/user-signed-up.avsc' }` works with the AsyncAPI parser, which resolves references before it validates. Plain JSON Schema validators reject it, because the 2.x specification schema expects the Avro schema itself there; the 3.0 schema allows a reference explicitly.

When you migrate to 3.0, move `schemaFormat` into the payload and the old payload under `schema`.

## Which schemaFormat to use

The value names the Avro specification version your schema follows:

| Schema written as | schemaFormat |
|---|---|
| Avro, JSON or YAML | `application/vnd.apache.avro;version=1.9.0` |
| Avro in JSON | `application/vnd.apache.avro+json;version=1.9.0` |
| Avro in YAML | `application/vnd.apache.avro+yaml;version=1.9.0` |

Versions 1.9.0 to 1.11.1 are listed in the [Multi Format Schema page](/schemas/multiFormatSchema.html#avro). Tools are not required to support Avro: the AsyncAPI parser handles it through `@asyncapi/avro-schema-parser`, which AsyncAPI CLI and Studio include.

## schemaFormat is not contentType

- `schemaFormat` says what language the **schema** is written in: Avro.
- `contentType` (or the document's `defaultContentType`) says how the **bytes on the wire** are encoded.

Avro data is usually binary, so a `defaultContentType: application/json` left over from a template is wrong for it. Avro binary has no single standard media type; `application/octet-stream` and `avro/binary` are both common. If producers really send Avro's JSON encoding, `application/json` is right.

## Kafka and a schema registry

With Confluent Schema Registry or Apicurio, every message carries the ID of the schema that wrote it. The [Kafka message binding](/bindings/apache-kafka/0.5.0/message.html) says where:

```yaml
components:
  messages:
    userSignedUp:
      bindings:
        kafka:
          bindingVersion: 0.5.0
          key:
            type: string
            description: User ID, used for partitioning
          schemaIdLocation: payload
          schemaIdPayloadEncoding: confluent
          schemaLookupStrategy: TopicNameStrategy
      payload:
        schemaFormat: application/vnd.apache.avro;version=1.9.0
        schema:
          $ref: './avro/user-signed-up.avsc'
```

- `schemaIdLocation`: `payload` (Confluent puts a magic byte and a 4-byte ID in front of the data) or `header`.
- `schemaIdPayloadEncoding`: the vendor or number of bytes, for example `confluent` or `apicurio-new`.
- `schemaLookupStrategy`: the subject naming strategy your serializer uses, such as Confluent's default `TopicNameStrategy`.

The binding's `key` is a schema too; it describes the record key in JSON Schema terms.

## Related

- [Multi Format Schema Object](/schemas/multiFormatSchema.html): every supported format and version
- [Protobuf schemas in AsyncAPI](/schemas/formats/protobuf.html)
- [JSON Schema in AsyncAPI](/schemas/formats/json-schema.html)
- [Apache Kafka bindings](/bindings/apache-kafka/)

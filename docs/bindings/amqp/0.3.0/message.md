---
title: AMQP Message Binding v0.3.0 - Content Encoding and Message Type
description: Learn to use AsyncAPI's AMQP message binding to specify `contentEncoding` (e.g., gzip) and a `messageType` for better message organization and processing in AMQP 0-9-1 applications.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: AMQP message binding, AsyncAPI, RabbitMQ, contentEncoding, messageType, message properties, data serialization, event-driven architecture
  - - meta
    - property: og:title
      content: AMQP Message Binding v0.3.0 - Content Encoding and Message Type
  - - meta
    - property: og:description
      content: Learn to use AsyncAPI's AMQP message binding to specify `contentEncoding` (e.g., gzip) and a `messageType` for better message organization and processing in AMQP 0-9-1 applications.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/amqp/0.3.0/message.html
  - - meta
    - property: og:image
      content: /bindings/amqp/0.3.0/message.png
  - - meta
    - name: twitter:title
      content: AMQP Message Binding v0.3.0 - Content Encoding and Message Type
  - - meta
    - name: twitter:description
      content: Learn to use AsyncAPI's AMQP message binding to specify `contentEncoding` (e.g., gzip) and a `messageType` for better message organization and processing in AMQP 0-9-1 applications.
---

# AMQP 0-9-1 Message Binding v0.3.0

The AMQP message binding defines message-specific properties for AMQP 0-9-1, allowing you to specify content encoding and an application-specific message type.

## Overview

This binding object provides metadata about the message payload, helping consumers understand how to decode and process it.

## Message Properties

| Property | Type | Description |
|---|---|---|
| `contentEncoding` | string | A MIME-type encoding for the message content, such as `gzip` or `application/json`. |
| `messageType` | string | An application-specific string that describes the message type, e.g., `user.signup` or `order.created`. |
| `bindingVersion`| string | The version of this binding. For `v0.3.0`, this MUST be `0.3.0`. |

## Examples

### Gzip Content Encoding

This example specifies that the message payload is compressed using `gzip`.

```yaml
messages:
  userProfile:
    bindings:
      amqp:
        contentEncoding: 'gzip'
        messageType: 'user.profile.update'
        bindingVersion: '0.3.0'
```

### Application-Specific Message Type

This example uses `messageType` to label the event, which helps consumers route or handle the message correctly.

```yaml
messages:
  orderEvent:
    bindings:
      amqp:
        messageType: 'order.created.v2'
        bindingVersion: '0.3.0'
```

## Use Cases

### Content Compression
Use `contentEncoding` to specify that a message payload is compressed (e.g., with `gzip`) to reduce network bandwidth and storage costs, especially for large payloads.

### Message-Driven Logic
Use `messageType` to implement message-driven logic where consumers can inspect this property to decide how to deserialize and process the payload without having to inspect the payload itself.

### Event Versioning
The `messageType` property can also be used to version events (e.g., `user.created.v1`, `user.created.v2`), allowing for smoother schema evolution and backward compatibility.

## Versioning

This binding is for version `0.3.0` of the AMQP binding specification.

## Related Links

- [AMQP 0-9-1 Specification](https://www.rabbitmq.com/amqp-0-9-1-reference.html)
- [RabbitMQ Documentation](https://www.rabbitmq.com/documentation.html)
- [AsyncAPI AMQP Bindings Documentation](/bindings/amqp/)
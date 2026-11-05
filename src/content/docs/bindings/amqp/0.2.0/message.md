---
title: AMQP Message Binding v0.2.0 – Content Encoding & Type
description: Use AsyncAPI's AMQP message binding v0.2.0 to specify content encoding and message type for better message organization and processing in AMQP 0-9-1 applications.
ogImage: /bindings/amqp/0.2.0/message.png
head:
  - tag: meta
    attrs:
      name: keywords
      content: AMQP message binding v0.2.0, AsyncAPI, RabbitMQ, contentEncoding, messageType, message properties, data serialization, event-driven architecture
heading: "AMQP 0-9-1 Message Binding v0.2.0"
---

The AMQP message binding defines message-specific properties for AMQP 0-9-1, allowing you to specify content encoding and an application-specific message type.

## Overview

This binding object provides metadata about the message payload, helping consumers understand how to decode and process it.

## Message Properties

| Property | Type | Description |
|---|---|---|
| `contentEncoding` | string | A MIME-type encoding for the message content, such as `gzip` or `application/json`. |
| `messageType` | string | An application-specific string that describes the message type, e.g., `user.signup` or `order.created`. |
| `bindingVersion`| string | The version of this binding. For `v0.2.0`, this MUST be `0.2.0`. |

## Examples

### Gzip Content Encoding

```yaml
messages:
  userProfile:
    bindings:
      amqp:
        contentEncoding: 'gzip'
        messageType: 'user.profile.update'
        bindingVersion: '0.2.0'
```

### Application-Specific Message Type

```yaml
messages:
  orderEvent:
    bindings:
      amqp:
        messageType: 'order.created.v2'
        bindingVersion: '0.2.0'
```

## Use Cases

### Content Compression
Use `contentEncoding` to specify that a message payload is compressed (e.g., with `gzip`) to reduce network bandwidth and storage costs, especially for large payloads.

### Message-Driven Logic
Use `messageType` to implement message-driven logic where consumers can inspect this property to decide how to deserialize and process the payload without having to inspect the payload itself.

### Event Versioning
The `messageType` property can also be used to version events (e.g., `user.created.v1`, `user.created.v2`), allowing for smoother schema evolution and backward compatibility.

## Migration Guide to v0.3.0

No breaking changes were introduced in this version of the binding. It is fully compatible with v0.3.0.
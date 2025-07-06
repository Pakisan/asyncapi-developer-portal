---
title: Mercure Message Binding v0.1.0 - SSE Data Payload
description: Configure Mercure message bindings for Server-Sent Events data payload. Define message structure and content for real-time updates with examples.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Mercure message binding v0.1.0, AsyncAPI, Server-Sent Events, SSE, data payload, real-time updates
  - - meta
    - property: og:title
      content: Mercure Message Binding v0.1.0 - SSE Data Payload
  - - meta
    - property: og:description
      content: Configure Mercure message bindings for Server-Sent Events data payload. Define message structure and content for real-time updates with examples.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/mercure/0.1.0/message.html
  - - meta
    - name: og:image
      content: /bindings/mercure/0.1.0/message.png
  - - meta
    - name: twitter:title
      content: Mercure Message Binding v0.1.0 - SSE Data Payload
  - - meta
    - name: twitter:description
      content: Configure Mercure message bindings for Server-Sent Events data payload. Define message structure and content for real-time updates with examples.
  - - link
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/mercure/0.1.0/message.html
---

# Mercure Message Binding v0.1.0

The Mercure message binding describes the data payload that is sent as part of a Server-Sent Event (SSE) from the Mercure Hub.

## Overview

In Mercure, the message is the `data` field of the `POST` request sent to the Hub. This content is then pushed to subscribers inside the `data` field of an SSE. This binding is used on an AsyncAPI message object to indicate that its payload represents this data. As of `v0.1.0`, this binding is a placeholder and has no configurable properties. Its purpose is purely informational.

## Message Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.1.0`) |

## Mercure Message Concepts

### The `data` Field

The core of a Mercure update is the `data` parameter. This is typically a string, often formatted as JSON, but it can be any text-based content. The Mercure Hub takes this data and wraps it in an SSE structure.

A simple `data` string like `{"message": "hello"}` becomes an SSE event like this:

```
id: urn:uuid:c32f8429-f442-4217-9166-5868a85c4a16
data: {"message": "hello"}
```

### Private vs. Public Updates

While not a property of the message payload itself, it's important to know that the publisher can mark an update as `private`. This tells the Hub to only deliver the message to subscribers who have presented a valid JSON Web Token (JWT) authorizing them to receive it. The message content itself is not encrypted by Mercure.

## Example

This example defines a `message` that could be published to a Mercure topic.

```yaml
messages:
  userUpdate:
    summary: An update about a user's profile.
    payload:
      type: object
      properties:
        id:
          type: string
          description: The user's ID.
        newStatus:
          type: string
          description: The new status of the user.
    bindings:
      mercure:
        bindingVersion: '0.1.0'
```

When published, the `payload` object would be serialized (e.g., to a JSON string) and sent as the `data` parameter in the `POST` request to the Mercure Hub.

## Changelog

### Version 0.1.0
- Initial release of the Mercure message binding.
- The binding is a placeholder with no specific properties, serving to identify the message payload as the data for a Mercure SSE event.
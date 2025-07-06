---
title: MQTT Message Binding v0.2.0 - Request/Reply Configuration
description: Configure MQTT message bindings for request/reply patterns. Define correlation data and response topics for IoT and real-time messaging.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: MQTT message binding v0.2.0, AsyncAPI, request-reply, correlation data, response topic, MQTT, IoT messaging
  - - meta
    - property: og:title
      content: MQTT Message Binding v0.2.0 - Request/Reply Configuration
  - - meta
    - property: og:description
      content: Configure MQTT message bindings for request/reply patterns. Define correlation data and response topics for IoT and real-time messaging.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/mqtt/0.2.0/message.html
  - - meta
    - name: og:image
      content: /bindings/mqtt/0.2.0/message.png
  - - meta
    - name: twitter:title
      content: MQTT Message Binding v0.2.0 - Request/Reply Configuration
  - - meta
    - name: twitter:description
      content: Configure MQTT message bindings for request/reply patterns. Define correlation data and response topics for IoT and real-time messaging.
  - - link
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/mqtt/0.2.0/message.html
---

# MQTT Message Binding v0.2.0

The MQTT message binding allows for defining properties of a message that are specific to the MQTT protocol, particularly for implementing patterns like request/reply.

## Overview

While MQTT is fundamentally a publish-subscribe protocol, it is powerful enough to support other patterns. This binding provides the necessary metadata to formally define request/reply interactions. It includes properties for `correlationData` and a `responseTopic`, which are key features of MQTT 5 but can be implemented in any version.

## Message Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.2.0`) |
| `correlationData` | [Schema Object](https://asyncapi.pavelon.dev/schemas/schema.json) | No | Schema definition for the correlation data. |
| `contentType` | string | No | Describes the content type of the message payload. |
| `responseTopic` | string or [Schema Object](https://asyncapi.pavelon.dev/schemas/schema.json) | No | The topic where a response message should be sent. |
| `payloadFormatIndicator` | integer | No | Must be `0` (unspecified bytes) or `1` (UTF-8). |

## Property Details

### `correlationData`

This is a unique identifier set by the publisher of a request message. When a consumer sends a response, it includes this same identifier. This allows the original requester to match incoming responses to the requests it sent. It is essential for asynchronous request/reply patterns.

### `responseTopic`

This is the MQTT topic string that the publisher of a request provides. It tells the consumer of the request where to publish the corresponding response message.

### `contentType`

A string describing the message payload's format (e.g., `application/json`). This helps the consumer correctly parse the payload. It should not conflict with the `contentType` field of the main AsyncAPI Message Object.

### `payloadFormatIndicator`

A flag from MQTT 5 that indicates the nature of the payload. `1` signifies that the payload is UTF-8 encoded text, while `0` (the default) indicates it is an unstructured sequence of bytes.

## Example

### Request/Reply Message Definition

This example defines a request message (`getDeviceState`) that asks a device for its current state. It specifies where the response should be sent (`responseTopic`) and provides a schema for the `correlationData` (a UUID).

```yaml
messages:
  getDeviceState:
    summary: A request for a device's current state.
    correlationId:
      id: request-id-abc
      location: "$message.header#/correlationId"
    bindings:
      mqtt:
        bindingVersion: '0.2.0'
        contentType: 'application/json'
        correlationData:
          type: string
          format: uuid
        responseTopic: 'devices/thermostat-123/state/response'
```

The corresponding response message (`deviceState`) would be sent to the `responseTopic`. The broker and client would ensure the `correlationData` from the request is included in the response.

```yaml
messages:
  deviceState:
    summary: The current state of a device.
    payload:
      type: object
      properties:
        temperature:
          type: number
        humidity:
          type: number
```

## Changelog

### Version 0.2.0
- Initial release of the generic MQTT message binding.
- Added `correlationData`, `responseTopic`, `contentType`, and `payloadFormatIndicator` to support request/reply and message metadata.
- Schema validation for all properties.
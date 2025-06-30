---
title: MQTT 5.0 Message Binding v0.2.0 - Message Property Configuration
description: Learn how to configure MQTT 5.0 message bindings using AsyncAPI v0.2.0. Define message properties like expiry, content type, and correlation data for IoT and real-time messaging.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: MQTT 5.0 message binding, AsyncAPI, MQTT message properties, message expiry, correlation data, IoT messaging, M2M, event-driven architecture
  - - meta
    - property: og:title
      content: MQTT 5.0 Message Binding v0.2.0 - Message Property Configuration
  - - meta
    - property: og:description
      content: Learn how to configure MQTT 5.0 message bindings using AsyncAPI v0.2.0. Define message properties like expiry, content type, and correlation data for IoT and real-time messaging.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/mqtt5/0.2.0/message.html
  - - meta
    - name: twitter:title
      content: MQTT 5.0 Message Binding v0.2.0 - Message Property Configuration
  - - meta
    - name: twitter:description
      content: Learn how to configure MQTT 5.0 message bindings using AsyncAPI v0.2.0. Define message properties like expiry, content type, and correlation data for IoT and real-time messaging.
  - - meta
    - name: "og:image"
      content: "/bindings/mqtt5/0.2.0/message.png"
---

# MQTT 5.0 Message Binding v0.2.0

> [!WARNING]
> MQTT version 5 specific bindings are deprecated in favor of [MQTT channel binding](../../mqtt/0.2.0/channel) that are not version specific.

The MQTT 5.0 message binding describes the properties of a message that are specific to the MQTT protocol. This binding is currently a placeholder and does not define any specific properties, but it's where future message-specific configurations, such as Message Expiry Interval, Content Type, and Correlation Data, would be defined.

## Overview

MQTT 5.0 introduced a range of new properties that can be attached to a message to control its lifecycle and provide additional metadata. The message binding in AsyncAPI provides the mechanism to formally define these properties for a given message.

## Message Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.2.0`) |

## Property Details

### Binding Version

Specifies the version of the MQTT 5.0 message binding being used.

**Default:** `0.2.0`

**Note:** This binding object is currently empty and reserved for future properties.

## MQTT 5.0 Message Concepts

While not yet formal properties in the binding, these MQTT 5.0 features are key to message-level configuration:

### Message Expiry Interval

This property, set by the publisher, tells the broker how long to retain a message for subscribers that are not currently connected (but have a persistent session). If the interval passes and the message has not been delivered, the broker can discard it. This is useful for time-sensitive commands or data that becomes stale.

### Content Type and Payload Format Indicator

- **Payload Format Indicator**: A boolean flag indicating whether the message payload is UTF-8 encoded (`true`) or unstructured binary data (`false`).
- **Content Type**: A UTF-8 string that describes the format of the payload, such as `application/json` or `image/png`. This helps the receiving client to parse the payload correctly.

### Correlation Data and Response Topic

These properties are essential for implementing the request/response pattern:

- **Response Topic**: The publisher includes this topic to tell the recipient where to send a response message.
- **Correlation Data**: The publisher includes data (like a unique request ID) that the recipient should include in the response message, allowing the original publisher to correlate the response with its request.

### User Properties

A list of key-value pairs that can be used to add custom metadata to a message. This is highly flexible and can be used for application-specific purposes like message tracing or routing hints.

## Examples

The following examples show how a message binding might be used, anticipating future additions.

### Message with Expiry and JSON Content Type

```yaml
messages:
  timedCommand:
    summary: A command that is only valid for 60 seconds.
    bindings:
      mqtt5:
        # messageExpiryInterval: 60  <-- Anticipated property
        # contentType: 'application/json' <-- Anticipated property
        bindingVersion: '0.2.0'
    payload:
      type: object
      properties:
        command:
          type: string
```

### Request-Response Message

```yaml
messages:
  deviceStateRequest:
    summary: A request for the current state of a device.
    bindings:
      mqtt5:
        # responseTopic: 'device/123/state/response' <-- Anticipated
        # correlationData: 'request-abc-123' <-- Anticipated
        bindingVersion: '0.2.0'
```

## Best Practices

- **Use Message Expiry**: For any data that is time-sensitive, set a `messageExpiryInterval` to prevent clients from receiving stale information.
- **Define Content Type**: Always specify the `contentType` and `payloadFormatIndicator` so consumers know how to process the message payload.
- **Leverage User Properties**: Use user properties for application-level metadata instead of encoding it into the payload. This keeps the payload clean and makes the metadata easily accessible for brokers or intermediate services.

## Changelog

### Version 0.2.0
- Initial release of the MQTT 5.0 message binding.
- The binding is currently a placeholder for future enhancements.
- Schema validation for `bindingVersion`.
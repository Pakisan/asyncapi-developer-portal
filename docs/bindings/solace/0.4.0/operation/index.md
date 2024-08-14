---
title: Solace operation binding
layout: doc
prev: false
next: false
head:
  - - meta
    - name: "og:title"
      content: "Solace operation binding"
  - - meta
    - name: "og:description"
      content: "How to use Solace with AsyncAPI operation binding"
  - - meta
    - name: "og:image"
      content: "/bindings/solace.png"
---

# {{ $frontmatter.title }}

Contains information about the channel representation in Solace.

## Structure

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/solace/0.4.0/operation.json"/>

## Examples

```json
{
    "bindingVersion": "0.4.0",
    "destinations": [
        {
            "destinationType": "queue",
            "queue": {
                "name": "sampleQueue",
                "topicSubscriptions": [
                    "samples/*"
                ],
                "accessType": "nonexclusive"
            }
        },
        {
            "destinationType": "topic",
            "topicSubscriptions": [
                "samples/*"
            ]
        }
    ]
}
```

## Changelog

### Added

#### timeToLive

Interval in milliseconds or a Schema Object containing the definition of the lifetime of the message.

```json
{
    "timeToLive": { // [!code ++]
        "type": "integer", // [!code ++]
        "description": "Interval in milliseconds or a Schema Object containing the definition of the lifetime of the message." // [!code ++]
    } // [!code ++]
}
```

#### priority

The valid priority value range is 0-255 with 0 as the lowest priority and 255 as the highest or a Schema Object containing the definition of the priority.

```json
{
    "priority": { // [!code ++]
        "type": "integer", // [!code ++]
        "minimum": 0, // [!code ++]
        "maximum": 255, // [!code ++]
        "description": "The valid priority value range is 0-255 with 0 as the lowest priority and 255 as the highest or a Schema Object containing the definition of the priority." // [!code ++]
    } // [!code ++]
}
```

### dmqEligible

Set the message to be eligible to be moved to a Dead Message Queue. The default value is false.

```json
{
    "dmqEligible": { // [!code ++]
        "type": "boolean", // [!code ++]
        "description": "Set the message to be eligible to be moved to a Dead Message Queue. The default value is false." // [!code ++]
    } // [!code ++]
}
```
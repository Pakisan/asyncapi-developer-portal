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

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/solace/0.3.0/operation.json"/>

## Examples

```json
{
    "bindingVersion": "0.3.0",
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

## Migration guide

### Added

#### Queue: maxTtl

The maximum TTL to apply to messages to be spooled

```json
{
  "properties": {
    "destinationType": {
      "type": "string",
      "const": "queue",
      "description": "If the type is queue, then the subscriber can bind to the queue. The queue subscribes to the given topicSubscriptions. If no topicSubscriptions are provied, the queue will subscribe to the topic as represented by the channel name."
    },
    "queue": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "description": "The name of the queue"
        },
        "topicSubscriptions": {
          "type": "array",
          "description": "The list of topics that the queue subscribes to.",
          "items": {
            "type": "string"
          }
        },
        "accessType": {
          "type": "string",
          "enum": [
            "exclusive",
            "nonexclusive"
          ]
        },
        "maxTtl": { // [!code ++]
          "type": "string", // [!code ++]
          "description": "The maximum TTL to apply to messages to be spooled." // [!code ++]
        } // [!code ++]
      }
    }
  }
}
```

#### Queue: maxMsgSpoolUsage

The maximum amount of message spool that the given queue may use

```json
{
  "properties": {
    "destinationType": {
      "type": "string",
      "const": "queue",
      "description": "If the type is queue, then the subscriber can bind to the queue. The queue subscribes to the given topicSubscriptions. If no topicSubscriptions are provied, the queue will subscribe to the topic as represented by the channel name."
    },
    "queue": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "description": "The name of the queue"
        },
        "topicSubscriptions": {
          "type": "array",
          "description": "The list of topics that the queue subscribes to.",
          "items": {
            "type": "string"
          }
        },
        "accessType": {
          "type": "string",
          "enum": [
            "exclusive",
            "nonexclusive"
          ]
        },
        "maxMsgSpoolUsage": { // [!code ++]
          "type": "string", // [!code ++]
          "description": "The maximum amount of message spool that the given queue may use" // [!code ++]
        } // [!code ++]
      }
    }
  }
}
```
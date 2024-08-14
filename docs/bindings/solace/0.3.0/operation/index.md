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

## Changelog

### Added

#### queue.`maxTtl`

The maximum TTL to apply to messages to be spooled

```json
{
    "queue": {
        "type": "object",
        "properties": {
            "maxTtl": { // [!code ++]
                "type": "string", // [!code ++]
                "description": "The maximum TTL to apply to messages to be spooled." // [!code ++]
            } // [!code ++]
        }
    }
}
```

#### queue.`maxMsgSpoolUsage`

The maximum amount of message spool that the given queue may use

```json
{
    "queue": {
        "type": "object",
        "properties": {
            "maxMsgSpoolUsage": { // [!code ++]
                "type": "string", // [!code ++]
                "description": "The maximum amount of message spool that the given queue may use" // [!code ++]
            } // [!code ++]
        }
    }
}
```
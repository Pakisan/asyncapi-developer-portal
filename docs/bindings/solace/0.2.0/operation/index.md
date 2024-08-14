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

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/solace/0.2.0/operation.json"/>

## Examples

```json
{
    "bindingVersion": "0.2.0",
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

Good news, nothing was changed
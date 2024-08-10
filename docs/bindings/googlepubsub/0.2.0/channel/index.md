---
title: Google Cloud Pub/Sub channel binding
layout: doc
prev: false
next: false
head:
  - - meta
    - name: "og:title"
      content: "Google Cloud Pub/Sub channel binding"
  - - meta
    - name: "og:description"
      content: "How to use Google Cloud Pub/Sub with AsyncAPI channel binding"
  - - meta
    - name: "og:image"
      content: "/bindings/googlepubsub.png"
---

# {{ $frontmatter.title }}

Contains information about the channel representation in Google Cloud Pub/Sub.

## Structure

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/googlepubsub/0.2.0/channel.json"/>

## Examples

```json
{
    "labels": {
        "label1": "value1",
        "label2": "value2"
    },
    "messageRetentionDuration": "86400s",
    "messageStoragePolicy": {
        "allowedPersistenceRegions": [
            "us-central1",
            "us-east1"
        ]
    },
    "schemaSettings": {
        "encoding": "json",
        "name": "projects/your-project-id/schemas/your-schema"
    }
}
```

## Migration guide

Bad news, property was removed

### topic

```json
{
    "bindingVersion": {
        "type": "string",
        "enum": [
            "0.1.0"
        ],
        "description": "The version of this binding."
    },
    "labels": {
        "type": "object"
    },
    "messageRetentionDuration": {
        "type": "string"
    },
    "messageStoragePolicy": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
            "allowedPersistenceRegions": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            }
        }
    },
    "schemaSettings": {
        "type": "object",
        "additionalItems": false,
        "properties": {
            "encoding": {
                "type": "string"
            },
            "firstRevisionId": {
                "type": "string"
            },
            "lastRevisionId": {
                "type": "string"
            },
            "name": {
                "type": "string"
            }
        },
        "required": [
            "encoding",
            "name"
        ]
    },
    "topic": { // [!code --]
        "type": "string" // [!code --]
    } // [!code --]
}
```
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

## Changelog

### Removed

#### topic

```json
{
    "topic": { // [!code --]
        "type": "string" // [!code --]
    } // [!code --]
}
```
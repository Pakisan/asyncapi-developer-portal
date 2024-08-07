---
layout: doc
---

<script setup lang="ts">
import {JsonViewer} from "vue3-json-viewer";
import "vue3-json-viewer/dist/index.css";

const schema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://asyncapi.com/bindings/kafka/0.1.0/operation.json",
  "title": "Kafka operation message bindings object",
  "description": "This object contains information about the operation representation in Kafka.",
  "type": "object",
  "additionalProperties": false,
  "patternProperties": {
    "^x-[\\w\\d\\.\\x2d_]+$": {
      "$ref": "http://asyncapi.com/definitions/3.0.0/specificationExtension.json"
    }
  },
  "properties": {
    "groupId": {
      "$ref": "http://asyncapi.com/definitions/3.0.0/schema.json",
      "description": "Id of the consumer group."
    },
    "clientId": {
      "$ref": "http://asyncapi.com/definitions/3.0.0/schema.json",
      "description": "Id of the consumer inside a consumer group."
    },
    "bindingVersion": {
      "type": "string",
      "enum": [
        "0.1.0"
      ],
      "description": "The version of this binding. If omitted, 'latest' MUST be assumed."
    }

  },
  "examples": [
    {
      "groupId": {
        "type": "string",
        "enum": [
          "myGroupId"
        ]
      },
      "clientId": {
        "type": "string",
        "enum": [
          "myClientId"
        ]
      },
      "bindingVersion": "0.1.0"
    }
  ]
};
</script>

# Apache Kafka operation binding

## Structure

<JsonViewer :value="schema" copyable theme="dark"/>

## Examples

```json
{
    "groupId": {
        "type": "string",
        "enum": [
            "myGroupId"
        ]
    },
    "clientId": {
        "type": "string",
        "enum": [
            "myClientId"
        ]
    },
    "bindingVersion": "0.1.0"
}
```

## Migration guide

Good news, nothing was deprecated or changed
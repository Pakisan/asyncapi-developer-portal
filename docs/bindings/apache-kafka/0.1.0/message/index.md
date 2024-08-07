---
layout: doc
---

<script setup lang="ts">
import {JsonViewer} from "vue3-json-viewer";
import "vue3-json-viewer/dist/index.css";

const schema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://asyncapi.com/bindings/kafka/0.1.0/message.json",
  "title": "Kafka message bindings object",
  "type": "object",
  "additionalProperties": false,
  "patternProperties": {
    "^x-[\\w\\d\\.\\x2d_]+$": {
      "$ref": "http://asyncapi.com/definitions/3.0.0/specificationExtension.json"
    }
  },
  "properties": {
    "key": {
      "$ref": "http://asyncapi.com/definitions/3.0.0/schema.json",
      "description": "The message key."
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
      "key": {
        "type": "string",
        "enum": [
          "myKey"
        ]
      },
      "bindingVersion": "0.1.0"
    },
    {
      "key": {
        "$ref": "path/to/user-create.avsc#/UserCreate"
      },
      "bindingVersion": "0.2.0"
    }
  ]
};
</script>

# Apache Kafka message binding

## Structure

<JsonViewer :value="schema" copyable theme="dark"/>

## Examples

```json
{
    "key": {
        "type": "string",
        "enum": [
            "myKey"
        ]
    },
    "bindingVersion": "0.1.0"
}
```

## Migration guide

Good news, nothing was deprecated or changed
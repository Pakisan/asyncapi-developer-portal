---
layout: doc
---

<script setup lang="ts">
import {JsonViewer} from "vue3-json-viewer";
import "vue3-json-viewer/dist/index.css";

const schema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://asyncapi.com/bindings/anypointmq/0.0.1/message.json",
  "title": "Anypoint MQ message bindings object",
  "description": "This object contains configuration for describing an Anypoint MQ message as an AsyncAPI message. This objects only contains configuration that can not be provided in the AsyncAPI standard message object.",
  "type": "object",
  "additionalProperties": false,
  "patternProperties": {
    "^x-[\\w\\d\\.\\x2d_]+$": {
      "$ref": "http://asyncapi.com/definitions/3.0.0/specificationExtension.json"
    }
  },
  "properties": {
    "headers": {
      "oneOf": [
        {
          "$ref": "http://asyncapi.com/definitions/3.0.0/schema.json"
        },
        {
          "$ref": "http://asyncapi.com/definitions/3.0.0/Reference.json"
        }
      ],
      "description": "A Schema object containing the definitions for Anypoint MQ-specific headers (protocol headers). This schema MUST be of type 'object' and have a 'properties' key. Examples of Anypoint MQ protocol headers are 'messageId' and 'messageGroupId'."
    },
    "bindingVersion": {
      "type": "string",
      "enum": [
        "0.0.1"
      ],
      "description": "The version of this binding. If omitted, 'latest' MUST be assumed."
    }

  },
  "examples": [
    {
      "headers": {
        "type": "object",
        "properties": {
          "messageId": {
            "type": "string"
          }
        }
      },
      "bindingVersion": "0.0.1"
    }
  ]
};
</script>

# Anypoint MQ message binding

## Structure

<JsonViewer :value="schema" copyable theme="dark"/>

## Examples

```json
{
    "headers": {
        "type": "object",
        "properties": {
            "messageId": {
                "type": "string"
            }
        }
    },
    "bindingVersion": "0.0.1"
}
```

## Migration guide

Good news, nothing was deprecated or changed
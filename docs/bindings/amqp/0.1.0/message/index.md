---
layout: doc
---

<script setup lang="ts">
import {JsonViewer} from "vue3-json-viewer";
import "vue3-json-viewer/dist/index.css";

const schema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://asyncapi.com/bindings/amqp/0.1.0/message.json",
  "title": "AMQP message bindings object",
  "description": "This object contains information about the message representation in AMQP.",
  "type": "object",
  "additionalProperties": false,
  "patternProperties": {
    "^x-[\\w\\d\\.\\x2d_]+$": {
      "$ref": "http://asyncapi.com/definitions/3.0.0/specificationExtension.json"
    }
  },
  "properties": {
    "contentEncoding": {
      "type": "string",
      "description": "A MIME encoding for the message content."
    },
    "messageType": {
      "type": "string",
      "description": "Application-specific message type."
    },
    "bindingVersion": {
      "type": "string",
      "enum": [
        "0.1.0"
      ],
      "description": "The version of this binding. If omitted, \"latest\" MUST be assumed."
    }
  },
  "examples": [
    {
      "contentEncoding": "gzip",
      "messageType": "user.signup",
      "bindingVersion": "0.1.0"
    }
  ]
};
</script>

# AMQP 0-9-1 message binding

Contains information about the message representation in AMQP.

## Structure

<JsonViewer :value="schema" copyable theme="dark"/>

## Examples

```json
{
  "contentEncoding": "gzip",
  "messageType": "user.signup",
  "bindingVersion": "0.1.0"
}
```

## Migration guide

Good news, nothing was deprecated or changed
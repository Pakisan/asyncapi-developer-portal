---
layout: doc
---

<script setup lang="ts">
import {JsonViewer} from "vue3-json-viewer";
import "vue3-json-viewer/dist/index.css";

const schema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://asyncapi.com/bindings/amqp/0.2.0/channel.json",
  "title": "AMQP channel bindings object",
  "description": "This object contains information about the channel representation in AMQP.",
  "type": "object",
  "additionalProperties": false,
  "patternProperties": {
    "^x-[\\w\\d\\.\\x2d_]+$": {
      "$ref": "http://asyncapi.com/definitions/3.0.0/specificationExtension.json"
    }
  },
  "properties": {
    "is": {
      "type": "string",
      "enum": ["queue", "routingKey"],
      "description": "Defines what type of channel is it. Can be either 'queue' or 'routingKey' (default)."
    },
    "exchange": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "maxLength": 255,
          "description": "The name of the exchange. It MUST NOT exceed 255 characters long."
        },
        "type": {
          "type": "string",
          "enum": ["topic", "direct", "fanout", "default", "headers"],
          "description": "The type of the exchange. Can be either 'topic', 'direct', 'fanout', 'default' or 'headers'."
        },
        "durable": {
          "type": "boolean",
          "description": "Whether the exchange should survive broker restarts or not."
        },
        "autoDelete": {
          "type": "boolean",
          "description": "Whether the exchange should be deleted when the last queue is unbound from it."
        },
        "vhost": {
          "type": "string",
          "default": "/",
          "description": "The virtual host of the exchange. Defaults to '/'."
        }
      },
      "description": "When is=routingKey, this object defines the exchange properties."
    },
    "queue": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "maxLength": 255,
          "description": "The name of the queue. It MUST NOT exceed 255 characters long."
        },
        "durable": {
          "type": "boolean",
          "description": "Whether the queue should survive broker restarts or not."
        },
        "exclusive": {
          "type": "boolean",
          "description": "Whether the queue should be used only by one connection or not."
        },
        "autoDelete": {
          "type": "boolean",
          "description": "Whether the queue should be deleted when the last consumer unsubscribes."
        },
        "vhost": {
          "type": "string",
          "default": "/",
          "description": "The virtual host of the queue. Defaults to '/'."
        }
      },
      "description": "When is=queue, this object defines the queue properties."
    },
    "bindingVersion": {
      "type": "string",
      "enum": [
        "0.2.0"
      ],
      "description": "The version of this binding. If omitted, 'latest' MUST be assumed."
    }
  },
  "oneOf": [
    {
      "properties": {
        "is": { "const": "routingKey" }
      },
      "required": [
        "exchange"
      ],
      "not": {
        "required": [
          "queue"
        ]
      }
    },
    {
      "properties": {
        "is": { "const": "queue" }
      },
      "required": [
        "queue"
      ],
      "not": {
        "required": [
          "exchange"
        ]
      }
    }
  ],
  "examples": [
    {
      "is": "routingKey",
      "exchange": {
        "name": "myExchange",
        "type": "topic",
        "durable": true,
        "autoDelete": false,
        "vhost": "/"
      },
      "bindingVersion": "0.2.0"
    },
    {
      "is": "queue",
      "queue": {
        "name": "my-queue-name",
        "durable": true,
        "exclusive": true,
        "autoDelete": false,
        "vhost": "/"
      },
      "bindingVersion": "0.2.0"
    }
  ]
};
</script>

# AMQP 0-9-1 channel binding

Contains information about the channel representation in AMQP.

## Structure

<JsonViewer :value="schema" copyable theme="dark"/>

## Examples

### Routing Key

```json
{
  "is": "routingKey", // [!code focus]
  "exchange": {
    "name": "myExchange",
    "type": "topic",
    "durable": true,
    "autoDelete": false,
    "vhost": "/"
  },
  "bindingVersion": "0.2.0"
}
```

### Queue

```json
{
  "is": "queue", // [!code focus]
  "queue": {
    "name": "my-queue-name",
    "durable": true,
    "exclusive": true,
    "autoDelete": false,
    "vhost": "/"
  },
  "bindingVersion": "0.2.0"
}
```

## Migration guide

Good news, nothing was deprecated

### Exchange

Now you can describe virtual host for your `exchanges`

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "maxLength": 255,
      "description": "The name of the exchange. It MUST NOT exceed 255 characters long."
    },
    "type": {
      "type": "string",
      "enum": ["topic", "direct", "fanout", "default", "headers"],
      "description": "The type of the exchange. Can be either 'topic', 'direct', 'fanout', 'default' or 'headers'."
    },
    "durable": {
      "type": "boolean",
      "description": "Whether the exchange should survive broker restarts or not."
    },
    "autoDelete": {
      "type": "boolean",
      "description": "Whether the exchange should be deleted when the last queue is unbound from it."
    },
    "vhost": { // [!code ++]
      "type": "string", // [!code ++]
      "default": "/", // [!code ++]
      "description": "The virtual host of the exchange. Defaults to '/'." // [!code ++]
    } // [!code ++]
  },
  "description": "When is=routingKey, this object defines the exchange properties."
}
```

### Queue

Now you can describe virtual host for your `queues`

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "maxLength": 255,
      "description": "The name of the queue. It MUST NOT exceed 255 characters long."
    },
    "durable": {
      "type": "boolean",
      "description": "Whether the queue should survive broker restarts or not."
    },
    "exclusive": {
      "type": "boolean",
      "description": "Whether the queue should be used only by one connection or not."
    },
    "autoDelete": {
      "type": "boolean",
      "description": "Whether the queue should be deleted when the last consumer unsubscribes."
    },
    "vhost": { // [!code ++]
      "type": "string", // [!code ++]
      "default": "/", // [!code ++]
      "description": "The virtual host of the queue. Defaults to '/'." // [!code ++]
    } // [!code ++]
  },
  "description": "When is=queue, this object defines the queue properties."
}
```
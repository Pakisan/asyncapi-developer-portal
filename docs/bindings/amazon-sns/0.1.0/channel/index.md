---
layout: doc
---

<script setup lang="ts">
import {JsonViewer} from "vue3-json-viewer";
import "vue3-json-viewer/dist/index.css";

const schema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://asyncapi.com/bindings/sns/0.1.0/channel.json",
  "title": "Channel Schema",
  "description": "This object contains information about the channel representation in SNS.",
  "type": "object",
  "additionalProperties": false,
  "patternProperties": {
    "^x-[\\w\\d\\.\\x2d_]+$": {
      "$ref": "http://asyncapi.com/definitions/3.0.0/specificationExtension.json"
    }
  },
  "properties": {
    "name": {
      "type": "string",
      "description": "The name of the topic. Can be different from the channel name to allow flexibility around AWS resource naming limitations."
    },
    "ordering": {
      "$ref": "http://asyncapi.com/bindings/sns/0.1.0/channel.json#/definitions/ordering"
    },
    "policy": {
      "$ref": "http://asyncapi.com/bindings/sns/0.1.0/channel.json#/definitions/policy"
    },
    "tags": {
      "type": "object",
      "description": "Key-value pairs that represent AWS tags on the topic."
    },
    "bindingVersion": {
      "type": "string",
      "description": "The version of this binding.",
      "default": "latest"
    }
  },
  "required": [
    "name"
  ],
  "definitions": {
    "ordering": {
      "type": "object",
      "description": "By default, we assume an unordered SNS topic. This field allows configuration of a FIFO SNS Topic.",
      "patternProperties": {
        "^x-[\\w\\d\\.\\x2d_]+$": {
          "$ref": "http://asyncapi.com/definitions/3.0.0/specificationExtension.json"
        }
      },
      "properties": {
        "type": {
          "type": "string",
          "description": "Defines the type of SNS Topic.",
          "enum": [
            "standard",
            "FIFO"
          ]
        },
        "contentBasedDeduplication": {
          "type": "boolean",
          "description": "True to turn on de-duplication of messages for a channel."
        }
      },
      "required": [
        "type"
      ]
    },
    "policy": {
      "type": "object",
      "description": "The security policy for the SNS Topic.",
      "patternProperties": {
        "^x-[\\w\\d\\.\\x2d_]+$": {
          "$ref": "http://asyncapi.com/definitions/3.0.0/specificationExtension.json"
        }
      },
      "properties": {
        "statements": {
          "type": "array",
          "description": "An array of statement objects, each of which controls a permission for this topic",
          "items": {
            "$ref": "http://asyncapi.com/bindings/sns/0.1.0/channel.json#/definitions/statement"
          }
        }
      },
      "required": [
        "statements"
      ]
    },
    "statement": {
      "type": "object",
      "patternProperties": {
        "^x-[\\w\\d\\.\\x2d_]+$": {
          "$ref": "http://asyncapi.com/definitions/3.0.0/specificationExtension.json"
        }
      },
      "properties": {
        "effect": {
          "type": "string",
          "enum": [
            "Allow",
            "Deny"
          ]
        },
        "principal": {
          "description": "The AWS account or resource ARN that this statement applies to.",
          "oneOf": [
            {
              "type": "string"
            },
            {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          ]
        },
        "action": {
          "description": "The SNS permission being allowed or denied e.g. sns:Publish",
          "oneOf": [
            {
              "type": "string"
            },
            {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          ]
        }
      },
      "required": [
        "effect",
        "principal",
        "action"
      ]
    }
  },
  "examples": [
    {
      "name": "my-sns-topic",
      "policy": {
        "statements": [
          {
            "effect": "Allow",
            "principal": "*",
            "action": "SNS:Publish"
          }
        ]
      }
    }
  ]
};
</script>

# Amazon SNS channel binding

Contains information about the channel representation in Amazon SNS.

We represent an AsyncAPI Channel with a Topic in SNS. 
The bindings here allow definition of a topic within SNS. 
We provide properties on the binding that allow creation of a topic in infrastructure-as-code scenarios. 

> [!WARNING]
> Be aware that although the binding offers that flexibility, it may be more maintainable to specify properties such as SNS Access Control Policy outside AsyncAPI.

SNS supports many optional properties. 

To mark a channel as SNS, but use default values for the channel properties, just use an empty object `{}`.

## Structure

<JsonViewer :value="schema" copyable theme="dark"/>

## Examples

```json
{
  "name": "my-sns-topic",
  "policy": {
    "statements": [
      {
        "effect": "Allow",
        "principal": "*",
        "action": "SNS:Publish"
      }
    ]
  }
}
```

## Migration guide

Good news, nothing was deprecated or changed
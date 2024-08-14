---
title: Amazon SNS channel binding
layout: doc
prev: false
next: false
head:
  - - meta
    - name: "og:title"
      content: "Amazon SNS channel binding"
  - - meta
    - name: "og:description"
      content: "How to use Amazon SNS with AsyncAPI channel binding"
  - - meta
    - name: "og:image"
      content: "/bindings/amazon.png"
---

# {{ $frontmatter.title }}

Contains information about the channel representation in Amazon SNS.

We represent an AsyncAPI Channel with a Topic in SNS. 
The bindings here allow definition of a topic within SNS. 
We provide properties on the binding that allow creation of a topic in infrastructure-as-code scenarios. 

> [!WARNING]
> Be aware that although the binding offers that flexibility, it may be more maintainable to specify properties such as SNS Access Control Policy outside AsyncAPI.

SNS supports many optional properties. 

To mark a channel as SNS, but use default values for the channel properties, just use an empty object `{}`.

## Structure

<Json url="/bindings/amazon-sns-channel.0.2.0.json" />

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

## Changelog

### Added

#### policy.`statements`.resource

The resource(s) that this policy applies to.

```json
{ // [!code ++]
  "resource": { // [!code ++]
      "description": "The resource(s) that this policy applies to.", // [!code ++]
      "oneOf": [ // [!code ++]
        { // [!code ++]
          "type": "string" // [!code ++]
        }, // [!code ++]
        { // [!code ++]
          "type": "array", // [!code ++]
          "items": { // [!code ++]
              "type": "string" // [!code ++]
          } // [!code ++]
        } // [!code ++]
      ] // [!code ++]
    } // [!code ++]
} // [!code ++]
```

#### policy.`statements`.condition

Specific circumstances under which the policy grants permission

```json
{
  "condition": { // [!code ++]
    "description": "Specific circumstances under which the policy grants permission", // [!code ++]
    "type": "object", // [!code ++]
    "patternProperties": { // [!code ++]
      ".*": { // [!code ++]
        "type": "object", // [!code ++]
        "patternProperties": { // [!code ++]
          ".*": { // [!code ++]
            "oneOf": [ // [!code ++]
              { // [!code ++]
                "type": "string" // [!code ++]
              }, // [!code ++]
              { // [!code ++]
                "type": "array", // [!code ++]
                "items": { // [!code ++]
                  "type": "string" // [!code ++]
                } // [!code ++]
              } // [!code ++]
            ] // [!code ++]
          } // [!code ++]
        } // [!code ++]
      } // [!code ++]
    } // [!code ++]
  } // [!code ++]
}
```

### Changed

#### policy.`statements`.principal

The AWS account(s) or resource ARN(s) that this statement applies to.

```json
{
  "principal": {
    "description": "The AWS account(s) or resource ARN(s) that this statement applies to.",
    "oneOf": [
      {
        "type": "string"
      },
      { // [!code ++]
        "type": "object", // [!code ++]
        "properties": { // [!code ++]
          "AWS": { // [!code ++]
            "oneOf": [ // [!code ++]
              { // [!code ++]
                "type": "string" // [!code ++]
              }, // [!code ++]
              {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            ] // [!code ++]
          } // [!code ++]
        }, // [!code ++]
        "required": [ // [!code ++]
          "AWS" // [!code ++]
        ], // [!code ++]
        "additionalProperties": false // [!code ++]
      }, // [!code ++]
      { // [!code ++]
        "type": "object", // [!code ++]
        "properties": { // [!code ++]
          "Service": { // [!code ++]
            "oneOf": [ // [!code ++]
              { // [!code ++]
                "type": "string" // [!code ++]
              }, // [!code ++]
              { // [!code ++]
                "type": "array", // [!code ++]
                "items": { // [!code ++]
                  "type": "string" // [!code ++]
                } // [!code ++]
              } // [!code ++]
            ] // [!code ++]
          } // [!code ++]
        }, // [!code ++]
        "required": [ // [!code ++]
          "Service" // [!code ++]
        ], // [!code ++]
        "additionalProperties": false // [!code ++]
      }
    ]
  }
}
```
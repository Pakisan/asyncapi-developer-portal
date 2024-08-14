---
title: Amazon SQS operation binding
layout: doc
prev: false
next: false
head:
  - - meta
    - name: "og:title"
      content: "Amazon SQS operation binding"
  - - meta
    - name: "og:description"
      content: "How to use Amazon SQS with AsyncAPI operation binding"
  - - meta
    - name: "og:image"
      content: "/bindings/amazon.png"
---

# {{ $frontmatter.title }}

Contains information about the operation representation in Amazon SQS.

## Structure

<Json url="/bindings/amazon-sqs-operation.0.3.0.json" />

## Examples

```json
{
    "queues": [
        {
            "name": "myQueue",
            "fifoQueue": true,
            "deduplicationScope": "messageGroup",
            "fifoThroughputLimit": "perMessageGroupId",
            "deliveryDelay": 10,
            "redrivePolicy": {
                "deadLetterQueue": {
                    "name": "myQueue_error"
                },
                "maxReceiveCount": 15
            },
            "policy": {
                "statements": [
                    {
                        "effect": "Deny",
                        "principal": "arn:aws:iam::123456789012:user/dec.kolakowski",
                        "action": [
                            "sqs:SendMessage",
                            "sqs:ReceiveMessage"
                        ]
                    }
                ]
            }
        },
        {
            "name": "myQueue_error",
            "deliveryDelay": 10
        }
    ]
}
```

## Changelog

### Added

#### queue.`policy`.`statements`.resource

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

#### queue.`policy`.`statements`.condition

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

#### queue.`policy`.`statements`.principal

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
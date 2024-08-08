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

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/sqs/0.2.0/operation.json" />

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

## Migration guide

Good news, nothing was deprecated or changed
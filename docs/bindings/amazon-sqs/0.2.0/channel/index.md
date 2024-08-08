---
title: Amazon SQS channel binding
layout: doc
prev: false
next: false
head:
  - - meta
    - name: "og:title"
      content: "Amazon SQS channel binding"
  - - meta
    - name: "og:description"
      content: "How to use Amazon SQS with AsyncAPI channel binding"
  - - meta
    - name: "og:image"
      content: "/bindings/amazon.png"
---

# {{ $frontmatter.title }}

There are three likely scenarios for use of the Channel Binding Object:

- One file defines both publish and subscribe operations, for example if we were implementing the work queue pattern to offload work from an HTTP API endpoint to a worker process. In this case the channel would be defined on the Channel Object in that single file.
- The producer and consumer both have an AsyncAPI specification file, and the producer is raising an event, for example interop between microservices, and the producer 'owns' the channel definition and thus has the SQS Binding on its Channel Object.
- The producer and consumer both have an AsyncAPI specification file, and the consumer receives commands, for example interop between microservices, and the consumer 'owns' the channel  definition and thus has the SQS Binding on its Channel Object.

An SQS queue can set up a Dead Letter Queue as part of a Redelivery Policy. 
To support this requirement, the Channel Binding Object allows you to define both a Queue Object to use as the Channel 
or target in a *publish* Operation and a Dead Letter Queue. You can then refer to the Dead letter Queue in the 
Redrive Policy using the Identifier Object and setting the *name* field to match the *name* field of your 
Dead Letter Queue Object. (If you define the DLQ externally, the Identifier also supports an ARN).

## Structure

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/sqs/0.2.0/channel.json" />

## Examples

```json
{
    "queue": {
        "name": "myQueue",
        "fifoQueue": true,
        "deduplicationScope": "messageGroup",
        "fifoThroughputLimit": "perMessageGroupId",
        "deliveryDelay": 15,
        "visibilityTimeout": 60,
        "receiveMessageWaitTime": 0,
        "messageRetentionPeriod": 86400,
        "redrivePolicy": {
            "deadLetterQueue": {
                "arn": "arn:aws:SQS:eu-west-1:0000000:123456789"
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
        },
        "tags": {
            "owner": "AsyncAPI.NET",
            "platform": "AsyncAPIOrg"
        }
    },
    "deadLetterQueue": {
        "name": "myQueue_error",
        "deliveryDelay": 0,
        "visibilityTimeout": 0,
        "receiveMessageWaitTime": 0,
        "messageRetentionPeriod": 604800
    }
}
```

## Migration guide

Good news, nothing was deprecated or changed
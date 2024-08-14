---
title: Amazon SNS operation binding
layout: doc
prev: false
next: false
head:
  - - meta
    - name: "og:title"
      content: "Amazon SNS operation binding"
  - - meta
    - name: "og:description"
      content: "How to use Amazon SNS with AsyncAPI operation binding"
  - - meta
    - name: "og:image"
      content: "/bindings/amazon.png"
---

# {{ $frontmatter.title }}

Contains information about the operation representation in Amazon SNS.

We represent SNS producers via a **subscribe** Operation Object. 

In simple cases this may not require configuration, and can be shown as an empty SNS Binding Object i.e. `{}` if 
you need to explicitly indicate how a producer publishes to the channel.

We represent SNS consumers via a **publish** Operation Object. These consumers need an SNS Subscription that defines 
how they consume from SNS i.e. the protocol that they use, and any filters applied.

The SNS binding does not describe the receiver. If you wish to define the receiver, add a **publish** Operation Binding Object for that receiver. 
For example, if you send message to an SQS queue from an SNS Topic, you would add a protocol of 'sqs' and an Identifier object for the queue. 
That identifier could be an ARN of a queue defined outside the scope of AsyncAPI, but if you wanted to define the receiver you would use 
the name of a queue defined in an SQS Binding on the **publish** Operation Binding Object.

We support an array of consumers via the **consumers** field. 
This allows you to represent multiple protocols consuming an SNS Topic in one file. 
You may also use it for multiple consumers with the same protocol, instead of representing each consumer in a separate file.

## Structure

<Json url="/bindings/amazon-sns-operation.0.2.0.json" />

## Examples

```json
{
    "topic": {
        "name": "someTopic"
    },
    "consumers": [
        {
            "protocol": "sqs",
            "endpoint": {
                "name": "someQueue"
            },
            "filterPolicy": {
                "store": [
                    "asyncapi_corp"
                ],
                "event": [
                    {
                        "anything-but": "order_cancelled"
                    }
                ],
                "customer_interests": [
                    "rugby",
                    "football",
                    "baseball"
                ]
            },
            "filterPolicyScope": "MessageAttributes",
            "rawMessageDelivery": false,
            "redrivePolicy": {
                "deadLetterQueue": {
                    "arn": "arn:aws:SQS:eu-west-1:0000000:123456789"
                },
                "maxReceiveCount": 25
            },
            "deliveryPolicy": {
                "minDelayTarget": 10,
                "maxDelayTarget": 100,
                "numRetries": 5,
                "numNoDelayRetries": 2,
                "numMinDelayRetries": 3,
                "numMaxDelayRetries": 5,
                "backoffFunction": "linear",
                "maxReceivesPerSecond": 2
            }
        }
    ]
}
```

## Changelog

Good news, nothing was changed
---
layout: doc
---

<script setup lang="ts">
import {JsonViewer} from "vue3-json-viewer";
import "vue3-json-viewer/dist/index.css";

const schema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://asyncapi.com/bindings/sns/0.1.0/operation.json",
  "title": "Operation Schema",
  "description": "This object contains information about the operation representation in SNS.",
  "type": "object",
  "additionalProperties": false,
  "patternProperties": {
    "^x-[\\w\\d\\.\\x2d_]+$": {
      "$ref": "http://asyncapi.com/definitions/3.0.0/specificationExtension.json"
    }
  },
  "properties": {
    "topic": {
      "$ref": "http://asyncapi.com/bindings/sns/0.1.0/operation.json#/definitions/identifier",
      "description": "Often we can assume that the SNS Topic is the channel name-we provide this field in case the you need to supply the ARN, or the Topic name is not the channel name in the AsyncAPI document."
    },
    "consumers": {
      "type": "array",
      "description": "The protocols that listen to this topic and their endpoints.",
      "items": {
        "$ref": "http://asyncapi.com/bindings/sns/0.1.0/operation.json#/definitions/consumer"
      },
      "minItems": 1
    },
    "deliveryPolicy": {
      "$ref": "http://asyncapi.com/bindings/sns/0.1.0/operation.json#/definitions/deliveryPolicy",
      "description": "Policy for retries to HTTP. The field is the default for HTTP receivers of the SNS Topic which may be overridden by a specific consumer."
    },
    "bindingVersion": {
      "type": "string",
      "description": "The version of this binding.",
      "default": "latest"
    }
  },
  "required": [
    "consumers"
  ],
  "definitions": {
    "identifier": {
      "type": "object",
      "patternProperties": {
        "^x-[\\w\\d\\.\\x2d_]+$": {
          "$ref": "http://asyncapi.com/definitions/3.0.0/specificationExtension.json"
        }
      },
      "properties": {
        "url": {
          "type": "string",
          "description": "The endpoint is a URL."
        },
        "email": {
          "type": "string",
          "description": "The endpoint is an email address."
        },
        "phone": {
          "type": "string",
          "description": "The endpoint is a phone number."
        },
        "arn": {
          "type": "string",
          "description": "The target is an ARN. For example, for SQS, the identifier may be an ARN, which will be of the form: arn:aws:sqs:{region}:{account-id}:{queueName}"
        },
        "name": {
          "type": "string",
          "description": "The endpoint is identified by a name, which corresponds to an identifying field called 'name' of a binding for that protocol on this publish Operation Object. For example, if the protocol is 'sqs' then the name refers to the name field sqs binding. We don't use $ref because we are referring, not including."
        }
      }
    },
    "consumer": {
      "type": "object",
      "patternProperties": {
        "^x-[\\w\\d\\.\\x2d_]+$": {
          "$ref": "http://asyncapi.com/definitions/3.0.0/specificationExtension.json"
        }
      },
      "properties": {
        "protocol": {
          "description": "The protocol that this endpoint receives messages by.",
          "type": "string",
          "enum": [
            "http",
            "https",
            "email",
            "email-json",
            "sms",
            "sqs",
            "application",
            "lambda",
            "firehose"
          ]
        },
        "endpoint": {
          "description": "The endpoint messages are delivered to.",
          "$ref": "http://asyncapi.com/bindings/sns/0.1.0/operation.json#/definitions/identifier"
        },
        "filterPolicy": {
          "type": "object",
          "description": "Only receive a subset of messages from the channel, determined by this policy. Depending on the FilterPolicyScope, a map of either a message attribute or message body to an array of possible matches. The match may be a simple string for an exact match, but it may also be an object that represents a constraint and values for that constraint.",
          "patternProperties": {
            "^x-[\\w\\d\\.\\x2d_]+$": {
              "$ref": "http://asyncapi.com/definitions/3.0.0/specificationExtension.json"
            }
          },
          "additionalProperties": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              {
                "type": "string"
              },
              {
                "type": "object"
              }
            ]
          }
        },
        "filterPolicyScope": {
          "type": "string",
          "description": "Determines whether the FilterPolicy applies to MessageAttributes or MessageBody.",
          "enum": [
            "MessageAttributes",
            "MessageBody"
          ],
          "default": "MessageAttributes"
        },
        "rawMessageDelivery": {
          "type": "boolean",
          "description": "If true AWS SNS attributes are removed from the body, and for SQS, SNS message attributes are copied to SQS message attributes. If false the SNS attributes are included in the body."
        },
        "redrivePolicy": {
          "$ref": "http://asyncapi.com/bindings/sns/0.1.0/operation.json#/definitions/redrivePolicy"
        },
        "deliveryPolicy": {
          "$ref": "http://asyncapi.com/bindings/sns/0.1.0/operation.json#/definitions/deliveryPolicy",
          "description": "Policy for retries to HTTP. The parameter is for that SNS Subscription and overrides any policy on the SNS Topic."
        },
        "displayName": {
          "type": "string",
          "description": "The display name to use with an SNS subscription"
        }
      },
      "required": [
        "protocol",
        "endpoint",
        "rawMessageDelivery"
      ]
    },
    "deliveryPolicy": {
      "type": "object",
      "patternProperties": {
        "^x-[\\w\\d\\.\\x2d_]+$": {
          "$ref": "http://asyncapi.com/definitions/3.0.0/specificationExtension.json"
        }
      },
      "properties": {
        "minDelayTarget": {
          "type": "integer",
          "description": "The minimum delay for a retry in seconds."
        },
        "maxDelayTarget": {
          "type": "integer",
          "description": "The maximum delay for a retry in seconds."
        },
        "numRetries": {
          "type": "integer",
          "description": "The total number of retries, including immediate, pre-backoff, backoff, and post-backoff retries."
        },
        "numNoDelayRetries": {
          "type": "integer",
          "description": "The number of immediate retries (with no delay)."
        },
        "numMinDelayRetries": {
          "type": "integer",
          "description": "The number of immediate retries (with delay)."
        },
        "numMaxDelayRetries": {
          "type": "integer",
          "description": "The number of post-backoff phase retries, with the maximum delay between retries."
        },
        "backoffFunction": {
          "type": "string",
          "description": "The algorithm for backoff between retries.",
          "enum": [
            "arithmetic",
            "exponential",
            "geometric",
            "linear"
          ]
        },
        "maxReceivesPerSecond": {
          "type": "integer",
          "description": "The maximum number of deliveries per second, per subscription."
        }
      }
    },
    "redrivePolicy": {
      "type": "object",
      "description": "Prevent poison pill messages by moving un-processable messages to an SQS dead letter queue.",
      "patternProperties": {
        "^x-[\\w\\d\\.\\x2d_]+$": {
          "$ref": "http://asyncapi.com/definitions/3.0.0/specificationExtension.json"
        }
      },
      "properties": {
        "deadLetterQueue": {
          "$ref": "http://asyncapi.com/bindings/sns/0.1.0/operation.json#/definitions/identifier",
          "description": "The SQS queue to use as a dead letter queue (DLQ)."
        },
        "maxReceiveCount": {
          "type": "integer",
          "description": "The number of times a message is delivered to the source queue before being moved to the dead-letter queue.",
          "default": 10
        }
      },
      "required": [
        "deadLetterQueue"
      ]
    }
  },
  "examples": [
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
  ]
};
</script>

# Amazon SNS operation binding

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

<JsonViewer :value="schema" copyable theme="dark"/>

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

## Migration guide

Good news, nothing was deprecated or changed
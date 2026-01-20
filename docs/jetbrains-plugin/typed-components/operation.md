
# Operation extraction

Here are examples of how to extract operations and operation components from AsyncAPI documents to enable:
- autocompletion and validation in IDE
- UI preview

## Operation

Add  `x-asyncapi-channel-operation: 3.0.0` to your definition

```yaml
x-asyncapi-channel-operation: 3.0.0
action: send
title: Send Measured Values - title
summary: Send Measured Values - summary
description: Send Measured Values - description
```

![](https://plugins.jetbrains.com/files/15673/62206-page/4d8eb35d-f7ae-43b3-91aa-0f4718b148be)

## Operation Trait

Add  `x-asyncapi-channel-operation-trait: 3.0.0` to your definition

```json
{
  "x-asyncapi-channel-message-trait": "3.0.0",
  "headers": {
    "type": "string"
  },
  "correlationId": {
    "description": "Correlation ID example",
    "location": "$message.header#/CORRELATION-ID"
  },
  "contentType": "application/ld+json",
  "name": "Lighting Measured name - Trait #1",
  "title": "Lighting Measured value title - Trait #1",
  "summary": "Lighting Measured summary - Trait #1",
  "description": "Lighting Measured description - Trait #1"
}
```

![](https://plugins.jetbrains.com/files/15673/62206-page/fbc11af2-b70c-40ba-a602-7dbaefe20b61)

## Operation Reply

Add  `x-asyncapi-channel-operation-reply: 3.0.0` to your definition

```yaml
x-asyncapi-channel-operation-reply: 3.0.0
address:
  location: "$message.header#/REPPLY-ADDRESS"
  description: Reply Address description
  x-replyAddresses-number: 1996
  x-replyAddresses-string: this is a string
  x-repreplyAddressesly-object:
    this is: a string
channel:
  "$ref": "#/channels/lightingMeasured"
messages:
  - "$ref": "#/channels/lightingMeasured/messages/lightingMeasured"
```

![](https://plugins.jetbrains.com/files/15673/62206-page/35420427-2420-4d01-a4ca-2b25702e538c)

## Operation Reply Address

Add  `x-asyncapi-channel-operation-reply-address: 3.0.0` to your definition

```json
{
  "x-asyncapi-channel-operation-reply-address": "3.0.0",
  "location": "$message.header#/REPPLY-ADDRESS",
  "description": "Reply Address description"
}
```

![](https://plugins.jetbrains.com/files/15673/62206-page/14797fbf-0634-42a8-a7cc-ee599c01ec33)
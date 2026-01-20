# Channel extraction

Here are examples of how to extract channels and channel components from AsyncAPI documents to enable:
- autocompletion and validation in IDE
- UI preview

## Channel

Add `x-asyncapi-channel: 3.0.0` to your definition

```json
{
  "x-asyncapi-channel": "3.0.0",
  "address": "smartylighting.streetlights.1.0.event.{streetlightId}.lighting.measured",
  "title": "Measured values topic",
  "summary": "Measured values",
  "description": "The topic on which measured values may be produced and consumed.",
}
```

![](https://plugins.jetbrains.com/files/15673/62206-page/49de6860-6ceb-41ac-bff3-534c9ffc696a)

## Channel Parameter

Add `x-asyncapi-channel-parameter: 3.0.0` to your definition

```json
{
  "x-asyncapi-channel-parameter": "3.0.0",
  "enum": [
    "93a93f37-c913-443c-94a0-7e76908fc64d",
    "f6d2ebb9-2792-4b79-88ea-525cfe026e55",
    "8e856716-0eae-405c-a231-0cf14cef487a"
  ],
  "description": "Streetlight ID - 2",
  "default": "8e856716-0eae-405c-a231-0cf14cef487a",
  "examples": [
    "93a93f37-c913-443c-94a0-7e76908fc64d"
  ],
  "location": "$message.header#/STREETLIGHT-ID-2"
}
```

![](https://plugins.jetbrains.com/files/15673/62206-page/2d41b927-f171-4def-bd09-14dd734b69a1)

## Channel Message

Add `x-asyncapi-channel-message: 3.0.0` to your definition

```json
{
  "x-asyncapi-channel-message": "3.0.0",
  "headers": {
    "type": "string"
  },
  "payload": {
    "type": "string"
  },
  "correlationId": {
    "description": "Correlation ID example",
    "location": "$message.header#/CORRELATION-ID"
  },
  "contentType": "application/ld+json",
  "name": "Lighting Measured name",
  "title": "Lighting Measured value title",
  "summary": "Lighting Measured summary",
  "description": "Lighting Measured description"
}
```

![](https://plugins.jetbrains.com/files/15673/62206-page/a92c7ac9-2861-4912-9c39-6458312d4381)

## Channel Message Trait

Add `x-asyncapi-channel-message-trait: 3.0.0` to your definition

```json
{
  "x-asyncapi-channel-message-trait": "3.0.0",
  "headers": {
    "type": "string"
  },
  "payload": {
    "type": "string"
  },
  "correlationId": {
    "description": "Correlation ID example",
    "location": "$message.header#/CORRELATION-ID"
  },
  "contentType": "application/ld+json",
  "name": "Lighting Measured name",
  "title": "Lighting Measured value title",
  "summary": "Lighting Measured summary",
  "description": "Lighting Measured description"
}
```

![](https://plugins.jetbrains.com/files/15673/62206-page/a92c7ac9-2861-4912-9c39-6458312d4381)

## Channel Message Correlation ID

Add `x-asyncapi-channel-message-correlation-id: 3.0.0` to your definition

```json
{
  "x-asyncapi-channel-message-correlation-id": "3.0.0",
  "description": "Correlation ID example",
  "location": "$message.header#/CORRELATION-ID"
}
```

![](https://plugins.jetbrains.com/files/15673/62206-page/61fa8ae3-5f2b-42bc-99a9-902471f54411)
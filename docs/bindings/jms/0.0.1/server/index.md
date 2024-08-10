---
title: Jakarta Messaging API server binding
layout: doc
prev: false
next: false
head:
  - - meta
    - name: "og:title"
      content: "Jakarta Messaging API server binding"
  - - meta
    - name: "og:description"
      content: "How to use Jakarta Messaging API with AsyncAPI server binding"
  - - meta
    - name: "og:image"
      content: "/bindings/jms.jpeg"
---

# {{ $frontmatter.title }}

Contains information about the server representation in Jakarta Messaging API.

## Structure

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/jms/0.0.1/server.json"/>

## Examples

```json
{
    "jmsConnectionFactory": "org.apache.activemq.ActiveMQConnectionFactory",
    "properties": [
        {
            "name": "disableTimeStampsByDefault",
            "value": false
        }
    ],
    "clientID": "my-application-1",
    "bindingVersion": "0.0.1"
}
```

## Migration guide

Good news, nothing was deprecated or changed
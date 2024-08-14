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

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/sns/0.1.0/channel.json" />

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

Good news, nothing was changed
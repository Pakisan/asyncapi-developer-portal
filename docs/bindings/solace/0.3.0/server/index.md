---
title: Solace server binding
layout: doc
prev: false
next: false
head:
  - - meta
    - name: "og:title"
      content: "Solace server binding"
  - - meta
    - name: "og:description"
      content: "How to use Solace with AsyncAPI server binding"
  - - meta
    - name: "og:image"
      content: "/bindings/solace.png"
---

# {{ $frontmatter.title }}

Contains information about the channel representation in Solace.

## Structure

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/solace/0.3.0/server.json"/>

## Examples

```json
{
    "msgVpn": "ProdVPN",
    "bindingVersion": "0.3.0"
}
```

## Changelog

### Changed

#### msvVpn

`msvVpn` was renamed to `msgVpn` due typo error

```json
{
    "msvVpn": { // [!code --]
    "msgVpn": { // [!code ++]
      "type": "string",
      "description": "The name of the Virtual Private Network to connect to on the Solace broker."
    }
}
```
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

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/solace/0.4.0/server.json"/>

## Examples

```json
{
    "msgVpn": "ProdVPN",
    "bindingVersion": "0.4.0"
}
```

## Migration guide

### Added

#### clientName

A unique client name to use to register to the appliance. If specified, it must be a valid Topic name, and a maximum of 160 bytes in length when encoded as UTF-8.

```json
{
    "clientName": { // [!code ++]
        "type": "string", // [!code ++]
        "minLength": 1, // [!code ++]
        "maxLength": 160, // [!code ++]
        "description": "A unique client name to use to register to the appliance. If specified, it must be a valid Topic name, and a maximum of 160 bytes in length when encoded as UTF-8." // [!code ++]
    } // [!code ++]
}
```
# Server extraction

Here are examples of how to extract servers and server variables from AsyncAPI documents to enable:
- autocompletion and validation in IDE
- UI preview

## Server

Add `x-asyncapi-server: 3.0.0` to your definition

```yaml
x-asyncapi-server: 3.0.0
host: api.pavelon.dev
protocol: mqtt
protocolVersion: HTTP/3
pathname: "/v1.12"
description: This API doesn't exist
title: Development API
summary: Ordinary API
variables:
  region:
    enum:
      - US-East
      - US-West
    default: US-East
    description: Region to work with
    examples:
      - US-East
      - US-West
```

![](https://plugins.jetbrains.com/files/15673/62206-page/44541d16-80c7-4654-9ae6-d68ef9b934b8)


## Server Variable

Add `x-asyncapi-server-variable: 3.0.0` to your definition

```yaml
x-asyncapi-server-variable: 3.0.0
enum:
  - Grand Coulee Dam
  - Palo Verde Nuclear Generating Station
  - Alvin W. Vogtle Electric Generating Plant
description: Region to work with
x-serverVariable-number: 1996
x-serverVariable-string: this is a string
x-serverVariable-object:
  this is: a string
```

![](https://plugins.jetbrains.com/files/15673/62206-page/6a1a50cf-0678-42f0-b9b7-86c70fa2047b)

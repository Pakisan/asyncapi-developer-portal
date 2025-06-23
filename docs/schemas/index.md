---
title: AsyncAPI Schemas - Data Definition and Validation for Event-Driven APIs
description: Learn about AsyncAPI Schemas, how they define and validate message payloads in event-driven APIs using JSON Schema and other formats like Avro, XML, and Protobuf
layout: doc
next:
  text: 'AsyncAPI Schema'
  link: '/schemas/schema'
head:
  - - meta
    - name: keywords
      content: AsyncAPI, Schemas, JSON Schema, Multi-Format Schema, message payloads, data validation, Avro, XML Schema, Protobuf, RAML, event-driven architecture, API documentation
  - - meta
    - property: og:title
      content: AsyncAPI Schemas - Data Definition and Validation for Event-Driven APIs
  - - meta
    - property: og:description
      content: Learn about AsyncAPI Schemas, how they define and validate message payloads in event-driven APIs using JSON Schema and other formats like Avro, XML, and Protobuf
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/schemas/index.html
  - - meta
    - name: twitter:title
      content: AsyncAPI Schemas - Data Definition and Validation for Event-Driven APIs
  - - meta
    - name: twitter:description
      content: Learn about AsyncAPI Schemas, how they define and validate message payloads in event-driven APIs using JSON Schema and other formats like Avro, XML, and Protobuf
---

# {{ $frontmatter.title }}

## What is AsyncAPI Schemas?

AsyncAPI Schemas are the foundation for defining, validating, and documenting the structure of message payloads in event-driven APIs. They provide a standardized way to describe the data formats exchanged between applications, ensuring consistency and interoperability across systems.

In AsyncAPI, schemas come in two main forms:

1. **Schema Object**: A superset of JSON Schema (Draft-07) with AsyncAPI-specific extensions
2. **Multi-Format Schema Object**: Supports multiple schema formats beyond JSON Schema, including Avro, XML, Protobuf, and more

These schema objects allow you to precisely define the structure, data types, and validation rules for messages exchanged through your asynchronous APIs. By leveraging schemas, you can ensure that producers and consumers of messages have a clear understanding of the expected data format.

### Schema Object

The Schema Object in AsyncAPI extends JSON Schema Draft-07, adding specific capabilities for API definitions. It includes all standard JSON Schema features plus AsyncAPI-specific extensions like:

- **deprecated**: Flag indicating if a schema is deprecated
- **discriminator**: Support for polymorphism in schemas
- **externalDocs**: References to external documentation
- **Recursive References**: Enhanced schema composition
- **Vendor Extensions**: Custom extensions with `x-` prefix

### Multi-Format Schema Object

The Multi-Format Schema Object provides flexibility by supporting various schema formats beyond JSON Schema. This allows you to use the schema language that best fits your needs or integrates with your existing systems. Supported formats include:

- **Avro**: For efficient binary serialization with schema evolution
- **JSON Schema**: The foundation for AsyncAPI's Schema Object
- **AsyncAPI Schema**: Extended JSON Schema with AsyncAPI features
- **OpenAPI Schema**: For compatibility with REST API definitions
- **XML Schema (XSD)**: For XML-based message formats
- **RAML**: For YAML-based API definitions
- **Google Protobuf**: For efficient, language-neutral serialization

## When to Use AsyncAPI Schemas

AsyncAPI Schemas are essential in various scenarios where you need to define, validate, and document message payloads in event-driven architectures. Here are the key situations where you should use AsyncAPI Schemas:

### For All Event-Driven APIs

- **Defining Message Payloads**: To specify the structure and validation rules for messages exchanged through your API
- **Documenting Data Models**: To provide clear documentation of the data structures used in your API
- **Validating Messages**: To ensure that messages conform to the expected format
- **Generating Code**: To enable automatic code generation for message serialization/deserialization
- **Creating Type Systems**: To build a consistent type system across your API
- **Versioning Data Models**: To manage changes to your data models over time

### When to Use Schema Object (JSON Schema-based)

Use the Schema Object when:

- You're working primarily with JSON data formats
- You need a widely adopted standard with extensive tooling support
- You want to leverage the rich validation capabilities of JSON Schema
- You need to define complex data structures with nested objects and arrays
- You require AsyncAPI-specific extensions like discriminators for polymorphism
- You want to maintain compatibility with other JSON Schema-based tools and libraries

### When to Use Multi-Format Schema Object

Use the Multi-Format Schema Object when:

- You need to support multiple message formats beyond JSON
- You're integrating with existing systems that use specific schema formats
- You require efficient binary serialization (Avro, Protobuf)
- You're working with XML-based enterprise systems
- You need schema evolution capabilities (Avro)
- You want strong typing and validation for XML (XSD)
- You're migrating from REST APIs and want to reuse OpenAPI schemas
- You need to support multiple schema formats within the same API

## Examples

Here are examples of how to use AsyncAPI Schemas in different scenarios:

### Schema Object Example

This example shows a Schema Object defining a message payload for a user event:

```json
{
  "type": "object",
  "required": ["messageId", "sentAt", "payload"],
  "properties": {
    "messageId": {
      "type": "string",
      "format": "uuid",
      "description": "Unique identifier for the message"
    },
    "sentAt": {
      "type": "string",
      "format": "date-time",
      "description": "ISO8601 timestamp when the message was sent"
    },
    "payload": {
      "type": "object",
      "required": ["eventType", "data"],
      "properties": {
        "eventType": {
          "type": "string",
          "enum": ["created", "updated", "deleted"],
          "description": "Type of event that occurred"
        },
        "data": {
          "oneOf": [
            { "$ref": "#/components/schemas/UserCreated" },
            { "$ref": "#/components/schemas/UserUpdated" },
            { "$ref": "#/components/schemas/UserDeleted" }
          ],
          "discriminator": "eventType"
        }
      }
    }
  },
  "externalDocs": {
    "url": "https://docs.example.com/messages",
    "description": "Message format documentation"
  }
}
```

This Schema Object uses AsyncAPI-specific extensions like `discriminator` and `externalDocs` to enhance the standard JSON Schema capabilities.

### Multi-Format Schema Example with Avro

This example shows how to define a message payload using Avro schema format:

```yaml
schemaFormat: 'application/vnd.apache.avro;version=1.9.0'
schema: |
  {
    "type": "record",
    "name": "User",
    "namespace": "com.example",
    "fields": [
      {
        "name": "id",
        "type": "string",
        "doc": "Unique identifier for the user"
      },
      {
        "name": "name",
        "type": "string",
        "doc": "Full name of the user"
      },
      {
        "name": "email",
        "type": "string",
        "doc": "Email address of the user"
      },
      {
        "name": "createdAt",
        "type": {
          "type": "long",
          "logicalType": "timestamp-millis"
        },
        "doc": "Timestamp when the user was created"
      }
    ]
  }
```

### Multi-Format Schema Example with XML

This example demonstrates using XML Schema (XSD) to define a message payload:

```yaml
schemaFormat: 'application/xml'
schema: |
  <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" elementFormDefault="qualified">
    <xs:element name="User">
      <xs:complexType>
        <xs:sequence>
          <xs:element name="displayName" type="xs:string">
            <xs:annotation>
              <xs:documentation>Name of the user</xs:documentation>
            </xs:annotation>
          </xs:element>
          <xs:element name="email" type="xs:string">
            <xs:annotation>
              <xs:documentation>Email of the user</xs:documentation>
            </xs:annotation>
          </xs:element>
        </xs:sequence>
      </xs:complexType>
    </xs:element>
  </xs:schema>
```

### Multi-Format Schema Example with Protobuf

This example shows how to use Google Protocol Buffers (Protobuf) to define a message payload:

```yaml
schemaFormat: 'application/vnd.google.protobuf;version=3'
schema: |
  syntax = "proto3";
  package com.example;

  message User {
    string id = 1;
    string name = 2;
    string email = 3;
    int64 created_at = 4;
  }
```

By choosing the appropriate schema format for your specific needs, you can ensure that your AsyncAPI definitions accurately represent your message payloads while maintaining compatibility with your existing systems and tools.

For more detailed information about specific schema formats and their capabilities, refer to:
- [Schema Object](schema.md) - For JSON Schema-based definitions
- [Multi-Format Schema Object](multiFormatSchema.md) - For using alternative schema formats

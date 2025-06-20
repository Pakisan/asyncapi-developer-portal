---
title: Schema Object
layout: doc
---

# {{ $frontmatter.title }}

## What is Schema Object in AsyncAPI?

The Schema Object in AsyncAPI allows the definition of input and output data types for your asynchronous APIs. These types can be objects, primitives, and arrays. The Schema Object is a superset of the JSON Schema Specification Draft-07, which means it includes all standard JSON Schema capabilities plus some AsyncAPI-specific extensions.

The Schema Object is used throughout the AsyncAPI specification to define the structure of message payloads, headers, and other data objects. By using JSON Schema as its foundation, AsyncAPI leverages a well-established standard for data validation and documentation.

In AsyncAPI, the Schema Object can be represented in two ways:
- As a JSON Schema object with additional AsyncAPI-specific properties
- As a boolean value: `true` allows any instance to validate, while `false` allows no instance to validate

## AsyncAPI Extensions to JSON Schema

While the Schema Object is based on JSON Schema Draft-07, AsyncAPI adds several extensions to enhance its functionality:

1. **deprecated**: A boolean flag indicating whether the schema is deprecated and should be transitioned out of usage. Default is `false`.

2. **discriminator**: A string that adds support for polymorphism. The discriminator is the schema property name used to differentiate between other schemas that inherit from this schema. The property must be defined in this schema and must be in the required property list.

3. **externalDocs**: An object that allows referencing external documentation for this schema.

4. **Recursive References**: AsyncAPI modifies several JSON Schema keywords (`allOf`, `anyOf`, `oneOf`, `not`, etc.) to reference the AsyncAPI Schema Object itself, enabling more complex schema compositions.

5. **Vendor Extensions**: Properties starting with `x-` are permitted to allow for custom extensions.

## When to Use Schema Object in AsyncAPI

The Schema Object is essential in AsyncAPI for:

- **Defining Message Payloads**: Specifying the structure and validation rules for messages exchanged through your API
- **Documenting Data Models**: Providing clear documentation of the data structures used in your API
- **Validating Messages**: Ensuring that messages conform to the expected format
- **Generating Code**: Enabling automatic code generation for message serialization/deserialization
- **Creating Type Systems**: Building a consistent type system across your API
- **Supporting Multiple Formats**: Defining schemas that can be used with different message formats (JSON, XML, Avro, etc.)
- **Enabling Polymorphism**: Supporting inheritance and polymorphic data structures
- **Versioning**: Managing changes to your data models over time

## Examples

### Basic JSON Schema Example

Here's a simple JSON Schema example defining a person object:

```json
{
  "$id": "https://example.com/person.schema.json",
  "$schema": "http://json-schema.org/draft-07/schema",
  "title": "Representation of person object using JSON Schema dictionary",
  "type": "object",
  "properties": {
    "firstName": {
      "type": "string",
      "description": "The person's first name."
    },
    "lastName": {
      "type": "string",
      "description": "The person's last name."
    },
    "age": {
      "description": "Age in years which must be equal to or greater than zero.",
      "type": "integer",
      "minimum": 0
    }
  }
}
```

### AsyncAPI Schema Example

Here's the same example enhanced with AsyncAPI-specific extensions:

```json
{
  "$id": "https://example.com/person.schema.json",
  "$schema": "http://json-schema.org/draft-07/schema",
  "title": "Representation of person object using AsyncAPI Schema dictionary",
  "type": "object",
  "properties": {
    "firstName": {
      "type": "string",
      "description": "The person's first name."
    },
    "lastName": {
      "type": "string",
      "description": "The person's last name."
    },
    "age": {
      "description": "Age in years which must be equal to or greater than zero.",
      "type": "integer",
      "minimum": 0
    }
  },
  "externalDocs": {
    "url": "https://external-documentation.com",
    "description": "External Documentation description"
  },
  "discriminator": "discriminator value",
  "deprecated": false
}
```

### Complex AsyncAPI Schema Example

Here's a more complex example showing how AsyncAPI Schema can be used to define a message payload with nested objects and arrays:

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
    },
    "metadata": {
      "type": "object",
      "additionalProperties": true,
      "description": "Optional metadata associated with the message"
    }
  },
  "deprecated": false,
  "externalDocs": {
    "url": "https://docs.example.com/messages",
    "description": "Message format documentation"
  }
}
```

## AsyncAPI Schema JSON Schema

The AsyncAPI specification for Schema Object follows this JSON Schema:

```json
{
  "$schema": "http://json-schema.org/draft-07/schema",
  "$id": "https://asyncapi.pavelon.dev/schemas/schema.json",
  "description": "The Schema Object allows the definition of input and output data types. These types can be objects, but also primitives and arrays. This object is a superset of the JSON Schema Specification Draft 07. The empty schema (which allows any instance to validate) MAY be represented by the boolean value true and a schema which allows no instance to validate MAY be represented by the boolean value false.",
  "allOf": [
    {
      "$ref": "http://json-schema.org/draft-07/schema#"
    },
    {
      "properties": {
        "deprecated": {
          "description": "Specifies that a schema is deprecated and SHOULD be transitioned out of usage. Default value is false.",
          "default": false,
          "type": "boolean"
        },
        "discriminator": {
          "description": "Adds support for polymorphism. The discriminator is the schema property name that is used to differentiate between other schema that inherit this schema. The property name used MUST be defined at this schema and it MUST be in the required property list. When used, the value MUST be the name of this schema or any schema that inherits it. See Composition and Inheritance for more details.",
          "type": "string"
        },
        "externalDocs": {
          "description": "Additional external documentation for this schema.",
          "type": "object",
          "properties": {
            "url": {
              "type": "string",
              "format": "uri"
            },
            "description": {
              "type": "string"
            }
          }
        }
      },
      "patternProperties": {
        "^x-[\\w\\d\\.\\x2d_]+$": true
      }
    }
  ]
}
```

This schema shows how AsyncAPI Schema extends JSON Schema Draft-07 with additional properties and capabilities.
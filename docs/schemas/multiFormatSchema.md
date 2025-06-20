---
title: Multi-Format Schema Object
layout: doc
---

# {{ $frontmatter.title }}

## What is Multi-Format Schema Object in AsyncAPI?

The Multi-Format Schema Object in AsyncAPI represents a schema definition that supports multiple schema formats or languages. Unlike the standard Schema Object which is based solely on JSON Schema, the Multi-Format Schema Object allows you to use various schema formats such as Avro, JSON Schema, AsyncAPI Schema, OpenAPI Schema, RAML, Google Protobuf, and XML.

This flexibility enables you to define your message payloads using the schema format that best suits your needs or integrates with your existing systems.

## Avro

Apache Avro is a data serialization system that provides rich data structures, a compact binary data format, and integration with many programming languages. Avro schemas are defined using JSON and support features like complex types, logical types, and schema evolution.

In AsyncAPI, Avro schemas can be used to define message payloads with precise type definitions and efficient serialization.

### 1.9.0

- **ApplicationEvent** - Defines an event structure with application-specific information ([JSON](/examples/schemas/multiformat/avro/1.9.0/vnd.apache.avro/ApplicationEvent.json), [YAML](/examples/schemas/multiformat/avro/1.9.0/vnd.apache.avro/ApplicationEvent.yaml))
- **DocumentInfo** - Schema for document metadata and information ([JSON](/examples/schemas/multiformat/avro/1.9.0/vnd.apache.avro/DocumentInfo.json), [YAML](/examples/schemas/multiformat/avro/1.9.0/vnd.apache.avro/DocumentInfo.yaml))
- **foo.Bar** - Example of a namespaced record type ([JSON](/examples/schemas/multiformat/avro/1.9.0/vnd.apache.avro/foo.Bar.json), [YAML](/examples/schemas/multiformat/avro/1.9.0/vnd.apache.avro/foo.Bar.yaml))
- **full_record_v1/v2** - Complete record examples showing schema evolution ([v1 JSON](/examples/schemas/multiformat/avro/1.9.0/vnd.apache.avro/full_record_v1.json), [v1 YAML](/examples/schemas/multiformat/avro/1.9.0/vnd.apache.avro/full_record_v1.yaml), [v2 JSON](/examples/schemas/multiformat/avro/1.9.0/vnd.apache.avro/full_record_v2.json), [v2 YAML](/examples/schemas/multiformat/avro/1.9.0/vnd.apache.avro/full_record_v2.yaml))
- **logical-uuid** - Demonstrates Avro's logical type for UUIDs ([JSON](/examples/schemas/multiformat/avro/1.9.0/vnd.apache.avro/logical-uuid.json), [YAML](/examples/schemas/multiformat/avro/1.9.0/vnd.apache.avro/logical-uuid.yaml))
- **logical_types_with_multiple_fields** - Shows how to use multiple logical types in a single record ([JSON](/examples/schemas/multiformat/avro/1.9.0/vnd.apache.avro/logical_types_with_multiple_fields.json), [YAML](/examples/schemas/multiformat/avro/1.9.0/vnd.apache.avro/logical_types_with_multiple_fields.yaml))
- **MyResponse** - Simple response record structure ([JSON](/examples/schemas/multiformat/avro/1.9.0/vnd.apache.avro/MyResponse.json), [YAML](/examples/schemas/multiformat/avro/1.9.0/vnd.apache.avro/MyResponse.yaml))
- **regression_error_field_in_record** - Example showing error field handling ([JSON](/examples/schemas/multiformat/avro/1.9.0/vnd.apache.avro/regression_error_field_in_record.json), [YAML](/examples/schemas/multiformat/avro/1.9.0/vnd.apache.avro/regression_error_field_in_record.yaml))
- **schema-location** - Demonstrates schema references and locations ([JSON](/examples/schemas/multiformat/avro/1.9.0/vnd.apache.avro/schema-location.json), [YAML](/examples/schemas/multiformat/avro/1.9.0/vnd.apache.avro/schema-location.yaml))
- **schema-location-read/write** - Examples of read and write schema locations ([read JSON](/examples/schemas/multiformat/avro/1.9.0/vnd.apache.avro/schema-location-read.json), [read YAML](/examples/schemas/multiformat/avro/1.9.0/vnd.apache.avro/schema-location-read.yaml), [write JSON](/examples/schemas/multiformat/avro/1.9.0/vnd.apache.avro/schema-location-write.json), [write YAML](/examples/schemas/multiformat/avro/1.9.0/vnd.apache.avro/schema-location-write.yaml))
- **SchemaBuilder** - Shows programmatic schema construction ([JSON](/examples/schemas/multiformat/avro/1.9.0/vnd.apache.avro/SchemaBuilder.json), [YAML](/examples/schemas/multiformat/avro/1.9.0/vnd.apache.avro/SchemaBuilder.yaml))
- **simple_record** - Basic record structure example ([JSON](/examples/schemas/multiformat/avro/1.9.0/vnd.apache.avro/simple_record.json), [YAML](/examples/schemas/multiformat/avro/1.9.0/vnd.apache.avro/simple_record.yaml))
- **TestRecordWithLogicalTypes** - Record with various logical types ([JSON](/examples/schemas/multiformat/avro/1.9.0/vnd.apache.avro/TestRecordWithLogicalTypes.json), [YAML](/examples/schemas/multiformat/avro/1.9.0/vnd.apache.avro/TestRecordWithLogicalTypes.yaml))
- **TestRecordWithMapsAndArrays** - Demonstrates complex data structures ([JSON](/examples/schemas/multiformat/avro/1.9.0/vnd.apache.avro/TestRecordWithMapsAndArrays.json), [YAML](/examples/schemas/multiformat/avro/1.9.0/vnd.apache.avro/TestRecordWithMapsAndArrays.yaml))
- **TestUnionRecord** - Shows union type usage ([JSON](/examples/schemas/multiformat/avro/1.9.0/vnd.apache.avro/TestUnionRecord.json), [YAML](/examples/schemas/multiformat/avro/1.9.0/vnd.apache.avro/TestUnionRecord.yaml))
- **union_and_fixed_fields** - Combines union types with fixed-length fields ([JSON](/examples/schemas/multiformat/avro/1.9.0/vnd.apache.avro/union_and_fixed_fields.json), [YAML](/examples/schemas/multiformat/avro/1.9.0/vnd.apache.avro/union_and_fixed_fields.yaml))

### 1.9.1

- **ApplicationEvent** - Updated event structure for version 1.9.1 ([JSON](/examples/schemas/multiformat/avro/1.9.1/vnd.apache.avro/ApplicationEvent.json), [YAML](/examples/schemas/multiformat/avro/1.9.1/vnd.apache.avro/ApplicationEvent.yaml))
- **DocumentInfo** - Enhanced document metadata schema ([JSON](/examples/schemas/multiformat/avro/1.9.1/vnd.apache.avro/DocumentInfo.json), [YAML](/examples/schemas/multiformat/avro/1.9.1/vnd.apache.avro/DocumentInfo.yaml))
- **foo.Bar** - Namespaced record with 1.9.1 features ([JSON](/examples/schemas/multiformat/avro/1.9.1/vnd.apache.avro/foo.Bar.json), [YAML](/examples/schemas/multiformat/avro/1.9.1/vnd.apache.avro/foo.Bar.yaml))
- **full_record_v1/v2** - Evolution examples for 1.9.1 ([v1 JSON](/examples/schemas/multiformat/avro/1.9.1/vnd.apache.avro/full_record_v1.json), [v1 YAML](/examples/schemas/multiformat/avro/1.9.1/vnd.apache.avro/full_record_v1.yaml), [v2 JSON](/examples/schemas/multiformat/avro/1.9.1/vnd.apache.avro/full_record_v2.json), [v2 YAML](/examples/schemas/multiformat/avro/1.9.1/vnd.apache.avro/full_record_v2.yaml))
- **logical-uuid** - UUID handling in 1.9.1 ([JSON](/examples/schemas/multiformat/avro/1.9.1/vnd.apache.avro/logical-uuid.json), [YAML](/examples/schemas/multiformat/avro/1.9.1/vnd.apache.avro/logical-uuid.yaml))
- **logical_types_with_multiple_fields** - Multiple logical types example ([JSON](/examples/schemas/multiformat/avro/1.9.1/vnd.apache.avro/logical_types_with_multiple_fields.json), [YAML](/examples/schemas/multiformat/avro/1.9.1/vnd.apache.avro/logical_types_with_multiple_fields.yaml))
- **MyResponse** - Response structure for 1.9.1 ([JSON](/examples/schemas/multiformat/avro/1.9.1/vnd.apache.avro/MyResponse.json), [YAML](/examples/schemas/multiformat/avro/1.9.1/vnd.apache.avro/MyResponse.yaml))
- **regression_error_field_in_record** - Error handling example ([JSON](/examples/schemas/multiformat/avro/1.9.1/vnd.apache.avro/regression_error_field_in_record.json), [YAML](/examples/schemas/multiformat/avro/1.9.1/vnd.apache.avro/regression_error_field_in_record.yaml))
- **schema-location** - Schema reference example ([JSON](/examples/schemas/multiformat/avro/1.9.1/vnd.apache.avro/schema-location.json), [YAML](/examples/schemas/multiformat/avro/1.9.1/vnd.apache.avro/schema-location.yaml))
- **schema-location-read/write** - Read/write schema locations ([read JSON](/examples/schemas/multiformat/avro/1.9.1/vnd.apache.avro/schema-location-read.json), [read YAML](/examples/schemas/multiformat/avro/1.9.1/vnd.apache.avro/schema-location-read.yaml), [write JSON](/examples/schemas/multiformat/avro/1.9.1/vnd.apache.avro/schema-location-write.json), [write YAML](/examples/schemas/multiformat/avro/1.9.1/vnd.apache.avro/schema-location-write.yaml))
- **SchemaBuilder** - Schema construction example ([JSON](/examples/schemas/multiformat/avro/1.9.1/vnd.apache.avro/SchemaBuilder.json), [YAML](/examples/schemas/multiformat/avro/1.9.1/vnd.apache.avro/SchemaBuilder.yaml))
- **simple_record** - Basic record example ([JSON](/examples/schemas/multiformat/avro/1.9.1/vnd.apache.avro/simple_record.json), [YAML](/examples/schemas/multiformat/avro/1.9.1/vnd.apache.avro/simple_record.yaml))
- **TestRecordWithLogicalTypes** - Logical types demonstration ([JSON](/examples/schemas/multiformat/avro/1.9.1/vnd.apache.avro/TestRecordWithLogicalTypes.json), [YAML](/examples/schemas/multiformat/avro/1.9.1/vnd.apache.avro/TestRecordWithLogicalTypes.yaml))
- **TestRecordWithMapsAndArrays** - Complex structures example ([JSON](/examples/schemas/multiformat/avro/1.9.1/vnd.apache.avro/TestRecordWithMapsAndArrays.json), [YAML](/examples/schemas/multiformat/avro/1.9.1/vnd.apache.avro/TestRecordWithMapsAndArrays.yaml))
- **TestUnionRecord** - Union type usage ([JSON](/examples/schemas/multiformat/avro/1.9.1/vnd.apache.avro/TestUnionRecord.json), [YAML](/examples/schemas/multiformat/avro/1.9.1/vnd.apache.avro/TestUnionRecord.yaml))
- **union_and_fixed_fields** - Union and fixed fields example ([JSON](/examples/schemas/multiformat/avro/1.9.1/vnd.apache.avro/union_and_fixed_fields.json), [YAML](/examples/schemas/multiformat/avro/1.9.1/vnd.apache.avro/union_and_fixed_fields.yaml))

### 1.9.2

- **ApplicationEvent** - Event structure for version 1.9.2 ([JSON](/examples/schemas/multiformat/avro/1.9.2/vnd.apache.avro/ApplicationEvent.json), [YAML](/examples/schemas/multiformat/avro/1.9.2/vnd.apache.avro/ApplicationEvent.yaml))
- **DocumentInfo** - Document metadata schema ([JSON](/examples/schemas/multiformat/avro/1.9.2/vnd.apache.avro/DocumentInfo.json), [YAML](/examples/schemas/multiformat/avro/1.9.2/vnd.apache.avro/DocumentInfo.yaml))
- **foo.Bar** - Namespaced record example ([JSON](/examples/schemas/multiformat/avro/1.9.2/vnd.apache.avro/foo.Bar.json), [YAML](/examples/schemas/multiformat/avro/1.9.2/vnd.apache.avro/foo.Bar.yaml))
- **full_record_v1/v2** - Schema evolution examples ([v1 JSON](/examples/schemas/multiformat/avro/1.9.2/vnd.apache.avro/full_record_v1.json), [v1 YAML](/examples/schemas/multiformat/avro/1.9.2/vnd.apache.avro/full_record_v1.yaml), [v2 JSON](/examples/schemas/multiformat/avro/1.9.2/vnd.apache.avro/full_record_v2.json), [v2 YAML](/examples/schemas/multiformat/avro/1.9.2/vnd.apache.avro/full_record_v2.yaml))
- **logical-uuid** - UUID logical type example ([JSON](/examples/schemas/multiformat/avro/1.9.2/vnd.apache.avro/logical-uuid.json), [YAML](/examples/schemas/multiformat/avro/1.9.2/vnd.apache.avro/logical-uuid.yaml))
- **logical_types_with_multiple_fields** - Multiple logical types ([JSON](/examples/schemas/multiformat/avro/1.9.2/vnd.apache.avro/logical_types_with_multiple_fields.json), [YAML](/examples/schemas/multiformat/avro/1.9.2/vnd.apache.avro/logical_types_with_multiple_fields.yaml))
- **MyResponse** - Response structure ([JSON](/examples/schemas/multiformat/avro/1.9.2/vnd.apache.avro/MyResponse.json), [YAML](/examples/schemas/multiformat/avro/1.9.2/vnd.apache.avro/MyResponse.yaml))
- **regression_error_field_in_record** - Error field handling ([JSON](/examples/schemas/multiformat/avro/1.9.2/vnd.apache.avro/regression_error_field_in_record.json), [YAML](/examples/schemas/multiformat/avro/1.9.2/vnd.apache.avro/regression_error_field_in_record.yaml))
- **schema-location** - Schema reference demonstration ([JSON](/examples/schemas/multiformat/avro/1.9.2/vnd.apache.avro/schema-location.json), [YAML](/examples/schemas/multiformat/avro/1.9.2/vnd.apache.avro/schema-location.yaml))
- **schema-location-read/write** - Read/write schema locations ([read JSON](/examples/schemas/multiformat/avro/1.9.2/vnd.apache.avro/schema-location-read.json), [read YAML](/examples/schemas/multiformat/avro/1.9.2/vnd.apache.avro/schema-location-read.yaml), [write JSON](/examples/schemas/multiformat/avro/1.9.2/vnd.apache.avro/schema-location-write.json), [write YAML](/examples/schemas/multiformat/avro/1.9.2/vnd.apache.avro/schema-location-write.yaml))
- **SchemaBuilder** - Programmatic schema building ([JSON](/examples/schemas/multiformat/avro/1.9.2/vnd.apache.avro/SchemaBuilder.json), [YAML](/examples/schemas/multiformat/avro/1.9.2/vnd.apache.avro/SchemaBuilder.yaml))
- **simple_record** - Simple record structure ([JSON](/examples/schemas/multiformat/avro/1.9.2/vnd.apache.avro/simple_record.json), [YAML](/examples/schemas/multiformat/avro/1.9.2/vnd.apache.avro/simple_record.yaml))
- **TestRecordWithLogicalTypes** - Record with logical types ([JSON](/examples/schemas/multiformat/avro/1.9.2/vnd.apache.avro/TestRecordWithLogicalTypes.json), [YAML](/examples/schemas/multiformat/avro/1.9.2/vnd.apache.avro/TestRecordWithLogicalTypes.yaml))
- **TestRecordWithMapsAndArrays** - Complex data structures ([JSON](/examples/schemas/multiformat/avro/1.9.2/vnd.apache.avro/TestRecordWithMapsAndArrays.json), [YAML](/examples/schemas/multiformat/avro/1.9.2/vnd.apache.avro/TestRecordWithMapsAndArrays.yaml))
- **TestUnionRecord** - Union type example ([JSON](/examples/schemas/multiformat/avro/1.9.2/vnd.apache.avro/TestUnionRecord.json), [YAML](/examples/schemas/multiformat/avro/1.9.2/vnd.apache.avro/TestUnionRecord.yaml))
- **union_and_fixed_fields** - Union with fixed fields ([JSON](/examples/schemas/multiformat/avro/1.9.2/vnd.apache.avro/union_and_fixed_fields.json), [YAML](/examples/schemas/multiformat/avro/1.9.2/vnd.apache.avro/union_and_fixed_fields.yaml))

### 1.10.0

- **ApplicationEvent** - Updated event structure for 1.10.0 ([JSON](/examples/schemas/multiformat/avro/1.10.0/vnd.apache.avro/ApplicationEvent.json), [YAML](/examples/schemas/multiformat/avro/1.10.0/vnd.apache.avro/ApplicationEvent.yaml))
- **DocumentInfo** - Enhanced document schema ([JSON](/examples/schemas/multiformat/avro/1.10.0/vnd.apache.avro/DocumentInfo.json), [YAML](/examples/schemas/multiformat/avro/1.10.0/vnd.apache.avro/DocumentInfo.yaml))
- **foo.Bar** - Namespaced record example ([JSON](/examples/schemas/multiformat/avro/1.10.0/vnd.apache.avro/foo.Bar.json), [YAML](/examples/schemas/multiformat/avro/1.10.0/vnd.apache.avro/foo.Bar.yaml))
- **full_record_v1/v2** - Schema evolution examples ([v1 JSON](/examples/schemas/multiformat/avro/1.10.0/vnd.apache.avro/full_record_v1.json), [v1 YAML](/examples/schemas/multiformat/avro/1.10.0/vnd.apache.avro/full_record_v1.yaml), [v2 JSON](/examples/schemas/multiformat/avro/1.10.0/vnd.apache.avro/full_record_v2.json), [v2 YAML](/examples/schemas/multiformat/avro/1.10.0/vnd.apache.avro/full_record_v2.yaml))
- **logical-uuid** - UUID handling in 1.10.0 ([JSON](/examples/schemas/multiformat/avro/1.10.0/vnd.apache.avro/logical-uuid.json), [YAML](/examples/schemas/multiformat/avro/1.10.0/vnd.apache.avro/logical-uuid.yaml))
- **logical_types_with_multiple_fields** - Multiple logical types ([JSON](/examples/schemas/multiformat/avro/1.10.0/vnd.apache.avro/logical_types_with_multiple_fields.json), [YAML](/examples/schemas/multiformat/avro/1.10.0/vnd.apache.avro/logical_types_with_multiple_fields.yaml))
- **MyResponse** - Response structure ([JSON](/examples/schemas/multiformat/avro/1.10.0/vnd.apache.avro/MyResponse.json), [YAML](/examples/schemas/multiformat/avro/1.10.0/vnd.apache.avro/MyResponse.yaml))
- **regression_error_field_in_record** - Error handling ([JSON](/examples/schemas/multiformat/avro/1.10.0/vnd.apache.avro/regression_error_field_in_record.json), [YAML](/examples/schemas/multiformat/avro/1.10.0/vnd.apache.avro/regression_error_field_in_record.yaml))
- **schema-location** - Schema reference example ([JSON](/examples/schemas/multiformat/avro/1.10.0/vnd.apache.avro/schema-location.json), [YAML](/examples/schemas/multiformat/avro/1.10.0/vnd.apache.avro/schema-location.yaml))
- **schema-location-read/write** - Read/write schema locations ([read JSON](/examples/schemas/multiformat/avro/1.10.0/vnd.apache.avro/schema-location-read.json), [read YAML](/examples/schemas/multiformat/avro/1.10.0/vnd.apache.avro/schema-location-read.yaml), [write JSON](/examples/schemas/multiformat/avro/1.10.0/vnd.apache.avro/schema-location-write.json), [write YAML](/examples/schemas/multiformat/avro/1.10.0/vnd.apache.avro/schema-location-write.yaml))
- **SchemaBuilder** - Schema construction ([JSON](/examples/schemas/multiformat/avro/1.10.0/vnd.apache.avro/SchemaBuilder.json), [YAML](/examples/schemas/multiformat/avro/1.10.0/vnd.apache.avro/SchemaBuilder.yaml))
- **simple_record** - Basic record example ([JSON](/examples/schemas/multiformat/avro/1.10.0/vnd.apache.avro/simple_record.json), [YAML](/examples/schemas/multiformat/avro/1.10.0/vnd.apache.avro/simple_record.yaml))
- **TestRecordWithLogicalTypes** - Logical types demonstration ([JSON](/examples/schemas/multiformat/avro/1.10.0/vnd.apache.avro/TestRecordWithLogicalTypes.json), [YAML](/examples/schemas/multiformat/avro/1.10.0/vnd.apache.avro/TestRecordWithLogicalTypes.yaml))
- **TestRecordWithMapsAndArrays** - Complex structures ([JSON](/examples/schemas/multiformat/avro/1.10.0/vnd.apache.avro/TestRecordWithMapsAndArrays.json), [YAML](/examples/schemas/multiformat/avro/1.10.0/vnd.apache.avro/TestRecordWithMapsAndArrays.yaml))
- **TestUnionRecord** - Union type usage ([JSON](/examples/schemas/multiformat/avro/1.10.0/vnd.apache.avro/TestUnionRecord.json), [YAML](/examples/schemas/multiformat/avro/1.10.0/vnd.apache.avro/TestUnionRecord.yaml))
- **union_and_fixed_fields** - Union and fixed fields ([JSON](/examples/schemas/multiformat/avro/1.10.0/vnd.apache.avro/union_and_fixed_fields.json), [YAML](/examples/schemas/multiformat/avro/1.10.0/vnd.apache.avro/union_and_fixed_fields.yaml))

### 1.10.1

- **ApplicationEvent** - Event structure for 1.10.1 ([JSON](/examples/schemas/multiformat/avro/1.10.1/vnd.apache.avro/ApplicationEvent.json), [YAML](/examples/schemas/multiformat/avro/1.10.1/vnd.apache.avro/ApplicationEvent.yaml))
- **DocumentInfo** - Document metadata schema ([JSON](/examples/schemas/multiformat/avro/1.10.1/vnd.apache.avro/DocumentInfo.json), [YAML](/examples/schemas/multiformat/avro/1.10.1/vnd.apache.avro/DocumentInfo.yaml))
- **foo.Bar** - Namespaced record example ([JSON](/examples/schemas/multiformat/avro/1.10.1/vnd.apache.avro/foo.Bar.json), [YAML](/examples/schemas/multiformat/avro/1.10.1/vnd.apache.avro/foo.Bar.yaml))
- **full_record_v1/v2** - Schema evolution examples ([v1 JSON](/examples/schemas/multiformat/avro/1.10.1/vnd.apache.avro/full_record_v1.json), [v1 YAML](/examples/schemas/multiformat/avro/1.10.1/vnd.apache.avro/full_record_v1.yaml), [v2 JSON](/examples/schemas/multiformat/avro/1.10.1/vnd.apache.avro/full_record_v2.json), [v2 YAML](/examples/schemas/multiformat/avro/1.10.1/vnd.apache.avro/full_record_v2.yaml))
- **logical-uuid** - UUID logical type ([JSON](/examples/schemas/multiformat/avro/1.10.1/vnd.apache.avro/logical-uuid.json), [YAML](/examples/schemas/multiformat/avro/1.10.1/vnd.apache.avro/logical-uuid.yaml))
- **logical_types_with_multiple_fields** - Multiple logical types ([JSON](/examples/schemas/multiformat/avro/1.10.1/vnd.apache.avro/logical_types_with_multiple_fields.json), [YAML](/examples/schemas/multiformat/avro/1.10.1/vnd.apache.avro/logical_types_with_multiple_fields.yaml))
- **MyResponse** - Response structure ([JSON](/examples/schemas/multiformat/avro/1.10.1/vnd.apache.avro/MyResponse.json), [YAML](/examples/schemas/multiformat/avro/1.10.1/vnd.apache.avro/MyResponse.yaml))
- **regression_error_field_in_record** - Error field handling ([JSON](/examples/schemas/multiformat/avro/1.10.1/vnd.apache.avro/regression_error_field_in_record.json), [YAML](/examples/schemas/multiformat/avro/1.10.1/vnd.apache.avro/regression_error_field_in_record.yaml))
- **schema-location** - Schema reference example ([JSON](/examples/schemas/multiformat/avro/1.10.1/vnd.apache.avro/schema-location.json), [YAML](/examples/schemas/multiformat/avro/1.10.1/vnd.apache.avro/schema-location.yaml))
- **schema-location-read/write** - Read/write schema locations ([read JSON](/examples/schemas/multiformat/avro/1.10.1/vnd.apache.avro/schema-location-read.json), [read YAML](/examples/schemas/multiformat/avro/1.10.1/vnd.apache.avro/schema-location-read.yaml), [write JSON](/examples/schemas/multiformat/avro/1.10.1/vnd.apache.avro/schema-location-write.json), [write YAML](/examples/schemas/multiformat/avro/1.10.1/vnd.apache.avro/schema-location-write.yaml))
- **SchemaBuilder** - Schema construction ([JSON](/examples/schemas/multiformat/avro/1.10.1/vnd.apache.avro/SchemaBuilder.json), [YAML](/examples/schemas/multiformat/avro/1.10.1/vnd.apache.avro/SchemaBuilder.yaml))
- **simple_record** - Simple record structure ([JSON](/examples/schemas/multiformat/avro/1.10.1/vnd.apache.avro/simple_record.json), [YAML](/examples/schemas/multiformat/avro/1.10.1/vnd.apache.avro/simple_record.yaml))
- **TestRecordWithLogicalTypes** - Record with logical types ([JSON](/examples/schemas/multiformat/avro/1.10.1/vnd.apache.avro/TestRecordWithLogicalTypes.json), [YAML](/examples/schemas/multiformat/avro/1.10.1/vnd.apache.avro/TestRecordWithLogicalTypes.yaml))
- **TestRecordWithMapsAndArrays** - Complex data structures ([JSON](/examples/schemas/multiformat/avro/1.10.1/vnd.apache.avro/TestRecordWithMapsAndArrays.json), [YAML](/examples/schemas/multiformat/avro/1.10.1/vnd.apache.avro/TestRecordWithMapsAndArrays.yaml))
- **TestUnionRecord** - Union type example ([JSON](/examples/schemas/multiformat/avro/1.10.1/vnd.apache.avro/TestUnionRecord.json), [YAML](/examples/schemas/multiformat/avro/1.10.1/vnd.apache.avro/TestUnionRecord.yaml))
- **union_and_fixed_fields** - Union with fixed fields ([JSON](/examples/schemas/multiformat/avro/1.10.1/vnd.apache.avro/union_and_fixed_fields.json), [YAML](/examples/schemas/multiformat/avro/1.10.1/vnd.apache.avro/union_and_fixed_fields.yaml))

### 1.10.2

- **ApplicationEvent** - Event structure for 1.10.2 ([JSON](/examples/schemas/multiformat/avro/1.10.2/vnd.apache.avro/ApplicationEvent.json), [YAML](/examples/schemas/multiformat/avro/1.10.2/vnd.apache.avro/ApplicationEvent.yaml))
- **DocumentInfo** - Document metadata schema ([JSON](/examples/schemas/multiformat/avro/1.10.2/vnd.apache.avro/DocumentInfo.json), [YAML](/examples/schemas/multiformat/avro/1.10.2/vnd.apache.avro/DocumentInfo.yaml))
- **foo.Bar** - Namespaced record example ([JSON](/examples/schemas/multiformat/avro/1.10.2/vnd.apache.avro/foo.Bar.json), [YAML](/examples/schemas/multiformat/avro/1.10.2/vnd.apache.avro/foo.Bar.yaml))
- **full_record_v1/v2** - Schema evolution examples ([v1 JSON](/examples/schemas/multiformat/avro/1.10.2/vnd.apache.avro/full_record_v1.json), [v1 YAML](/examples/schemas/multiformat/avro/1.10.2/vnd.apache.avro/full_record_v1.yaml), [v2 JSON](/examples/schemas/multiformat/avro/1.10.2/vnd.apache.avro/full_record_v2.json), [v2 YAML](/examples/schemas/multiformat/avro/1.10.2/vnd.apache.avro/full_record_v2.yaml))
- **logical-uuid** - UUID logical type ([JSON](/examples/schemas/multiformat/avro/1.10.2/vnd.apache.avro/logical-uuid.json), [YAML](/examples/schemas/multiformat/avro/1.10.2/vnd.apache.avro/logical-uuid.yaml))
- **logical_types_with_multiple_fields** - Multiple logical types ([JSON](/examples/schemas/multiformat/avro/1.10.2/vnd.apache.avro/logical_types_with_multiple_fields.json), [YAML](/examples/schemas/multiformat/avro/1.10.2/vnd.apache.avro/logical_types_with_multiple_fields.yaml))
- **MyResponse** - Response structure ([JSON](/examples/schemas/multiformat/avro/1.10.2/vnd.apache.avro/MyResponse.json), [YAML](/examples/schemas/multiformat/avro/1.10.2/vnd.apache.avro/MyResponse.yaml))
- **regression_error_field_in_record** - Error field handling ([JSON](/examples/schemas/multiformat/avro/1.10.2/vnd.apache.avro/regression_error_field_in_record.json), [YAML](/examples/schemas/multiformat/avro/1.10.2/vnd.apache.avro/regression_error_field_in_record.yaml))
- **schema-location** - Schema reference example ([JSON](/examples/schemas/multiformat/avro/1.10.2/vnd.apache.avro/schema-location.json), [YAML](/examples/schemas/multiformat/avro/1.10.2/vnd.apache.avro/schema-location.yaml))
- **schema-location-read/write** - Read/write schema locations ([read JSON](/examples/schemas/multiformat/avro/1.10.2/vnd.apache.avro/schema-location-read.json), [read YAML](/examples/schemas/multiformat/avro/1.10.2/vnd.apache.avro/schema-location-read.yaml), [write JSON](/examples/schemas/multiformat/avro/1.10.2/vnd.apache.avro/schema-location-write.json), [write YAML](/examples/schemas/multiformat/avro/1.10.2/vnd.apache.avro/schema-location-write.yaml))
- **SchemaBuilder** - Schema construction ([JSON](/examples/schemas/multiformat/avro/1.10.2/vnd.apache.avro/SchemaBuilder.json), [YAML](/examples/schemas/multiformat/avro/1.10.2/vnd.apache.avro/SchemaBuilder.yaml))
- **simple_record** - Simple record structure ([JSON](/examples/schemas/multiformat/avro/1.10.2/vnd.apache.avro/simple_record.json), [YAML](/examples/schemas/multiformat/avro/1.10.2/vnd.apache.avro/simple_record.yaml))
- **TestRecordWithLogicalTypes** - Record with logical types ([JSON](/examples/schemas/multiformat/avro/1.10.2/vnd.apache.avro/TestRecordWithLogicalTypes.json), [YAML](/examples/schemas/multiformat/avro/1.10.2/vnd.apache.avro/TestRecordWithLogicalTypes.yaml))
- **TestRecordWithMapsAndArrays** - Complex data structures ([JSON](/examples/schemas/multiformat/avro/1.10.2/vnd.apache.avro/TestRecordWithMapsAndArrays.json), [YAML](/examples/schemas/multiformat/avro/1.10.2/vnd.apache.avro/TestRecordWithMapsAndArrays.yaml))
- **TestUnionRecord** - Union type example ([JSON](/examples/schemas/multiformat/avro/1.10.2/vnd.apache.avro/TestUnionRecord.json), [YAML](/examples/schemas/multiformat/avro/1.10.2/vnd.apache.avro/TestUnionRecord.yaml))
- **union_and_fixed_fields** - Union with fixed fields ([JSON](/examples/schemas/multiformat/avro/1.10.2/vnd.apache.avro/union_and_fixed_fields.json), [YAML](/examples/schemas/multiformat/avro/1.10.2/vnd.apache.avro/union_and_fixed_fields.yaml))

### 1.11.0

- **ApplicationEvent** - Updated event structure for 1.11.0 ([JSON](/examples/schemas/multiformat/avro/1.11.0/vnd.apache.avro/ApplicationEvent.json), [YAML](/examples/schemas/multiformat/avro/1.11.0/vnd.apache.avro/ApplicationEvent.yaml))
- **DocumentInfo** - Enhanced document schema ([JSON](/examples/schemas/multiformat/avro/1.11.0/vnd.apache.avro/DocumentInfo.json), [YAML](/examples/schemas/multiformat/avro/1.11.0/vnd.apache.avro/DocumentInfo.yaml))
- **foo.Bar** - Namespaced record example ([JSON](/examples/schemas/multiformat/avro/1.11.0/vnd.apache.avro/foo.Bar.json), [YAML](/examples/schemas/multiformat/avro/1.11.0/vnd.apache.avro/foo.Bar.yaml))
- **full_record_v1/v2** - Schema evolution examples ([v1 JSON](/examples/schemas/multiformat/avro/1.11.0/vnd.apache.avro/full_record_v1.json), [v1 YAML](/examples/schemas/multiformat/avro/1.11.0/vnd.apache.avro/full_record_v1.yaml), [v2 JSON](/examples/schemas/multiformat/avro/1.11.0/vnd.apache.avro/full_record_v2.json), [v2 YAML](/examples/schemas/multiformat/avro/1.11.0/vnd.apache.avro/full_record_v2.yaml))
- **logical-uuid** - UUID handling in 1.11.0 ([JSON](/examples/schemas/multiformat/avro/1.11.0/vnd.apache.avro/logical-uuid.json), [YAML](/examples/schemas/multiformat/avro/1.11.0/vnd.apache.avro/logical-uuid.yaml))
- **logical_types_with_multiple_fields** - Multiple logical types ([JSON](/examples/schemas/multiformat/avro/1.11.0/vnd.apache.avro/logical_types_with_multiple_fields.json), [YAML](/examples/schemas/multiformat/avro/1.11.0/vnd.apache.avro/logical_types_with_multiple_fields.yaml))
- **MyResponse** - Response structure ([JSON](/examples/schemas/multiformat/avro/1.11.0/vnd.apache.avro/MyResponse.json), [YAML](/examples/schemas/multiformat/avro/1.11.0/vnd.apache.avro/MyResponse.yaml))
- **regression_error_field_in_record** - Error handling ([JSON](/examples/schemas/multiformat/avro/1.11.0/vnd.apache.avro/regression_error_field_in_record.json), [YAML](/examples/schemas/multiformat/avro/1.11.0/vnd.apache.avro/regression_error_field_in_record.yaml))
- **schema-location** - Schema reference example ([JSON](/examples/schemas/multiformat/avro/1.11.0/vnd.apache.avro/schema-location.json), [YAML](/examples/schemas/multiformat/avro/1.11.0/vnd.apache.avro/schema-location.yaml))
- **schema-location-read/write** - Read/write schema locations ([read JSON](/examples/schemas/multiformat/avro/1.11.0/vnd.apache.avro/schema-location-read.json), [read YAML](/examples/schemas/multiformat/avro/1.11.0/vnd.apache.avro/schema-location-read.yaml), [write JSON](/examples/schemas/multiformat/avro/1.11.0/vnd.apache.avro/schema-location-write.json), [write YAML](/examples/schemas/multiformat/avro/1.11.0/vnd.apache.avro/schema-location-write.yaml))
- **SchemaBuilder** - Schema construction ([JSON](/examples/schemas/multiformat/avro/1.11.0/vnd.apache.avro/SchemaBuilder.json), [YAML](/examples/schemas/multiformat/avro/1.11.0/vnd.apache.avro/SchemaBuilder.yaml))
- **simple_record** - Basic record example ([JSON](/examples/schemas/multiformat/avro/1.11.0/vnd.apache.avro/simple_record.json), [YAML](/examples/schemas/multiformat/avro/1.11.0/vnd.apache.avro/simple_record.yaml))
- **TestRecordWithLogicalTypes** - Logical types demonstration ([JSON](/examples/schemas/multiformat/avro/1.11.0/vnd.apache.avro/TestRecordWithLogicalTypes.json), [YAML](/examples/schemas/multiformat/avro/1.11.0/vnd.apache.avro/TestRecordWithLogicalTypes.yaml))
- **TestRecordWithMapsAndArrays** - Complex structures ([JSON](/examples/schemas/multiformat/avro/1.11.0/vnd.apache.avro/TestRecordWithMapsAndArrays.json), [YAML](/examples/schemas/multiformat/avro/1.11.0/vnd.apache.avro/TestRecordWithMapsAndArrays.yaml))
- **TestUnionRecord** - Union type usage ([JSON](/examples/schemas/multiformat/avro/1.11.0/vnd.apache.avro/TestUnionRecord.json), [YAML](/examples/schemas/multiformat/avro/1.11.0/vnd.apache.avro/TestUnionRecord.yaml))
- **union_and_fixed_fields** - Union and fixed fields ([JSON](/examples/schemas/multiformat/avro/1.11.0/vnd.apache.avro/union_and_fixed_fields.json), [YAML](/examples/schemas/multiformat/avro/1.11.0/vnd.apache.avro/union_and_fixed_fields.yaml))

### 1.11.1

- **ApplicationEvent** - Event structure for 1.11.1 ([JSON](/examples/schemas/multiformat/avro/1.11.1/vnd.apache.avro/ApplicationEvent.json), [YAML](/examples/schemas/multiformat/avro/1.11.1/vnd.apache.avro/ApplicationEvent.yaml))
- **DocumentInfo** - Document metadata schema ([JSON](/examples/schemas/multiformat/avro/1.11.1/vnd.apache.avro/DocumentInfo.json), [YAML](/examples/schemas/multiformat/avro/1.11.1/vnd.apache.avro/DocumentInfo.yaml))
- **foo.Bar** - Namespaced record example ([JSON](/examples/schemas/multiformat/avro/1.11.1/vnd.apache.avro/foo.Bar.json), [YAML](/examples/schemas/multiformat/avro/1.11.1/vnd.apache.avro/foo.Bar.yaml))
- **full_record_v1/v2** - Schema evolution examples ([v1 JSON](/examples/schemas/multiformat/avro/1.11.1/vnd.apache.avro/full_record_v1.json), [v1 YAML](/examples/schemas/multiformat/avro/1.11.1/vnd.apache.avro/full_record_v1.yaml), [v2 JSON](/examples/schemas/multiformat/avro/1.11.1/vnd.apache.avro/full_record_v2.json), [v2 YAML](/examples/schemas/multiformat/avro/1.11.1/vnd.apache.avro/full_record_v2.yaml))
- **logical-uuid** - UUID logical type ([JSON](/examples/schemas/multiformat/avro/1.11.1/vnd.apache.avro/logical-uuid.json), [YAML](/examples/schemas/multiformat/avro/1.11.1/vnd.apache.avro/logical-uuid.yaml))
- **logical_types_with_multiple_fields** - Multiple logical types ([JSON](/examples/schemas/multiformat/avro/1.11.1/vnd.apache.avro/logical_types_with_multiple_fields.json), [YAML](/examples/schemas/multiformat/avro/1.11.1/vnd.apache.avro/logical_types_with_multiple_fields.yaml))
- **MyResponse** - Response structure ([JSON](/examples/schemas/multiformat/avro/1.11.1/vnd.apache.avro/MyResponse.json), [YAML](/examples/schemas/multiformat/avro/1.11.1/vnd.apache.avro/MyResponse.yaml))
- **regression_error_field_in_record** - Error field handling ([JSON](/examples/schemas/multiformat/avro/1.11.1/vnd.apache.avro/regression_error_field_in_record.json), [YAML](/examples/schemas/multiformat/avro/1.11.1/vnd.apache.avro/regression_error_field_in_record.yaml))
- **schema-location** - Schema reference example ([JSON](/examples/schemas/multiformat/avro/1.11.1/vnd.apache.avro/schema-location.json), [YAML](/examples/schemas/multiformat/avro/1.11.1/vnd.apache.avro/schema-location.yaml))
- **schema-location-read/write** - Read/write schema locations ([read JSON](/examples/schemas/multiformat/avro/1.11.1/vnd.apache.avro/schema-location-read.json), [read YAML](/examples/schemas/multiformat/avro/1.11.1/vnd.apache.avro/schema-location-read.yaml), [write JSON](/examples/schemas/multiformat/avro/1.11.1/vnd.apache.avro/schema-location-write.json), [write YAML](/examples/schemas/multiformat/avro/1.11.1/vnd.apache.avro/schema-location-write.yaml))
- **SchemaBuilder** - Schema construction ([JSON](/examples/schemas/multiformat/avro/1.11.1/vnd.apache.avro/SchemaBuilder.json), [YAML](/examples/schemas/multiformat/avro/1.11.1/vnd.apache.avro/SchemaBuilder.yaml))
- **simple_record** - Simple record structure ([JSON](/examples/schemas/multiformat/avro/1.11.1/vnd.apache.avro/simple_record.json), [YAML](/examples/schemas/multiformat/avro/1.11.1/vnd.apache.avro/simple_record.yaml))
- **TestRecordWithLogicalTypes** - Record with logical types ([JSON](/examples/schemas/multiformat/avro/1.11.1/vnd.apache.avro/TestRecordWithLogicalTypes.json), [YAML](/examples/schemas/multiformat/avro/1.11.1/vnd.apache.avro/TestRecordWithLogicalTypes.yaml))
- **TestRecordWithMapsAndArrays** - Complex data structures ([JSON](/examples/schemas/multiformat/avro/1.11.1/vnd.apache.avro/TestRecordWithMapsAndArrays.json), [YAML](/examples/schemas/multiformat/avro/1.11.1/vnd.apache.avro/TestRecordWithMapsAndArrays.yaml))
- **TestUnionRecord** - Union type example ([JSON](/examples/schemas/multiformat/avro/1.11.1/vnd.apache.avro/TestUnionRecord.json), [YAML](/examples/schemas/multiformat/avro/1.11.1/vnd.apache.avro/TestUnionRecord.yaml))
- **union_and_fixed_fields** - Union with fixed fields ([JSON](/examples/schemas/multiformat/avro/1.11.1/vnd.apache.avro/union_and_fixed_fields.json), [YAML](/examples/schemas/multiformat/avro/1.11.1/vnd.apache.avro/union_and_fixed_fields.yaml))

## JSON Schema

JSON Schema is a vocabulary that allows you to annotate and validate JSON documents. It's the foundation for AsyncAPI's Schema Object and provides a way to describe the structure and validation requirements of your JSON data.

In AsyncAPI, JSON Schema (draft-07) can be used to define message payloads with validation rules and documentation.

### Draft-07

- **arrays.schema** - Demonstrates array validation with items, minItems, maxItems, and uniqueItems ([JSON](/examples/schemas/multiformat/json/schema+json/arrays.schema.json))
- **complex-object.schema** - Shows nested object structures with properties and required fields ([JSON](/examples/schemas/multiformat/json/schema+json/complex-object.schema.json))
- **conditional-validation-if-else.schema** - Examples of conditional validation using if/then/else ([JSON](/examples/schemas/multiformat/json/schema+json/conditional-validation-if-else.schema.json))
- **draft-07-core-schema-meta-schema** - The complete JSON Schema draft-07 meta-schema ([JSON](/examples/schemas/multiformat/json/schema+json/draft-07-core-schema-meta-schema.json))
- **enumerated-values.schema** - Demonstrates the enum keyword for restricting values ([JSON](/examples/schemas/multiformat/json/schema+json/enumerated-values.schema.json))
- **person.schema** - Simple person object with basic properties ([JSON](/examples/schemas/multiformat/json/schema+json/person.schema.json))
- **regex-pattern.schema** - Shows string validation using regular expression patterns ([JSON](/examples/schemas/multiformat/json/schema+json/regex-pattern.schema.json))

## AsyncAPI Schema

AsyncAPI Schema extends JSON Schema with additional keywords specific to AsyncAPI. It allows for more expressive schema definitions tailored for asynchronous APIs.

### 2.0.0

- **arrays.schema** - Array validation examples for AsyncAPI 2.0.0 ([JSON](/examples/schemas/multiformat/asyncapi/2.0.0/vnd.aai.asyncapi/arrays.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.0.0/vnd.aai.asyncapi/arrays.schema.yaml))
- **complex-object.schema** - Nested object structures with AsyncAPI extensions ([JSON](/examples/schemas/multiformat/asyncapi/2.0.0/vnd.aai.asyncapi/complex-object.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.0.0/vnd.aai.asyncapi/complex-object.schema.yaml))
- **conditional-validation-if-else.schema** - Conditional validation examples ([JSON](/examples/schemas/multiformat/asyncapi/2.0.0/vnd.aai.asyncapi/conditional-validation-if-else.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.0.0/vnd.aai.asyncapi/conditional-validation-if-else.schema.yaml))
- **draft-07-core-schema-meta-schema** - The JSON Schema meta-schema with AsyncAPI extensions ([JSON](/examples/schemas/multiformat/asyncapi/2.0.0/vnd.aai.asyncapi/draft-07-core-schema-meta-schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.0.0/vnd.aai.asyncapi/draft-07-core-schema-meta-schema.yaml))
- **enumerated-values.schema** - Enum validation examples ([JSON](/examples/schemas/multiformat/asyncapi/2.0.0/vnd.aai.asyncapi/enumerated-values.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.0.0/vnd.aai.asyncapi/enumerated-values.schema.yaml))
- **person.schema** - Person object with AsyncAPI-specific annotations ([JSON](/examples/schemas/multiformat/asyncapi/2.0.0/vnd.aai.asyncapi/person.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.0.0/vnd.aai.asyncapi/person.schema.yaml))
- **regex-pattern.schema** - Regular expression pattern validation ([JSON](/examples/schemas/multiformat/asyncapi/2.0.0/vnd.aai.asyncapi/regex-pattern.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.0.0/vnd.aai.asyncapi/regex-pattern.schema.yaml))

### 2.1.0

- **arrays.schema** - Array validation for AsyncAPI 2.1.0 ([JSON](/examples/schemas/multiformat/asyncapi/2.1.0/vnd.aai.asyncapi/arrays.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.1.0/vnd.aai.asyncapi/arrays.schema.yaml))
- **complex-object.schema** - Complex object structures ([JSON](/examples/schemas/multiformat/asyncapi/2.1.0/vnd.aai.asyncapi/complex-object.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.1.0/vnd.aai.asyncapi/complex-object.schema.yaml))
- **conditional-validation-if-else.schema** - Conditional validation ([JSON](/examples/schemas/multiformat/asyncapi/2.1.0/vnd.aai.asyncapi/conditional-validation-if-else.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.1.0/vnd.aai.asyncapi/conditional-validation-if-else.schema.yaml))
- **draft-07-core-schema-meta-schema** - Extended meta-schema ([JSON](/examples/schemas/multiformat/asyncapi/2.1.0/vnd.aai.asyncapi/draft-07-core-schema-meta-schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.1.0/vnd.aai.asyncapi/draft-07-core-schema-meta-schema.yaml))
- **enumerated-values.schema** - Enumeration examples ([JSON](/examples/schemas/multiformat/asyncapi/2.1.0/vnd.aai.asyncapi/enumerated-values.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.1.0/vnd.aai.asyncapi/enumerated-values.schema.yaml))
- **person.schema** - Person object schema ([JSON](/examples/schemas/multiformat/asyncapi/2.1.0/vnd.aai.asyncapi/person.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.1.0/vnd.aai.asyncapi/person.schema.yaml))
- **regex-pattern.schema** - Pattern validation ([JSON](/examples/schemas/multiformat/asyncapi/2.1.0/vnd.aai.asyncapi/regex-pattern.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.1.0/vnd.aai.asyncapi/regex-pattern.schema.yaml))

### 2.2.0

- **arrays.schema** - Array validation for AsyncAPI 2.2.0 ([JSON](/examples/schemas/multiformat/asyncapi/2.2.0/vnd.aai.asyncapi/arrays.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.2.0/vnd.aai.asyncapi/arrays.schema.yaml))
- **complex-object.schema** - Complex object structures ([JSON](/examples/schemas/multiformat/asyncapi/2.2.0/vnd.aai.asyncapi/complex-object.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.2.0/vnd.aai.asyncapi/complex-object.schema.yaml))
- **conditional-validation-if-else.schema** - Conditional validation ([JSON](/examples/schemas/multiformat/asyncapi/2.2.0/vnd.aai.asyncapi/conditional-validation-if-else.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.2.0/vnd.aai.asyncapi/conditional-validation-if-else.schema.yaml))
- **draft-07-core-schema-meta-schema** - Extended meta-schema ([JSON](/examples/schemas/multiformat/asyncapi/2.2.0/vnd.aai.asyncapi/draft-07-core-schema-meta-schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.2.0/vnd.aai.asyncapi/draft-07-core-schema-meta-schema.yaml))
- **enumerated-values.schema** - Enumeration examples ([JSON](/examples/schemas/multiformat/asyncapi/2.2.0/vnd.aai.asyncapi/enumerated-values.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.2.0/vnd.aai.asyncapi/enumerated-values.schema.yaml))
- **person.schema** - Person object schema ([JSON](/examples/schemas/multiformat/asyncapi/2.2.0/vnd.aai.asyncapi/person.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.2.0/vnd.aai.asyncapi/person.schema.yaml))
- **regex-pattern.schema** - Pattern validation ([JSON](/examples/schemas/multiformat/asyncapi/2.2.0/vnd.aai.asyncapi/regex-pattern.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.2.0/vnd.aai.asyncapi/regex-pattern.schema.yaml))

### 2.3.0

- **arrays.schema** - Array validation for AsyncAPI 2.3.0 ([JSON](/examples/schemas/multiformat/asyncapi/2.3.0/vnd.aai.asyncapi/arrays.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.3.0/vnd.aai.asyncapi/arrays.schema.yaml))
- **complex-object.schema** - Complex object structures ([JSON](/examples/schemas/multiformat/asyncapi/2.3.0/vnd.aai.asyncapi/complex-object.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.3.0/vnd.aai.asyncapi/complex-object.schema.yaml))
- **conditional-validation-if-else.schema** - Conditional validation ([JSON](/examples/schemas/multiformat/asyncapi/2.3.0/vnd.aai.asyncapi/conditional-validation-if-else.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.3.0/vnd.aai.asyncapi/conditional-validation-if-else.schema.yaml))
- **draft-07-core-schema-meta-schema** - Extended meta-schema ([JSON](/examples/schemas/multiformat/asyncapi/2.3.0/vnd.aai.asyncapi/draft-07-core-schema-meta-schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.3.0/vnd.aai.asyncapi/draft-07-core-schema-meta-schema.yaml))
- **enumerated-values.schema** - Enumeration examples ([JSON](/examples/schemas/multiformat/asyncapi/2.3.0/vnd.aai.asyncapi/enumerated-values.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.3.0/vnd.aai.asyncapi/enumerated-values.schema.yaml))
- **person.schema** - Person object schema ([JSON](/examples/schemas/multiformat/asyncapi/2.3.0/vnd.aai.asyncapi/person.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.3.0/vnd.aai.asyncapi/person.schema.yaml))
- **regex-pattern.schema** - Pattern validation ([JSON](/examples/schemas/multiformat/asyncapi/2.3.0/vnd.aai.asyncapi/regex-pattern.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.3.0/vnd.aai.asyncapi/regex-pattern.schema.yaml))

### 2.4.0

- **arrays.schema** - Array validation for AsyncAPI 2.4.0 ([JSON](/examples/schemas/multiformat/asyncapi/2.4.0/vnd.aai.asyncapi/arrays.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.4.0/vnd.aai.asyncapi/arrays.schema.yaml))
- **complex-object.schema** - Complex object structures ([JSON](/examples/schemas/multiformat/asyncapi/2.4.0/vnd.aai.asyncapi/complex-object.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.4.0/vnd.aai.asyncapi/complex-object.schema.yaml))
- **conditional-validation-if-else.schema** - Conditional validation ([JSON](/examples/schemas/multiformat/asyncapi/2.4.0/vnd.aai.asyncapi/conditional-validation-if-else.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.4.0/vnd.aai.asyncapi/conditional-validation-if-else.schema.yaml))
- **draft-07-core-schema-meta-schema** - Extended meta-schema ([JSON](/examples/schemas/multiformat/asyncapi/2.4.0/vnd.aai.asyncapi/draft-07-core-schema-meta-schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.4.0/vnd.aai.asyncapi/draft-07-core-schema-meta-schema.yaml))
- **enumerated-values.schema** - Enumeration examples ([JSON](/examples/schemas/multiformat/asyncapi/2.4.0/vnd.aai.asyncapi/enumerated-values.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.4.0/vnd.aai.asyncapi/enumerated-values.schema.yaml))
- **person.schema** - Person object schema ([JSON](/examples/schemas/multiformat/asyncapi/2.4.0/vnd.aai.asyncapi/person.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.4.0/vnd.aai.asyncapi/person.schema.yaml))
- **regex-pattern.schema** - Pattern validation ([JSON](/examples/schemas/multiformat/asyncapi/2.4.0/vnd.aai.asyncapi/regex-pattern.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.4.0/vnd.aai.asyncapi/regex-pattern.schema.yaml))

### 2.5.0

- **arrays.schema** - Array validation for AsyncAPI 2.5.0 ([JSON](/examples/schemas/multiformat/asyncapi/2.5.0/vnd.aai.asyncapi/arrays.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.5.0/vnd.aai.asyncapi/arrays.schema.yaml))
- **complex-object.schema** - Complex object structures ([JSON](/examples/schemas/multiformat/asyncapi/2.5.0/vnd.aai.asyncapi/complex-object.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.5.0/vnd.aai.asyncapi/complex-object.schema.yaml))
- **conditional-validation-if-else.schema** - Conditional validation ([JSON](/examples/schemas/multiformat/asyncapi/2.5.0/vnd.aai.asyncapi/conditional-validation-if-else.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.5.0/vnd.aai.asyncapi/conditional-validation-if-else.schema.yaml))
- **draft-07-core-schema-meta-schema** - Extended meta-schema ([JSON](/examples/schemas/multiformat/asyncapi/2.5.0/vnd.aai.asyncapi/draft-07-core-schema-meta-schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.5.0/vnd.aai.asyncapi/draft-07-core-schema-meta-schema.yaml))
- **enumerated-values.schema** - Enumeration examples ([JSON](/examples/schemas/multiformat/asyncapi/2.5.0/vnd.aai.asyncapi/enumerated-values.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.5.0/vnd.aai.asyncapi/enumerated-values.schema.yaml))
- **person.schema** - Person object schema ([JSON](/examples/schemas/multiformat/asyncapi/2.5.0/vnd.aai.asyncapi/person.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.5.0/vnd.aai.asyncapi/person.schema.yaml))
- **regex-pattern.schema** - Pattern validation ([JSON](/examples/schemas/multiformat/asyncapi/2.5.0/vnd.aai.asyncapi/regex-pattern.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.5.0/vnd.aai.asyncapi/regex-pattern.schema.yaml))

### 2.6.0

- **arrays.schema** - Array validation for AsyncAPI 2.6.0 ([JSON](/examples/schemas/multiformat/asyncapi/2.6.0/vnd.aai.asyncapi/arrays.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.6.0/vnd.aai.asyncapi/arrays.schema.yaml))
- **complex-object.schema** - Complex object structures ([JSON](/examples/schemas/multiformat/asyncapi/2.6.0/vnd.aai.asyncapi/complex-object.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.6.0/vnd.aai.asyncapi/complex-object.schema.yaml))
- **conditional-validation-if-else.schema** - Conditional validation ([JSON](/examples/schemas/multiformat/asyncapi/2.6.0/vnd.aai.asyncapi/conditional-validation-if-else.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.6.0/vnd.aai.asyncapi/conditional-validation-if-else.schema.yaml))
- **draft-07-core-schema-meta-schema** - Extended meta-schema ([JSON](/examples/schemas/multiformat/asyncapi/2.6.0/vnd.aai.asyncapi/draft-07-core-schema-meta-schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.6.0/vnd.aai.asyncapi/draft-07-core-schema-meta-schema.yaml))
- **enumerated-values.schema** - Enumeration examples ([JSON](/examples/schemas/multiformat/asyncapi/2.6.0/vnd.aai.asyncapi/enumerated-values.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.6.0/vnd.aai.asyncapi/enumerated-values.schema.yaml))
- **person.schema** - Person object schema ([JSON](/examples/schemas/multiformat/asyncapi/2.6.0/vnd.aai.asyncapi/person.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.6.0/vnd.aai.asyncapi/person.schema.yaml))
- **regex-pattern.schema** - Pattern validation ([JSON](/examples/schemas/multiformat/asyncapi/2.6.0/vnd.aai.asyncapi/regex-pattern.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/2.6.0/vnd.aai.asyncapi/regex-pattern.schema.yaml))

### 3.0.0

- **arrays.schema** - Array validation for AsyncAPI 3.0.0 ([JSON](/examples/schemas/multiformat/asyncapi/3.0.0/vnd.aai.asyncapi/arrays.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/3.0.0/vnd.aai.asyncapi/arrays.schema.yaml))
- **complex-object.schema** - Complex object structures ([JSON](/examples/schemas/multiformat/asyncapi/3.0.0/vnd.aai.asyncapi/complex-object.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/3.0.0/vnd.aai.asyncapi/complex-object.schema.yaml))
- **conditional-validation-if-else.schema** - Conditional validation ([JSON](/examples/schemas/multiformat/asyncapi/3.0.0/vnd.aai.asyncapi/conditional-validation-if-else.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/3.0.0/vnd.aai.asyncapi/conditional-validation-if-else.schema.yaml))
- **draft-07-core-schema-meta-schema** - Extended meta-schema ([JSON](/examples/schemas/multiformat/asyncapi/3.0.0/vnd.aai.asyncapi/draft-07-core-schema-meta-schema.json), [YAML](/examples/schemas/multiformat/asyncapi/3.0.0/vnd.aai.asyncapi/draft-07-core-schema-meta-schema.yaml))
- **enumerated-values.schema** - Enumeration examples ([JSON](/examples/schemas/multiformat/asyncapi/3.0.0/vnd.aai.asyncapi/enumerated-values.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/3.0.0/vnd.aai.asyncapi/enumerated-values.schema.yaml))
- **person.schema** - Person object schema ([JSON](/examples/schemas/multiformat/asyncapi/3.0.0/vnd.aai.asyncapi/person.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/3.0.0/vnd.aai.asyncapi/person.schema.yaml))
- **regex-pattern.schema** - Pattern validation ([JSON](/examples/schemas/multiformat/asyncapi/3.0.0/vnd.aai.asyncapi/regex-pattern.schema.json), [YAML](/examples/schemas/multiformat/asyncapi/3.0.0/vnd.aai.asyncapi/regex-pattern.schema.yaml))

## OpenAPI Schema

OpenAPI Schema is based on JSON Schema but includes extensions specific to the OpenAPI Specification. It's used to define request and response payloads in REST APIs.

### 3.0.0

- **schema** - Basic OpenAPI 3.0.0 schema example ([JSON](/examples/schemas/multiformat/openapi/3.0.0/vnd.oai.openapi/schema.json), [YAML](/examples/schemas/multiformat/openapi/3.0.0/vnd.oai.openapi/schema.yaml))

### 3.0.1

- **schema** - OpenAPI 3.0.1 schema with updated features ([JSON](/examples/schemas/multiformat/openapi/3.0.1/vnd.oai.openapi/schema.json), [YAML](/examples/schemas/multiformat/openapi/3.0.1/vnd.oai.openapi/schema.yaml))

### 3.0.2

- **schema** - OpenAPI 3.0.2 schema example ([JSON](/examples/schemas/multiformat/openapi/3.0.2/vnd.oai.openapi/schema.json), [YAML](/examples/schemas/multiformat/openapi/3.0.2/vnd.oai.openapi/schema.yaml))

### 3.0.3

- **schema** - OpenAPI 3.0.3 schema with latest features ([JSON](/examples/schemas/multiformat/openapi/3.0.3/vnd.oai.openapi/schema.json), [YAML](/examples/schemas/multiformat/openapi/3.0.3/vnd.oai.openapi/schema.yaml))

## XML

XML Schema Definition (XSD) is a recommendation of the World Wide Web Consortium that specifies how to formally describe the elements in an XML document. XSD defines the structure, content, and semantics of XML documents, allowing for validation and strong typing of XML data.

In AsyncAPI, XML schemas can be used to define message payloads when working with XML-based protocols or systems that require XML data formats. The XML schema is embedded within the AsyncAPI document using the `schemaFormat` property set to `application/xml`.

XML schemas offer several advantages for API definitions:

- **Strong typing and validation**: XSD provides robust validation capabilities with built-in data types and constraints
- **Wide industry adoption**: XML is supported across many enterprise systems and legacy applications
- **Rich expression**: Complex data structures can be precisely defined with namespaces, attributes, and elements
- **Tooling support**: Many tools exist for working with XML schemas, including validators and code generators

#### When to Use XML Schemas in AsyncAPI

XML schemas are particularly useful in the following scenarios:

- Integrating with enterprise systems that use XML as their primary data format
- Working with SOAP-based services or XML-RPC
- Maintaining backward compatibility with existing XML-based APIs
- Industries with established XML standards (like finance, healthcare, or telecommunications)
- When strong validation and type checking are required

#### Examples

- **User Schema** - Defines a simple user data structure with display name and email ([JSON](/examples/schemas/multiformat/xml/user.json), [YAML](/examples/schemas/multiformat/xml/user.yaml))

The User schema example demonstrates how to embed an XML schema within an AsyncAPI document. The schema defines a `User` element with two child elements:

```xml
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

This schema can be used to validate XML messages that contain user information, ensuring they have the required `displayName` and `email` elements with proper string values.

## Other Formats

AsyncAPI also supports several other schema formats:

### RAML

RAML (RESTful API Modeling Language) is a YAML-based language for describing RESTful APIs.

- **application/raml+yaml;version=1.0** - RAML 1.0 schema format

### Google Protobuf

Protocol Buffers (Protobuf) is Google's language-neutral, platform-neutral, extensible mechanism for serializing structured data.

- **application/vnd.google.protobuf;version=2** - Protobuf version 2 schema format
- **application/vnd.google.protobuf;version=3** - Protobuf version 3 schema format

## Special Cases

The Multi-Format Schema Object handles several special cases:

### Empty schemaFormat

When the schemaFormat property is empty, the schema is treated as an AsyncAPI Schema Object.

### Null schemaFormat

When the schemaFormat property is null, the schema is treated as an AsyncAPI Schema Object.

### Without schemaFormat

When the schemaFormat property is not provided, the schema defaults to the AsyncAPI Schema Object format.

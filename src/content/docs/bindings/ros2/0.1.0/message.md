---
title: ROS 2 Message Binding v0.1.0 - Message Configuration
description: Configure ROS 2 message bindings v0.1.0 in AsyncAPI. Define ROS 2 message properties and communication patterns for robotics applications.
ogImage: /bindings/ros2/0.1.0/message.png
head:
  - tag: meta
    attrs:
      name: keywords
      content: ROS 2 message binding v0.1.0, AsyncAPI, Robot Operating System, ROS messages, message properties, robotics, data types, communication patterns
heading: "ROS 2 Message Binding v0.1.0"
---

The ROS 2 message binding defines how AsyncAPI messages map to ROS 2 message types and properties. This binding provides basic configuration for ROS 2 message-based communication.

## Overview

ROS 2 message bindings configure the message properties and data types used in ROS 2 communication. They define:

- **Message Properties**: Basic settings for ROS 2 messages
- **Data Types**: How AsyncAPI messages map to ROS 2 message types
- **Communication Patterns**: Message-based communication configurations

## Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | The version of this binding. If omitted, 'latest' MUST be assumed. |

### bindingVersion

The version of this binding. If omitted, 'latest' MUST be assumed.

**Type:** `string`  
**Default:** `"0.1.0"`  
**Required:** No

## Examples

### Basic Message Configuration

```yaml
channels:
  sensorData:
    publish:
      message:
        bindings:
          ros2:
            bindingVersion: "0.1.0"
```

### Multiple Message Types

```yaml
channels:
  cameraImage:
    publish:
      message:
        bindings:
          ros2:
            bindingVersion: "0.1.0"
  
  lidarScan:
    publish:
      message:
        bindings:
          ros2:
            bindingVersion: "0.1.0"
```

### Service Message

```yaml
channels:
  parameterService:
    subscribe:
      message:
        bindings:
          ros2:
            bindingVersion: "0.1.0"
```

## Use Cases

### Sensor Data Messages
- **Image Messages**: Configure messages for camera image data
- **Point Cloud Messages**: Set up messages for lidar scan data
- **IMU Messages**: Define messages for inertial measurement unit data
- **GPS Messages**: Configure messages for GPS position data

### Control Messages
- **Command Messages**: Set up messages for robot control commands
- **Status Messages**: Define messages for robot status information
- **Feedback Messages**: Configure messages for control feedback

### Service Messages
- **Request Messages**: Configure messages for service requests
- **Response Messages**: Set up messages for service responses
- **Parameter Messages**: Define messages for parameter management

## Message Types

### Standard ROS 2 Messages
- **Primitive Types**: Basic data types (int, float, string, bool)
- **Complex Types**: Arrays, structures, and nested objects
- **Time Types**: Timestamps and duration values
- **Geometric Types**: Points, vectors, and transforms

### Custom Message Types
- **Domain-Specific**: Messages tailored to specific applications
- **Vendor-Specific**: Messages for specific hardware or software
- **Protocol-Specific**: Messages for specific communication protocols

### Service Message Types
- **Request Messages**: Input parameters for service calls
- **Response Messages**: Output parameters for service calls
- **Feedback Messages**: Progress updates for long-running operations

## Best Practices

### Message Design
- Use descriptive message names that indicate the data type
- Follow ROS 2 message naming conventions
- Keep messages focused on a single purpose
- Document message structure and field meanings

### Data Type Selection
- Choose appropriate primitive types for your data
- Use standard ROS 2 message types when possible
- Consider message size and performance implications
- Validate message compatibility across systems

### Message Documentation
- Document message purpose and usage
- Provide examples of message content
- Specify data ranges and constraints
- Include unit information for numeric fields

## Related Documentation

- [ROS 2 Messages Documentation](https://docs.ros.org/en/humble/Concepts/Basic/About-Interfaces.html#messages)
- [ROS 2 Service Interfaces](https://docs.ros.org/en/humble/Concepts/Basic/About-Interfaces.html)
- [AsyncAPI Message Documentation](https://www.asyncapi.com/docs/reference/specification/v3.0.0#messageObject)

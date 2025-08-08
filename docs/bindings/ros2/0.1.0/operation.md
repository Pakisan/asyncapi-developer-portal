---
title: ROS 2 Operation Binding v0.1.0 - Node & QoS Configuration
description: Configure ROS 2 operation bindings v0.1.0 in AsyncAPI. Define ROS 2 nodes, QoS policies, and communication roles for robotics applications.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: ROS 2 operation binding v0.1.0, AsyncAPI, Robot Operating System, ROS nodes, QoS policies, publisher, subscriber, service, action, reliability, durability, liveliness
  - - meta
    - property: og:title
      content: ROS 2 Operation Binding v0.1.0 - Node & QoS Configuration
  - - meta
    - property: og:description
      content: Configure ROS 2 operation bindings v0.1.0 in AsyncAPI. Define ROS 2 nodes, QoS policies, and communication roles for robotics applications.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/ros2/0.1.0/operation.html
  - - meta
    - property: og:image
      content: /bindings/ros2/0.1.0/operation.png
  - - meta
    - name: twitter:title
      content: ROS 2 Operation Binding v0.1.0 - Node & QoS Configuration
  - - meta
    - name: twitter:description
      content: Configure ROS 2 operation bindings v0.1.0 in AsyncAPI. Define ROS 2 nodes, QoS policies, and communication roles for robotics applications.
  - - link
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/ros2/0.1.0/operation.html
---

# ROS 2 Operation Binding v0.1.0

The ROS 2 operation binding defines how AsyncAPI operations map to ROS 2 nodes and their communication roles. This binding provides comprehensive configuration for ROS 2 nodes, Quality of Service (QoS) policies, and communication patterns.

## Overview

ROS 2 operation bindings configure the behavior of ROS 2 nodes and their communication characteristics. They define:

- **Node Configuration**: ROS 2 node names and roles
- **QoS Policies**: Quality of Service settings for reliable communication
- **Communication Roles**: Publisher, subscriber, service, and action patterns
- **Performance Tuning**: Deadline, lifespan, and liveliness settings

## Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | The version of this binding. If omitted, 'latest' MUST be assumed. |
| `node` | string | Yes | The name of the ROS 2 node that implements this operation. |
| `role` | string | Yes | Specifies the ROS 2 type of the node for this operation. |
| `qosPolicies` | object | No | Quality of Service policies for communication. |

### bindingVersion

The version of this binding. If omitted, 'latest' MUST be assumed.

**Type:** `string`  
**Enum:** `["0.1.0"]`  
**Required:** No

### node

The name of the ROS 2 node that implements this operation.

**Type:** `string`  
**Required:** Yes

**Usage:**
- Use descriptive node names that indicate the node's purpose
- Follow ROS 2 naming conventions
- Ensure node names are unique within your system
- Use namespaces to organize related nodes

### role

Specifies the ROS 2 type of the node for this operation.

**Type:** `string`  
**Enum:** `["publisher", "subscriber", "service_client", "service_server", "action_client", "action_server"]`  
**Required:** Yes

**Values:**
- `publisher`: Node that publishes messages to topics
- `subscriber`: Node that subscribes to topics and receives messages
- `service_client`: Node that makes service requests
- `service_server`: Node that provides service responses
- `action_client`: Node that sends action goals
- `action_server`: Node that executes action goals

### qosPolicies

Quality of Service policies for communication. This object contains various QoS settings that control the reliability and performance of ROS 2 communication.

**Type:** `object`  
**Required:** No

#### QoS Policy Properties

| Property | Type | Description |
|----------|------|-------------|
| `deadline` | integer | The expected maximum amount of time between subsequent messages being published to a topic. -1 means infinite. |
| `durability` | string | Persistence specification that determines message availability for late-joining subscribers |
| `history` | string | Policy parameter that defines the maximum number of samples maintained in the middleware queue |
| `leaseDuration` | integer | The maximum period of time a publisher has to indicate that it is alive before the system considers it to have lost liveliness. -1 means infinite. |
| `lifespan` | integer | The maximum amount of time between the publishing and the reception of a message without the message being considered stale or expired. -1 means infinite. |
| `liveliness` | string | Defines the mechanism by which the system monitors and determines the operational status of communication entities within the network. |
| `reliability` | string | Specifies the communication guarantee model that determines whether message delivery confirmation between publisher and subscriber is required. |

##### deadline

The expected maximum amount of time between subsequent messages being published to a topic. -1 means infinite.

**Type:** `integer`  
**Default:** -1 (infinite)

**Usage:**
- Set to a positive value (in milliseconds) to enforce timing constraints
- Use -1 for no deadline requirements
- Important for real-time systems with timing requirements

##### durability

Persistence specification that determines message availability for late-joining subscribers.

**Type:** `string`  
**Enum:** `["transient_local", "volatile"]`  
**Default:** `"volatile"`

**Values:**
- `volatile`: Messages are not stored for late-joining subscribers
- `transient_local`: Messages are stored for late-joining subscribers

##### history

Policy parameter that defines the maximum number of samples maintained in the middleware queue.

**Type:** `string`  
**Enum:** `["keep_last", "keep_all", "unknown"]`  
**Default:** `"unknown"`

**Values:**
- `keep_last`: Keep only the last N samples (where N is the depth)
- `keep_all`: Keep all samples until the queue is full
- `unknown`: Use system default behavior

##### leaseDuration

The maximum period of time a publisher has to indicate that it is alive before the system considers it to have lost liveliness. -1 means infinite.

**Type:** `integer`  
**Default:** -1 (infinite)

**Usage:**
- Set to a positive value (in milliseconds) to monitor publisher health
- Use -1 for no liveliness monitoring
- Important for detecting failed publishers

##### lifespan

The maximum amount of time between the publishing and the reception of a message without the message being considered stale or expired. -1 means infinite.

**Type:** `integer`  
**Default:** -1 (infinite)

**Usage:**
- Set to a positive value (in milliseconds) to enforce message freshness
- Use -1 for no expiration requirements
- Important for time-sensitive data

##### liveliness

Defines the mechanism by which the system monitors and determines the operational status of communication entities within the network.

**Type:** `string`  
**Enum:** `["automatic", "manual"]`  
**Default:** `"automatic"`

**Values:**
- `automatic`: System automatically monitors liveliness
- `manual`: Application must manually indicate liveliness

##### reliability

Specifies the communication guarantee model that determines whether message delivery confirmation between publisher and subscriber is required.

**Type:** `string`  
**Enum:** `["best_effort", "realiable"]`  
**Default:** `"reliable"`

**Values:**
- `best_effort`: No delivery guarantees, faster performance
- `realiable`: Guaranteed delivery, potentially slower

## Examples

### Basic Publisher Configuration

```yaml
channels:
  sensorData:
    publish:
      bindings:
        ros2:
          bindingVersion: "0.1.0"
          node: "/sensor_node"
          role: "publisher"
          qosPolicies:
            reliability: "reliable"
            durability: "volatile"
            history: "keep_last"
```

### Subscriber with QoS Policies

```yaml
channels:
  cameraImage:
    subscribe:
      bindings:
        ros2:
          bindingVersion: "0.1.0"
          node: "/vision_node"
          role: "subscriber"
          qosPolicies:
            reliability: "reliable"
            durability: "transient_local"
            history: "keep_last"
            deadline: 100
            lifespan: 500
```

### Service Server Configuration

```yaml
channels:
  parameterService:
    subscribe:
      bindings:
        ros2:
          bindingVersion: "0.1.0"
          node: "/parameter_server"
          role: "service_server"
          qosPolicies:
            reliability: "reliable"
            durability: "transient_local"
            liveliness: "automatic"
```

### Action Client Setup

```yaml
channels:
  navigationAction:
    publish:
      bindings:
        ros2:
          bindingVersion: "0.1.0"
          node: "/navigation_client"
          role: "action_client"
          qosPolicies:
            reliability: "reliable"
            durability: "volatile"
            deadline: 1000
            leaseDuration: 5000
```

### Real-time Sensor Publisher

```yaml
channels:
  lidarScan:
    publish:
      bindings:
        ros2:
          bindingVersion: "0.1.0"
          node: "/lidar_node"
          role: "publisher"
          qosPolicies:
            reliability: "best_effort"
            durability: "volatile"
            history: "keep_last"
            deadline: 50
            lifespan: 100
            liveliness: "automatic"
```

## Use Cases

### Sensor Data Publishing
- **High-Frequency Sensors**: Use `best_effort` reliability for performance
- **Critical Sensors**: Use `reliable` delivery for important data
- **Real-time Systems**: Set appropriate deadlines and lifespans
- **Late-Joining Subscribers**: Use `transient_local` durability

### Control Systems
- **Command Publishers**: Use `reliable` delivery for critical commands
- **Status Subscribers**: Configure appropriate QoS for status monitoring
- **Feedback Loops**: Set deadlines for real-time control
- **Safety Systems**: Use high-reliability QoS settings

### Service Communication
- **Parameter Services**: Use `reliable` delivery for configuration
- **Diagnostic Services**: Configure appropriate QoS for diagnostics
- **Control Services**: Set deadlines for time-sensitive operations

### Action Systems
- **Navigation Actions**: Configure QoS for long-running operations
- **Manipulation Actions**: Set appropriate timeouts and deadlines
- **Task Planning**: Use reliable delivery for complex operations

## Best Practices

### QoS Policy Selection
- **Performance vs Reliability**: Choose between `best_effort` and `reliable`
- **Data Persistence**: Use `transient_local` for important data
- **Real-time Requirements**: Set appropriate deadlines and lifespans
- **System Monitoring**: Configure liveliness for health monitoring

### Node Configuration
- **Descriptive Names**: Use clear, descriptive node names
- **Role Clarity**: Ensure node roles match their actual behavior
- **Namespace Organization**: Use namespaces to organize related nodes
- **Documentation**: Document node purposes and QoS requirements

### Performance Tuning
- **Network Conditions**: Adjust QoS based on network performance
- **System Resources**: Consider resource usage of different QoS settings
- **Application Requirements**: Match QoS to application needs
- **Testing**: Test QoS configurations in your target environment

## Related Documentation

- [ROS 2 QoS Documentation](https://docs.ros.org/en/humble/Concepts/Intermediate/About-Quality-of-Service-Settings.html)
- [ROS 2 Node Documentation](https://docs.ros.org/en/humble/Tutorials/Beginner-CLI-Tools/Understanding-ROS2-Nodes/Understanding-ROS2-Nodes.html)
- [ROS 2 Services Documentation](https://docs.ros.org/en/humble/Tutorials/Beginner-CLI-Tools/Understanding-ROS2-Services/Understanding-ROS2-Services.html)
- [ROS 2 Actions Documentation](https://docs.ros.org/en/humble/Tutorials/Beginner-CLI-Tools/Understanding-ROS2-Actions/Understanding-ROS2-Actions.html)
- [DDS Quality of Service](https://www.omg.org/spec/DDS/About-DDS/)

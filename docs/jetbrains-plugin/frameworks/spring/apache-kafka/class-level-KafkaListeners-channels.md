---
title: "Class-level @KafkaListeners Channels"
description: "How repeated class-level @KafkaListener annotations grouped by @KafkaListeners are registered as AsyncAPI channels."
---

# Class Level @KafkaListeners

## Selection Criteria

Found class will be selected for further processing only if `@KafkaListeners` is no empty. Otherwise, it will be skipped.

## Registration process

> `@KafkaListeners` annotation is used to configure multiple `@KafkaListener`s at once, when repeatable annotations are not supported

See [Class Level @KafkaListener registration process](class-level-KafkaListener-channels.md#registration-process)
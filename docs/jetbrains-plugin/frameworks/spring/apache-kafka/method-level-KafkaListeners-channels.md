---
title: "Method-level @KafkaListeners Channels"
description: "How multiple @KafkaListener annotations grouped by @KafkaListeners on a method are registered as AsyncAPI channels."
---

# Method Level @KafkaListeners

## Selection Criteria

Found methods will be selected for further processing only if `@KafkaListeners` is no empty. Otherwise, it will be skipped.

## Registration process

> `@KafkaListeners` annotation is used to configure multiple `@KafkaListener`s at once, when repeatable annotations are not supported

See [Method Level @KafkaListener registration process](method-level-KafkaListener-channels.md#registration-process)
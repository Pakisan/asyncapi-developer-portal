---
title: Kurkik – Generate AsyncAPI from Kafka, Pulsar, SNS and SQS
description: Kurkik documents a live Kafka, Pulsar, Amazon SNS or SQS system as AsyncAPI 3.0, detects drift and applies changes only after review. Coming soon.
head:
  - - meta
    - name: keywords
      content: Kurkik, generate AsyncAPI from Kafka, AsyncAPI from broker, AsyncAPI drift detection, document Kafka topics, AsyncAPI Pulsar, AsyncAPI SNS SQS, AsyncAPI 3.0
---

# Kurkik

**Status: announced, coming soon.** Kurkik is not released yet and has no public download.

From a running messaging system to an AsyncAPI document, and back. It is named after Kurkik Jalali, the fiery horse of the Armenian epic *Daredevils of Sasun*, who bridges worlds, shows what is really there, and is fast.

## What it will do

- **Document what exists.** Point it at an Apache Kafka, Apache Pulsar, Amazon SNS or Amazon SQS estate and get an AsyncAPI 3.0 document: topics or queues, their settings, brokers, consumer groups and, optionally, the real message schemas from your schema registry.
- **Be honest about gaps.** When it cannot read something, the document says so. It never invents who publishes to a topic, because a broker cannot know.
- **Find drift.** Compare an AsyncAPI document with the live system: matching, changed, missing, or extra.
- **Change with review.** Apply a document to the system as a plan someone approves first. It creates and alters but never deletes, and risky changes stay out of the default approval.
- **Fit secured environments.** Works with TLS, SASL and cloud identity options. Secrets never end up in documents or error messages.

## Who is it for

Platform and data engineers, architects and governance teams who need accurate AsyncAPI documentation for systems that already run.

## Want it sooner?

Tell me what your estate looks like: [open a discussion](https://pavelon.dev) or [sponsor the work](https://github.com/sponsors/Pakisan). In the meantime, the [AsyncAPI plugin for JetBrains IDEs](/jetbrains-plugin/) generates AsyncAPI from Spring Messaging code.

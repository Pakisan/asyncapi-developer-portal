# AsyncAPI Developer Network

Everything you should to know about AsyncAPI

## Run docs

```shell
bun run docs:dev
```

## Build docs

```shell
bun run docs:build
```

## Check OpenGraph
- https://www.opengraph.xyz
- https://opengraph.dev

## Test JSON Schemas

```shell
jsonschema test ./tests -r ./docs/public/schemas
```

## Format JSON Schemas

```shell
jsonschema fmt ./docs/public/schemas
```
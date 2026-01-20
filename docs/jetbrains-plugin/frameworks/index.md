# Frameworks

## Limitations

It's important to note that AsyncAPI Specification generation from source code is working with a limited context extracted from [Intellij Platform PSI](https://plugins.jetbrains.com/docs/intellij/psi.html)

It means that:
- It's not possible to extract value from SpEl expressions like `#{myTopicName}`
- It's not possible to extract value from property placeholders like `${myTopicName}` when it doesn't exist in the properties file
- Operations, Channels, Schemas description are extracted from comments
- Other undetected limitations

To enrich it, it's important to implement integration with [SpringWolf](https://www.springwolf.dev/) and [JAsyncAPI](https://github.com/asyncapi/jasyncapi) (WIP) annotations to extract already defined descriptions for each type of components

## UI

### Specification Preview

![](/jetbrains-plugin/features/scanner-preview.png)

### Generation logs

![](/jetbrains-plugin/features/scanner-logs.png)
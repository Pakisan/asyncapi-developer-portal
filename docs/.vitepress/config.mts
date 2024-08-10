import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AsyncAPI Developer Network",
  description: "Everything you should to now about",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Bindings', link: '/bindings' }
    ],

    sidebar: {
      '/bindings': [
        {
          text: 'Bindings',
          link: '/bindings',
          items: [
            {
              text: 'AMQP',
              collapsed: true,
              items: [
                {
                  text: '0.1.0',
                  base: '/bindings/amqp/0.1.0',
                  items: [
                    { text: 'channel', link: '/channel' },
                    { text: 'message', link: '/message' },
                    { text: 'operation', link: '/operation' },
                    { text: 'server', link: '/server' },
                  ]
                },
                {
                  text: '0.2.0',
                  base: '/bindings/amqp/0.2.0',
                  items: [
                    { text: 'channel', link: '/channel' },
                    { text: 'message', link: '/message' },
                    { text: 'operation', link: '/operation' },
                    { text: 'server', link: '/server' },
                  ]
                },
                {
                  text: '0.3.0',
                  base: '/bindings/amqp/0.3.0',
                  items: [
                    { text: 'channel', link: '/channel' },
                    { text: 'message', link: '/message' },
                    { text: 'operation', link: '/operation' },
                    { text: 'server', link: '/server' },
                  ]
                }
              ]
            },
            {
              text: 'AMQP 1-0',
              collapsed: true,
              items: [
                {
                  text: '0.1.0',
                  base: '/bindings/amqp1/0.1.0',
                  items: [
                    { text: 'channel', link: '/channel' },
                    { text: 'message', link: '/message' },
                    { text: 'operation', link: '/operation' },
                    { text: 'server', link: '/server' },
                  ]
                }
              ]
            },
            {
              text: 'Amazon SNS',
              collapsed: true,
              items: [
                {
                  text: '0.1.0',
                  base: '/bindings/amazon-sns/0.1.0',
                  items: [
                    { text: 'channel', link: '/channel' },
                    { text: 'message', link: '/message' },
                    { text: 'operation', link: '/operation' },
                    { text: 'server', link: '/server' },
                  ]
                }
              ]
            },
            {
              text: 'Amazon SQS',
              collapsed: true,
              items: [
                {
                  text: '0.1.0',
                  base: '/bindings/amazon-sqs/0.1.0',
                  items: [
                    { text: 'channel', link: '/channel' },
                    { text: 'message', link: '/message' },
                    { text: 'operation', link: '/operation' },
                    { text: 'server', link: '/server' },
                  ]
                },
                {
                  text: '0.2.0',
                  base: '/bindings/amazon-sqs/0.2.0',
                  items: [
                    { text: 'channel', link: '/channel' },
                    { text: 'message', link: '/message' },
                    { text: 'operation', link: '/operation' },
                    { text: 'server', link: '/server' },
                  ]
                }
              ]
            },
            {
              text: 'Anypoint MQ',
              collapsed: true,
              items: [
                {
                  text: '0.0.1',
                  base: '/bindings/anypointmq/0.0.1',
                  items: [
                    { text: 'channel', link: '/channel' },
                    { text: 'message', link: '/message' },
                    { text: 'operation', link: '/operation' },
                    { text: 'server', link: '/server' },
                  ]
                }
              ]
            },
            {
              text: 'Apache Kafka',
              collapsed: true,
              items: [
                {
                  text: '0.1.0',
                  base: '/bindings/apache-kafka/0.1.0',
                  items: [
                    { text: 'channel', link: '/channel' },
                    { text: 'message', link: '/message' },
                    { text: 'operation', link: '/operation' },
                    { text: 'server', link: '/server' },
                  ]
                },
                {
                  text: '0.3.0',
                  base: '/bindings/apache-kafka/0.3.0',
                  items: [
                    { text: 'channel', link: '/channel' },
                    { text: 'message', link: '/message' },
                    { text: 'operation', link: '/operation' },
                    { text: 'server', link: '/server' },
                  ]
                },
                {
                  text: '0.4.0',
                  base: '/bindings/apache-kafka/0.4.0',
                  items: [
                    { text: 'channel', link: '/channel' },
                    { text: 'message', link: '/message' },
                    { text: 'operation', link: '/operation' },
                    { text: 'server', link: '/server' },
                  ]
                },
                {
                  text: '0.5.0',
                  base: '/bindings/apache-kafka/0.5.0',
                  items: [
                    { text: 'channel', link: '/channel' },
                    { text: 'message', link: '/message' },
                    { text: 'operation', link: '/operation' },
                    { text: 'server', link: '/server' },
                  ]
                }
              ]
            },
            {
              text: 'Apache Pulsar',
              collapsed: true,
              items: [
                {
                  text: '0.1.0',
                  base: '/bindings/apache-pulsar/0.1.0',
                  items: [
                    { text: 'channel', link: '/channel' },
                    { text: 'message', link: '/message' },
                    { text: 'operation', link: '/operation' },
                    { text: 'server', link: '/server' },
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

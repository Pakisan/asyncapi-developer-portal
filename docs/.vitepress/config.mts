import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AsyncAPI Bindings",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      '/bindings/amqp/': [
        {
          text: 'AMQP',
          link: '/bindings/amqp',
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
        }
      ],
      '/bindings/amqp1/': [
        {
          text: 'AMQP 1-0',
          link: '/bindings/amqp1',
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
        }
      ],
      '/bindings/amazon-sns': [
        {
          text: 'Amazon SNS',
          link: '/bindings/amazon-sns',
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
        }
      ],
      '/bindings/amazon-sqs': [
        {
          text: 'Amazon SQS',
          link: '/bindings/amazon-sqs',
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
        }
      ],
      '/bindings/anypointmq': [
        {
          text: 'Anypoint MQ',
          link: '/bindings/anypointmq',
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
        }
      ],
      '/bindings/apache-kafka': [
        {
          text: 'Apache Kafka',
          link: '/bindings/apache-kafka',
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

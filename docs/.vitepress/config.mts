import {defineConfig, HeadConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AsyncAPI Developer Network",
  description: "Everything you should to now about AsyncAPI",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Bindings', link: '/bindings', activeMatch: '\/bindings.+' },
      { text: 'Schemes', link: '/schemes', activeMatch: '\/schemes.+' },
      { text: 'Security schemes', link: '/schemes/v3/security', activeMatch: '\/schemes/v3/security.+' }
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
                    { text: 'channel', link: '/channel/' },
                    { text: 'message', link: '/message/' },
                    { text: 'operation', link: '/operation/' },
                    { text: 'server', link: '/server/' },
                  ]
                },
                {
                  text: '0.2.0',
                  base: '/bindings/amqp/0.2.0',
                  items: [
                    { text: 'channel', link: '/channel/' },
                    { text: 'message', link: '/message/' },
                    { text: 'operation', link: '/operation/' },
                    { text: 'server', link: '/server/' },
                  ]
                },
                {
                  text: '0.3.0',
                  base: '/bindings/amqp/0.3.0',
                  items: [
                    { text: 'channel', link: '/channel/' },
                    { text: 'message', link: '/message/' },
                    { text: 'operation', link: '/operation/' },
                    { text: 'server', link: '/server/' },
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
                    { text: 'channel', link: '/channel/' },
                    { text: 'message', link: '/message/' },
                    { text: 'operation', link: '/operation/' },
                    { text: 'server', link: '/server/' },
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
                    { text: 'channel', link: '/channel/' },
                    { text: 'message', link: '/message/' },
                    { text: 'operation', link: '/operation/' },
                    { text: 'server', link: '/server/' },
                  ]
                },
                {
                  text: '0.2.0',
                  base: '/bindings/amazon-sns/0.2.0',
                  items: [
                    { text: 'channel', link: '/channel/' },
                    { text: 'message', link: '/message/' },
                    { text: 'operation', link: '/operation/' },
                    { text: 'server', link: '/server/' },
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
                    { text: 'channel', link: '/channel/' },
                    { text: 'message', link: '/message/' },
                    { text: 'operation', link: '/operation/' },
                    { text: 'server', link: '/server/' },
                  ]
                },
                {
                  text: '0.2.0',
                  base: '/bindings/amazon-sqs/0.2.0',
                  items: [
                    { text: 'channel', link: '/channel/' },
                    { text: 'message', link: '/message/' },
                    { text: 'operation', link: '/operation/' },
                    { text: 'server', link: '/server/' },
                  ]
                },
                {
                  text: '0.3.0',
                  base: '/bindings/amazon-sqs/0.3.0',
                  items: [
                    { text: 'channel', link: '/channel/' },
                    { text: 'message', link: '/message/' },
                    { text: 'operation', link: '/operation/' },
                    { text: 'server', link: '/server/' },
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
                    { text: 'channel', link: '/channel/' },
                    { text: 'message', link: '/message/' },
                    { text: 'operation', link: '/operation/' },
                    { text: 'server', link: '/server/' },
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
                    { text: 'channel', link: '/channel/' },
                    { text: 'message', link: '/message/' },
                    { text: 'operation', link: '/operation/' },
                    { text: 'server', link: '/server/' },
                  ]
                },
                {
                  text: '0.3.0',
                  base: '/bindings/apache-kafka/0.3.0',
                  items: [
                    { text: 'channel', link: '/channel/' },
                    { text: 'message', link: '/message/' },
                    { text: 'operation', link: '/operation/' },
                    { text: 'server', link: '/server/' },
                  ]
                },
                {
                  text: '0.4.0',
                  base: '/bindings/apache-kafka/0.4.0',
                  items: [
                    { text: 'channel', link: '/channel/' },
                    { text: 'message', link: '/message/' },
                    { text: 'operation', link: '/operation/' },
                    { text: 'server', link: '/server/' },
                  ]
                },
                {
                  text: '0.5.0',
                  base: '/bindings/apache-kafka/0.5.0',
                  items: [
                    { text: 'channel', link: '/channel/' },
                    { text: 'message', link: '/message/' },
                    { text: 'operation', link: '/operation/' },
                    { text: 'server', link: '/server/' },
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
                    { text: 'channel', link: '/channel/' },
                    { text: 'message', link: '/message/' },
                    { text: 'operation', link: '/operation/' },
                    { text: 'server', link: '/server/' },
                  ]
                }
              ]
            },
            {
              text: 'Google Cloud Pub/Sub',
              collapsed: true,
              items: [
                {
                  text: '0.1.0',
                  base: '/bindings/googlepubsub/0.1.0',
                  items: [
                    { text: 'channel', link: '/channel/' },
                    { text: 'message', link: '/message/' },
                    { text: 'operation', link: '/operation/' },
                    { text: 'server', link: '/server/' },
                  ]
                },
                {
                  text: '0.2.0',
                  base: '/bindings/googlepubsub/0.2.0',
                  items: [
                    { text: 'channel', link: '/channel/' },
                    { text: 'message', link: '/message/' },
                    { text: 'operation', link: '/operation/' },
                    { text: 'server', link: '/server/' },
                  ]
                }
              ]
            },
            {
              text: 'HTTP',
              collapsed: true,
              items: [
                {
                  text: '0.1.0',
                  base: '/bindings/http/0.1.0',
                  items: [
                    { text: 'channel', link: '/channel/' },
                    { text: 'message', link: '/message/' },
                    { text: 'operation', link: '/operation/' },
                    { text: 'server', link: '/server/' },
                  ]
                },
                {
                  text: '0.2.0',
                  base: '/bindings/http/0.2.0',
                  items: [
                    { text: 'channel', link: '/channel/' },
                    { text: 'message', link: '/message/' },
                    { text: 'operation', link: '/operation/' },
                    { text: 'server', link: '/server/' },
                  ]
                },
                {
                  text: '0.3.0',
                  base: '/bindings/http/0.3.0',
                  items: [
                    { text: 'channel', link: '/channel/' },
                    { text: 'message', link: '/message/' },
                    { text: 'operation', link: '/operation/' },
                    { text: 'server', link: '/server/' },
                  ]
                }
              ]
            },
            {
              text: 'IBM MQ',
              collapsed: true,
              items: [
                {
                  text: '0.1.0',
                  base: '/bindings/ibmmq/0.1.0',
                  items: [
                    { text: 'channel', link: '/channel/' },
                    { text: 'message', link: '/message/' },
                    { text: 'operation', link: '/operation/' },
                    { text: 'server', link: '/server/' },
                  ]
                }
              ]
            },
            {
              text: 'Jakarta Messaging API (JMS)',
              collapsed: true,
              items: [
                {
                  text: '0.0.1',
                  base: '/bindings/jms/0.0.1',
                  items: [
                    { text: 'channel', link: '/channel/' },
                    { text: 'message', link: '/message/' },
                    { text: 'operation', link: '/operation/' },
                    { text: 'server', link: '/server/' },
                  ]
                }
              ]
            },
            {
              text: 'Mercure',
              collapsed: true,
              items: [
                {
                  text: '0.1.0',
                  base: '/bindings/mercure/0.1.0',
                  items: [
                    { text: 'channel', link: '/channel/' },
                    { text: 'message', link: '/message/' },
                    { text: 'operation', link: '/operation/' },
                    { text: 'server', link: '/server/' },
                  ]
                }
              ]
            },
            {
              text: 'MQTT',
              collapsed: true,
              items: [
                {
                  text: '0.1.0',
                  base: '/bindings/mqtt/0.1.0',
                  items: [
                    { text: 'channel', link: '/channel/' },
                    { text: 'message', link: '/message/' },
                    { text: 'operation', link: '/operation/' },
                    { text: 'server', link: '/server/' },
                  ]
                },
                {
                  text: '0.2.0',
                  base: '/bindings/mqtt/0.2.0',
                  items: [
                    { text: 'channel', link: '/channel/' },
                    { text: 'message', link: '/message/' },
                    { text: 'operation', link: '/operation/' },
                    { text: 'server', link: '/server/' },
                  ]
                }
              ]
            },
            {
              text: 'MQTT v5',
              collapsed: true,
              items: [
                {
                  text: '0.1.0',
                  base: '/bindings/mqtt5/0.1.0',
                  items: [
                    { text: 'channel', link: '/channel/' },
                    { text: 'message', link: '/message/' },
                    { text: 'operation', link: '/operation/' },
                    { text: 'server', link: '/server/' },
                  ]
                },
                {
                  text: '0.2.0',
                  base: '/bindings/mqtt5/0.2.0',
                  items: [
                    { text: 'channel', link: '/channel/' },
                    { text: 'message', link: '/message/' },
                    { text: 'operation', link: '/operation/' },
                    { text: 'server', link: '/server/' },
                  ]
                }
              ]
            },
            {
              text: 'NATS',
              collapsed: true,
              items: [
                {
                  text: '0.1.0',
                  base: '/bindings/nats/0.1.0',
                  items: [
                    { text: 'channel', link: '/channel/' },
                    { text: 'message', link: '/message/' },
                    { text: 'operation', link: '/operation/' },
                    { text: 'server', link: '/server/' },
                  ]
                }
              ]
            },
            {
              text: 'Redis',
              collapsed: true,
              items: [
                {
                  text: '0.1.0',
                  base: '/bindings/redis/0.1.0',
                  items: [
                    { text: 'channel', link: '/channel/' },
                    { text: 'message', link: '/message/' },
                    { text: 'operation', link: '/operation/' },
                    { text: 'server', link: '/server/' },
                  ]
                }
              ]
            },
            {
              text: 'Solace',
              collapsed: true,
              items: [
                {
                  text: '0.1.0',
                  base: '/bindings/solace/0.1.0',
                  items: [
                    { text: 'channel', link: '/channel/' },
                    { text: 'message', link: '/message/' },
                    { text: 'operation', link: '/operation/' },
                    { text: 'server', link: '/server/' },
                  ]
                },
                {
                  text: '0.2.0',
                  base: '/bindings/solace/0.2.0',
                  items: [
                    { text: 'channel', link: '/channel/' },
                    { text: 'message', link: '/message/' },
                    { text: 'operation', link: '/operation/' },
                    { text: 'server', link: '/server/' },
                  ]
                },
                {
                  text: '0.3.0',
                  base: '/bindings/solace/0.3.0',
                  items: [
                    { text: 'channel', link: '/channel/' },
                    { text: 'message', link: '/message/' },
                    { text: 'operation', link: '/operation/' },
                    { text: 'server', link: '/server/' },
                  ]
                },
                {
                  text: '0.4.0',
                  base: '/bindings/solace/0.4.0',
                  items: [
                    { text: 'channel', link: '/channel/' },
                    { text: 'message', link: '/message/' },
                    { text: 'operation', link: '/operation/' },
                    { text: 'server', link: '/server/' },
                  ]
                }
              ]
            },
            {
              text: 'STOMP',
              collapsed: true,
              items: [
                {
                  text: '0.1.0',
                  base: '/bindings/stomp/0.1.0',
                  items: [
                    { text: 'channel', link: '/channel/' },
                    { text: 'message', link: '/message/' },
                    { text: 'operation', link: '/operation/' },
                    { text: 'server', link: '/server/' },
                  ]
                }
              ]
            },
            {
              text: 'WebSockets',
              collapsed: true,
              items: [
                {
                  text: '0.1.0',
                  base: '/bindings/websockets/0.1.0',
                  items: [
                    { text: 'channel', link: '/channel/' },
                    { text: 'message', link: '/message/' },
                    { text: 'operation', link: '/operation/' },
                    { text: 'server', link: '/server/' },
                  ]
                }
              ]
            }
          ]
        }
      ],
      '/schemes/v3/security': [
        {
          text: 'Security schemes',
          link: '/',
          base: '/schemes/v3/security',
          items: [
            {
              text: 'HTTP',
              collapsed: false,
              link: '/httpSecurityScheme',
              base: '/schemes/v3/security/http',
              items: [
                {
                  text: 'API Key',
                  link: '/apiKeyHTTPSecurityScheme',
                },
                {
                  text: 'Bearer',
                  link: '/bearerHTTPSecurityScheme',
                },
                {
                  text: 'Non Bearer',
                  link: '/nonBearerHTTPSecurityScheme',
                },
              ]
            },
            {
              text: 'OAuth2',
              collapsed: false,
              link: '/oauth2',
              base: '/schemes/v3/security',
              items: [
                {
                  text: 'Authorization Code',
                  link: '/authorizationCodeOAuthFlow',
                },
                {
                  text: 'Client Credentials',
                  link: '/clientCredentialsOAuthFlow',
                },
                {
                  text: 'Implicit',
                  link: '/implicitOAuthFlow',
                },
                {
                  text: 'Password',
                  link: '/passwordOAuthFlow',
                },
              ]
            },
            {
              text: 'SASL',
              collapsed: false,
              link: '/saslSecurityScheme',
              base: '/schemes/v3/security/sasl',
              items: [
                {
                  text: 'GSS-API',
                  link: '/saslGssapiSecurityScheme',
                },
                {
                  text: 'Plain',
                  link: '/saslPlainSecurityScheme',
                },
                {
                  text: 'SCRAM',
                  link: '/saslScramSecurityScheme',
                },
              ]
            },
            {
              text: 'API Key',
              link: '/apiKey',
            },
            {
              text: 'Asymmetric Encryption',
              link: '/asymmetricEncryption',
            },
            {
              text: 'OpenID Connect',
              link: '/openIdConnect',
            },
            {
              text: 'Symmetric Encryption',
              link: '/symmetricEncryption',
            },
            {
              text: 'User Password',
              link: '/userPassword',
            },
            {
              text: 'X509',
              link: '/X509',
            },
          ]
        }
      ]
    },

    editLink: {
      pattern: 'https://github.com/Pakisan/asyncapi-developer-portal/edit/master/docs/:path'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Pakisan/asyncapi-developer-portal' }
    ],

    footer: {
      message: 'Released under the <a href="https://www.apache.org/licenses/LICENSE-2.0">Apache License</a> with ❤️ for <a href="https://asyncapi.com">AsyncAPI community</a>.',
      copyright: 'Copyright © 2024-present <a href="https://github.com/Pakisan">Pavel Bodiachevskii</a> & <a href="https://asyncapi.com">AsyncAPI community</a>'
    }
  },

  head: [
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-G03BQZSMD1' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', 'G-G03BQZSMD1');`
    ]
  ],

  transformHead: ({ pageData }) => {
    const headers: HeadConfig[] = pageData.frontmatter.head ?? [];

    let ogImagePath: string = "";
    headers.forEach(header => {
      if (header[1].name === "og:image") {
        ogImagePath = header[1].content;
      }
    })

    if (ogImagePath.length > 0) {
      headers.push(['meta', { property: 'og:image', content: `https://asyncapi.pavelon.dev${ogImagePath}` }])
    }
    return headers
  },

  sitemap: {
    hostname: 'https://asyncapi.pavelon.dev'
  },
})

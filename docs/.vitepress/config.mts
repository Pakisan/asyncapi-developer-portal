import {defineConfig, HeadConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AsyncAPI Developer Network",
  description: "Everything you should to now about AsyncAPI",
  lang: 'en-US',
  lastUpdated: true,
  cleanUrls: false,
  themeConfig: {
    outline: 'deep',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Bindings', link: '/bindings', activeMatch: '\/bindings.+' },
      { text: 'Schemas', link: '/schemas', activeMatch: '\/schemas.+' },
    ],

    sidebar: {
      '/bindings': [
        {
          text: 'Bindings',
          base: '/bindings',
          link: '/',
          items: [
            {
              text: 'Amazon SNS',
              base: '/bindings/amazon-sns',
              link: '/',
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
                },
                {
                  text: '0.2.0',
                  base: '/bindings/amazon-sns/0.2.0',
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
              base: '/bindings/amazon-sqs',
              link: '/',
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
                },
                {
                  text: '0.3.0',
                  base: '/bindings/amazon-sqs/0.3.0',
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
              text: 'AMQP 0-9-1',
              base: '/bindings/amqp',
              link: '/',
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
              text: 'AMQP 1.0',
              base: '/bindings/amqp1',
              link: '/',
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
              text: 'Anypoint MQ',
              base: '/bindings/anypointmq',
              link: '/',
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
              base: '/bindings/apache-kafka',
              link: '/',
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
              base: '/bindings/apache-pulsar',
              link: '/',
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
            },
            {
              text: 'Google Cloud Pub/Sub',
              base: '/bindings/googlepubsub',
              link: '/',
              collapsed: true,
              items: [
                {
                  text: '0.1.0',
                  base: '/bindings/googlepubsub/0.1.0',
                  items: [
                    { text: 'channel', link: '/channel' },
                    { text: 'message', link: '/message' },
                    { text: 'operation', link: '/operation' },
                    { text: 'server', link: '/server' },
                  ]
                },
                {
                  text: '0.2.0',
                  base: '/bindings/googlepubsub/0.2.0',
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
              text: 'HTTP',
              base: '/bindings/http',
              link: '/',
              collapsed: true,
              items: [
                {
                  text: '0.1.0',
                  base: '/bindings/http/0.1.0',
                  items: [
                    { text: 'channel', link: '/channel' },
                    { text: 'message', link: '/message' },
                    { text: 'operation', link: '/operation' },
                    { text: 'server', link: '/server' },
                  ]
                },
                {
                  text: '0.2.0',
                  base: '/bindings/http/0.2.0',
                  items: [
                    { text: 'channel', link: '/channel' },
                    { text: 'message', link: '/message' },
                    { text: 'operation', link: '/operation' },
                    { text: 'server', link: '/server' },
                  ]
                },
                {
                  text: '0.3.0',
                  base: '/bindings/http/0.3.0',
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
              text: 'IBM MQ',
              base: '/bindings/ibmmq',
              link: '/',
              collapsed: true,
              items: [
                {
                  text: '0.1.0',
                  base: '/bindings/ibmmq/0.1.0',
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
              text: 'Jakarta Messaging API (JMS)',
              base: '/bindings/jms',
              link: '/',
              collapsed: true,
              items: [
                {
                  text: '0.0.1',
                  base: '/bindings/jms/0.0.1',
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
              text: 'Mercure',
              base: '/bindings/mercure',
              link: '/',
              collapsed: true,
              items: [
                {
                  text: '0.1.0',
                  base: '/bindings/mercure/0.1.0',
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
              text: 'MQTT',
              base: '/bindings/mqtt',
              link: '/',
              collapsed: true,
              items: [
                {
                  text: '0.1.0',
                  base: '/bindings/mqtt/0.1.0',
                  items: [
                    { text: 'channel', link: '/channel' },
                    { text: 'message', link: '/message' },
                    { text: 'operation', link: '/operation' },
                    { text: 'server', link: '/server' },
                  ]
                },
                {
                  text: '0.2.0',
                  base: '/bindings/mqtt/0.2.0',
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
              text: 'MQTT v5',
              base: '/bindings/mqtt5',
              link: '/',
              collapsed: true,
              items: [
                {
                  text: '0.1.0',
                  base: '/bindings/mqtt5/0.1.0',
                  items: [
                    { text: 'channel', link: '/channel' },
                    { text: 'message', link: '/message' },
                    { text: 'operation', link: '/operation' },
                    { text: 'server', link: '/server' },
                  ]
                },
                {
                  text: '0.2.0',
                  base: '/bindings/mqtt5/0.2.0',
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
              text: 'NATS',
              base: '/bindings/nats',
              link: '/',
              collapsed: true,
              items: [
                {
                  text: '0.1.0',
                  base: '/bindings/nats/0.1.0',
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
              text: 'Redis',
              base: '/bindings/redis',
              link: '/',
              collapsed: true,
              items: [
                {
                  text: '0.1.0',
                  base: '/bindings/redis/0.1.0',
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
              text: 'Solace',
              base: '/bindings/solace',
              link: '/',
              collapsed: true,
              items: [
                {
                  text: '0.1.0',
                  base: '/bindings/solace/0.1.0',
                  items: [
                    { text: 'channel', link: '/channel' },
                    { text: 'message', link: '/message' },
                    { text: 'operation', link: '/operation' },
                    { text: 'server', link: '/server' },
                  ]
                },
                {
                  text: '0.2.0',
                  base: '/bindings/solace/0.2.0',
                  items: [
                    { text: 'channel', link: '/channel' },
                    { text: 'message', link: '/message' },
                    { text: 'operation', link: '/operation' },
                    { text: 'server', link: '/server' },
                  ]
                },
                {
                  text: '0.3.0',
                  base: '/bindings/solace/0.3.0',
                  items: [
                    { text: 'channel', link: '/channel' },
                    { text: 'message', link: '/message' },
                    { text: 'operation', link: '/operation' },
                    { text: 'server', link: '/server' },
                  ]
                },
                {
                  text: '0.4.0',
                  base: '/bindings/solace/0.4.0',
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
              text: 'STOMP',
              base: '/bindings/stomp',
              link: '/',
              collapsed: true,
              items: [
                {
                  text: '0.1.0',
                  base: '/bindings/stomp/0.1.0',
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
              text: 'WebSockets',
              base: '/bindings/websockets',
              link: '/',
              collapsed: true,
              items: [
                {
                  text: '0.1.0',
                  base: '/bindings/websockets/0.1.0',
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
      ],
      '/schemas': [
        {
          text: 'Schemas',
          link: '/schemas',
          collapsed: false,
          items: [
            {
              text: 'AsyncAPI Schema',
              link: '/schemas/schema',
            },
            {
              text: 'AsyncAPI Multi-Format Schema',
              link: '/schemas/multiFormatSchema',
            },
          ]
        },
        {
          text: 'Security Schemas',
          collapsed: false,
          items: [
            {
              text: 'v2',
              base: '/schemas/v2/security',
            },
            {
              text: 'v3',
              base: '/schemas/v3/security',
              items: [
                {
                  text: 'Security Schema',
                  link: '/securitySchema'
                },
                {
                  text: 'HTTP Security Schema',
                  collapsed: false,
                  link: '/httpSecuritySchema',
                  base: '/schemas/v3/security/http',
                  items: [
                    {
                      text: 'API Key HTTP Security Schema',
                      link: '/apiKeyHTTPSecuritySchema',
                    },
                    {
                      text: 'Bearer HTTP Security Schema',
                      link: '/bearerHTTPSecuritySchema',
                    },
                    {
                      text: 'Non Bearer HTTP Security Schema',
                      link: '/nonBearerHTTPSecuritySchema',
                    },
                  ]
                },
                {
                  text: 'OAuth2 Security Schema',
                  collapsed: false,
                  link: '/oauth2',
                  base: '/schemas/v3/security/oauth2',
                  items: [
                    {
                      text: 'Flows',
                      collapsed: false,
                      items: [
                        {
                          text: "Authorization Code",
                          link: '/flows/authorizationCodeOAuthFlow',
                        },
                        {
                          text: "Client Credentials",
                          link: '/flows/clientCredentialsOAuthFlow',
                        },
                        {
                          text: "Implicit Flow",
                          link: '/flows/implicitOAuthFlow',
                        },
                        {
                          text: "Password Flow",
                          link: '/flows/passwordOAuthFlow',
                        }
                      ]
                    },
                    {
                      text: 'Scopes',
                      link: '/oauth2Scopes',
                    }
                  ]
                },
                {
                  text: 'SASL Security Schema',
                  collapsed: false,
                  link: '/saslSecuritySchema',
                  base: '/schemas/v3/security/sasl',
                  items: [
                    {
                      text: 'SASL GSS-API Security Schema',
                      link: '/saslGssapiSecuritySchema',
                    },
                    {
                      text: 'SASL Plain Security Schema',
                      link: '/saslPlainSecuritySchema',
                    },
                    {
                      text: 'SASL SCRAM Security Schema',
                      link: '/saslScramSecuritySchema',
                    },
                  ]
                },
                {
                  text: 'API Key Security Schema',
                  link: '/apiKey',
                },
                {
                  text: 'Asymmetric Encryption Security Schema',
                  link: '/asymmetricEncryption',
                },
                {
                  text: 'OpenID Connect Security Schema',
                  link: '/openIdConnect',
                },
                {
                  text: 'Symmetric Encryption Security Schema',
                  link: '/symmetricEncryption',
                },
                {
                  text: 'User Password Security Schema',
                  link: '/userPassword',
                },
                {
                  text: 'X509 Security Schema',
                  link: '/X509',
                },
              ]
            }
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
    },

    search: {
      provider: 'local',
      options: {
        _render(src, env, md) {
          const html = md.render(src, env)
          if (env.frontmatter?.title)
            return md.render(`# ${env.frontmatter.title}`) + html
          return html
        }
      }
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
    ],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'author', content: 'Pavel Bodiachevskii' }],
    ['meta', { name: 'keywords', content: 'AsyncAPI, API, Event-Driven Architecture, EDA, Messaging, Bindings, Channels, Operations, Schemas' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'yandex-verification', content: 'ed012648c88cacbb' }],
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

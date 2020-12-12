// server.js
const FakeServer = require('fake-json-api-server/src/nodeServer')

const startServer = () =>
  new FakeServer({
    baseApiUrl: '/jsonapi/',
    port: 9999,
    resources: {
      article: {
        data: [
          {
            type: 'article',
            id: '1',
            attributes: { title: 'Article 1' }
          }
        ]
      }
    }
  })

startServer()

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
          },
          {
            type: 'article',
            id: '2',
            attributes: { title: 'Article 2' }
          },
          {
            type: 'article',
            id: '3',
            attributes: { title: 'Article 3' }
          }
        ]
      }
    }
  })

startServer()

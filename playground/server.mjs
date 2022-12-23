// server.js
import FakeServer from 'fake-json-api-server/src/nodeServer.js'

const startServer = (baseApiUrl = '/jsonapi/') =>
  new FakeServer({
    baseApiUrl,
    port: 9999,
    resources: {
      article: {
        data: [
          {
            type: 'article',
            id: '1',
            attributes: { title: 'Article 1' },
          },
          {
            type: 'article',
            id: '2',
            attributes: { title: 'Article 2' },
          },
          {
            type: 'article',
            id: '3',
            attributes: { title: 'Article 3' },
          },
        ],
      },
    },
  })

startServer()

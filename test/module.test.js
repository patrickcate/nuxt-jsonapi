const { setup, get, loadConfig, url } = require('@nuxtjs/module-test-utils')

describe('module', () => {
  let nuxt

  beforeAll(async () => {
    nuxt = (await setup(loadConfig(__dirname, '../../example'))).nuxt
  }, 60000)

  afterAll(async () => {
    await nuxt.close()
  })

  test('should render api response', async () => {
    const html = await get('/')

    expect(html).toContain('Nuxt JSON:API Module')
    expect(html).toContain('Article 1')
  })

  test('should have nuxt $jsonApi', async () => {
    const { $nuxt } = await nuxt.renderAndGetWindow(url('/'))

    expect($nuxt.$jsonApi).toBeDefined()
  })

  test('should show cli message', () => {
    const { baseUrl } = nuxt.options.jsonApi
    const { badgeMessages } = nuxt.options.cli

    expect(badgeMessages).toContainEqual(
      expect.stringContaining('JSON:API Endpoint')
    )
    expect(badgeMessages).toContainEqual(expect.stringContaining(baseUrl))
  })
})

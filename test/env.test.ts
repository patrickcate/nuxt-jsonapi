/* @vitest-environment node */
import { fileURLToPath } from 'node:url'
import { setup, $fetch } from '@nuxt/test-utils'
import { describe, expect, it } from 'vitest'

describe('env variable', async () => {
  process.env.NUXT_PUBLIC_JSON_API_BASE_URL = 'http://localhost:9999/jsonapi'

  await setup({
    rootDir: fileURLToPath(new URL('../playground', import.meta.url)),
    nuxtConfig: {
      jsonApi: {
        baseURL: 'http://localhost:9999/doesnotexist',
      },
    },
  })

  it('should use env set baseURL', async () => {
    const html = await $fetch('/')
    expect(html).toContain('Nuxt JSON:API Module')
    expect(html).toContain('(Composition API) Article 1')
    expect(html).toContain('(Composition API) Article 2')
    expect(html).toContain('(Composition API) Article 3')
    expect(html).toContain('(Options API) Article 1')
    expect(html).toContain('(Options API) Article 2')
    expect(html).toContain('(Options API) Article 3')

    expect(html).toContain('Base URL: http://localhost:9999/jsonapi')
  })
})

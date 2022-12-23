import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en-US',
      },
    },
  },
  modules: ['../src/module'],
  jsonApi: {
    baseURL: 'http://localhost:9999/jsonapi',
  },
})

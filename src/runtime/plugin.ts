import Kitsu from 'kitsu'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(nuxtApp => {
  const { jsonApi: options } = nuxtApp.payload.config.public

  const jsonApi = new Kitsu(options)

  nuxtApp.vueApp.provide('jsonApi', jsonApi)

  return {
    provide: {
      jsonApi,
    },
  }
})

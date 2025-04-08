import Kitsu from 'kitsu'
import type KitsuTypes from 'kitsu'
import { defineNuxtPlugin, useRuntimeConfig } from '#app'

export default defineNuxtPlugin(nuxtApp => {
  const { jsonApi: options } = useRuntimeConfig().public

  const jsonApi = new Kitsu(options)

  nuxtApp.vueApp.provide('jsonApi', jsonApi)

  return {
    provide: {
      jsonApi: <KitsuTypes>jsonApi,
    },
  }
})

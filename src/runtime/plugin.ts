import Kitsu from 'kitsu'
import type KitsuTypes from 'kitsu'
import { defineNuxtPlugin, useRuntimeConfig, Plugin } from '#app'

const plugin: Plugin<{ jsonApi: KitsuTypes }> = defineNuxtPlugin(nuxtApp => {
  const { jsonApi: options } = useRuntimeConfig().public

  const jsonApi = new Kitsu(options)

  nuxtApp.vueApp.provide('jsonApi', jsonApi)

  return {
    provide: {
      jsonApi: <KitsuTypes>jsonApi,
    },
  }
})

export default plugin

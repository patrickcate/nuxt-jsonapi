import { fileURLToPath } from 'node:url'
import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  useLogger,
} from '@nuxt/kit'
import { green, bold, underline } from 'colorette'
import { defu } from 'defu'
import { name, version } from '../package.json'

export interface ModuleOptions {
  baseURL: string
  headers?: {}
  camelCaseTypes?: boolean
  resourceCase?: 'kebab' | 'snake' | 'none'
  pluralize?: boolean
  timeout?: number
  axiosOptions?: {}
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'jsonApi',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  defaults: {
    baseURL: '/jsonapi',
  },
  setup(options, nuxt) {
    nuxt.options.runtimeConfig.public.jsonApi = defu(
      nuxt.options.runtimeConfig.public.jsonApi,
      options,
    )

    // Remove once Kitsu switches to Axios >= 1.0 which uses ESM modules.
    /* v8 ignore start */
    nuxt.options.vite.optimizeDeps = nuxt.options.vite.optimizeDeps || {}
    nuxt.options.vite.optimizeDeps.include =
      nuxt.options.vite.optimizeDeps.include || []
    nuxt.options.vite.optimizeDeps.include.push('axios', 'pluralize')
    /* v8 ignore end */

    const { resolve } = createResolver(import.meta.url)
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))

    nuxt.options.build.transpile.push(runtimeDir)

    addPlugin(resolve(runtimeDir, 'plugin'))

    const baseUrl = process.env.NUXT_PUBLIC_JSON_API_BASE_URL
      ? process.env.NUXT_PUBLIC_JSON_API_BASE_URL
      : nuxt.options.runtimeConfig.public.jsonApi.baseURL

    const logger = useLogger(name)
    logger.info(`${bold('JSON:API Endpoint:')} ${underline(green(baseUrl))}`)
  },
})

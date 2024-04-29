![Nuxt JSON:API logo](https://raw.githubusercontent.com/patrickcate/nuxt-jsonapi/main/playground/public/nuxt-jsonapi-logo.svg)

# nuxt-jsonapi

[![npm version][npm-version-src]][npm-version-href] [![npm downloads][npm-downloads-src]][npm-downloads-href] [![Tests](https://github.com/patrickcate/nuxt-jsonapi/actions/workflows/ci.yml/badge.svg)](https://github.com/patrickcate/nuxt-jsonapi/actions/workflows/ci.yml) [![Codecov][codecov-src]][codecov-href] [![License][license-src]][license-href]

> Easy JSON:API client integration for Nuxt.js

[📖 &nbsp; **Release Notes**](./CHANGELOG.md)

Version `2.x` support Nuxt `3.x`.

[Version `1.x`](https://github.com/patrickcate/nuxt-jsonapi/tree/v1.0.0) supports Nuxt `2.x`

## Introduction

`nuxt-jsonapi` adds easy [JSON:API](https://jsonapi.org) client integration to [Nuxt](https://nuxtjs.org). It is a loose wrapper around the excellent [Kitsu](https://github.com/wopian/kitsu/tree/master/packages/kitsu) JSON:API client.

This module globally injects a `$jsonApi` instance you can use to access the client anywhere using `this.$jsonApi` (options API) or `const { $jsonApi } = useNuxtApp()` (composition API).

## Setup

1. Add `nuxt-jsonapi` dependency to your project

```bash
npm run add nuxt-jsonapi # or npm install nuxt-jsonapi
```

2. Add `nuxt-jsonapi` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'nuxt-jsonapi',

    // With options
    [
      'nuxt-jsonapi',
      {
        baseURL: 'http://www.example.com/api',
        /* other module options */
      },
    ],
  ]
}
```

3. If you didn't pass options with step #2, add a `jsonApi` object to your `nuxt.config.js` to configure module options:

```js
export default {
  modules: ['nuxt-jsonapi'],

  jsonApi: {
    baseURL: 'http://www.example.com/api',
    /* other module options */
  },
}
```

---

## ❗ Important

If you do not specify a `baseURL` option, a default `/jsonapi` URL will be used. **This is almost certainly not what you want** so be sure it is set correctly.

---

## Usage

Refer to [Kitsu's excellent documentation](https://github.com/wopian/kitsu/tree/master/packages/kitsu) for all the feature's the client offers.

You can access the client with:

### Options API

```js
this.$jsonApi
```

**Example:**

```js
export default defineNuxtComponent({
  async asyncData({ $jsonApi }) {
    const { data } = await $jsonApi.get('/article')

    return {
      articles: data,
    }
  },
})
```

### Composition API

```js
const { $jsonApi } = useNuxtApp()
```

**Example:**

```vue
<script setup>
import { useNuxtApp, useAsyncData } from '#app'

const { $jsonApi } = useNuxtApp()

const { data: articles } = await useAsyncData(() => $jsonApi.get('/article'), {
  transform: ({ data }) => data,
})
</script>
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `yarn dev` or `npm run dev`
4. Run automated tests using `yarn test` or `npm run test`

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](./playground) in development mode.

## License

[MIT License](./LICENSE)

Copyright (c) Patrick Cate

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-jsonapi/latest.svg
[npm-version-href]: https://npmjs.com/package/nuxt-jsonapi
[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-jsonapi.svg
[npm-downloads-href]: https://npmjs.com/package/nuxt-jsonapi
[github-actions-ci-src]: https://github.com/patrickcate/nuxt-jsonapi/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/patrickcate/nuxt-jsonapi/actions?query=workflow%3Aci
[codecov-src]: https://img.shields.io/codecov/c/github/patrickcate/nuxt-jsonapi.svg
[codecov-href]: https://codecov.io/gh/patrickcate/nuxt-jsonapi
[license-src]: https://img.shields.io/npm/l/nuxt-jsonapi.svg
[license-href]: https://npmjs.com/package/nuxt-jsonapi

![Nuxt JSON:API logo](https://raw.githubusercontent.com/patrickcate/nuxt-jsonapi/main/example/static/nuxt-jsonapi-logo.svg)

# nuxt-jsonapi

[![npm version][npm-version-src]][npm-version-href] [![npm downloads][npm-downloads-src]][npm-downloads-href] [![Github Actions CI][github-actions-ci-src]][github-actions-ci-href] [![Codecov][codecov-src]][codecov-href] [![License][license-src]][license-href]

> Easy JSON:API client integration for Nuxt.js

[📖 &nbsp; **Release Notes**](./CHANGELOG.md)

## Introduction

`nuxt-jsonapi` adds easy [JSON:API](https://jsonapi.org) client integration to [Nuxt](https://nuxtjs.org). It is a loose wrapper around the excellent [Kitsu](https://github.com/wopian/kitsu/tree/master/packages/kitsu) JSON:API client.

This module globally injects a `$jsonApi` instance you can use to access the client anywhere using `this.$jsonApi`. For plugins, asyncData, fetch, nuxtServerInit and Middleware, you can access it from `context.$jsonApi`.

## Setup

1. Add `nuxt-jsonapi` dependency to your project

```bash
yarn add nuxt-jsonapi # or npm install nuxt-jsonapi
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
        baseUrl: 'http://www.example.com/api'
        /* other module options */
      }
    ]
  ]
}
```

3. If you didn't pass options with step #2, add a `jsonapi` object to your `nuxt.config.js` to configure module options:

```js
export default {
  modules: ['nuxt-jsonapi'],

  jsonApi: {
    baseUrl: 'http://www.example.com/api'
    /* other module options */
  }
}
```

4. If you use it with Nuxt proxy and SSR mode, do not add `axiosOptions: { proxy: true }`, and keep the axios module.

```js
export default {
  modules: ['@nuxtjs/axios', '@nuxtjs/proxy', 'nuxt-jsonapi'],

  axios: {
    baseURL: '/api', // Attention: URL in capital case
    proxy: true,
  },

  proxy: {
    '/api': {
      target: 'http://api.example.com',
      pathRewrite: {
        '^/api': '/api/v1', // For example
      },
    },
  },

  jsonApi: {
    baseUrl: 'http://www.example.com/api'
    /* other module options */
  }
}
```

---

## ❗ Important

If you do not specify a `baseUrl` option, a default `/jsonapi` URL will be used. **This is almost certainly not what you want** so be sure it is set correctly.

---

## Usage

Refer to [Kitsu's excellent documentation](https://github.com/wopian/kitsu/tree/master/packages/kitsu) for all the feature's the client offers.

You can access the client through `this.$jsonApi` or `context.$jsonapi`.

**Example:**

- AsyncData hook :

```js
async asyncData({ $jsonApi }) {
    articles = await $jsonApi.get('/article')

    return {
        articles,
    }
  }
```

- Fetch hook

```js
async fetch() {
    this.articles = await this.$jsonApi.get('/article')
  }
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

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

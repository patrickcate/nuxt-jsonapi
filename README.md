# nuxt-jsonapi

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> JSON:API client for Nuxt.js

[📖 **Release Notes**](./CHANGELOG.md)

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
    ['nuxt-jsonapi', { /* module options */ }]
  ]
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

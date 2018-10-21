# Yandex metrika
[![npm (scoped with tag)](https://img.shields.io/npm/v/@nuxtjs/yandex-metrika-module/latest.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/yandex-metrika-module)
[![npm](https://img.shields.io/npm/dt/@nuxtjs/yandex-metrika-module.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/yandex-metrika-module)

[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)

> Yandex metrika integration for Nuxt.js with [vue-analytics](https://github.com/vchaptsev/vue-yandex-metrika)

## Setup
- Add `@nuxtjs/yandex-metrika-module` dependency using yarn or npm to your project
- Add `@nuxtjs/yandex-metrika-module` to `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    ['@nuxtjs/yandex-metrika-module', {
      id: 'XXXXXXXX'
    }]
 ]
}
```
using top level options

```js
{
  modules: [
    ['@nuxtjs/yandex-metrika-module']
  ],
 
 'google-analytics': {
    id: 'XXXXXXXX'
  }
}
```

## Usage

Click [here](https://github.com/vchaptsev/vue-yandex-metrika) for all options and features of vue-yandex-metrika

## License

[MIT License](./LICENSE)

Copyright (c) 2018 Ruby Fire

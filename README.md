# Yandex metrika
[![npm (scoped with tag)](https://img.shields.io/npm/v/yandex-metrika-module/latest.svg?style=flat-square)](https://npmjs.com/package/yandex-metrika-module)
[![npm](https://img.shields.io/npm/dt/yandex-metrika-module.svg?style=flat-square)](https://npmjs.com/package/yandex-metrika-module)
[![CircleCI](https://img.shields.io/circleci/project/github/nuxt-community/analytics-module.svg?style=flat-square)](https://circleci.com/gh/RubyFireStudio/yandex-metrika-module)
[![Codecov](https://img.shields.io/codecov/c/github/nuxt-community/analytics-module.svg?style=flat-square)](https://codecov.io/gh/RubyFireStudio/yandex-metrika-module)

[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)

> Yandex metrika integration for Nuxt.js with [vue-analytics](https://github.com/vchaptsev/vue-yandex-metrika)

## Setup
- Add `yandex-metrika-module` dependency using yarn or npm to your project
- Add `yandex-metrika-module` to `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    ['yandex-metrika-module', {
      id: 'XXXXXXXX'
    }]
 ]
}
```
using top level options

```js
{
  modules: [
    ['yandex-metrika-module']
  ],
 
 'yandex-metrika': {
    id: 'XXXXXXXX'
  }
}
```

## Usage

Click [here](https://github.com/vchaptsev/vue-yandex-metrika) for all options and features of vue-yandex-metrika

## License

[MIT License](./LICENSE)

Copyright (c) 2018 Ruby Fire

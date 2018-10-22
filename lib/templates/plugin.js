import Vue from 'vue'
import VueYandexMetrika from 'vue-yandex-metrika'

export default async ({ app: { router } }) => {
  const moduleOptions = <%= serialize(options) %>
  Vue.use(
    VueYandexMetrika,
    {
      router,
      env: process.env.NODE_ENV,
      ...moduleOptions
    }
  )
}

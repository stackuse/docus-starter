import { createGtm } from '@gtm-support/vue-gtm'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  nuxtApp.vueApp.use(
    createGtm({
      id: config.public.gtmId,
      enabled: config.public.env === 'production',
    })
  )
})

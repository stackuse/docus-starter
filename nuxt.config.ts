import { resolve, join } from "node:path";
import { defineNuxtConfig } from 'nuxt/config'

const { NUXT_SRC_DIR, NUXT_API_KEY, NUXT_MIME_BASE_URL, NUXT_API_BASE_URL, NUXT_APP_ENV, NUXT_GTM_ID } = process.env

// 开发时用 NUXT_SRC_DIR，打包时固定为 src-app
const appSrcDir = NUXT_SRC_DIR || 'src-app'

console.log('>>>>>>>>>> start project:', join(__dirname, `${appSrcDir}/`))

export default defineNuxtConfig({
  srcDir: appSrcDir,
  extends: '@nuxt-themes/docus',
  devtools: true,
  runtimeConfig: {
    public: {
      env: NUXT_APP_ENV,
      gtmId: NUXT_GTM_ID,
    },
  },
})
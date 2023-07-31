import { createI18n } from 'vue-i18n'
import { getCurrLang} from "@/utils/common"
// elementPlus
import EleAr from 'element-plus/dist/locale/ar.mjs'
import EleFr from 'element-plus/dist/locale/fr.mjs'
import ElePt from 'element-plus/dist/locale/pt.mjs'
import EleEn from 'element-plus/dist/locale/en.mjs'
import EleZhCn from 'element-plus/dist/locale/zh-cn.mjs'

const messages = {
  ar: {
    ...EleAr,

  },
  fr: {
    ...EleFr,

  },
  pt: {
    ...ElePt,

  },
  en: {
    ...EleEn,
  },
  zh: {
    ...EleZhCn,
  },
 
}

// const localLang = navigator.language.split('-')[0]; // 浏览器语言
// const storageLang = sessionStorage.getItem("language"); // 本地存储语言

const i18n = createI18n({
    globalInjection: true, //全局生效$t
    locale: getCurrLang(),
    messages,
    legacy: false,
})

export default i18n
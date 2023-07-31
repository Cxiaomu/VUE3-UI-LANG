import { createI18n } from 'vue-i18n'
import { getCurrLang} from "@/utils/common"
// elementPlus
import EleAr from 'element-plus/dist/locale/ar.mjs'
import EleFr from 'element-plus/dist/locale/fr.mjs'
import ElePt from 'element-plus/dist/locale/pt.mjs'
import EleEn from 'element-plus/dist/locale/en.mjs'
import EleZhCn from 'element-plus/dist/locale/zh-cn.mjs'

// Ant Design Vue
import AntAr from 'ant-design-vue/es/locale/ar_EG'
import AntFr from 'ant-design-vue/es/locale/fr_FR'
import AntPt from 'ant-design-vue/es/locale/pt_PT'
import AntEn from 'ant-design-vue/es/locale/en_GB'
import AntZh from 'ant-design-vue/es/locale/zh_CN'

const messages = {
  ar: {
    ...EleAr,
    ...AntAr,
  },
  fr: {
    ...EleFr,
    ...AntFr,
  },
  pt: {
    ...ElePt,
    ...AntPt,
  },
  en: {
    ...EleEn,
    ...AntEn,
  },
  zh: {
    ...EleZhCn,
    ...AntZh
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
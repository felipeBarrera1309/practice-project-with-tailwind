import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import app from './app.js'
import router from './shared/router'
import './plugins'
import VueCookies from 'vue-cookies'
import './util/customComponents.js'


app.use(router)
app.use(VueCookies, { expires: '1d' })
app.use(ElementPlus)
app.mount("#app");


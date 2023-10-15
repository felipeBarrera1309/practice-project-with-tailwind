import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import app from './app.js'
import router from './shared/router'

app.use(router)
app.use(ElementPlus)
app.mount("#app");


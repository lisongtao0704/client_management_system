import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { Button } from 'vant'
import { Col, Row } from 'vant'
import 'vant/lib/index.css'
// import router from './router'
// import 'lib-flexible/flexible'

const app = createApp(App)
app.use(Col)
app.use(Row)
app.use(Button)
// app.use(router)
app.mount('#app')

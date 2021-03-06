import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../public/css/reset.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../public/iconfont/iconfont.css'
import Mint from 'mint-ui'
import '../public/iconfont/iconfont.js'
Vue.use(Mint);

Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

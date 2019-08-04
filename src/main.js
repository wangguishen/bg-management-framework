import Vue from 'vue'
import App from './App.vue'
/* 引入路由 */
import router from '@/router/index'
import '@/router/routerSetting'
/* 引入vuex */
import store from '@/store/index'

/* 引入全局过滤器 */
import vFilters from '@/filters/index'
for (const key in vFilters) {
  Vue.filter(key, vFilters[key])
}

/* 引入mock数据 */
import './mock'

/* 引入element */
// import '@/components/element-ui'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/style/style.scss'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

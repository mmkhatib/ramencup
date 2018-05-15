import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import i18n from 'vue-i18n';
import locale from 'element-ui/lib/locale/lang/en'


Vue.use(ElementUI, { locale })
Vue.use(i18n);
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

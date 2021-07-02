import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
Vue.component('fa-icon', FontAwesomeIcon)
library.add()

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

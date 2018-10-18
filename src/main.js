import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCode)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import VueSweetalert2 from 'vue-sweetalert2'; 
Vue.use(VueSweetalert2);

import VueCircle from 'vue2-circle-progress'; 
Vue.use(VueCircle);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import './assets/CSS/index.css'
import router from './routes.js'
import '@fortawesome/fontawesome-free/css/all.css';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

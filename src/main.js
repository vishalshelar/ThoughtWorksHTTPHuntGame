import Vue from 'vue'
import App from './components/App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Body from './components/Body.vue'

Vue.component("app-header",Header)
Vue.component("app-footer",Footer)
Vue.component("app-body",Body)
new Vue({
  el: '#app',
  render: h => h(App)
})

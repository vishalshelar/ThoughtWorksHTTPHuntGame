import Vue from 'vue'
import App from './components/App.vue'
import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.css'
import { userInfo } from 'os';
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Body from './components/Body.vue'

Vue.component("app-header",Header)
Vue.component("app-footer",Footer)
Vue.component("app-body",Body)

Vue.use(VueResource)
new Vue({
  el: '#app',
  render: h => h(App)
})

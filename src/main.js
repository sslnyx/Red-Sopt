import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'

// import style (<= Swiper 5.x)
// import 'swiper/css/swiper.css'

import 'normalize.css'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueAnime from 'vue-animejs'

export const bus = new Vue()

Vue.use(VueAnime)

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueAwesomeSwiper /* { default options with global component } */)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
  created () {
    const getHTMLTag = document.documentElement
    getHTMLTag.setAttribute('lang', this.$i18n.locale)

    this.$store.dispatch('fetchProjects')
    this.$store.dispatch('fetchPages')
    this.$store.dispatch('fetchPackages')
    this.$store.dispatch('fetchProjectsTW')
  }
}).$mount('#app')

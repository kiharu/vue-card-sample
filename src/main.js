import Vue from 'vue'
import App from './App.vue'
import VueMdl from 'vue-mdl'
import VueRouter from 'vue-router'
import { configRouter } from './route-config'

Vue.use(VueMdl)
Vue.use(VueRouter)

const router = new VueRouter({
  history: true,
  transitionOnLoad: true,
  saveScrollPosition: false
}).beforeEach(function (transition) {
  window.scrollTo(0, 0)
  transition.next()
})
Vue.transition('fade', {enterClass: 'fadeIn', leaveClass: 'fadeOut'})

configRouter(router)

router.start(App, '#app')

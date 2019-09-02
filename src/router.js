import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/body/Home.vue'
import About from './views/body/About.vue'
import Menu from './views/body/Menu.vue'
import Manage from './views/body/Manage.vue'
import Login from './views/body/Login.vue'
import Register from './views/body/Register.vue'
import HistoricalOrders from './views/about/HistoricalOrders.vue'
import Contact from './views/about/Contact.vue'
import Ordering from './views/about/Ordering.vue'
import Express from './views/about/Express.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      children: [
        {
          path: '/',
          name: 'HistoricalOrders',
          component: HistoricalOrders,
        },
        {
          path: 'Contact',
          name: 'Contact',
          component: Contact,
        },
        {
          path: 'Ordering',
          name: 'Ordering',
          component: Ordering,
        },
        {
          path: 'Express',
          name: 'Express',
          component: Express,
        }
      ]
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/manage',
      name: 'manage',
      component: Manage
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },

  ]
})

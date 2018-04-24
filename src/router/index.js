import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/Home'
import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Service from '@/components/Service'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/Service',
      name: 'Service',
      component: Service
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Trayectos from '../components/Trayectos'
import Buses from '../components/Buses'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Trayectos',
      component: Trayectos
    },
    {
      path: '/buses',
      name: 'Buses',
      component: Buses,
      props:true
    }
  ]
})
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  /*{ 
    path: "/register",
    name: "register",
    component: () => import("../views/Register.vue"),
  }, */
  /* {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  }, */
  {
    path: "/table",
    name: "table",
    component: () => import("../views/Table.vue"),
  },
]

const router = new VueRouter({
  routes
})

export default router
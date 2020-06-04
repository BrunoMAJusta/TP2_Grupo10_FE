import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  { 
    path: "/adminHome",
    name: "adminHome",
    component: () => import("../views/AdminHome.vue"),
  },
  { 
    path: "/register",
    name: "register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/usersTable",
    name: "usersTable",
    component: () => import("../views/UsersTable.vue"),
  },
  {
    path: "/epiCatalog",
    name: "epiCatalog",
    component: () => import("../views/Catalog.vue"),
  },
  {
    path: "/episTable",
    name: "episTable",
    component: () => import("../views/EpisTable.vue"),
  },
  {
    path: "/ordersTable",
    name: "ordersTable",
    component: () => import("../views/OrdersTable.vue"),
  },
]

const router = new VueRouter({
  routes
})

export default router
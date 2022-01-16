import Vue from 'vue'
import VueRouter from 'vue-router'
import Shops from "@/views/Shops";
import Products from "@/views/Products";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Shops',
    component: Shops
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

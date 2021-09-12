import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import contact from '../views/contact.vue'
import news from '../views/news.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
  },
  {
    path: '/news',
    name: 'news',
    component: news
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

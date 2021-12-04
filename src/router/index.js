import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import contact from '../views/contact.vue'
import about from '../views/contact.vue'
import news from '../views/news.vue'
import pricing from '../views/pricing.vue'

const routes = [{
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
    },
    {
        path: '/pricing',
        name: 'pricing',
        component: pricing
    },
    {
        path: '/about',
        name: 'about',
        component: about
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
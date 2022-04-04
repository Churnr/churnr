import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue';
import contact from '../views/contact.vue';
import about from '../views/about.vue';
import solution from '../views/solution.vue';
import onboarding from '../views/onboarding.vue'
import cookies from '../views/cookies.vue';
import privacyPolicy from '../views/privacyPolicy.vue'
import pricing from '../views/pricing.vue'
import VueMeta from 'vue-meta'

Vue.use(VueMeta)

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: home
    },
    {
        path: '/contact',
        name: 'contact',
        component: contact
    },
    {
        path: '/about',
        component: about
    },
    {
        path: '/solution',
        component: solution
    },
    {
        path: '/onboarding',
        component: onboarding
    },
    {
        path: '/pricing',
        component: pricing
    },
    {
        path: '/cookies',
        component: cookies
    },
    {
        path: '/privacyPolicy',
        component: privacyPolicy
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    }
})

export default router
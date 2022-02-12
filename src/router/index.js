import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue';
import contact from '../views/contact.vue';
import team from '../views/team.vue';
import features from '../views/features.vue';
import cookies from '../views/cookies.vue';
import privacyPolicy from '../views/privacyPolicy.vue'
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
        path: '/team',
        component: team
    },
    {
        path: '/features',
        component: features
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
    // mode: 'history',
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
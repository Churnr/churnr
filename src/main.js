import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(BootstrapVue)

// All of my different page views.

import home from './views/home.vue';
import faq from './views/faq.vue';
import contact from './views/contact.vue';
import team from './views/team.vue';
import features from './views/features.vue';

const router = new VueRouter({
    routes: [{
            path: '/',
            component: home
        },
        {
            path: '/faq',
            component: faq
        },
        {
            path: '/contact',
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
    ]
});

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import i18n from './i18n'

AOS.init({ disable: 'mobile' });

Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
    el: "#app",
    router: router,
    i18n,
    render: h => h(App)
}).$mount('#app')
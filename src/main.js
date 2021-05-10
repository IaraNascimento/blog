
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import VueRouter from 'vue-router';
import { routes } from './routes';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import DateFormater from './services/DateFormater';

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use( Vuex );
Vue.use( VueRouter );
// Vue.use( DateFormater )

const router = new VueRouter({ routes, mode: 'history' })

const store = new Vuex.Store({
    state: {
        posts: [],
        category: ''
    }
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

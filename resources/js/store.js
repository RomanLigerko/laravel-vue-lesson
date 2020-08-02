import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        apiURL: 'http://laravel-vue.ro/api',
        serverPath: 'http://laravel-vue.ro'
    },
    mutations: {},
    actions: {},
})

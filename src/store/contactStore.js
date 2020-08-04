import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const contact = new Vuex.Store({
    state: {
        posts: [],
    },
})
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        posts: []
    },
    actions: {
        loadPosts(){
            axios
            .get('/company/api/contact-manager/v1/get/companies')
            .then(res=>{
                let posts = res.data.documents
                this.commit('SET_POSTS', posts)
            })
            .catch(error=>{
                console.log(error.response)
            })
        }
    },
    mutations:{
        SET_POSTS (state, posts) {
            state.posts = posts
        }
    }
})
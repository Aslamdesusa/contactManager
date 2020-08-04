import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        posts: [],
        selectSingPost: null,
        companyId: null,
        disabled: false,
        loading: false,
    },
    actions: {
        async loadPosts(){
            await axios
            .get('/company/api/contact-manager/v1/get/companies')
            .then(res=>{
                let posts = res.data.documents
                this.commit('SET_POSTS', posts)
            })
            .catch(error=>{
                console.log(error.response)
            })
        },
        async getPostById(){
            await axios
            .get(`/company/api/contact-manager/v1/get/company/by/id?_id=${this.state.companyId}`)
            .then(res=>{
                let singleDoc = res.data.documents
                this.commit('SET_GET', singleDoc)
            })
            .catch(error=>{
                console.log(error.response)
            })
        }
    },
    mutations:{
        SET_POSTS (state, posts) {
            state.posts = posts
        },
        SET_GET (state, singleDoc) {
            state.selectSingPost = singleDoc
        },
    }
})


export const contact = new Vuex.Store({
    state: {
        posts: [],
    },
})
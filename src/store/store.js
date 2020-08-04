import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        // globle companis state
        posts: [],
        selectSingPost: null,
        companyId: null,

        // globle state
        disabled: false,
        loading: false,

        // globle contact state
        contactPost: [],
        selectPostContact: null,
        contactId: null
    },
    actions: {
        // companies actions
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
                throw error
            })
        },
        // end

        // contact actions
        async loadContactPosts(){
            await axios
            .get('/contact/api/contact-manager/v1/get/contacts')
            .then(res=>{
                let contactPosts = res.data.documents
                this.commit('SET_CONTACT_POSTS', contactPosts)
            })
            .catch(error=>{
                throw error
            })
        },

        async getContactPostById(){
            await axios
            .get(`/contact/api/contact-manager/v1/get/contact/by/id?_id=${this.state.contactId}`)
            .then(res=>{
                let singleDoc = res.data.documents
                this.commit('SET_GET_CONTACT', singleDoc)
            })
            .catch(error=>{
                console.log(error.response)
                throw error
            })
        },
        // end
    },
    mutations:{
        // companies mutations
        SET_POSTS (state, posts) {
            state.posts = posts
        },
        SET_GET (state, singleDoc) {
            state.selectSingPost = singleDoc
        },
        // end
        
        // contact mutations
        SET_CONTACT_POSTS (state, contactPosts) {
            state.contactPost = contactPosts
        },
        SET_GET_CONTACT (state, singleDoc) {
            state.selectPostContact = singleDoc
        }
        // end

    }
})



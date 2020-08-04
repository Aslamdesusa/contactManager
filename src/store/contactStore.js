import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export const contact = new Vuex.Store({
    state: {
        contactPosts: [],
    },
    actions: {
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
    },
    mutations:{
        SET_CONTACT_POSTS (state, contactPosts) {
            state.contactPosts = contactPosts
        },
    }
})
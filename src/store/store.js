import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
var token = JSON.parse(localStorage.getItem('user_token'))
axios.defaults.headers.common = {'Authorization': `bearer ${token}`}

var user_Id = JSON.parse(localStorage.getItem('user_Id'))
var portalSelected = JSON.parse(localStorage.getItem('portalSelected'))

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
        contactId: null,

        // local storage items
        userToken: null,
        portals: null
    },
    actions: {
        // companies actions
        async loadPosts(){
            await axios
            .get(`/company/api/contact-manager/v1/companies/by/user/roles?role=${portalSelected.createdBy.profile}&userId=${user_Id}&portalName=${portalSelected._id}`)
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
            .get(`/contact/api/contact-manager/v1/contacts/by/role?role=${portalSelected.createdBy.profile}&userId=${user_Id}&portalName=${portalSelected._id}`)
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

        // portal data
        async getPortalByUserId(){
            let userId = JSON.parse(localStorage.getItem('user_Id'))
            await axios
            .get(`/portal/api/contact-manager/v1/get/portal/by/user-id?userId=${userId}`)
            .then(res=>{
                let portals = res.data.doc
                this.commit('SET_PORTAL', portals)
            })
        }
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
        },
        // end

        // portal mutations
        SET_PORTAL (state, portals) {
            state.portals = portals
        }
        // end

    }
})



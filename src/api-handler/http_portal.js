import axios from 'axios'

const token = JSON.parse(localStorage.getItem('user_token'))
axios.defaults.headers.common = {'Authorization': `bearer ${token}`}

const baseUrl = 'https://contact-manager-node.herokuapp.com'

const postPortal = '/portal/api/contact-manager/v1/create/portal'
const getPortalByUserId = '/portal/api/contact-manager/v1/get/portal/by/user-id'
const inviteUser = '/portal/api/contact-manager/v1/invite/user'
const removeUser = '/portal/api/contact-manager/v1/remove/user'

class portals {
    // create new company
    static insertPost(data){
        return axios.post(`${baseUrl}${postPortal}`, data)
        .then(function(res){
            return res
        }).catch((err) =>{
            // console.log(err.response)
            throw(err)
            // return err.response
        })
    }

    // in this req inviting users
    static inviteUser(data, _id){
        return axios.put(`${baseUrl}${inviteUser}?_id=${_id}`, data)
        .then(function(res){
            return res
        }).catch((err) =>{
            // console.log(err.response)
            throw(err)
            // return err.response
        })
    }

    static getPortalByUserId(_id){
        return axios.get(`${baseUrl}${getPortalByUserId}?userId=${_id}`)
        .then(function(res){
            return res
        }).catch((err) =>{
            throw(err)
        })
    }

    static removeUser(data, _id){
        return axios.put(`${baseUrl}${removeUser}?_id=${_id}` ,data)
        .then(function(res){
            return res
        }).catch((err) =>{
            throw(err)
        })
    }
}

export default portals;
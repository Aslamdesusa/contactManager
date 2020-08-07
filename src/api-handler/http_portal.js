import axios from 'axios'

const token = JSON.parse(localStorage.getItem('user_token'))
axios.defaults.headers.common = {'Authorization': `bearer ${token}`}

const postPortal = '/portal/api/contact-manager/v1/create/portal'
const getPortalByUserId = '/portal/api/contact-manager/v1/get/portal/by/user-id'

class portals {
    // create new company
    static insertPost(data){
        return axios.post(`${postPortal}`, data)
        .then(function(res){
            return res
        }).catch((err) =>{
            // console.log(err.response)
            throw(err)
            // return err.response
        })
    }

    static getPortalByUserId(_id){
        return axios.get(`${getPortalByUserId}?userId=${_id}`)
        .then(function(res){
            return res
        }).catch((err) =>{
            throw(err)
        })
    }
}

export default portals;
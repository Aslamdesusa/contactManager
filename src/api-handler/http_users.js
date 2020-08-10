import axios from 'axios'

const baseUrl = 'https://contact-manager-node.herokuapp.com'

const signUpUrl = '/user/api/contact-manager/v1/create/user'
// login
const signInUrL = '/user/api/contact-manager/v1/login/user'
const uniqUser = '/user/api/contact-manager/v1/user/single/user'

const acceptInv = '/user/api/contact-manager/v1/user/accept/invitation'

class users {
    // create new User
    static insertPost(data){
        return axios.post(`${baseUrl}${signUpUrl}`, {
            email: data.email,
            password: data.password,
            portalName: data.portalName
        })
        .then(function(res){
            return res
        }).catch((err) =>{
            // console.log(err.response)
            throw(err)
            // return err.response
        })
    }

    // create new User
    static Login(data){
        return axios.post(`${baseUrl}${signInUrL}`, data)
        .then(function(res){
            return res
        }).catch((err) =>{
            // console.log(err.response)
            throw(err)
            // return err.response
        })
    }

    // getting user by uniq id
    static getUserById(_id){
        return axios.get(`${baseUrl}${uniqUser}?_id=${_id}`)
        .then(function(res){
            return res
        }).catch((err) =>{
            throw(err)
        })
    }

    // getting user by uniq id
    static acceptInvitation(portal_id, email){
        return axios.get(`${baseUrl}${acceptInv}?portal_id=${portal_id}&email=${email}`)
        .then(function(res){
            return res
        }).catch((err) =>{
            throw(err)
        })
    }
}

export default users;
import axios from 'axios'
const signUpUrl = '/user/api/contact-manager/v1/create/user'
// login
const signInUrL = '/user/api/contact-manager/v1/login/user'
const uniqUser = '/user/api/contact-manager/v1/user/single/user'

class users {
    // create new User
    static insertPost(data){
        return axios.post(`${signUpUrl}`, data)
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
        return axios.post(`${signInUrL}`, data)
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
        return axios.get(`${uniqUser}?_id=${_id}`)
        .then(function(res){
            return res
        }).catch((err) =>{
            throw(err)
        })
    }
}

export default users;
import axios from 'axios'
const signUpUrl = '/user/api/contact-manager/v1/create/user'

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
}

export default users;
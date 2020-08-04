import axios from 'axios'
const deleteUrl = '/contact/api/contact-manager/v1/delete/contact'

class contacts {
    static deleteContacts(_id){
        return axios.delete(`${deleteUrl}?_id=${_id}`)
        .then(function(res){
            return res
        }).catch((err) =>{
            throw(err)
        })
    }
}

export default contacts;
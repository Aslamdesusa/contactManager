import axios from 'axios'
const deleteUrl = '/contact/api/contact-manager/v1/delete/contact'
const postUrl = '/contact/api/contact-manager/v1/create/contact' 
const contactEditUrl = '/contact/api/contact-manager/v1/edit/contact/by/id'

class contacts {
    // create new company
    static insertPost(data){
        return axios.post(`${postUrl}`, data)
        .then(function(res){
            return res
        }).catch((err) =>{
            // console.log(err.response)
            throw(err)
            // return err.response
        })
    }

    // update post
    static updatePost(data, _id){
        return axios.put(`${contactEditUrl}?_id=${_id}`, {
            userId: data.userId,
            contactName: data.contactName,
            title: data.title,
            companyId: data.companyId,
            description: data.description,
            tags: data.tags,
            contactInfo: {
                // contact information
                email: data.contactInfo.email,
                mobile: data.contactInfo.mobile,
                workPhone: data.contactInfo.workPhone,
                homePhone: data.contactInfo.homePhone,
            },
            address: {
                // Address information
                mailingStreet: data.address.mailingStreet,
                mailingCity: data.address.mailingCity,
                mailingState: data.address.mailingState,
                mailingCountry: data.address.mailingCountry,
                mailingZipCode: data.address.mailingZipCode,
            },
            avatarUrl: data.avatarUrl,
        })
        .then(function(res){
            return res
        }).catch((err) =>{
            // console.log(err.response)
            throw(err)
            // return err.response
        })
    }

    // delete contacts
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
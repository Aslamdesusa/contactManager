import axios from 'axios'

const token = JSON.parse(localStorage.getItem('user_token'))
axios.defaults.headers.common = {'Authorization': `bearer ${token}`}

// base url
const baseUrl = 'https://contact-manager-node.herokuapp.com'

const deleteUrl = '/contact/api/contact-manager/v1/delete/contact'
const postUrl = '/contact/api/contact-manager/v1/create/contact' 
const contactEditUrl = '/contact/api/contact-manager/v1/edit/contact/by/id'
const addMoreTags = '/contact/api/contact-manager/v1/add/tags'
const updateTags = '/contact/api/contact-manager/v1/delete/tags'

class contacts {
    // create new company
    static insertPost(data){
        return axios.post(`${baseUrl}${postUrl}`, data)
        .then(function(res){
            return res
        }).catch((err) =>{
            // console.log(err.response)
            throw(err)
            // return err.response
        })
    }

    static addMoreTags(data, _id){
        return axios.put(`${baseUrl}${addMoreTags}?_id=${_id}`, {
          //   User Details
            tags: data.tags,
        })
        .then(function(res){
            return res
        }).catch((err) =>{
            // console.log(err.response)
            throw(err)
            // return err.response
        })
    }

    static updateTags(data, _id){
        return axios.put(`${baseUrl}${updateTags}?_id=${_id}`, {
          //   User Details
            tags: data.tags,
        })
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
        return axios.put(`${baseUrl}${contactEditUrl}?_id=${_id}`, {
            userId: data.userId,
            portal: data.portal,
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
        return axios.delete(`${baseUrl}${deleteUrl}?_id=${_id}`)
        .then(function(res){
            return res
        }).catch((err) =>{
            throw(err)
        })
    }
}

export default contacts;
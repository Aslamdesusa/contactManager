import axios from 'axios'

const token = JSON.parse(localStorage.getItem('user_token'))
axios.defaults.headers.common = {'Authorization': `bearer ${token}`}

const companyUrl = '/company/api/contact-manager/v1/create/company'
const companyEditUrl = '/company/api/contact-manager/v1/edit/company/by/id'
const updateTags = '/company/api/contact-manager/v1/delete/tags'
const deleteUrl = '/company/api/contact-manager/v1/delete/company'
const addMoreTags = '/company/api/contact-manager/v1/add/tags'

class companies {
    static deleteCompanyData(_id){
        return axios.delete(`${deleteUrl}?_id=${_id}`)
        .then(function(res){
            return res
        }).catch((err) =>{
            throw(err)
        })
    }

    static addMoreTags(data, _id){
        return axios.put(`${addMoreTags}?_id=${_id}`, {
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
        return axios.put(`${updateTags}?_id=${_id}`, {
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
    // create new company
    static insertPost(data){
        return axios.post(`${companyUrl}`, data)
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
        return axios.put(`${companyEditUrl}?_id=${_id}`, {
          //   User Details
            userId: data.userId,
            portal: data.portal,
            companyName: data.companyName,
            website: data.website,
            description: data.description,
            phone: data.phone,
            fax: data.fax,
            tags: data.tags,
            address: {
                billingAddress: {
                    billingStreet: data.address.billingAddress.billingStreet,
                    billingCity: data.address.billingAddress.billingCity,
                    billingState: data.address.billingAddress.billingState,
                    billingCountry: data.address.billingAddress.billingCountry,
                    billingZipCode: data.address.billingAddress.billingZipCode
                },
                // Shipping Address
                shippingAddress: {
                    shippingStreet: data.address.shippingAddress.shippingStreet,
                    shippingCity: data.address.shippingAddress.shippingCity,
                    shippingState: data.address.shippingAddress.shippingState,
                    shippingCountry: data.address.shippingAddress.shippingCountry,
                    shippingZipCode: data.address.shippingAddress.shippingZipCode
                }
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
}

export default companies;
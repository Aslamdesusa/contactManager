import axios from 'axios'

const companyUrl = '/company/api/contact-manager/v1/create/company'
const companyEditUrl = '/company/api/contact-manager/v1/edit/company/by/id'
const updateTags = '/company/api/contact-manager/v1/delete/tags'

class companies {
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
        return axios.post(`${companyUrl}`, {
          //   User Details
            userId: data.userId,
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

    // update post
    static updatePost(data, _id){
        return axios.put(`${companyEditUrl}?_id=${_id}`, {
          //   User Details
            userId: data.userId,
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
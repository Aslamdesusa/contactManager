import axios from 'axios'

const companyUrl = '/company/api/contact-manager/v1/create/company'
const companyUrlGet = '/company/api/contact-manager/v1/get/companies'
const companyEditUrl = '/company/api/contact-manager/v1/edit/company/by/id'

class categories {
    static getPost(){
        return axios.get(`${companyUrlGet}`)
        .then(res=>{
            return (res)
        }).catch(err=>{
            throw(err)
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

export default categories;
<template>
<div>
    <v-row>
        <v-col cols="12" sm="12">
            <div class="d-flex justify-space-between">
                <h2 class="font-weight-light pa-3">Add Company</h2>
                <span>
                    <v-icon>mdi-lightbulb-on</v-icon><a href="#">help?</a>
                </span>
            </div>
            <v-divider></v-divider>
        </v-col>
        <v-col cols="12" sm="12">
            <v-row>
                <v-col cols="12" sm="4">
                    <v-text-field label="Name" v-model="formData.companyName"></v-text-field>
                    <v-text-field label="Website" v-model="formData.website"></v-text-field>
                    <v-textarea v-model="formData.description" auto-grow filled label="Description" rows="1"></v-textarea>
                    <v-text-field label="Phone" v-model="formData.phone"></v-text-field>
                    <v-text-field label="Fax" v-model="formData.fax"></v-text-field>
                </v-col>
                <v-col cols="12" sm="4">
                    <v-file-input :rules="rules" accept="image/png, image/jpeg, image/bmp" placeholder="Pick an avatar" prepend-icon="mdi-camera" label="Avatar"></v-file-input>
                    <v-combobox v-model="formData.tags" placeholder="Separate tags with Enter" label="Tags" multiple chips></v-combobox>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12" sm="12">
            <v-tabs v-model="tab">
                <v-tab class="text-capitalize">
                    Address
                </v-tab>
                <v-tab class="text-capitalize">
                    Custom Fields
                </v-tab>
            </v-tabs>
            <v-divider></v-divider>

            <v-tabs-items v-model="tab">
                <v-tab-item>
                    <v-card flat>
                        <v-row>
                            <v-col cols="12" sm="4">
                                <h2 class="mt-4 text--disabled">Billing Address</h2>
                                <v-text-field label="Billing Street" v-model="formData.address.billingAddress.billingStreet"></v-text-field>
                                <v-text-field label="Billing City" v-model="formData.address.billingAddress.billingCity"></v-text-field>
                                <v-text-field label="Billing State" v-model="formData.address.billingAddress.billingState"></v-text-field>
                                <v-text-field label="Billing Country" v-model="formData.address.billingAddress.billingCountry"></v-text-field>
                                <v-text-field label="Billing Zip Code" v-model="formData.address.billingAddress.billingZipCode"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <h2 class="mt-4 text--disabled">Shipping Address</h2>
                                <v-text-field label="Shipping Street" v-model="formData.address.shippingAddress.shippingStreet"></v-text-field>
                                <v-text-field label="Shipping City" v-model="formData.address.shippingAddress.shippingCity"></v-text-field>
                                <v-text-field label="Shipping State" v-model="formData.address.shippingAddress.shippingState"></v-text-field>
                                <v-text-field label="Shipping Country" v-model="formData.address.shippingAddress.shippingCountry"></v-text-field>
                                <v-text-field label="Shipping Zip Code" v-model="formData.address.shippingAddress.shippingZipCode"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card flat>
                        <v-card-text class="text-capitalize">Custom Fields</v-card-text>
                    </v-card>
                </v-tab-item>
            </v-tabs-items>
        </v-col>
    </v-row>
    <v-divider></v-divider>
    <div class="action_buttons mb-16 mt-5">
        <v-btn rounded color="primary" class="ma-2" dark @click="save" :loading="this.$store.state.loading">Save</v-btn>
        <v-btn rounded class="ma-2" :disabled="this.$store.state.disabled">Cancle</v-btn>
    </div>
</div>
</template>

<script>
import http_company from '../../api-handler/http_company'
import {
    mapState
} from 'vuex'
export default {
    data() {
        return {
            select: [],
            formData: {
                userId: '',
                portal: '',
                companyName: '',
                website: '',
                description: '',
                phone: '',
                fax: '',
                tags: [],
                address: {
                    billingAddress: {
                        billingStreet: '',
                        billingCity: '',
                        billingState: '',
                        billingCountry: '',
                        billingZipCode: ''
                    },
                    // Shipping Address
                    shippingAddress: {
                        shippingStreet: '',
                        shippingCity: '',
                        shippingState: '',
                        shippingCountry: '',
                        shippingZipCode: ''
                    }
                },
                avatarUrl: 'hello',
            },
            tab: null,
            rules: [
                value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
            ],
        }
    },
    computed: {
        ...mapState([
            'selectSingPost',
        ])
    },
    created() {
        if (this.$route.params.id) {
            this.$store.state.companyId = this.$route.params.id
            this.$store.dispatch('getPostById')
        }
        let localItemPortal = JSON.parse(localStorage.getItem('portalSelected'))
        let localItemUserId = JSON.parse(localStorage.getItem('user_Id'))
        console.log(localItemUserId)
        if (localItemPortal && localItemUserId) {
            this.formData.portal = localItemPortal._id
            this.formData.userId = localItemUserId
        }
    },
    watch: {
        selectSingPost: function (val) {
            if (val) {
                this.formData = val
            }
        }
    },
    methods: {
        async save() {
            this.$store.state.disabled = true
            this.$store.state.loading = true
            if (this.$route.params.id) {
                try {
                    await http_company.updatePost(this.formData, this.$route.params.id).then(res => {
                        if (res) {
                            this.$router.push(`/contacts/${this.$route.params.portal}/companies/details/${this.$route.params.id}`)
                            this.$notify({
                                group: 'foo',
                                type: 'success',
                                title: 'success',
                                text: 'Company updated successfully'
                            });
                            this.$store.state.disabled = false
                            this.$store.state.loading = false
                        }
                    })
                } catch (error) {
                    let grabError = error.response
                    if (error) {
                        this.$notify({
                            group: 'foo',
                            type: 'error',
                            title: 'Error',
                            text: grabError.data.message
                        });
                        this.$store.state.disabled = false
                            this.$store.state.loading = false
                    }
                }
            } else {
                try {
                    console.log(this.formData)
                    await http_company.insertPost(this.formData).then(res => {
                        if (res) {
                            this.$router.push(`/contacts/${this.$route.params.portal}/companies/details/${res.data.companyId}`)

                            this.$notify({
                                group: 'foo',
                                type: 'success',
                                title: 'success',
                                text: 'Company added successfully'
                            });
                            this.$store.state.disabled = false
                            this.$store.state.loading = false
                        }
                    })
                } catch (error) {
                    let grabError = error.response
                    if (error) {
                        this.$notify({
                            group: 'foo',
                            type: 'error',
                            title: 'Error',
                            text: grabError.data.message
                        });
                        this.$store.state.disabled = false
                        this.$store.state.loading = false
                    }
                }
            }
        }
    }
}
</script>

<template>
<div>
    <v-row>
        <v-col cols="12" sm="12">
            <div class="d-flex justify-space-between">
                <h2 class="font-weight-light pa-3">Add Contact</h2>
                <span>
                    <v-icon>mdi-lightbulb-on</v-icon><a href="#">help?</a>
                </span>
            </div>
            <v-divider></v-divider>
        </v-col>
        <v-col cols="12" sm="12">
            <v-row>
                <v-col cols="12" sm="4">
                    <v-text-field label="Name" v-model="formData.contactName"></v-text-field>
                    <v-text-field label="Title" v-model="formData.title"></v-text-field>
                    <v-text-field label="Company" v-model="formData.companyId"></v-text-field>
                    <v-textarea v-model="formData.description" auto-grow filled label="Description" rows="1"></v-textarea>
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
                    Contact Info
                </v-tab>
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
                                <v-text-field label="Email" v-model="formData.contactInfo.email"></v-text-field>
                                <v-text-field label="Mobile" v-model="formData.contactInfo.mobile"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <v-text-field label="Work Phone" v-model="formData.contactInfo.workPhone"></v-text-field>
                                <v-text-field label="Home Phone" v-model="formData.contactInfo.homePhone"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card flat>
                        <v-row>
                            <v-col cols="12" sm="4">
                                <v-text-field label="Billing Street" v-model="formData.address.mailingStreet"></v-text-field>
                                <v-text-field label="Billing City" v-model="formData.address.mailingCity"></v-text-field>
                                <v-text-field label="Billing State" v-model="formData.address.mailingState"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <v-text-field label="Billing Country" v-model="formData.address.mailingCountry"></v-text-field>
                                <v-text-field label="Billing Country" v-model="formData.address.mailingZipCode"></v-text-field>
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
import http_contacts from '../../api-handler/http_contact'
import {
    mapState
} from 'vuex'
export default {
    data() {
        return {
            select: [],
            formData: {
                userId: 'idNotAvailable',
                contactName: '',
                title: '',
                companyId: '',
                description: '',
                tags: [],
                contactInfo: {
                    // contact information
                    email: '',
                    mobile: '',
                    workPhone: '',
                    homePhone: '',
                },
                address: {
                    // Address information
                    mailingStreet: '',
                    mailingCity: '',
                    mailingState: '',
                    mailingCountry: '',
                    mailingZipCode: '',
                },
                avatarUrl: 'noImageUrlAvailable',
            },
            tab: null,
            rules: [
                value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
            ],
        }
    },
    computed: {
        ...mapState([
            'selectPostContact'
        ])
    },
    created() {
        if (this.$route.params.id) {
            this.$store.state.contactId = this.$route.params.id
            this.$store.dispatch('getContactPostById')
        }
    },
    watch: {
        selectPostContact: function (val) {
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
                    await http_contacts.updatePost(this.formData, this.$route.params.id).then(res => {
                        if (res) {
                            this.$router.push(`/contacts/${this.$route.params.portal}/contacts/details/${this.$route.params.id}`)
                            this.$notify({
                                group: 'foo',
                                type: 'success',
                                title: 'success',
                                text: 'Contact updated successfully'
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
                    await http_contacts.insertPost(this.formData).then(res => {
                        if (res) {
                            this.$router.push(`/contacts/${this.$route.params.portal}/contacts/details/${res.data.contactId}`)
                            this.$notify({
                                group: 'foo',
                                type: 'success',
                                title: 'success',
                                text: 'Contact added successfully'
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

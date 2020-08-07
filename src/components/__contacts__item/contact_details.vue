<template>
<div>
    <v-container v-if="selectPostContact" class="pa-0 text-sm-body-2">
        <v-row>
            <v-col cols="6">
                <div class="d-flex">
                    <div>
                        <v-avatar color="orange" size="50">
                            <span class="white--text headline">62</span>
                        </v-avatar>
                    </div>
                    <div class="ma-2">
                        <h1 class="font-weight-light mb-3">{{selectPostContact.contactName}}
                            <v-icon class="ml-2" small>mdi-twitter</v-icon>
                        </h1>
                        <span v-if="selectPostContact.title">{{selectPostContact.title}} </span>
                        <span v-if="selectPostContact.companyId"> at </span>
                        <span v-if="selectPostContact.companyId"> {{selectPostContact.companyId}}</span>
                    </div>
                </div>
                <div v-if="selectPostContact.description" class=" mb-3 ml-15 grey--text">
                    <span>{{selectPostContact.description}}</span>
                </div>
            </v-col>

            <v-spacer></v-spacer>

            <v-col cols="6" class="d-flex flex-row-reverse">
                <div>
                    <v-btn rounded outlined color="grey" class="text-capitalize ml-1 mr-1" small :to="{name: 'EditContactDetails', params: {portal: portalName, id: selectPostContact._id}}">Edit</v-btn>
                    <v-btn rounded outlined color="grey" class="text-capitalize ml-1 mr-1" small>New Record</v-btn>

                    <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn small rounded outlined class="text-capitalize" color="grey" dark v-bind="attrs" v-on="on">
                                More
                            </v-btn>
                        </template>

                        <v-list dense>
                            <v-list-item>
                                <v-list-item-title>History</v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-dialog v-model="dialog" width="500">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-list-item-title v-bind="attrs" v-on="on">Delete</v-list-item-title>
                                    </template>

                                    <v-card>
                                        <v-card-title class="headline grey lighten-2">
                                            Are you sure?
                                        </v-card-title>

                                        <v-card-text class="mt-4 subtitle-1">
                                            Do you want to delete this company and its associated contacts?
                                        </v-card-text>

                                        <v-divider></v-divider>

                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn :loading="this.$store.state.loading" color="red" text @click="deleteCompany">
                                                Okay, Go ahead
                                            </v-btn>
                                            <v-btn :disabled="this.$store.state.disabled" color="grey" text @click="dialog = false">
                                                Cancle
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </v-list-item>
                        </v-list>
                    </v-menu>

                    <v-icon class="ml-1 mr-1" @click="closePage">mdi-window-close</v-icon>
                </div>
            </v-col>

        </v-row>
        <v-row style="margin-top: -29px; margin-left: 32px;" v-if="selectPostContact.contactInfo">
            <v-col>
                <span class="ml-3" v-if="selectPostContact.contactInfo.email">
                    <v-icon class="mr-2" small>mdi-email</v-icon>{{selectPostContact.contactInfo.email}}
                </span>
                <span v-if="selectPostContact.contactInfo.mobile">
                    <v-icon class="ml-2 mr-2" small>mdi-cellphone</v-icon>{{selectPostContact.contactInfo.mobile}}
                </span>
                <span v-if="selectPostContact.contactInfo.workPhone">
                    <v-icon class="ml-2 mr-2">mdi-phone</v-icon> {{selectPostContact.contactInfo.workPhone}}
                </span>
                <span v-if="selectPostContact.contactInfo.homePhone">
                    <v-icon class="ml-2 mr-2">mdi-phone-classic</v-icon> {{selectPostContact.contactInfo.homePhone}}
                </span>
            </v-col>
        </v-row>
        <v-row style="margin-top: -23px;">
            <v-col>
                <div class="text-sm-body-2 ml-12">
                    <span v-if="selectPostContact.tags.length">
                        <v-chip small class="ma-2" close color="" text-color="black" v-for="(item, i) in selectPostContact.tags" :key="i" @click:close="close(item, i)">
                            {{item}}
                        </v-chip>
                    </span>
                    <span>
                        <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-y>
                            <template v-slot:activator="{ on, attrs }">
                                <a style="text-decoration: none;" v-bind="attrs" v-on="on">+ Add Tags</a>
                            </template>

                            <v-card>
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-content>
                                            <v-combobox v-model="tags" placeholder="Separate tags with Enter" label="Tags" multiple chips></v-combobox>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>

                                <v-card-actions style="margin-top: -40px">
                                    <v-spacer></v-spacer>
                                    <v-btn text @click="menu = false" :disabled="this.$store.state.disabled">Cancel</v-btn>
                                    <v-btn color="primary" text @click="addMoreTags" :loading="this.$store.state.loading">Save</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-menu>
                    </span>
                </div>
            </v-col>
        </v-row>

        <div>
            <v-tabs v-model="tab">
                <v-tab class="text-capitalize">
                    Overview
                </v-tab>
                <v-tab class="text-capitalize">
                    Timelinne
                </v-tab>
                <v-tab class="text-capitalize">
                    Emails
                </v-tab>
                <v-tab class="text-capitalize">
                    Social
                </v-tab>
                <v-tab class="text-capitalize">
                    Notes
                </v-tab>
            </v-tabs>
            <v-divider></v-divider>
            <v-tabs-items v-model="tab">
                <v-tab-item>
                    <v-card flat>
                        <v-row>
                            <v-col cols="12" sm="6">
                                <v-card v-if="selectPostContact.address">
                                    <div>
                                        <v-card-title class="button">Address</v-card-title>
                                        <v-card-subtitle>{{selectPostContact.address.mailingStreet}}, {{ selectPostContact.address.mailingCity}} <br> {{ selectPostContact.address.mailingState}}, {{ selectPostContact.address.mailingCountry}} {{ selectPostContact.address.mailingZipCode}}</v-card-subtitle>
                                    </div>
                                </v-card>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-card>
                                    <v-card-title class="button">User(s) Involved</v-card-title>

                                    <v-card-subtitle>
                                        <v-avatar color="orange" size="50">
                                            <span class="white--text headline">AD</span>
                                        </v-avatar>
                                    </v-card-subtitle>
                                </v-card>
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
        </div>
    </v-container>
</div>
</template>

<script>
import http_contact from '../../api-handler/http_contact'
import {
    mapState
} from 'vuex'
export default {
    data() {
        return {
            menu: false,
            tags: [],
            dialog: false,
            tab: null,
            colors: [
                'indigo',
                'warning',
            ],
            slides: [
                'First',
                'Second',
            ],
            items: [{
                    title: 'History'
                },
                {
                    title: 'Delete'
                }
            ],
        }
    },
    created() {
        this.$store.state.contactId = this.$route.params.id
    },
    mounted() {
        this.$store.dispatch('getContactPostById')
    },
    computed: {
        // a computed getter
        portalName: function () {
            // `this` points to the vm instance
            let storageItem = JSON.parse(localStorage.getItem('portalSelected'))
            if (storageItem) {
                return storageItem.portalName
            }
            return null
        },
        ...mapState([
            'selectPostContact',
        ])
    },
    methods: {
        closePage() {
            this.$router.push({
                name: 'Contacts',
                params: {
                    portal: 'bashhippo'
                }
            })
        },
        async addMoreTags() {
            this.$store.state.disabled = true
            this.$store.state.loading = true
            try {
                await http_contact.addMoreTags({
                    tags: this.tags
                }, this.$route.params.id).then(res => {
                    if (res) {
                        this.tags.map(val => {
                            this.selectPostContact.tags.push(val)
                            this.tags = []
                            this.menu = false
                            this.$store.state.disabled = false
                            this.$store.state.loading = false
                        })
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
        },
        async deleteCompany() {
            this.$store.state.disabled = true
            this.$store.state.loading = true
            try {
                await http_contact.deleteContacts(this.$route.params.id).then(res => {
                    if (res) {
                        this.$router.push({
                            name: 'Contacts',
                            params: {
                                portal: 'bashhippo'
                            }
                        })
                        this.$notify({
                            group: 'foo',
                            type: 'success',
                            title: 'success',
                            text: 'Contact deleted successfully'
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
        },
        async close(eventTag, index) {
            try {
                await http_contact.updateTags({
                    tags: [eventTag]
                }, this.$route.params.id).then(res => {
                    if (res) {
                        this.selectPostContact.tags.splice(index, 1)
                        this.$notify({
                            group: 'foo',
                            type: 'success',
                            title: 'success',
                            text: 'Tag removed successfully'
                        });
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
                }
            }
        },
    }
}
</script>

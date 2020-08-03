<template>
<div>
    <v-container v-if="this.$store.state.selectSingPost">
        <v-toolbar flat height="80">

            <v-avatar color="orange" size="50">
                <span class="white--text headline">62</span>
            </v-avatar>
            <div class="mt-5">
                <v-toolbar-title class="ml-2 text-capitalize font-weight-light">
                    {{this.$store.state.selectSingPost.companyName}}
                    <v-icon class="ml-2" small>mdi-twitter</v-icon>
                </v-toolbar-title>
                <span class="ma-4 grey--text caption">{{this.$store.state.selectSingPost.description}}</span>
            </div>
            <v-spacer></v-spacer>
            <v-btn rounded outlined color="grey" class="text-capitalize ml-1 mr-1" small :to="{name: 'EditCompanyDetails', params: {id: this.$store.state.selectSingPost._id}}">Edit</v-btn>
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
        </v-toolbar>

        <div class="text-sm-body-2 ml-16">
            <span class="ml-3" v-if="this.$store.state.selectSingPost.website">
                <v-icon class="mr-2" small>mdi-earth</v-icon><a :href="this.$store.state.selectSingPost.website">{{this.$store.state.selectSingPost.website}}</a>
            </span>
            <span v-if="this.$store.state.selectSingPost.phone">
                <v-icon class="ml-2 mr-2" small>mdi-phone-classic</v-icon>{{this.$store.state.selectSingPost.phone}}
            </span>
            <span v-if="this.$store.state.selectSingPost.fax">
                <v-icon class="ml-2 mr-2">mdi-fax</v-icon> {{this.$store.state.selectSingPost.fax}}
            </span>
        </div>

        <div class="text-sm-body-2 ml-16">
            <span v-if="this.$store.state.selectSingPost.tags.length">
                <v-chip small class="ma-2" close color="" text-color="black" v-for="(item, i) in this.$store.state.selectSingPost.tags" :key="i" @click:close="close(item, i)">
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

                        <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn text @click="menu = false" :disabled="this.$store.state.disabled">Cancel</v-btn>
                            <v-btn color="primary" text @click="addMoreTags" :loading="this.$store.state.loading">Save</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-menu>
            </span>
        </div>

        <div>
            <v-tabs v-model="tab">
                <v-tab class="text-capitalize">
                    Overview
                </v-tab>
                <v-tab class="text-capitalize">
                    Contacts
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
                                <v-card v-if="this.$store.state.selectSingPost.address.billingAddress">
                                    <div v-if="toggleAddress">
                                        <div class="d-flex">
                                            <v-card-title class="button">Billing Address</v-card-title>
                                            <v-spacer></v-spacer>
                                            <v-btn @click="toggleAdd" class="ma-2" text icon color="grey lighten-1">
                                                <v-icon>mdi-arrow-right-drop-circle-outline</v-icon>
                                            </v-btn>
                                        </div>

                                        <v-card-subtitle>{{this.$store.state.selectSingPost.address.billingAddress.billingStreet}}, {{ this.$store.state.selectSingPost.address.billingAddress.billingCity}} <br> {{ this.$store.state.selectSingPost.address.billingAddress.billingState}}, {{ this.$store.state.selectSingPost.address.billingAddress.billingZipCode}} {{ this.$store.state.selectSingPost.address.billingAddress.billingCountry}}</v-card-subtitle>
                                    </div>
                                    <div v-else>
                                        <div class="d-flex">
                                            <v-card-title class="button">Shipping Address</v-card-title>
                                            <v-spacer></v-spacer>
                                            <v-btn @click="toggleAdd" class="ma-2" text icon color="grey lighten-1">
                                                <v-icon>mdi-arrow-left-drop-circle-outline</v-icon>
                                            </v-btn>
                                        </div>

                                        <v-card-subtitle>{{this.$store.state.selectSingPost.address.shippingAddress.shippingStreet}}, {{ this.$store.state.selectSingPost.address.shippingAddress.shippingCity}} <br> {{ this.$store.state.selectSingPost.address.shippingAddress.shippingState}}, {{ this.$store.state.selectSingPost.address.shippingAddress.shippingZipCode}} {{ this.$store.state.selectSingPost.address.shippingAddress.shippingCountry}}</v-card-subtitle>
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
                            <v-col cols="12" sm="6">
                                <v-card>
                                    <v-card-title class="button mb-3">Contact Persons</v-card-title>

                                    <v-card-subtitle>
                                        <div>
                                            <v-avatar color="green" size="36">
                                                <span class="white--text">AD</span>
                                            </v-avatar>
                                            <span class="primary--text ml-2">Aslam Desusa</span> <span>Tile</span>
                                        </div>
                                        <div class="ml-8 pt-0 d-flex">
                                            <span class="d-inline-block text-truncate" style="max-width: 150px;">
                                                <v-icon small>mdi-email</v-icon><span class="text-truncate">aslam17@navgurukul.org</span>
                                            </span>
                                            <span class="d-inline-block text-truncate" style="max-width: 150px;">
                                                <v-icon small>mdi-phone-classic</v-icon><span>+91 8787676567</span>
                                            </span>
                                        </div>
                                    </v-card-subtitle>
                                    <v-divider></v-divider>
                                    <v-card-subtitle>
                                        <div>
                                            <v-avatar color="green" size="36">
                                                <span class="white--text">AD</span>
                                            </v-avatar>
                                            <span class="primary--text ml-2">Aslam Desusa</span> <span>Tile</span>
                                        </div>
                                        <div class="ml-8 pt-0 d-flex">
                                            <span class="d-inline-block text-truncate" style="max-width: 150px;">
                                                <v-icon small>mdi-email</v-icon><span class="text-truncate">aslam17@navgurukul.org</span>
                                            </span>
                                            <span class="d-inline-block text-truncate" style="max-width: 150px;">
                                                <v-icon small>mdi-phone-classic</v-icon><span>+91 8787676567</span>
                                            </span>
                                        </div>
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
import http_companies from '../../api-handler/http_company'
export default {
    data() {
        return {
            menu: false,
            tags: [],
            dialog: false,
            toggleAddress: true,
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
    methods: {
        closePage() {
            this.$router.push({
                name: 'Company',
                params: {
                    portal: 'bashhippo'
                }
            })
        },
        async addMoreTags() {
            this.$store.state.disabled = true
            this.$store.state.loading = true
            try {
                await http_companies.addMoreTags({
                    tags: this.tags
                }, this.$route.params.id).then(res => {
                    if (res) {
                        this.tags.map(val => {
                            this.$store.state.selectSingPost.tags.push(val)
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
                await http_companies.deleteCompanyData(this.$route.params.id).then(res => {
                    if (res) {
                        this.$router.push({
                            name: 'Company',
                            params: {
                                portal: 'bashhippo'
                            }
                        })
                        this.$notify({
                            group: 'foo',
                            type: 'success',
                            title: 'success',
                            text: 'Company deleted successfully'
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
        toggleAdd() {
            this.toggleAddress ? this.toggleAddress = false : this.toggleAddress = true
        },
        editPost() {
            console.log(this.$store.state.selectSingPost)
        },
        async close(eventTag, index) {
            try {
                await http_companies.updateTags({
                    tags: [eventTag]
                }, this.$route.params.id).then(res => {
                    if (res) {
                        this.$store.state.selectSingPost.tags.splice(index, 1)
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

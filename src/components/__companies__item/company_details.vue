<template>
<div>
    <v-container v-if="this.$store.state.selectSingPost">
        <v-toolbar flat height="80">
            

            <v-avatar color="orange" size="50">
                <span class="white--text headline">62</span>
            </v-avatar>

            <div class="mt-5">
                <v-toolbar-title class="ml-2 text-capitalize font-weight-light">{{this.$store.state.selectSingPost.companyName}}</v-toolbar-title>
                <span class="ma-4 grey--text caption">{{this.$store.state.selectSingPost.description}}</span>
            </div>
            <v-icon class="ml-2" small>mdi-twitter</v-icon>

            <v-spacer></v-spacer>

            <v-btn rounded outlined color="grey" class="text-capitalize ml-1 mr-1" small @click="editPost">Edit</v-btn>
            <v-btn rounded outlined color="grey" class="text-capitalize ml-1 mr-1" small>New Record</v-btn>
            <v-btn rounded outlined color="grey" class="text-capitalize ml-1 mr-1" small>More</v-btn>
            <v-icon class="ml-1 mr-1">mdi-window-close</v-icon>
        </v-toolbar>

        <div class="text-sm-body-2 ml-16">
            <span class="ml-3">
                <v-icon class="mr-2" small>mdi-earth</v-icon><a :href="this.$store.state.selectSingPost.website">{{this.$store.state.selectSingPost.website}}</a>
            </span>
            <span>
                <v-icon class="ml-2 mr-2" small>mdi-phone-classic</v-icon>{{this.$store.state.selectSingPost.phone}}
            </span>
            <span>
                <v-icon class="ml-2 mr-2">mdi-fax</v-icon> {{this.$store.state.selectSingPost.fax}}
            </span>
        </div>

        <div class="text-sm-body-2 ml-16">
            <v-chip small class="ma-2" close color="" text-color="black" @click:close="close">
                {{this.$store.state.selectSingPost.tags}}
            </v-chip>
            <span>
                <a href="#" style="text-decoration: none;">+ Add Tags</a>
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
                                    <v-card-title class="button">Billing Address</v-card-title>

                                    <v-card-subtitle class="mt-4">{{this.$store.state.selectSingPost.address.billingAddress.billingStreet}}, {{ this.$store.state.selectSingPost.address.billingAddress.billingCity}} <br> {{ this.$store.state.selectSingPost.address.billingAddress.billingState}}, {{ this.$store.state.selectSingPost.address.billingAddress.billingZipCode}} {{ this.$store.state.selectSingPost.address.billingAddress.billingCountry}}</v-card-subtitle>
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
export default {
    data() {
        return {
            tab: null,
        }
    },
    methods: {
        editPost(){
            console.log(this.$store.state.selectSingPost)
        },
        close() {
            alert('Chip close clicked')
            console.log(this.$store)
        },
    }
}
</script>

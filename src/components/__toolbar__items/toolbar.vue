<template>
<v-app>
    <v-app-bar flat height="40" app :clipped-left="$vuetify.breakpoint.lgAndUp" color="grey lighten-4">

        <!-- NavBar icon -->
        <v-icon class="mr-2 ml-0">mdi-apps</v-icon>
        <!-- end -->

        <!-- Navbar Image -->
        <img height="27" src="https://zohowebstatic.com/sites/default/files/styles/product-home-page/public/icon-contactmanager_1_2.png?itok=bm20CdxI" alt="Brand Icon">
        <!-- end -->

        <!-- Brand Name -->
        <span class="ml-1 text-sm-body-1 font-weight-medium">ContactManager</span>
        <!-- end -->

        <v-spacer></v-spacer>

        <p v-if="token" class="text-caption mt-4">Your trial period expires in 13 days.</p>
        <v-icon v-if="token" small class="mr-2">mdi-comment-question-outline</v-icon>
        <span v-if="token" class="text-capitalize grey--text">
            <v-btn rounded color="primary" class="text-capitalize mr-3" dark small outlined>upgrade now</v-btn>
        </span>

        <v-divider v-if="token" vertical></v-divider>

        <span v-if="token" class="text-capitalize grey--text">
            <v-icon small class="mr-3 ml-3">mdi-timer</v-icon>
        </span>

        <v-divider v-if="token" vertical></v-divider>

        <span v-if="token" text class="text-capitalize grey--text">
            <v-icon small class="mr-3 ml-3">mdi-bell-ring-outline</v-icon>
        </span>

        <v-divider v-if="token" vertical></v-divider>

        <span v-if="token" text class="text-capitalize grey--text mr-3">
            <router-link :to="{name: 'AddUser', params: {portal: portalName}}" style="text-decoration: none; color: grey;">
                <v-icon small class="mr-1 ml-3">mdi-wrench</v-icon>Setup
            </router-link>
        </span>

        <v-divider v-if="token" vertical></v-divider>

        <span v-if="token" text class="text-capitalize">
            <v-menu v-if="doc" v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-avatar class="mr-3 ml-3" color="teal" size="30" v-bind="attrs" v-on="on">
                        <v-gravatar :email="doc.email" />
                    </v-avatar>
                </template>

                <v-card width="400">
                    <v-row style="line-height: 2;">
                        <v-col cols="3">
                            <v-avatar class="mr-3 ml-3" color="teal" size="80">
                                <v-gravatar :email="doc.email" />
                            </v-avatar>
                        </v-col>
                        <v-col cols="6" class="ml-5">
                            <span>
                                <h5>{{(doc.email).split('@')[0]}}</h5>
                            </span>
                            <span>
                                <p class="grey--text">{{doc.email}}</p>
                            </span>
                            <span class="d-flex">
                                <a class="mr-4" href="#">My Account</a>
                                <a href="#">Help</a>
                            </span>
                            <span>
                                <a href="#">Skins</a>
                            </span>
                            <span>
                                <p>
                                    <a class="red--text" @click="logout">Sign Out</a>
                                </p>
                            </span>
                        </v-col>
                    </v-row>
                </v-card>
            </v-menu>
        </span>

    </v-app-bar>
    <!-- end -->

    <!-- Navigation Bar -->
    <NavigationBar v-if="token" />
    <!-- end -->
</v-app>
</template>

<script>
import NavigationBar from '../__navigation__bar/navigationBar.vue'
import http_user from '../../api-handler/http_users'
export default {
    components: {
        NavigationBar
    },
    data() {
        return {
            menu: false,
            token: null,
            doc: null,
        }
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
    },
    created() {
        let token = localStorage.getItem('user_token')
        if (token) {
            this.token = token
            this.getUserById()
        }
    },
    methods: {
        logout() {
            window.localStorage.clear();
            window.location.reload();
        },
        async getUserById() {
            let userId = JSON.parse(localStorage.getItem('user_Id'))
            await http_user.getUserById(userId)
                .then(res => {
                    if (res) {
                        this.doc = res.data.documents
                    }
                })
        }
    }
}
</script>

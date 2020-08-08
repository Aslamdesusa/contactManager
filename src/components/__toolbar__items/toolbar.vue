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

        <p class="text-caption mt-4">Your trial period expires in 13 days.</p>
        <v-icon small class="mr-2">mdi-comment-question-outline</v-icon>
        <span class="text-capitalize grey--text">
            <v-btn rounded color="primary" class="text-capitalize mr-3" dark small outlined>upgrade now</v-btn>
        </span>

        <v-divider vertical></v-divider>

        <span class="text-capitalize grey--text">
            <v-icon small class="mr-3 ml-3">mdi-timer</v-icon>
        </span>

        <v-divider vertical></v-divider>

        <span text class="text-capitalize grey--text">
            <v-icon small class="mr-3 ml-3">mdi-bell-ring-outline</v-icon>
        </span>

        <v-divider vertical></v-divider>

        <span text class="text-capitalize grey--text mr-3">
            <v-icon small class="mr-1 ml-3">mdi-wrench</v-icon>Setup
        </span>

        <v-divider vertical></v-divider>

        <span text class="text-capitalize">
            <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-avatar class="mr-3 ml-3" color="teal" size="30" v-bind="attrs" v-on="on">
                        <span class="white--text headline">A</span>
                    </v-avatar>
                </template>

                <v-card width="400">
                    <v-row style="line-height: 2;">
                        <v-col cols="3">
                            <v-avatar class="mr-3 ml-3" color="teal" size="80">
                                <span class="white--text headline">A</span>
                            </v-avatar>
                        </v-col>
                        <v-col cols="6" class="ml-5">
                            <span>
                                <h5>Desusa77777</h5>
                            </span>
                            <span>
                                <p>desusa77777@gmail.com</p>
                            </span>
                            <span class="d-flex">
                                <a class="mr-4" href="#">My Account</a>
                                <a href="#">Help</a>
                            </span>
                            <span>
                                <a href="#">Skins</a>
                            </span>
                            <span>
                                <p class="red--text">Sign Out</p>
                            </span>
                        </v-col>
                    </v-row>
                </v-card>
            </v-menu>
        </span>

    </v-app-bar>
    <!-- end -->

    <!-- Navigation Bar -->
    <NavigationBar v-if="show" />
    <!-- end -->
</v-app>
</template>

<script>
import NavigationBar from '../__navigation__bar/navigationBar.vue'
export default {
    components: {
        NavigationBar
    },
    data() {
        return {
            fav: true,
            menu: false,
            message: false,
            hints: true,
            show: true
        }
    }
}
</script>

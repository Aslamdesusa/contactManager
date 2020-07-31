<template>
<v-app>
    <v-app-bar flat height="40" app :clipped-left="$vuetify.breakpoint.lgAndUp" color="grey lighten-4">

        <!-- NavBar icon -->
        <v-icon class="mr-2 ml-0">mdi-apps</v-icon>
        <!-- end -->

        <!-- Navbar Image -->
        <img height="27" src="https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod20161101-microsoft-windowsazure-gallery/zohocorporationprivatelimited.zohocontactmanager.1.0.1/Icon/Large.png" alt="Brand Icon">
        <!-- end -->

        <!-- Brand Name -->
        <span class="ml-1 text-sm-body-1 font-weight-medium">ContactManager</span>
        <!-- end -->

        <v-spacer></v-spacer>

        <span class="text-capitalize grey--text">
            <v-icon small class="mr-3">mdi-timer</v-icon>
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
            <v-avatar class="mr-3 ml-3" color="teal" size="30">
                <span class="white--text headline">A</span>
            </v-avatar>
        </span>

    </v-app-bar>
    <!-- end -->

    <!-- Navigation Bar -->
    <NavigationBar />
    <!-- end -->
</v-app>
</template>

<script>
import NavigationBar from '../__navigation__bar/navigationBar'
export default {
    components: {
        NavigationBar
    }
}
</script>

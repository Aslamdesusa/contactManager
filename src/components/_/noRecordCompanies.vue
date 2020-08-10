<template>
<v-container style="margin-top: 100px;" fluid>
    <v-row align="center" justify="center">
        <v-card flat class="d-flex flex-column" align="center">
            <img width="380" src="https://cm.zoho.com/images/blankpage-companies.png" alt="Brand Icon">
            <h1 class="font-weight-light">More companies imply more business opportunities!</h1>
            <div class="text-center mt-6">
                <v-btn :to="{name: 'Company_Form', params: {portal: portalName}}" rounded color="primary">Add Companies</v-btn>
            </div>
            <div class="mt-4">
                <router-link to="/" style="text-decoration: none !important;">
                    <span>Import Companies</span>
                </router-link>
            </div>
            <div class="mt-4">
                <router-link to="/" style="text-decoration: none !important;">
                    <span>Add Custom Field</span>
                </router-link>
            </div>
        </v-card>
    </v-row> 
</v-container>
</template>

<script>
export default {
    props: {
        source: String,
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
}
</script>

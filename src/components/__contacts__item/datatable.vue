<template>
<div class="">
    <v-card flat tile class="mt-4">
        <v-toolbar flat dense height="60">

            <v-row>
                <v-col cols="12" sm="6">
                    <v-overflow-btn tile class="my-2 body-2" :items="dropdown_font" label="All Contacts" target="#dropdown-example"></v-overflow-btn>
                </v-col>
            </v-row>

            <v-spacer></v-spacer>

            <router-link class="font-italic mr-1" to="/" style="text-decoration: none !important;">
                <span>Import</span>
            </router-link>
            <span>/</span>
            <router-link class="font-italic" to="/" style="text-decoration: none !important;">
                <span>export</span>
            </router-link>

            <v-btn rounded text :to="{name: 'Contact_Form', params: {portal: portalName}}" class="primary ml-2 mr-2" small>Add Contact</v-btn>

            <v-btn fab small outlined color="grey" width="30" height="30" class="">
                <v-icon>mdi-menu</v-icon>
            </v-btn>
        </v-toolbar>
    </v-card>
    <v-data-table v-model="selected" item-key="name" show-select :headers="headers" :items="contactPost" class="elevation-1">
        <template v-slot:item.contactName="{ item }">
            <router-link v-if="item.contactName" class="mr-1" style="text-decoration: none !important;" :to="{ name: 'ContactDetails', params: { id: item._id }}">
                <span>{{item.contactName}}</span>
            </router-link>
            <span v-else>
                --
            </span>
        </template>
    </v-data-table>
</div>
</template>

<script>
import {
    mapState
} from 'vuex'
export default {
    data() {
        return {
            dropdown_font: ['All Companies', 'My Companies', 'Recently Updated', 'Recently Viewed', 'Not Updated In 30 Days'],
            selected: [],
            headers: [{
                    text: 'Name',
                    align: 'start',
                    sortable: false,
                    value: 'contactName',
                },
                {
                    text: 'Company',
                    value: 'companyId'
                },
                {
                    text: 'Email',
                    value: 'contactInfo.email'
                },
                {
                    text: 'Billing Country',
                    value: 'contactInfo.workPhone'
                },
            ],
        }
    },
    mounted() {
        this.$store.dispatch('loadContactPosts')
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
            'contactPost',
            'portal'
        ])
    }
}
</script>

<template>
<div class="">
    <v-card flat tile class="mt-4">
        <v-toolbar flat dense height="60">

            <v-row>
                <v-col cols="12" sm="6">
                    <v-overflow-btn tile class="my-2 body-2" :items="dropdown_font" label="All Companies" target="#dropdown-example"></v-overflow-btn>
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

            <v-btn rounded to="/contacts/basehippo/companies/add" class="primary ml-2 mr-2" small>Add Company</v-btn>

            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-toolbar>
    </v-card>
    <v-data-table v-model="selected" item-key="name" show-select :headers="headers" :items="desserts" class="elevation-1">
        <template v-slot:item.name="{ item }">
            <router-link v-if="item.name" class="mr-1" to="/contacts/bashhippo/companies/details/id" style="text-decoration: none !important;">
                <span>{{item.name}}</span>
            </router-link>
            <span v-else>
                --
            </span>
        </template>
    </v-data-table>
</div>
</template>

<script>
export default {
    data() {
        return {
            dropdown_font: ['All Companies', 'My Companies', 'Recently Updated', 'Recently Viewed', 'Not Updated In 30 Days'],
            selected: [],
            headers: [{
                    text: 'Company Name',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                {
                    text: 'Website',
                    value: 'website'
                },
                {
                    text: 'Phone',
                    value: 'phone'
                },
                {
                    text: 'Billing Country',
                    value: 'billingCountry'
                },
            ],
            desserts: [{
                    name: 'Basehippo',
                    website: 'https://test.com',
                    phone: +916767678987,
                    billingCountry: 'India',
                },
                {
                    name: 'codex',
                    website: 'https://test1.com',
                    phone: +918676556543,
                    billingCountry: 'India',
                },
            ],
        }
    },
}
</script>

<template>
<v-navigation-drawer width="200" color="#293C4E" app :clipped="$vuetify.breakpoint.lgAndUp">
    <v-list dense class="mt-3">
        <v-list-item-group v-model="item" color="white">
            <v-list-item v-for="(item, i) in items" :key="i" :to="item.path">
                <v-icon v-text="item.icon" class="mr-2" style="color: #bfc4ca;"></v-icon>
                <v-list-item-title style="color: #bfc4ca;">{{item.text}}</v-list-item-title>
            </v-list-item>
        </v-list-item-group>
    </v-list>
</v-navigation-drawer>
</template>

<script>
export default {
    data() {
        return {
            item: 0,
            items: [{
                    text: 'Home',
                    icon: 'mdi-home',
                    path: '/contacts/bashhippo/deshboard'
                },
                {
                    text: 'Companies',
                    icon: 'mdi-domain',
                    path: '/contacts/bashhippo/companies'
                },
                {
                    text: 'Contacts',
                    icon: 'mdi-account-multiple',
                    path: '/contacts/bashhippo/contacts'
                },
            ],
            right: null,
        }
    },
}
</script>

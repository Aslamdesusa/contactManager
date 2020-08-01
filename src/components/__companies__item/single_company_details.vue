<template>
    <v-navigation-drawer style="position: relative;" class="" permanent width="390" height="95vh">
        <v-list class="top-header-sticky" style="top: 0px; background: white;">
            <v-list-item>
                <v-toolbar  flat height="50" width="200">
                    <v-overflow-btn tile class="my-3 mt-8 body-2" :items="dropdown_font" label="Select" target="#dropdown-example"></v-overflow-btn>

                    <v-spacer></v-spacer>

                    <v-icon>mdi-note-plus</v-icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-toolbar>
            </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-data-table disable-pagination hide-default-header hide-default-footer :headers="headers" :items="desserts" :items-per-page="5"></v-data-table>
    </v-navigation-drawer>
</template>

<script>
export default {
    data: () => ({
        selected: [],
        allSelected: false,
        dropdown_font: ['All Companies', 'My Companies', 'Recently Updated', 'Recently Viewed', 'Not Updated In 30 Days'],
        headers: [{
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
        }, ],
        desserts: [{
                name: 'Frozen Yogurt',
            },
            {
                name: 'Ice cream sandwich',
            },
        ],
    }),
}
</script>

<style>
.theme--light.v-overflow-btn.theme--light.v-overflow-btn>.v-input__control>.v-input__slot {
    border: none;
}
</style>

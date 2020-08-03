<template>
<div class="single_page_details">
    <v-navigation-drawer style="position: relative;" permanent height="95vh" width>
        <v-list class="top-header-sticky grey lighten-5" style="top: 0px;">
            <v-list-item>
                <v-list-item-content>
                    <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-list-item-title class="subtitle-1 d-flex">
                                <v-checkbox dense></v-checkbox>
                                <span class=" mt-6 d-inline-block text-truncate" style="max-width: 140px;">All Companies</span>
                                <v-icon class="mt-2" v-bind="attrs" v-on="on">mdi-arrow-down-drop-circle</v-icon>
                            </v-list-item-title>
                        </template>
                        <v-list dense>
                            <v-list-item-group v-model="item" color="primary">
                                <v-list-item v-for="(item, i) in items" :key="i">
                                    <v-list-item-content>
                                        <v-list-item-title v-text="item.title"></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-menu>

                </v-list-item-content>

                <v-list-item-action>
                    <div>
                        <v-btn fab small text color="white" width="30" height="30" class="light-blue mr-2">
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                        <v-btn fab small outlined color="grey" width="30" height="30" class="">
                            <v-icon>mdi-menu</v-icon>
                        </v-btn>
                    </div>
                </v-list-item-action>
            </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list dense>
            <v-list-item-group v-model="item">
                <v-list-item v-for="(item, i) in posts" :key="i" :to="item._id">
                    <v-checkbox dense></v-checkbox>
                    <v-list-item-title class="pa-5" @click="passingData(item)">{{item.companyName}}</v-list-item-title>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data: () => ({
        item: null,
        items: [{
                title: 'All Companies'
            },
            {
                title: 'My Companies'
            },
            {
                title: 'Recently Updated'
            },
            {
                title: 'Recently Viewed'
            },
            {
                title: 'Not Updated In 30 Days'
            },
        ],
        singleSelect: false,
        selected: [],
    }),
    mounted() {
        this.$store.dispatch('loadPosts')
        this.$store.dispatch('getPostById')
    },
    computed: {
        ...mapState([
            'posts',
            'selectSingPost'
        ])
    },
    created(){
        this.$store.state.companyId = this.$route.params.id
    },
    methods:{
        passingData(data){
            this.$store.state.selectSingPost = data
        }
    }
}
</script>

<style>
.theme--light.v-overflow-btn.theme--light.v-overflow-btn>.v-input__control>.v-input__slot {
    border: none;
}
</style>

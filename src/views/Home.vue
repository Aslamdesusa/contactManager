<template>
<div class="home">
    <v-container fluid class="pa-0">
        <v-row>
            <v-col cols="12" sm="8" style="position: relative;">
                <v-container class="pa-0">
                    <div class="top-header-sticky white pa-4">
                        <h2 class="font-weight-light">Feeds</h2>
                        <!-- {{portals}} -->
                        <v-divider></v-divider>
                    </div>
                    <feeds />
                </v-container>
            </v-col>
            <v-col cols="12" sm="4" class="position: relative">
                <div class="top-header-sticky" style="top: 85px">
                    <h5 class="font-weight-light mt-4">Team Lead</h5>
                    <v-divider></v-divider>
                    <teamLoad />
                </div>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
// @ is an alias to /src

import feeds from '../components/__homies__item/feeds'
import teamLoad from '../components/__homies__item/teamLoad'
export default {
    components: {
        feeds,
        teamLoad
    },
    data: () => ({
        //
    }),
}
</script>

<style>
.top-header-sticky {
    position: sticky;
    top: 40px;
    z-index: 1000;
}
</style>

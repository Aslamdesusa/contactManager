<template>
<div class="home">
    <v-container fluid class="pa-0">
        <v-row>
            <v-col cols="12" sm="8" style="position: relative;" >
                <v-container class="pa-0">
                    <div class="top-header-sticky white pa-4">
                        <h2 class="font-weight-light">Feeds</h2>
                        <v-divider></v-divider>
                    </div>
                    <v-container>
                        <v-card flat>
                            <v-timeline>
                                <v-timeline-item v-for="n in 7" :key="n" large>
                                    <template v-slot:icon>
                                        <v-avatar>
                                            <img src="https://cdn1.truelancer.com/user-picture/448914-5a62083b785ec.jpg">
                                        </v-avatar>
                                    </template>
                                    <template v-slot:opposite>
                                        <span>Aslam desusa</span>
                                    </template>
                                    <v-card class="elevation-2">
                                        <v-card-title class="subtitle-2">Aslam17 added a new contact</v-card-title>
                                        <v-card-text>
                                            <span>Aslam Desusa</span><br>
                                            <span>Developer At BaseHippo</span><br>
                                            <span>aslam17@navgurukul.org</span>
                                        </v-card-text>
                                    </v-card>
                                </v-timeline-item>
                            </v-timeline>
                        </v-card>
                    </v-container>
                </v-container>
            </v-col>
            <v-col cols="12" sm="4" class="position: relative">
                <div class="top-header-sticky" style="top: 85px">
                    <h5 class="font-weight-light mt-4">Team Lead</h5>
                    <v-divider></v-divider>
                    <v-card flat max-width="475" class="mx-auto mt-4">
                        <v-list color="#f8f8f8" subheader two-line flat>
                            <v-list-item-group v-model="settings" multiple>
                                <v-list-item>
                                    <span>Team</span>
                                </v-list-item>

                                <v-list-item>
                                    <template v-slot:default="{ active, toggle }">
                                        <v-list-item-action>
                                            <v-checkbox color="primary" @click="toggle"></v-checkbox>
                                        </v-list-item-action>

                                        <v-list-item-content>
                                            <v-list-item-title>Sound</v-list-item-title>
                                            <v-list-item-subtitle>Hangouts message</v-list-item-subtitle>
                                        </v-list-item-content>
                                    </template>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-card>
                </div>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
// @ is an alias to /src

export default {
    data: () => ({
        settings: [],
    }),
}
</script>

<style scoped>
    .top-header-sticky{
        position: sticky;
        top: 40px;
        z-index: 1000;
    }
</style>

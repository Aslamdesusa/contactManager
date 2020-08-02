<template>
<div>
    <v-container>

        <v-toolbar flat height="80">

            <v-avatar color="orange" size="50">
                <span class="white--text headline">62</span>
            </v-avatar>

            <div class="mt-5">
                <v-toolbar-title class="ml-2 text-capitalize font-weight-light">Aslam Desusa</v-toolbar-title>
                <span class="ma-4 grey--text caption">Test</span>
            </div>
            <v-icon class="ml-2" small>mdi-twitter</v-icon>

            <v-spacer></v-spacer>

            <v-btn rounded outlined color="grey" class="text-capitalize ml-1 mr-1" small>Edit</v-btn>
            <v-btn rounded outlined color="grey" class="text-capitalize ml-1 mr-1" small>New Record</v-btn>
            <v-btn rounded outlined color="grey" class="text-capitalize ml-1 mr-1" small>More</v-btn>
            <v-icon class="ml-1 mr-1">mdi-window-close</v-icon>
        </v-toolbar>

        <div class="text-sm-body-2 ml-16">
            <span class="ml-3">
                <v-icon class="mr-2" small>mdi-earth</v-icon><a href="https://test.com">https://test.com</a>
            </span>
            <span>
                <v-icon class="ml-2 mr-2" small>mdi-phone-classic</v-icon>+918076979639
            </span>
            <span>
                <v-icon class="ml-2 mr-2">mdi-fax</v-icon> +1 323 555 1234
            </span>
        </div>

        <div class="text-sm-body-2 ml-16">
            <v-chip small class="ma-2" close color="" text-color="black" @click:close="close">
                Tags
            </v-chip>
            <span>
                <a href="#" style="text-decoration: none;">+ Add Tags</a>
            </span>
        </div>

        <div>
            <v-tabs v-model="tab">
                <v-tab class="text-capitalize">
                    Overview
                </v-tab>
                <v-tab class="text-capitalize">
                    Contacts
                </v-tab>
                <v-tab class="text-capitalize">
                    Social
                </v-tab>
                <v-tab class="text-capitalize">
                    Notes
                </v-tab>
            </v-tabs>
            <v-divider></v-divider>
            <v-tabs-items v-model="tab">
                <v-tab-item>
                    <v-card flat>
                        <v-row>
                            <v-col cols="12" sm="6">
                                <v-card>
                                    <v-card-title class="button">Billing Address</v-card-title>

                                    <v-card-subtitle class="mt-4">a-43 indra vikash samiti tahirpur delhi 110095, Delhi Delhi, 110095 India</v-card-subtitle>
                                </v-card>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-card>
                                    <v-card-title class="button">User(s) Involved</v-card-title>

                                    <v-card-subtitle>
                                        <v-avatar color="orange" size="50">
                                            <span class="white--text headline">AD</span>
                                        </v-avatar>
                                    </v-card-subtitle>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card flat>
                        <v-card-text class="text-capitalize">Custom Fields</v-card-text>
                    </v-card>
                </v-tab-item>
            </v-tabs-items>
        </div>
    </v-container>
</div>
</template>

<script>
export default {
    data() {
        return {
            tab: null,
        }
    },
    methods: {
        close() {
            alert('Chip close clicked')
        },
    }
}
</script>

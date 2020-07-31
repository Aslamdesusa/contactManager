<template>
<div>
    <v-row>
        <v-col cols="12" sm="12">
            <div class="d-flex justify-space-between">
                <h2 class="font-weight-light pa-3">Add Company</h2>
                <span>
                    <v-icon>mdi-lightbulb-on</v-icon><a href="#">help?</a>
                </span>
            </div>

            <v-divider></v-divider>
        </v-col>
        <v-col cols="12" sm="12">
            <v-row>
                <v-col cols="12" sm="4">
                    <v-text-field label="Name"></v-text-field>
                    <v-text-field label="Website"></v-text-field>
                    <v-text-field label="Description"></v-text-field>
                    <v-text-field label="Phone"></v-text-field>
                    <v-text-field label="Fax"></v-text-field>
                </v-col>
                <v-col cols="12" sm="4">
                    <v-file-input :rules="rules" accept="image/png, image/jpeg, image/bmp" placeholder="Pick an avatar" prepend-icon="mdi-camera" label="Avatar"></v-file-input>
                    <v-text-field label="Tags"></v-text-field>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12" sm="12">
            <v-tabs v-model="tab">
                <v-tab class="text-capitalize">
                    Address
                </v-tab>
                <v-tab class="text-capitalize">
                    Custom Fields
                </v-tab>
            </v-tabs>
            <v-divider></v-divider>

            <v-tabs-items v-model="tab">
                <v-tab-item>
                    <v-card flat>
                        <v-row>
                            <v-col cols="12" sm="4">
                                <h2 class="mt-4 text--disabled">Billing Address</h2>
                                <v-text-field label="Billing Street"></v-text-field>
                                <v-text-field label="Billing City"></v-text-field>
                                <v-text-field label="Billing State"></v-text-field>
                                <v-text-field label="Billing Country"></v-text-field>
                                <v-text-field label="Billing Zip Code"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <h2 class="mt-4 text--disabled">Shipping Address</h2>
                                <v-text-field label="Shipping Street"></v-text-field>
                                <v-text-field label="Shipping City"></v-text-field>
                                <v-text-field label="Shipping State"></v-text-field>
                                <v-text-field label="Shipping Country"></v-text-field>
                                <v-text-field label="Shipping Zip Code"></v-text-field>
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
        </v-col>
    </v-row>
    <v-divider></v-divider>
    <div class="action_buttons mb-16 mt-5">
        <v-btn rounded color="primary" class="ma-2" dark>Save</v-btn>
        <v-btn rounded class="ma-2">Cancle</v-btn>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            tab: null,
            items: [{
                    tab: 'Address',
                    content: 'Tab 1 Content'
                },
                {
                    tab: 'Custom Fields',
                    content: 'Tab 2 Content'
                },
            ],
            rules: [
                value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
            ],
        }
    }
}
</script>

<template>
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
                        <v-list-item-title>Records</v-list-item-title>
                        <v-list-item-subtitle>layout</v-list-item-subtitle>
                    </v-list-item-content>
                </template>
            </v-list-item>
        </v-list-item-group>
    </v-list>
</v-card>
</template>

<script>
export default {
    data(){
        return{
            settings: []
        }
    }
}
</script>

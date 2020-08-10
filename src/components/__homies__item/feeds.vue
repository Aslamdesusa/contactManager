<template>
<v-container>
    <v-card flat>
        <v-timeline>
            <v-timeline-item v-for="n in 1" :key="n" large>
                <template v-slot:icon>
                    <v-avatar>
                        <v-gravatar email="dippendsdfsfsjdfhkjh" />
                    </v-avatar>
                </template>
                <template v-slot:opposite>
                    <span>User</span>
                </template>
                <v-card class="elevation-2">
                    <v-card-title class="subtitle-2">User added a new contact</v-card-title>
                    <v-card-text>
                        <span>User</span><br>
                        <span>New Acount</span><br>
                        <span>New User</span>
                    </v-card-text>
                </v-card>
            </v-timeline-item>
        </v-timeline>
    </v-card>
</v-container>
</template>

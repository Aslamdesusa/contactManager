<template>
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
</template>

<template>
<v-app id="inspire">
    <v-main>
        <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
                <v-card flat justify="center">
                    <img width="400" src="https://cm.zoho.com/images/blankpage-contacts.png" alt="Brand Icon">
                    <h1 class="font-weight-light">The right connections can take you a long way!</h1>
                </v-card>
            </v-row>
        </v-container>
    </v-main>
</v-app>
</template>

<script>
export default {
    props: {
        source: String,
    },
}
</script>

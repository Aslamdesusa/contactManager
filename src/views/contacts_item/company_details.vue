<template>
<div class="contact_details">
    <v-row>
        <v-col cols="4">
            <listOfContacts />
        </v-col>
        <v-col cols="8">
            <contactDetails />
        </v-col>
    </v-row>
</div>
</template>

<script>
import listOfContacts from '../../components/__contacts__item/contact_list_details'
import contactDetails from '../../components/__contacts__item/contact_details'
export default {
    components: {
        listOfContacts,
        contactDetails
    },
    data() {
        return {

        }
    }
}
</script>

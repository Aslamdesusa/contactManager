<template>
<div class="company_details">
    <v-row>
        <v-col cols="4">
            <listOfCompay />
        </v-col>
        <v-col cols="8">
            <companyDetails />
        </v-col>
    </v-row>
</div>
</template>

<script>
import listOfCompay from '../../components/__companies__item/company_list_details'
import companyDetails from '../../components/__companies__item/company_details'
export default {
    components: {
        listOfCompay,
        companyDetails
    },
    data() {
        return {

        }
    }
}
</script>

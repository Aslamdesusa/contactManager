<template>
<div class="contacts">
    <noRecord v-if="noRecord" />
    <companyDataTable />
</div>
</template>

<script>
import noRecord from '../../components/_/noRecordCompanies'
import companyDataTable from '../../components/__companies__item/data_table'
// @ is an alias to /src
export default {
    components: {
        noRecord,
        companyDataTable
    },
    data() {
        return {
            noRecord: false,
        }
    }
}
</script>

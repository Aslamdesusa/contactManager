<template>
<div class="contacts">

    <companyDataTable v-if="posts.length" />
    <noRecord v-else />
</div>
</template>

<script>
import noRecord from '../../components/_/noRecordCompanies'
import companyDataTable from '../../components/__companies__item/data_table'
// @ is an alias to /src

import {
    mapState
} from 'vuex'
export default {
    components: {
        noRecord,
        companyDataTable
    },
    computed: {
        ...mapState([
            'posts',
        ])
    },
    data() {
        return {
            //
        }
    }
}
</script>

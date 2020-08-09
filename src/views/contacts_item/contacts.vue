<template>
<div class="contacts">
    <contactDataTable v-if="contactPost.length" />
    <noRecord v-else />
</div>
</template>

<script>
import noRecord from '../../components/_/noRecordContact.vue'
import contactDataTable from '../../components/__contacts__item/datatable'
// @ is an alias to /src
import {mapState} from 'vuex'
export default {
    components: {
        noRecord,
        contactDataTable
    },
    computed: {
        ...mapState([
            'contactPost',
        ])
    },
    data() {
        return {
            noRecord: false
        }
    }
}
</script>

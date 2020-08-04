<template>
  <div class="contacts">
    <noRecord v-if="noRecord"/>
    <contactDataTable />
  </div>
</template>



<script>
import noRecord from '../../components/_/noRecordContact.vue'
import contactDataTable from '../../components/__contacts__item/datatable'
// @ is an alias to /src
export default {
  components:{
    noRecord,
    contactDataTable
  },
  data(){
    return{
      noRecord: false
    }
  }
}
</script>

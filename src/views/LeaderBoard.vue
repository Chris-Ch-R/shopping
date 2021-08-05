<template>
  <div>
      <div class="grid grid-cols-2 divide-x divide-green-500 ">
          <manage-goods-table></manage-goods-table>
          <manage-goods-table></manage-goods-table>
      </div>
  </div>
</template>

<script>
import ManageGoodsTable from '../components/ManageGoodsTable.vue'
import PointHistoryStore from '@/store/PointHistoryStore'
import GoodsStore from '@/store/GoodsStore'

export default {
    data(){
        return{
            users:[]
        }
    },
    components:{
        ManageGoodsTable
    },
    created(){
        this.getUser()
    },
    methods:{
        async getUser(){
            this.users = await GoodsStore.getters.allGood
        }
    }

}
</script>

<style>

</style>
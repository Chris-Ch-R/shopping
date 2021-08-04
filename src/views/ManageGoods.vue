<template>
  <div>
    <create-goods-form></create-goods-form>
     <manage-goods-table></manage-goods-table>
  </div>
</template>

<script>
import ManageGoodsTable from "@/components/ManageGoodsTable.vue";
import CreateGoodsForm from "@/components/CreateGoodsForm.vue";
export default {
  components: {
    ManageGoodsTable,
    CreateGoodsForm,
  },
};
</script>

<style></style>

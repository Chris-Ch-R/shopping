<template>
  <div class="grid grid-cols-5 gap-2">
    <div v-for="(good, index) in goods" :key="index">
      <shopping-card
        :name="good.name"
        :price="good.cost"
        :amount="good.amount"
        setImage="@/assets/taoping.jpg"
      ></shopping-card>
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import ShoppingCard from "@/components/ShoppingCard.vue";
import ManageGoodsTable from "@/components/ManageGoodsTable.vue";
import GoodsStore from "@/store/GoodsStore";

export default {
  data() {
    return {
      goods: [],
    };
  },
  components: {
    HelloWorld,
    ShoppingCard,
    ManageGoodsTable,
  },
  created() {
    this.getGoods();
  },
  methods: {
    async getGoods() {
      await GoodsStore.dispatch("getGoods");

      this.goods = GoodsStore.getters.goods;
      console.log(this.goods);
    },
  },
};
</script>

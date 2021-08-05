<template>
  <div class="grid grid-cols-5 gap-2">
    <h1>asdflkas;jfslkfj</h1>
    <div v-for="(good, index) in goods.data" :key="index">
      <shopping-card
        :name="good.goodName"
        :price="good.cost"
        :amount="good.amount"
        :setImage="`http://localhost:1337${good.pic.url}`"
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
      this.goods = await GoodsStore.getters.allGood
    },
  },
};
</script>

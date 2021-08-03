<template>
  <div class="grid grid-cols-5 gap-2">
    <div v-for="(good, index) in goods" :key="index">
      <shopping-card
        :name="good.name"
        :price="good.price"
        :amount="good.amount"
        setImage="@/assets/taoping.jpg"
      ></shopping-card>
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import ShoppingCard from "@/components/ShoppingCard.vue";
import GoodsStore from "@/store/Goods";

export default {
  data() {
    return {
      goods: [],
    };
  },
  components: {
    HelloWorld,
    ShoppingCard,
  },
  created() {
    this.fetchGoods();
  },
  methods: {
    async fetchGoods() {
      await GoodsStore.dispatch("fetchGoods");

      this.goods = GoodsStore.getters.goods;
      console.log(this.goods);
    },
  },
};
</script>

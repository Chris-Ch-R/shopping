<template>
  <div>
    <div class="grid grid-cols-4 gap-2">
      <div v-for="(good, index) in goods.data" :key="index">
        <shopping-card
          :goodID="good.id"
          :name="good.goodName"
          :costType="good.cost_type"
          :detail="good.detail"
          :price="good.cost"
          :amount="good.amount"
          :setImage="good.pic"
        ></shopping-card>
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingCard from "@/components/ShoppingCard.vue";
import NavbarUser from "@/components/NavbarUser.vue";
import GoodsStore from "@/store/GoodsStore";
import BuyStore from "@/store/BuyStore";
export default {
  components: {
    ShoppingCard,
    NavbarUser
  },
  data() {
    return {
      
      goods: [],
    };
  },

  created() {
    this.getGoods();
  },
  methods: {
    
    async getGoods() {
      this.goods = await GoodsStore.getters.allGood;
    },
  },
};
</script>

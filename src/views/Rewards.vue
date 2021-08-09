<template>
  <div class="grid grid-cols-5 gap-2">
    <div v-for="(reward, index) in rewards.data" :key="index">
      <shopping-card
        :name="reward.goodName"
        :price="reward.cost"
        :amount="reward.amount"
        :setImage="reward.pic"
      ></shopping-card>
    </div>
  </div>
</template>

<script>
import ShoppingCard from "@/components/ShoppingCard.vue";
import GoodsStore from "@/store/GoodsStore";
export default {
  components: {
    ShoppingCard,
  },
  data() {
    return {
      rewards: [],
    };
  },
  created() {
    this.getReward();
  },
  methods: {
    async getReward() {
      this.rewards = await GoodsStore.getters.rewardGood
      console.log(this.rewards);
    },
  },

};
</script>

<style></style>

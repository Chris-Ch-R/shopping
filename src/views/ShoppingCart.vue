<template>
  <div>
    <div class="grid grid-cols-3 gap-4">
      <div v-for="(order, index) in orders.data" :key="index">
        <cart-orders
          :goodID="order.good.id"
          :name="order.good.goodName"
          :price="order.good.cost"
          :costType="order.good.cost_type"
          :amount="1"
          :setImage="order.good.pic"
        ></cart-orders>
      </div>
    </div>
    <button class="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" @click="buyOrders">
      BUY
    </button>
  </div>
</template>

<script>
import CartOrders from "@/components/CartOrders.vue";
import BuyStore from "@/store/BuyStore";
export default {
  data() {
    return {
      userAcc: {
        acc: {},
        err: "",
      },
      orders: [],
    };
  },
  components: {
    CartOrders,
  },
  created() {
    this.fetchAccountData();
    this.getOrders();
  },

  methods: {
    fetchAccountData() {
      this.userAcc = BuyStore.getters.userAccounting
    },
    getOrders() {
      // this.orders = BuyStore.getters.orders
      this.isOpenCart = true;
      this.orders = BuyStore.getters.ordersArr;
    },
    buyOrders() {
      BuyStore.dispatch("buy").then(() => {
        
        this.orders.data.forEach((element) => {
          let payload = {
            id:element.good.id
          }
          BuyStore.dispatch('deleteOrder',payload)
          
        });
        this.$router.push("/");
      });
    },
    
  },
};
</script>

<style></style>

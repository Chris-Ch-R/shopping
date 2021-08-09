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
    <button @click="buyOrders">
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
      BuyStore.getters.userAccounting.then(({ acc, err }) => {
        this.userAcc.acc = acc;
        this.userAcc.err = err;
      });
    },
    getOrders() {
      // this.orders = BuyStore.getters.orders
      this.isOpenCart = true;
      this.orders = BuyStore.getters.ordersArr;
    },
    buyOrders() {
      BuyStore.dispatch("buy").then(() => {
        this.$swal("Login Success", "การสั่งซื้อสำเร็จ", "success");
        this.orders.data.forEach((element) => {
          let payload = {
            id:element.good.id
          }
          BuyStore.dispatch('deleteOrder',payload)
          
        });
        this.$router.push("/");
      });
    },
    deleteOrder() {
      console.log("dele");
      this.orders.forEach((element) => {
        console.log(element);
        
      });
    },
  },
};
</script>

<style></style>

<template>
  <div>
    <div
      style="width:250px;height: 350px;"
      class=" rounded overflow-hidden border "
    >
      <div class="">
        <img
          class=" bg-cover "
          style="width: 250px; height: 200px"
          :src="setImage"
        />
      </div>
      <div class="px-3 pb-2">
        <div class="pt-2">
          <i class="far fa-heart cursor-pointer"></i>
          <span class="text-sm text-gray-400 font-medium">{{ name }}</span>
        </div>
        <div class="pt-1">
          <div class="mb-2 text-sm">
            <span class="font-medium mr-2">ราคา = {{ price }}</span>
          </div>
        </div>
        <div class="mb-2">จำนวนคงเหลือ: {{ amount }}</div>
      </div>
      <div>
        <button @click="addToCart">
          AddToCart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import BuyStore from "@/store/BuyStore";

export default {
  data() {
    return {
      getGoodByID: [],
      selectedOrder: new Map(),
      urlImage: this.setImage,
    };
  },
  props: {
    goodID: Number,
    name: String,
    detail: String,
    price: Number,
    costType: String,
    amount: Number,
    setImage: String,
  },
  created() {
    // console.log("this good: " + this.goodID);
  },
  methods: {
    
    addToCart() {
      let payload = {
        good: {
          //aka array ของข้อมูลสินค้าที่เรียกซื้อ
          id: this.goodID,
          goodName: this.name,
          cost: this.price,
          cost_type: this.costType,
          detail: this.detail,
          pic: this.setImage,
          amount: this.amount,
        },
        amount: 1,
      };
      console.log(payload);
      BuyStore.dispatch('addOrder',payload)
      
    },
  },
};
</script>

<style></style>

<template>
  <div class=" bg-gray-100 flex items-center mt-8" >
    <div
      class="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
    >
      <img class="rounded-xl mx-auto" :src="`http://localhost:1337${setImage.url}`" alt="" 
      style="width:275px; height:200px"/>
      <div class="flex justify-between items-center">
        <div>
          <h1 class="mt-5 text-xl font-semibold">{{ name }}</h1>
          <p class="mt-2">{{ price }} {{costType}}
            <font-awesome-icon v-if="costType === 'points'" icon="star" class="text-red-500" />
            <font-awesome-icon v-if="costType === 'coins'" icon="coins" class="text-yellow-600" />
          </p>
        </div>
        <div>
        </div>
        <div>
          <button
            class="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 "
            @click="addToCart"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BuyStore from "@/store/BuyStore";
import CountingStore from "@/store/CountingStore";

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
    setImage: Object,
  },
  created() {
  },
  methods: {
    
    addToCart() {
      let payload = {
        good: {
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
      BuyStore.dispatch('addOrder',payload)
      CountingStore.dispatch('addOneCart')
      
    },
  },
  created(){
  }
};
</script>

<style></style>

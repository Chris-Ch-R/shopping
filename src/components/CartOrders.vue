<template>
  <div class=" bg-gray-100 flex items-center" >
    <div
      class="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
    >
      <img class="rounded-xl mx-auto" :src="`http://localhost:1337${setImage.url}`" alt="" 
      style="width:275px; height:200px"/>
      <div class="flex justify-between items-center">
        <div>
          <h1 class="mt-5 text-2xl font-semibold">{{ name }}</h1>
          <p class="mt-2">{{ price }} บาท</p>
        </div>
        <div>
          <button
            class="text-white text-md font-semibold bg-red-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 "
            @click="deleteOrder(goodID)"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BuyStore from "@/store/BuyStore"
export default {
  props: {
    goodID: Number,
    name: String,
    detail: String,
    price: Number,
    costType: String,
    amount: Number,
    setImage: Object,
  },
  created() {},
  methods:{
    deleteOrder(goodID){
      let payload = {
        id: goodID
      }
    BuyStore.dispatch('deleteOrder', payload)
    }
  }
};
</script>

<style></style>

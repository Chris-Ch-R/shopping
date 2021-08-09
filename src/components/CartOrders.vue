<template>
  <div class="flex flex-row mb-6">
    <img
      :src="setImage"
      alt=""
      class="mr-4"
      style="width:100px; height:100px;"
    />
    <div class="flex-col">
      <div>ชื่อ : {{name}}</div>
      <div>ราคา : {{price}} {{costType}}</div>
      <div>จำนวน : {{amount}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodID: Number,
    name: String,
    detail: String,
    price: Number,
    costType: String,
    amount: Number,
    setImage: String,
  },
  created(){
  }
};
</script>

<style></style>

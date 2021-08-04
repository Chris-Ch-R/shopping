<template>
  <div>
    Add Goods

    <div>
      <div>
        <label for="name">goodName</label>
        <input type="text"  v-model="form.goodName"/>
      </div>

      <div>
        <label for="name">cost</label>
        <input type="text" v-model="form.cost"/>
      </div>

      <div>
        <label for="type">cost_type</label>
        <input type="text"  v-model="form.cost_type"/>
      </div>

      <div>
        <label for="type">detail</label>
        <input type="text"  v-model="form.detail"/>
      </div>

      <div>
        <label for="type">amount</label>
        <input type="text"  v-model="form.amount"/>
      </div>

      <div>
        <button @click="addGoods">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
import GoodsStore from "@/store/GoodsStore";
export default {
    data(){
        return{
            form:{
                goodName:"",
                cost:"",
                cost_type:"",
                detail:"",
                amount:"",
            }
        }
    },
    methods:{
        clearForm() {
            this.form ={
                goodName:"",
                cost:"",
                cost_type:"",
                detail:"",
                amount:"",
            }
        },
        addGoods(){
            let payload = {
                goodName: this.form.goodName,
                cost: this.form.cost,
                cost_type: this.form.cost_type,
                detail: this.form.detail,
                amount: this.form.amount,
            }
            GoodsStore.dispatch("addGoods" , payload);
            this.clearForm();
        }
    }
};
</script>

<style></style>

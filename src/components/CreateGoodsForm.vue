<template>
  <div class="grid-container">
    <span>ADD GOODS</span> 

    <div class="pos">
      <div class="pos-bottom">
        <label class="text-base" for="name">GOOD'S NAME</label><br>
        <input  type="text" v-model="form.goodName" />
      </div>

      <div class="pos-bottom">
        <label class="text-base" for="name">COST</label><br>
        <input type="number" v-model="form.cost" />
      </div>

      <div class="pos-bottom">
        <label class="text-base" for="type">COST TYPE</label><br>
        <select
          id="vehicle_id"
          name="vehicle_id"
          class="mt-1 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"          
          v-model="form.cost_type"
        >
          <option value="">-- select cost type --</option>
          <option value="coins">coins</option>
          <option value="points">points</option>
        </select>
        <!-- <input type="text" v-model="form.cost_type" /> -->
      </div>

      <div class="pos-bottom">
        <label class="text-base" for="type">DETAIL</label><br>
        <textarea  v-model="form.detail" />
      </div>

      <div class="pos-bottom">
        <label class="text-base" for="type">AMOUNT</label><br>
        <input type="number" v-model="form.amount" />
      </div>

      <div class="pos-bottom">
        <label class="text-base" for="type">PICTURE</label><br>
        <input type="file" @change="handleChange" />
      </div>

      <div>
        <button class="btn1" @click="addGoods">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
import GoodsStore from "@/store/GoodsStore";
import Authservice from "@/services/AuthService.js"
import Axios from "axios";
export default {
  data() {
    return {
      file: "",
      respone: "",

      form: {
        goodName: "",
        cost: "",
        cost_type: "",
        detail: "",
        amount: "",
        pic: "",
      },
    };
  },
  created() {
    
  },
  methods: {
    clearForm() {
      this.form = {
        goodName: "",
        cost: "",
        cost_type: "",
        detail: "",
        amount: "",
        pic: "",
      };
    },
    async addGoods() {
      await this.uploadPicture();
      let payload = {
        goodName: this.form.goodName,
        cost: this.form.cost,
        cost_type: this.form.cost_type,
        detail: this.form.detail,
        amount: this.form.amount,
        pic: this.respone.data[0].id,
      };

      GoodsStore.dispatch("addGood", payload).then((err) => {
        console.log("เพิ่มข้อมูลเรียบร้อย: " + err);
        console.log(err);
      });
      this.clearForm();
      location.reload();
    },
    handleChange(event) {
      this.file = event.target.files[0];
    },
    async uploadPicture() {
      const data = new FormData();
      data.append("files", this.file);
      this.respone = await Axios.post(
        "http://localhost:1337" + "/upload",
        data,
        {
          headers: {
            Authorization: `Bearer ${Authservice.getJWT()}`,
          },
        }
      );
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/cssAddGoods.scss";
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap");
</style>

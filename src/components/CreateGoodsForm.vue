<template>
  <div>
    Add Goods

    <div>
      <div>
        <label for="name">goodName</label>
        <input type="text" v-model="form.goodName" />
      </div>

      <div>
        <label for="name">cost</label>
        <input type="text" v-model="form.cost" />
      </div>

      <div>
        <label for="type">cost_type</label>
        <input type="text" v-model="form.cost_type" />
      </div>

      <div>
        <label for="type">detail</label>
        <input type="text" v-model="form.detail" />
      </div>

      <div>
        <label for="type">amount</label>
        <input type="text" v-model="form.amount" />
      </div>

      <div>
        <label for="type">picture</label>
        <input type="file" @change="handleChange" />
      </div>

      <div>
        <button @click="addGoods">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
import GoodsStore from "@/store/GoodsStore";
import Axios from "axios";
export default {
  data() {
    return {
      file: "",
      respone: "",
      tokenData: "",

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
    Axios.post("http://localhost:1337/auth/local", {
      identifier: "admin",
      password: "admin1",
    })
      .then((response) => {
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
        this.tokenData = response.data.jwt;
        console.log(this.tokenData);
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
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
            Authorization: `Bearer ${this.tokenData}`,
          },
        }
      );
    },
  },
};
</script>

<style></style>

<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>goodName</th>
          <th>cost</th>
          <th>cost_type</th>
          <th>detail</th>
          <th>amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(good, index) in goods" :key="index">
          <td>{{ index + 1 }}</td>
          <td v-if="index !== editIndex">{{ good.goodName }}</td>
          <td v-if="index === editIndex">
            <input v-model="form.goodName" type="text" />
          </td>

          <td v-if="index !== editIndex">{{ good.cost }}</td>
          <td v-if="index === editIndex">
            <input v-model="form.cost" type="text" />
          </td>

          <td v-if="index !== editIndex">{{ good.cost_type }}</td>
          <td v-if="index === editIndex">
            <input v-model="form.cost_type" type="text" />
          </td>

          <td v-if="index !== editIndex">{{ good.detail }}</td>
          <td v-if="index === editIndex">
            <input v-model="form.detail" type="text" />
          </td>

          <td v-if="index !== editIndex">{{ good.amount }}</td>
          <td v-if="index === editIndex">
            <input v-model="form.amount" type="text" />
          </td>

          <td v-if="index !== editIndex">
            <button @click="openForm(index, good)">Click to edit</button>
          </td>
          <td v-if="index === editIndex">
            <button @click="editGood">update</button>
            <button @click="closeForm">Cancle</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import GoodsStore from "@/store/GoodsStore";
export default {
  data() {
    return {
      goods: [],
      editIndex: -1,
      form: {
        goodName: "",
        cost: "",
        cost_type: "",
        detail: "",
        amount: "",
      },
    };
  },
  created() {
    this.getGoods();
  },
  methods: {
    async getGoods() {
      await GoodsStore.dispatch("getGoods");
      this.goods = GoodsStore.getters.goods;
      console.log(this.goods);
    },
    openForm(index, good) {
      this.editIndex = index;
      this.form.goodName = good.goodName;
      this.form.cost = good.cost;
      this.form.cost_type = good.cost_type;
      this.form.detail = good.detail;
      this.form.amount = good.amount;
    },
    closeForm() {
      this.editIndex = -1;
      this.form = {
        goodName: "",
        cost: "",
        cost_type: "",
        detail: "",
        amount: "",
      };
    },
    editGood() {
      let payload = {
        index: this.editIndex,
        goodName: this.form.goodName,
        cost: this.form.cost,
        cost_type: this.form.cost_type,
        detail: this.form.detail,
        amount: this.form.amount,
      };

      GoodsStore.dispatch("editGoods", payload);
      this.closeForm();
    },
  },
};
</script>

<style></style>

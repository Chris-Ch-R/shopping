<template>
  <div class="overflow-x-auto">
    <div
      class="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden"
    >
      <div class="w-full lg:w-5/6">
        <div class="bg-white shadow-md rounded my-6">
          <table class="min-w-max w-full table-auto">
            <thead>
              <tr
                class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal"
              >
                <th class="py-3 px-6 text-left">#</th>
                <th class="py-3 px-6 text-left">Good name</th>
                <th class="py-3 px-6 text-center">Cost</th>
                <th class="py-3 px-6 text-center">Cost type</th>
                <th class="py-3 px-6 text-center">Detail</th>
                <th class="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody class="text-gray-600 text-sm font-light">
              <tr
                v-for="(good, index) in goods.data"
                :key="index"
                class="border-b border-gray-200 hover:bg-gray-100"
              >
                <td class="py-3 px-6 text-left whitespace-nowrap">
                  {{ index + 1 }}
                </td>
                <td class="py-3 px-6 text-left" v-if="index !== editIndex">
                  {{ good.goodName }}
                </td>
                <td class="py-3 px-6 text-left" v-if="index === editIndex">
                  <input v-model="form.goodName" type="text" />
                </td>

                <td class="py-3 px-6 text-center" v-if="index !== editIndex">
                  {{ good.cost }}
                </td>
                <td class="py-3 px-6 text-center" v-if="index === editIndex">
                  <input v-model="form.cost" type="text" />
                </td>

                <td class="py-3 px-6 text-center" v-if="index !== editIndex">
                  {{ good.cost_type }}
                </td>
                <td class="py-3 px-6 text-center" v-if="index === editIndex">
                  <input v-model="form.cost_type" type="text" />
                </td>

                <td class="py-3 px-6 text-center" v-if="index !== editIndex">
                  {{ good.detail }}
                </td>
                <td class="py-3 px-6 text-center" v-if="index === editIndex">
                  <input v-model="form.detail" type="text" />
                </td>

                <td class="py-3 px-6 text-center">
                  <div
                    v-if="index !== editIndex"
                    class="flex item-center justify-center"
                  >
                    <div
                      class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                      @click="openForm(index, good)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </div>
                    <div
                      class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                      @click="deleteGood(good)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </div>
                  </div>

                  <div
                    v-if="index === editIndex"
                    class="flex item-center justify-center"
                  >
                    <div
                      class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                      @click="editGood(good)"
                    >
                      <font-awesome-icon
                        icon="check"
                        class="text-gray-500"
                      />
                    </div>
                    <div
                      class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                      @click="closeForm"
                    >
                      <font-awesome-icon
                        icon="times"
                        class="text-gray-500"
                      />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
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
      this.goods = await GoodsStore.getters.allGood;
      console.log(this.goods.data);
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
    editGood(good) {
      let payload = {
        id: good.id,
        newBody: {
          goodName: this.form.goodName,
          cost: this.form.cost,
          cost_type: this.form.cost_type,
          detail: this.form.detail,
        },
      };

      GoodsStore.dispatch("updateGood", payload);
      this.closeForm();
    },
    deleteGood(good) {
      //todo SweetAlert
      let payload = {
        id: good.id,
      };
      // console.log(good);
      GoodsStore.dispatch("removeGood", payload);
      location.reload();
    },
  },
};
</script>

<style></style>

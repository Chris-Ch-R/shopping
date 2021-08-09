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
                <th class="py-3 px-6 text-left">email</th>
                <th class="py-3 px-6 text-center">eventType</th>
                <th class="py-3 px-6 text-center">eventsText</th>
                <th class="py-3 px-6 text-center">Date</th>
                <th class="py-3 px-6 text-center">TotalPoint</th>
              </tr>
            </thead>
            <tbody class="text-gray-600 text-sm font-light">
              <tr
                v-for="(recieve, index) in recieves.data"
                :key="index"
                class="border-b border-gray-200 hover:bg-gray-100"
              >
                <td class="py-3 px-6 text-left whitespace-nowrap">
                  {{ index + 1 }}
                </td>
                <td class="py-3 px-6 text-left">
                  {{ recieve.data.email }}
                </td>

                <td class="py-3 px-6 text-center">
                  {{ recieve.data.eventType }}
                </td>

                <td class="py-3 px-6 text-center">
                  {{ recieve.data.eventsText }}
                </td>

                <td class="py-3 px-6 text-center">
                  {{ recieve.data.dateEvents }}
                </td>

                <td class="py-3 px-6 text-center">
                  
                  
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
import PointsHistoryStore from "@/store/PointsHistoryStore";
import GoodsStore from "@/store/GoodsStore";

export default {
  data() {
    return {
      goods: [],
      recieves: [],
      totalRecieve: 0
    };
  },
  async created() {
    this.getHistory();
    this.calTotalRecieve()
  },
  methods: {
    async getHistory() {
      await PointsHistoryStore.dispatch("searchReceiveHistory", {
        dateStart: new Date("2021/08/07"), //จุดเริ่มต้น ให้ส่งเป็น format years/mm/dd
        dateEnd: new Date("2021/08/09"), //จุดสิ้นสุด ให้ส่งเป็น format years/mm/dd
      });
      this.recieves = PointsHistoryStore.getters.receiveHistory;
      console.log(this.recieves.data);
    
    },
    calTotalRecieve(){
      // this.recieves.data.forEach(element => {
      //   console.log("element");
      //   console.log(element);
      // });
    }
  },
};
</script>

<style></style>

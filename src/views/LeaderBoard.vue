<template>
  <div>
    <div>
      <p>ระหว่างวันที่</p>
      <input class="border-4" type="date" v-model="form.dateStart" />
      <p>ถึงวันที่</p>
      <input class="border-4" type="date" v-model="form.dateEnd" />
      <p></p>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" @click="click">ตกลง</button>

      <leader-board-table
        :dataLeader="recieves"
        msg="Top Piont Received"
      ></leader-board-table>
      <leader-board-table
        :dataLeader="trade"
        msg="Top Piont Used"
      ></leader-board-table>
    </div>
  </div>
</template>

<script>
import LeaderBoardTable from "../components/LeaderBoardTable.vue";
import PointsHistoryStore from "@/store/PointsHistoryStore";

export default {
  data() {
    return {
      form: {
        dateStart: "2021-08-09",
        dateEnd: "2021-08-12",
      },
      recieves: [],
      trade: [],
    };
  },
  components: {
    LeaderBoardTable,
  },
  created() {
    this.getReceiveHistory();
    this.getTradeHistory();
  },
  methods: {
    click() {
      this.getReceiveHistory();
      this.getTradeHistory();
    },
    async getReceiveHistory() {
      await PointsHistoryStore.dispatch("searchReceiveHistory", {
        dateStart: new Date(this.form.dateStart),
        dateEnd: new Date(this.form.dateEnd),
      });
      this.recieves = PointsHistoryStore.getters.receiveHistory;
    },
    async getTradeHistory() {
      await PointsHistoryStore.dispatch("searchTradeHistory", {
        dateStart: new Date(this.form.dateStart),
        dateEnd: new Date(this.form.dateEnd),
      });
      this.trade = PointsHistoryStore.getters.tradeHistory;
    },
  },
};
</script>

<style></style>

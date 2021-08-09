<template>
  <div>
    <div class="">
      <p>ระหว่างวันที่</p><input type="date" v-model="form.dateStart">
      <p>ถึงวันที่</p>
      <input type="date" v-model="form.dateEnd">
      <p></p>
      <button @click="click">ตกลง</button>
      <leader-board-table :dataLeader="recieves"></leader-board-table>
      <leader-board-table :dataLeader="trade"></leader-board-table>
    </div>
  </div>
</template>

<script>
import LeaderBoardTable from "../components/LeaderBoardTable.vue";
// import PointHistoryStore from '@/store/PointHistoryStore'
import GoodsStore from "@/store/GoodsStore";
import PointsHistoryStore from "@/store/PointsHistoryStore";

export default {
  data() {
    return {
      users: [],
      form:{
        dateStart:"",
        dateEnd:"",
      },
      recieves: [],
      trade: [],
    }
  },
  components: {
    LeaderBoardTable,
  },
  created() {
    this.getReceiveHistory();
    this.getTradeHistory();
    this.getUser();
  },
  methods: {
    async getUser() {
      this.users = await GoodsStore.getters.allGood;
      
      // console.log("hello");
    },
    click(){
      this.getReceiveHistory();
      this.getTradeHistory();
    },
    async getReceiveHistory() {
      await PointsHistoryStore.dispatch("searchReceiveHistory", {
        dateStart: new Date(this.form.dateStart), 
        dateEnd: new Date(this.form.dateEnd), 
      });
      this.recieves = PointsHistoryStore.getters.receiveHistory.data;
      console.log("recieves");
      console.log(this.recieves);
    
    },
    async getTradeHistory() {
      await PointsHistoryStore.dispatch("searchTradeHistory", {
        dateStart: new Date(this.form.dateStart), 
        dateEnd: new Date(this.form.dateEnd), 
      });
      this.trade = PointsHistoryStore.getters.tradeHistory.data;
      console.log("trade");
      console.log(this.trade);
    
    },
  },
};
</script>

<style></style>

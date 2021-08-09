<template>
  <div>
    <div class="">
      <leader-board-table></leader-board-table>
      <leader-board-table></leader-board-table>
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
    };
  },
  components: {
    LeaderBoardTable,
  },
  created() {
    this.getUser();
  },
  methods: {
    async getUser() {
      // console.log("hello");
      // console.log(PointsHistoryStore.getters.receiveHistory);
    },
  },
};
</script>

<style></style>

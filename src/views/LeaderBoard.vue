<template>
  <div>
    <div class="grid grid-cols-2 divide-x divide-green-500 ">
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
      this.users = await GoodsStore.getters.allGood;
      PointsHistoryStore.dispatch("searchReceiveHistory", {
        dateStart: new Date("2021/08/07"), //จุดเริ่มต้น ให้ส่งเป็น format years/mm/dd
        dateEnd: new Date("2021/08/15"), //จุดสิ้นสุด ให้ส่งเป็น format years/mm/dd
      });
      // console.log("hello");
      // console.log(PointsHistoryStore.getters.receiveHistory);
    },
  },
};
</script>

<style></style>

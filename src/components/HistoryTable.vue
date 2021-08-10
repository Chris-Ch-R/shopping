<template>
  <div>
      <table v-if="history.lenght!==0" class="table-1">
          <thead>
              <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Event type</th>
                  <th scope="col">Detail</th>
              </tr>
          </thead>

          <tbody v-if="checkNumHis()>0">
              <tr v-for="(his, index) in history" :key="index" class="row-effect text-left">

                <td v-if="checkEmail(his.email)">{{ his.dateEvents }}</td>

                <td v-if="checkEmail(his.email)">{{ his.eventType }}</td>
                <td v-if="checkEmail(his.email)">{{ his.eventsText }}</td>

              </tr>
          </tbody>

      </table>
      <h1 v-if="checkNumHis() === 0" class="mb-20">Dont have History</h1>
  </div>
</template>

<script>
import HistoryStore from '@/store/HistoryStore.js'
import UserAuth from '@/store/UserAuth.js'
import PointsHistoryStore from '@/store/PointsHistoryStore.js'
export default {
    data(){
        return{
            history: [],
        }
    },
    created(){
        this.fetchHistory()
    },
    methods:{
        async fetchHistory(){
            await PointsHistoryStore.dispatch("updateAllHistory")
            this.history = PointsHistoryStore.getters.allHistory.data
        },
        checkEmail(cE){
            if(UserAuth.getters.user.email === cE){                
                return true
            }
        },
        checkNumHis(){
            let sum = 0
            for(let i=0;i<this.history.length;i++){
                if(this.history[i].email === UserAuth.getters.user.email){
                    sum++
                }
            }
            console.log(sum)
            return sum
        }
    },    
}
</script>

<style  scoped lang="scss">
@import '@/assets/cssTable.scss';
</style>
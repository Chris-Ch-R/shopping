<template>
  <div class="overflow-x-auto">
    <div
      class="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden"
    >
      <div class="w-full lg:w-5/6">
        <div class="bg-white shadow-md rounded my-6">
          <p class="mt-5 text-xl font-semibold">LeaderBoard ( {{msg}} )</p>
          <table class="min-w-max w-full table-auto">
            <thead>
              <tr
                class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal"
              >
                <th class="py-3 px-6 text-left">#</th>
                <th class="py-3 px-6 text-left">email</th>
                <th class="py-3 px-6 text-center">TotalPoint</th>
              </tr>
            </thead>
            <tbody class="text-gray-600 text-sm font-light">
              <tr
                v-for="(recieve, index) in dataLeader.data"
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
                  {{ recieve.amount }}
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

export default {
  data() {
    return {
      goods: [],
      data: [],
      
      totalRecieve: 0
    };
  },
  props:{
    dataLeader:Array,
    msg:String
  },
  created() {
    console.log("dataLeader");
    console.log(this.dataLeader.data);
  },
  methods: {
    
  },
};
</script>

<style></style>

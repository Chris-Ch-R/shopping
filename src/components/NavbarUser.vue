<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            type="button"
            class="
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              text-gray-400
              hover:text-white
              hover:bg-gray-700
              focus:outline-none
              focus:ring-2 focus:ring-inset focus:ring-white
            "
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
            <svg
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          class="
            flex-1 flex
            items-center
            justify-center
            sm:items-stretch
            sm:justify-start
          "
        >
          <div class="text-white flex-shrink-0 flex items-center">Shop Web</div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <router-link
                to="/"
                class="
                  bg-gray-900
                  text-white
                  px-3
                  py-2
                  rounded-md
                  text-sm
                  font-medium
                "
                aria-current="page"
                >Home</router-link
              >

              <router-link
                to="/reward"
                class="
                  text-gray-300
                  hover:bg-gray-700
                  hover:text-white
                  px-3
                  py-2
                  rounded-md
                  text-sm
                  font-medium
                "
                >Reward</router-link
              >

              <a
                href="#"
                class="
                  text-gray-300
                  hover:bg-gray-700
                  hover:text-white
                  px-3
                  py-2
                  rounded-md
                  text-sm
                  font-medium
                "
                >Leader Board</a
              >

              <a
                href="#"
                class="
                  invisible
                  text-gray-300
                  hover:bg-gray-700
                  hover:text-white
                  px-3
                  py-2
                  rounded-md
                  text-sm
                  font-medium
                "
                >Calendar</a
              >
            </div>
          </div>
        </div>
        <div
          class="
            absolute
            inset-y-0
            right-0
            flex
            items-center
            pr-2
            sm:static
            sm:inset-auto
            sm:ml-6
            sm:pr-0
          "
        >
          <button
            class="
              bg-gray-800
              p-1
              rounded-full
              text-gray-400
              hover:text-white
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-offset-gray-800
              focus:ring-white
            "
          >
            <font-awesome-icon
              icon="shopping-cart"
              class="text-gray-500 text-3xl"
            />
          </button>

          <div class="ml-3 relative">
            <div class="inline">
              <font-awesome-icon icon="coins" class="text-yellow-300" />
            </div>
            <div class="text-white inline"> {{ this.userAcc.acc.coins }} coin</div>
          </div>
          <div class="ml-3 relative mr-4">
            <div class="inline">
              <font-awesome-icon icon="star" class="text-red-500" />
            </div>
            <div class="text-white inline">1,000,000 point</div>
          </div>

          <div class="relative">
            <button
              class="
                block
                h-8
                w-8
                rounded-full
                overflow-hidden
                border-2 border-gray-600
                focus:outline-none
                relative
              "
              @click="isDp = !isDp"
            >
              <font-awesome-icon icon="sort-down" class="text-red-500" />
              <div
                class="fixed mt-2 w-48 z-50 bg-white rounded-lg py-2 shadow-xl"
                v-if="isDp"
              >
                <button @click="isOpen = !isOpen">ADD COIN</button>
                <router-link
                  to="/logout"
                  class="
                    block
                    px-4
                    py-2
                    text-gray-800
                    hover:bg-indigo-500
                    hover:text-white
                  "
                  >Logout</router-link
                >
              </div>
            </button>
            <button
              v-if="isOpen"
              @click="isOpen = false"
              class="fixed inset-0 h-screen w-full cursor-default"
            ></button>
            <div v-if="isOpen" style="z-index: 99" class="fixed inset-0 flex justify-center items-center">
              <button
                class="w-screen h-screen bg-black opacity-50 absolute inset-0" style="z-index: -1"
                @click="isOpen = false"
              ></button>
              <div class="bg-yellow-25 p-2 main-container">
                <h1 class="textSh">ADD COIN</h1>
                <ul class="grid-wrapper">
				          <li>
                    <img src="@/assets/TenCoin.png" width="100 px" height="100 px" class="ml-10">
                    <button class="btn1" @click="addCoin(10), showMessage(10)"><span>10 coin</span></button>
                  </li>
				          <li>
                    <img src="@/assets/FCoin.png" width="100 px" height="100 px" class="ml-9">
                    <button class="btn1" @click="addCoin(50), showMessage(50)"><span>50 coin</span></button>
                  </li>
			            <li>
                    <img src="@/assets/HCoin.png" width="400 px" height="400 px" class="ml-2 -mb-2">
                    <button class="btn1" @click="addCoin(100), showMessage(100)"><span>100 coin</span></button>
                  </li>
				          <li>
                    <img src="@/assets/ThCoin.png" width="400 px" height="400 px">
                    <button class="btn1" @click="addCoin(1000), showMessage(1000)"><span>1000 coin</span></button>
                  </li>
			          </ul>
              </div>
              <!-- <router-link
                to="/setting"
                class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                >Settings</router-link
              > -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import UserAuth from '@/store/UserAuth.js'
import BuyStore from '@/store/BuyStore.js'
export default {
  data() {
    return {
      isOpen: false,
      isDp: false,
      id: "",
      userAcc: {
        acc:{},
        err:""
      },
    };
  },
  created(){
      this.fetchAccountData() 
    },
  methods:{
    addCoin(coin){
      let payload = {amount:coin}
      BuyStore.dispatch('increaseCoins',payload)
    },
    // getCoin(){
    //   return this.coin
    // },
    showMessage(coin) {
      this.$swal("ADD COIN",`Add Coin ${coin} coin complete`, "success")
    },
    fetchAccountData() {
      BuyStore.getters.userAccounting.then(({ acc, err }) => {
        this.userAcc.acc = acc;
        this.userAcc.err = err;
        
      });console.log(this.userAcc)
  },
    
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/cssAddCoin.scss';
.cut-text {
  width: 50px;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
}
</stylev>
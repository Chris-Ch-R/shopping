<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link v-if="isAuthen()" to="/ManageGoods"
        >ManageGoodsTable</router-link
      >
      | <router-link to="/reward">Reward</router-link> |
      <router-link to="/leader_board">Leader board</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link v-if="!isAuthen()" to="/logout">Logout</router-link> |
      <router-link v-if="!isAuthen()" to="/register">Register</router-link>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
import AuthService from "@/services/AuthService";

export default {
  methods: {
    isAuthen() {
      return AuthService.isAuthen();
    },
  },
};
</script>

<style lang="scss">
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

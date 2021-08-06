<template>
  <div>
      <h1>Register</h1>
      <form @submit.prevent="register">

          <div>
              <label for="username">Username</label>
              <input v-model="form.username" type="text" autocomplete="off" placeholder="username">
          </div>
          
          <div>
              <label for="email">Email</label>
              <input v-model="form.email" type="text" autocomplete="off" placeholder="email">
          </div>

          <div>
              <label for="password">Password</label>
              <input v-model="form.password" type="password">
          </div>

          <div>
              <button type="submit">Register</button>
          </div>

      </form>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService'
import AuthUser from '@/store/UserAuth'
export default {
    data(){
        return{
            form:{
                username: '',
                email: '',
                password: ''
            }
        }
    },
    methods:{
        async register(){
            // console.log(this.form)
            let payload ={
                username: this.form.username,
                email: this.form.email,
                password: this.form.password
            }
            let res = await AuthService.register(payload)
            // console.log(res);
            // console.log(res.data.user.username);
            if(res.status === 200){
                // console.log("success");
                this.$swal("Register Success", `Welcome, ${res.data.user.username}`,"success")
                this.$router.push('/pokedex')
            }
            else{
                this.$swal('Register Failed', res.message, 'error')
            }
        }
    }
}
</script>

<style>

</style>
<template>
  <!-- <div class="bg">
      <h1>Register</h1>
      <form @submit.prevent="register">
          <div class="form">
            <div class="form-group">
                <label for="username" class="label-name"><span class="content-name">Username</span></label>
                <input v-model="form.username" type="text" autocomplete="off" placeholder="" id='username' required>
            </div>
            
            <div class="form-group">
                <label for="email">Email</label>
                <input v-model="form.email" type="text" autocomplete="off" placeholder="email">
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input v-model="form.password" type="password">
            </div>

            <div class="form-group">
                <button type="submit">Register</button>
            </div>
          </div>

      </form>
  </div> -->
    <div class="bg">
        <h1>REGISTER</h1>
        <form @submit.prevent="register">

            <div class="container">
                <div class="control-group">
                    <input v-model="form.username" type="text" placeholder=" " id="username" autocomplete="off">
                    <label for="username" class="label-name">
                    <span>Username</span>
                    </label>
                </div>

                <div class="control-group">
                    <input v-model="form.email" type="text" placeholder=" " autocomplete="off">
                    <label for="email" class="label-name">
                    <span>Email</span>
                    </label>
                </div>

                <div class="control-group">
                    <input v-model="form.password" type="password" placeholder=" " autocomplete="off">
                    <label for="password" class="label-name">
                    <span>Password</span>
                    </label>
                </div>

                <div class="form-group">
                    <button type="submit">Register</button>
                </div>
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
            console.log(this.form)
            // let res = await AuthService.register(payload)
            // console.log(res);
            // console.log(res.data.user.username);
            // if(res.status === 200){
            //     // console.log("success");
            //     this.$swal("Register Success", `Welcome, ${res.data.user.username}`,"success")
            //     this.$router.push('/')
            // }
            // else{
            //     this.$swal('Register Failed', res.message, 'error')
            // }
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/cssRegister.scss';
</style>
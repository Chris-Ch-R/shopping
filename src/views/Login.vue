<template>
    <div class="page">
        <h1>LOG IN</h1> 
        <div>
            <img class="posEcom" src="@/assets/ecom.png">
        </div>
        <!-- <img src="@/assets/users.png" width="100px" height="90px"> -->
        <div>
           
            <form @submit.prevent="login">
                <div class="form-item1">
                    <label for="email"></label>
                    <input v-model="form.email" type="text" placeholder="Email" autocomplete="off">
                </div>

                <div class="form-item2">
                    <label for="password"></label>
                    <input v-model="form.password" type="password" placeholder="Password" autocomplete="off">
                </div>
                
                <div class="wrapper">
                    <button class="fancy-button bg-gradient1"><span>Login</span></button>
                </div>

            </form>
            <p class="linkRegis"><a href="/register">REGISTER</a></p>
        </div>
    </div>
</template>

<script>
//import AuthService from '@/services/AuthService'
import AuthUser from '@/store/UserAuth'
export default {
    data(){
        return{
            form:{
                email: '',
                password: ''
            }
        }
    },
    methods:{
        async login(){
            let res = await AuthUser.dispatch('login',this.form)
            if(res.success){
                 this.$swal("Login Success",`Welcome, ${res.user.username}`, "success")
                 this.$router.push('/')
                 this.$router.go(0)
            }
            else{
                 this.$swal("Login Failed",res.message,'error')
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import url(https://fonts.googleapis.com/css?family=Chewy);
@import '@/assets/_variable.scss';
.posEcom{
    width: 500px;
    margin-top: -10px;
}
.page{
    margin: 100px 400px;
    display: grid;
    height: 450px;
    width: 800px;
    background-color: #CACFD2;
    padding-top: 10px;
}
h1{
    margin-top: 20px;
    margin-left: 450px;
    font-family: 'Chewy';
    font-size:30px;
    color: black;
}
.form-item1 input, .form-item2 input{
    display: block;
    width: 250px;
    height: 50px;
    background: transparent;
    border: solid 3.5px green;
    transition: all 1s ease;
    border-radius: 15px;
    background-position: left;
    background-size: 38px;
    background-repeat: no-repeat;
    padding-left: 40px;
    outline: none;
}
.form-item1 input{
  margin: -300px 0px 20px 500px;
  background-image: url('../assets/login.png');
}
.form-item2 input{
  margin: 50px 0px 20px 500px;
  background-image: url('../assets/key.png');
}
.form-item1 input:focus, .form-item2 input:focus{
  border-color: #2ECC71 ;
}
.form-item1 input:focus + label,.form-item2 input:focus + label,
.form-item1 input:valid + label{
  font-size: 20px;
  top: -5px;
}
</style>
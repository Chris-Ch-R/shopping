<template>
    <div class="page"> 
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
            //let res = await AuthService.login(this.form)
            console.log(this.form);
            let res = await AuthUser.dispatch('login',this.form)
            console.log(res.user.username);
            if(res.success){
                 this.$swal("Login Success",`Welcome, ${res.user.username}`, "success")
                 this.$router.push('/')
            }
            else{
                 this.$swal("Login Failed",res.message,'error')
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Itim&family=MonteCarlo&display=swap');
@import '@/assets/_variable.scss';
.posEcom{
    width: 500px;
    margin-top: 55px;
}
.page{
    margin: 100px 400px;
    display: grid;
    height: 450px;
    width: 800px;
    background-color: #CACFD2;
    padding: 10px;
}
h1{
    /* font-family: 'Itim', cursive;
    font-family: 'MonteCarlo', cursive;
    font-size: 2px;
    text-align: center; */
    margin-top: 50px;
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
  margin: -250px 0px 20px 500px;
  background-image: url('C:/laragon/www/shopping/src/assets/login.png');
}
.form-item2 input{
  margin: 50px 0px 20px 500px;
  background-image: url('C:/laragon/www/shopping/src/assets/key.png');
}
.form-item1 input:focus, .form-item2 input:focus{
  border-color: #2ECC71 ;
}
.form-item1 input:focus + label,.form-item2 input:focus + label,
.form-item1 input:valid + label{
  font-size: 20px;
  top: -5px;
}
// .form-item1,.form-item2 input:focus + label{
//   /* border-radius: 15px;  */
// }
</style>
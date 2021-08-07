<template>
    <div>

    </div>
</template>

<script>
import AuthService from '@/services/AuthService'
import AuthUser from '@/store/UserAuth'
export default {
    mounted(){
        console.log(AuthService.getJWT())
        AuthUser.dispatch('logout')
        this.$router.push('/login')
        console.log(AuthService.isAuthen())
        console.log(AuthService.getJWT())
    }
}
</script>

<style>

</style>
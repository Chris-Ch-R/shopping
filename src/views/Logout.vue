<template>
    <div>

    </div>
</template>

<script>
import AuthService from '@/services/AuthService'
import AuthUser from '@/store/UserAuth'
export default {
    mounted(){
        AuthUser.dispatch('logout')
        this.$router.push('/login')
    }
}
</script>

<style>

</style>
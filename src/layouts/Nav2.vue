<template>
<div>
    <navbar-user></navbar-user>
    <div>
        <slot />
    </div>
</div>
  
</template>

<script>
import NavbarUser from "@/components/NavbarUser.vue";

export default {
    components:{
        NavbarUser
    }

}
</script>

<style>

</style>
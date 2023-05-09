<template lang="">
    <div class="flex mx-auto">
        <router-link to="/">
            <img class="h-20" src="@/assets/images/logo.png" alt="" />
        </router-link>
        <ul class="flex my-7">
            <li>
                <router-link to="/" class="ml-5">
                    Movies
                </router-link>
            </li>
            <li>
                <router-link to="/actors" class="ml-5">
                    Actors
                </router-link>
            </li>
            <li>
                <router-link to="/profile" class="ml-5">
                    Profile
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>
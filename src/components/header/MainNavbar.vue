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
                <router-link v-if="isLoggedIn" to="/profile" class="ml-5">
                    Profile
                </router-link>
                <router-link v-else to="/login" class="ml-5">
                    Profile
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isLoggedIn: false,
        };
    },
    mounted() {
        this.checkSession();
    },
    methods: {
        checkSession() {
            const user = JSON.parse(localStorage.getItem("user"));
            this.isLoggedIn = !!user;
        },
    },
};
</script>

<style lang="">
</style>

<template>
    <div class="relative">
        <button @click="isOpen = !isOpen" class="focus:outline-none">
        <img v-if="photo" :src="photo" alt="" class="h-10 rounded-full" />
        <img v-else src="@/assets/images/avatar.png" alt="" class="h-10 rounded-full" />
        </button>
        <div v-if="isOpen" class="absolute py-2 mr-3 bg-gray-600 rounded-lg w-48 right-0 shadow-xl">
        <router-link v-if="!isLoggedIn" to="/register" class="block px-4 py-2 hover:bg-gray-400">Sign In</router-link>
        <router-link v-if="!isLoggedIn" to="/login" class="block px-4 py-2 hover:bg-gray-400">Log In</router-link>
        <a v-if="isLoggedIn" href="#" class="block px-4 py-2 hover:bg-red-600" @click="logout">Logout</a>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        const handleEscape = (e) => {
            if (e.key == "Esc" || e.key == "Escape") {
                this.isOpen = false;
            }
        };
        document.addEventListener("keydown", handleEscape);
        this.$once("hook:beforeDestroy", () => {
            document.removeEventListener("keydown", handleEscape);
        });
    },
    data() {
        return {
            isOpen: false,
            isLoggedIn: false,
            photo: null,
            user: null
        };
    },
    mounted() {
        this.checkSession();
        this.loadPhoto();
    },
    methods: {
        checkSession() {
            const user = JSON.parse(localStorage.getItem("user"));
            this.isLoggedIn = !!user;
            this.user = user;
        },
        loadPhoto() {
            if (this.user) {
                this.photo = localStorage.getItem(`photo_${this.user.id}`);
            }
        },
        logout() {
            localStorage.removeItem(`photo_${this.user.id}`);
            localStorage.removeItem('user');
            this.isLoggedIn = false;
            this.photo = null;
            this.$router.push('/login');
        }
    },
};
</script>

<style lang="">

</style>

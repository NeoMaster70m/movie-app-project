<template lang="">
    <div class="relative">
        <button @click="isOpen = !isOpen" class="focus:outline-none">
            <img src="@/assets/images/avatar.jpg" alt="" class="h-10 rounded-full" />
        </button>
        <div v-if="isOpen" class="absolute py-2 mr-3 bg-gray-600 rounded-lg w-48 right-0 shadow-xl">
            <router-link to="/register" class="block px-4 py-2 hover:bg-gray-400">Sign In</router-link>
            <router-link to="/login" class="block px-4 py-2 hover:bg-gray-400">Log In</router-link>
            <a href="#" class="block px-4 py-2 hover:bg-red-600">Logout</a>
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
        document.addEventListener("keydown", handleEscape)
        this.$once("hook:beforeDestroy", () => {
            document.addEventListener("keydown", handleEscape)
        })
    },
    data() {
        return {
            isOpen: false
        }
    }
}
</script>
<style lang="">
    
</style>
<template lang="">
    <div v-show="value" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
        <div class="bg-gray-800 rounded-lg p-8 relative w-3/4 h-3/4">
        <button @click="closeModal" class="absolute top-0 right-0 mt-4 mr-4 text-gray-400 hover:text-red-600 bg-transparent border-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <iframe class="w-full h-full object-cover" frameborder="0" allowfullscreen :src="mediaURL"></iframe>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        value: {
            required: true,
        },
        mediaURL: {
            required: true
        }
    },
    methods: {
        closeModal() {
        this.$emit('input', false);
        },
    }, 
}
</script>
<template lang="">
    <div class="container mx-auto border-b border-gray-600 px-4 py-4">
        <h2 class="text-4xl font-semibold mb-5">Cast</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div class="mr-2 mt-2" :key="index" v-for="(cast, index) in casts">
                <img class="hover:opacity-75 transition easy-in-out duration-200" :src="castProfileImage(cast)" alt="">
                <span class="text-gray-200 font-montserrat-semibold text-xl">{{cast.name}}</span>   
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    props: {
        casts: {
            required: true
        }
    },
    methods: {
        castProfileImage(cast) {
            if (cast.profile_path) {
                return "https://image.tmdb.org/t/p/w400/" + cast.profile_path
            }else {
                return "https://via.placeholder.com/400x600"
            } 
        }
    }
}
</script>
<style lang="">
    
</style>
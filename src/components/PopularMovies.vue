<template lang="">
    <div class="mx-auto w-9/12">
        <h2 class="mt-5 text-yellow-400 uppercase text-lg font-semibold">
            Popular Movies
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <MovieItem />
            <MovieItem />
            <MovieItem />
            <MovieItem />
        </div>
        
    </div>
</template>
<script>
import MovieItem from "./items/MovieItem.vue"
export default {
    components: {
        MovieItem
    }
}
</script>
<style lang="">
    
</style>
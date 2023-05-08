<template lang="">
    <div>
        <h2 class="mt-5 text-yellow-400 uppercase text-lg font-semibold">
            Popular Movies
        </h2>
        <MovieItem />
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
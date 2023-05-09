<template lang="">
    <div class="mx-auto w-10/12">
        <h2 class="mt-5 text-yellow-400 uppercase text-lg font-semibold">
            Popular Movies
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <MovieItem 
            :key="movie.id" 
            v-for="movie in movies" 
            :movie="movie" 
            :genres="genres"
            />
        </div>
        
    </div>
</template>
<script>
import MovieItem from "./items/MovieItem.vue"
export default {
    components: {
        MovieItem
    },
    data: function () {
        return {
            movies: [],
            genres: [],
        };
    },
    async mounted () {
        this.fetchGenres();
        try {
        const response = await this.$http.get("/movie/popular");
        this.movies = response.data.results;
        } catch (error) {
            console.log(error)
        }
    },
    methods: {
        async fetchGenres () {
            try {
                const response = await this.$http.get("/genre/movie/list");
                this.genres = response.data.genres;
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>
<style lang="">
    
</style>
<template lang="">
    <div>
        <div class="container mx-auto flex mt-20 border-b border-gray-600 pb-2">
            <img :src="posterPath" alt="">
            <div class="ml-24">
                <h1 class="text-4xl font-semibold mb-2">{{this.movie.title}}</h1>
                <span class="text-gray-400">
                <i class="fas fa-star text-yellow-500 w-4 mr-1"></i>{{this.movie.vote_average * 10}}% | {{this.movie.release_date}}
                    <span :key="index" v-for="(item, index) in movie.genres">
                        {{item.name}}
                        <span v-if="movie.genres.length - 1 != index">,</span>
                    </span>
                </span>
                <P class="mt-5 text-lg font-medium">{{this.movie.overview}}</P>
                <div class="mt-10">
                    <span class="font-semibold text-2xl">Featured Cast:</span>
                    <div class="flex">
                        <div class="flex flex-col mt-5 mr-5">
                            <span>Scott Silver </span>
                            <span class="text-gray-400">Writter</span>
                        </div>
                        <div class="flex flex-col mt-5">
                            <span>Bruce Berman </span>
                            <span class="text-gray-400">Executive Producer</span>
                        </div>
                    </div>   
                </div>
                <div class="mt-10">
                    <a href="" class="rounded bg-red-600 px-5 py-3 mr-5"><i class="fab fa-youtube text-lg mr-2"></i>Play Trailer</a>
                    <a href="" class="rounded bg-yellow-500 px-5 py-3 text-black"><i class="fas fa-heart text-lg mr-2"></i>Favourite</a>
                </div>
            </div>
        </div>  
        <MovieCast :casts="movie.credits.cast" />
        <MovieImages :images="movie.images.backdrops" />
    </div>
</template>
<script>
import MovieCast from './MovieCast.vue'
import MovieImages from './MovieImages.vue'
export default {
    components:{
        MovieCast,
        MovieImages
    },
    data () {
        return {
            movie: [],
        }  
    },
    mounted () {
        this.fetchMovie(this.$route.params.id)
    },
    methods: {
        async fetchMovie(movieId) {
            const response = await this.$http.get(
                "/movie/" + movieId + "?append_to_response=credits,video,images")
                this.movie = response.data
        }
    },
    computed: {
        posterPath() {
            return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path;
        }
    },
}
</script>
<style lang="">
    
</style>
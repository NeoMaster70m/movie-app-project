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
                        <div :key="index" v-for="(crew, index) in movie.credits.crew">
                            <div class="flex flex-col mt-5 mr-5" v-if="index < 2">
                                <span>{{crew.name}}</span>
                            <span class="text-gray-400">{{crew.job}} </span>
                            </div>
                        </div>
                    </div>   
                </div>
                <div class="mt-10">
                    <a @click.prevent="modelOpen=true" target="_blank" class="rounded bg-red-600 px-5 py-3 mr-5">
                        <i class="fab fa-youtube text-lg mr-2"></i>Play Trailer
                    </a>
                    <a href="#" class="rounded bg-yellow-500 px-5 py-3 text-black"><i class="fas fa-heart text-lg mr-2"></i>Favourite</a>
                </div>
            </div>
        </div>  
        <MovieCast :casts="movie.credits.cast" />
        <MovieImages :images="movie.images.backdrops" />
        <MediaModel v-model="modelOpen" :mediaURL="youtubeTrailerUrl" />
    </div>
</template>
<script>
import MovieCast from './MovieCast.vue'
import MovieImages from './MovieImages.vue'
import MediaModel from '../models/MediaModel.vue'
export default {
    components: {
        MovieCast,
        MovieImages,
        MediaModel
    },
    data() {
        return {
            movie: {
                credits: {
                crew: {}
                },
                images: {
                backdrops: {}
                },
                videos: {
                results: []
                }
            },
            modelOpen: false,
        }
    },
    mounted() {
        this.fetchMovie(this.$route.params.id)
    },
    watch: {
        "$route.params.id": {
            handler() {
                this.fetchMovie(this.$route.params.id)
            }
        }
    },
    methods: {
        async fetchMovie(movieId) {
        const response = await this.$http.get(
            "/movie/" + movieId + "?append_to_response=credits,videos,images"
        );
        this.movie = response.data;
        }
    },
    computed: {
        posterPath() {
        return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path;
        },
        youtubeTrailerUrl() {
        if (this.movie.videos && this.movie.videos.results) {
            const trailer = this.movie.videos.results.find(
                video => video.type === "Trailer"
            );
            if (trailer) {
                return `https://www.youtube.com/embed/${trailer.key}`;
            }
        }
        return "";
    },
            youtubeVideo() {
            return this.youtubeTrailerUrl;
        }
    }
};
</script>
<style lang="">
    
</style>
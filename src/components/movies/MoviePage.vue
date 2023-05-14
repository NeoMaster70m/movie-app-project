<template>
    <div class="px-4 lg:px-0">
        <div class="container mx-auto flex mt-20 border-b border-gray-600 pb-2 flex-col md:flex-row">
            <img :src="posterPath" alt="" class="w-full md:w-1/2 lg:w-1/3 object-cover mb-8 md:mb-0">
            <div class="md:ml-8 lg:ml-12 w-full">
                <h1 class="text-4xl font-semibold mb-2">{{this.movie.title}}</h1>
                <span class="text-gray-400">
                    <i class="fas fa-star text-yellow-500 w-4 mr-1"></i>{{this.movie.vote_average * 10}}% | {{this.movie.release_date}}
                    <span :key="index" v-for="(item, index) in movie.genres">
                        {{item.name}}
                        <span v-if="movie.genres.length - 1 != index">,</span>
                    </span>
                </span>
                <p class="mt-5 text-lg font-medium">{{this.movie.overview}}</p>
                <div class="mt-10">
                    <span class="font-semibold text-2xl">Featured Cast:</span>
                    <div class="flex flex-wrap">
                        <div :key="index" v-for="(crew, index) in movie.credits.crew" class="mr-10">
                            <div class="flex flex-col mt-5" v-if="index < 2">
                                <span>{{crew.name}}</span>
                                <span class="text-gray-400">{{crew.job}} </span>
                            </div>
                        </div>
                    </div>   
                </div>
                <div class="mt-10 flex space-x-4">
                    <a @click.prevent="modelOpen=true" target="_blank" class="rounded bg-red-600 px-5 py-3 text-white flex items-center">
                        <i class="fab fa-youtube text-lg mr-2"></i>Play Trailer
                    </a>
                    <a href="#" class="rounded bg-yellow-500 px-5 py-3 text-black flex items-center"
                    @click.prevent="toggleFavorite"
                    :class="{ 'bg-red-500': isFavorite }">
                    <i class="fas fa-heart text-lg mr-2"></i>Favorite
                </a>
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
            isFavorite: false,
        }
    },
    mounted() {
        this.fetchMovie(this.$route.params.id);
        this.fetchMovie(this.$route.params.id);
        this.checkIsFavorite();
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
        },
        checkIsFavorite() {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user) {
                const favorites = JSON.parse(localStorage.getItem(`favorites_${user.id}`)) || [];
                this.isFavorite = favorites.includes(this.movie.id);
            }
        },
        toggleFavorite() {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user) {
                let favorites = JSON.parse(localStorage.getItem(`favorites_${user.id}`)) || [];
                if (this.isFavorite) {
                    favorites = favorites.filter(id => id !== this.movie.id);
                } else {
                    favorites.push(this.movie.id);
                }
                localStorage.setItem(`favorites_${user.id}`, JSON.stringify(favorites));
                this.isFavorite = !this.isFavorite;
            }
        },
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
<template>
    <div id="example">
        <h2 class="mt-10 text-center text-yellow-400 uppercase text-4xl font-roboto-semibold mb-10">Top Rated Movies</h2>
        <carousel-3d  
        v-if="topRatedMovies.length > 0"
        :controls-visible="true"
        :controls-prev-html="'&#10092; '" 
        :controls-next-html="'&#10093;'"
        :controls-width="30"
        :controls-height="60" 
        :clickable="false" 
        :listData="topRatedMovies"
        :height="700"
        :autoplay="true"
        :autoplay-timeout="3000"
            >
            <slide v-for="(movie, i) in topRatedMovies" :key="i" :index="i">
                <figure>
                    <router-link :to="`/movie/${movie.id}`">
                        <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path">
                        <figcaption>
                            <h3 class="text-xl font-semibold">{{ movie.title }}</h3>
                            <p class="text-lg text-gray-300">{{ movie.release_date }}</p>
                            <p class="text-lg text-gray-400"><i class="fas fa-star text-yellow-500 w-4 mr-1"></i>{{ movie.vote_average * 10 }}%</p>
                        </figcaption>
                    </router-link> 
                </figure>
            </slide>
        </carousel-3d>
    </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
export default {
    data() {
        return {
            topRatedMovies: []
        }
    },
    components: {
        Carousel3d,
        Slide
    },
    mounted() {
        this.fetchTopRatedMovies();
    },
    methods: {
        async fetchTopRatedMovies() {
            const response = await this.$http.get("https://api.themoviedb.org/3/movie/top_rated");
            this.topRatedMovies = response.data.results.slice(0, 7);
        }
    }
}
</script>

<style>
.carousel-3d-container figure {
    margin:0;
    height: 100%;
}

.carousel-3d-container img {
    height: 100%;
    object-fit: cover;
}

.carousel-3d-container figcaption {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    bottom: 0;
    position: absolute;
    bottom: 0;
    padding: 15px;
    font-size: 12px;
    min-width: 100%;
    box-sizing: border-box;
}
</style>

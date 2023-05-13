<template>
    <div class="banner-container mt-20">
    <h2 class="mt-5 text-center text-yellow-400 uppercase text-4xl font-roboto-semibold mb-5">Now Playing Movies</h2>
    <carousel :autoplay="true" :autoplay-timeout="2000" :per-page="1" :loop="true" :navigation-enabled="true">
        <slide v-for="movie in movies" :key="movie.id">
        <div class="slide-content">
            <router-link :to="`/movie/${movie.id}`">
                <img :src="getImageUrl(movie.poster_path)" alt="Movie Poster" />
            </router-link>
            <h3 class="text-4xl font-semibold">{{ movie.title }}</h3>
            <p class="text-2xl text-gray-400 ">{{ movie.release_date }}</p>
            <p class="text-lg text-gray-500"><i class="fas fa-star text-yellow-500 w-4 mr-1"></i>{{ movie.vote_average * 10 }}%</p>
        </div>
        </slide>
    </carousel>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import axiosInstance from "@/services/api.js";

export default {
components: {
Carousel,
Slide,
},
data() {
return {
    movies: [],
};
},
async mounted() {
try {
    const response = await axiosInstance.get("/movie/now_playing?language=en-US&page=1");
    this.movies = response.data.results;
} catch (error) {
    console.error(error);
}
},
methods: {
getImageUrl(posterPath) {
    return `https://image.tmdb.org/t/p/w500/${posterPath}`;
},
},
};
</script>

<style scoped>
.banner-container {
width: 100%;
}

.slide-content {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
height: 100%;
}

.slide-content img {
max-width: 100%;
height: auto;
}

.slide-content h3, .slide-content p {
margin: 0;
}
</style>
<template lang="">
    <div class="container mx-auto px-4 py-16 flex">
        <div class="flex-none">
            <img :src="'https://image.tmdb.org/t/p/w300/' + this.actor.profile_path" alt="">
            <ul class="flex items-center gap-6 mt-4">
                <li>
                    <a href="">
                        <i class="fab fa-facebook text-gray-500 text-2xl"></i>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i class="fab fa-instagram text-gray-500 text-2xl"></i>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i class="fab fa-twitter text-gray-500 text-2xl"></i>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i class="fas fa-globe text-gray-500 text-2xl"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div class="ml-20">
            <h2 class="text-4xl font-semibold">{{this.actor.name}} </h2>
            <div>
                <i class="fas fa-birthday-cake text-gray-400 text-xl"></i>
                <span class="ml-2 text-gray-400 text-lg">1988-12-16 (31)</span>
            </div>
            <p class="text-gray-300 mt-8">{{this.actor.biography}}</p>  
            <h4 class="mt-20 font-semibold text-2xl">Known For</h4>
            <div class="w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div :key="movie.id" v-for="movie in this.knownFor">
                    <router-link :to="`/movie/${movie.id}`" class="text-lg text-gray-400 leading-normal hover:text-white">
                        <img class="mt-2 hover:opacity-75 transition ease-in-out duration-150" 
                        :src="movieImage(movie)" alt="poster"
                        >
                        <a href="#" class="text-lg text-gray-400 leading-normal hover:text-white">{{movie.name}}</a>
                    </router-link>
                    
                </div>
            </div>
        </div>  
    </div>
</template>
<script>
export default {
    data() {
        return {
            socialDetails: [],
            actor: {},
            knownFor: []
        }
    },
    mounted() {
        this.fetchActor(this.$route.params.id),
        this.fetchCredits(this.$route.params.id)
    },
    methods: {
        async fetchActor(actorId) {
            const response = await this.$http.get("https://api.themoviedb.org/3/person/" + actorId);
            this.actor = response.data;
        },
        async fetchCredits(actorId) {
            const response = await this.$http.get("https://api.themoviedb.org/3/person/" + actorId + "/combined_credits");
            this.knownFor = response.data.cast.slice(
                Math.max(response.data.cast.length - 5, 1)
            )
        },
        movieImage(movie) {
            const posterPath = movie.poster_path
            if (!posterPath){
                return "https://via.placeholder.com/185x278"
            } 
            return "https://image.tmdb.org/t/p/w185/" + posterPath
        }
    }
}
</script>
<style lang="">
    
</style>
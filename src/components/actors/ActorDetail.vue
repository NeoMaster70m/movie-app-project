<template lang="">
    <div class="container mx-auto px-4 py-16 flex flex-wrap">
        <div class="w-full md:w-1/3 lg:w-1/4">
            <img :src="'https://image.tmdb.org/t/p/w300/' + this.actor.profile_path" alt="" class="w-full">
            <ul class="flex items-center gap-6 mt-4 justify-center md:justify-start">
                <li v-if="socialDetails.facebook_id">
                    <a :href="'https://www.facebook.com/' + socialDetails.facebook_id">
                        <i class="fab fa-facebook text-gray-500 text-2xl"></i>
                    </a>
                </li>
                <li v-if="socialDetails.instagram_id">
                    <a :href="'https://www.instagram.com/' + socialDetails.instagram_id">
                        <i class="fab fa-instagram text-gray-500 text-2xl"></i>
                    </a>
                </li>
                <li v-if="socialDetails.twitter_id">
                    <a :href="'https://twitter.com/' + socialDetails.twitter_id">
                        <i class="fab fa-twitter text-gray-500 text-2xl"></i>
                    </a>
                </li>
                <li v-if="socialDetails.imdb_id">
                    <a :href="'https://www.imdb.com/name/' + socialDetails.imdb_id">
                        <i class="fas fa-globe text-gray-500 text-2xl"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div class="w-full md:w-2/3 lg:w-3/4 pl-4">
            <h2 class="text-4xl font-semibold">{{this.actor.name}} </h2>
            <div class="mt-2">
                <i class="fas fa-birthday-cake text-gray-400 text-xl"></i>
                <span class="ml-2 text-gray-400 text-lg">{{this.actor.birthday}} ({{calculateAge(this.actor.birthday)}})</span>
            </div>
            <p class="text-gray-300 mt-8">{{this.actor.biography}}</p>  
            <h4 class="mt-20 font-semibold text-2xl">Known For</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
                <div :key="movie.id" v-for="movie in this.knownFor" class="w-full">
                    <router-link :to="`/movie/${movie.id}`" class="text-lg text-gray-400 leading-normal hover:text-white">
                        <img class="w-full mt-2 hover:opacity-75 transition ease-in-out duration-150" 
                        :src="movieImage(movie)" alt="poster"
                        >
                        <a href="#" class="text-lg text-gray-400 leading-normal hover:text-white">{{movie.title}}</a>
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
        this.fetchCredits(this.$route.params.id),
        this.fetchSocials(this.$route.params.id)
    },
    methods: {
        async fetchActor(actorId) {
            const response = await this.$http.get(`https://api.themoviedb.org/3/person/${actorId}?`);
            this.actor = response.data;
            this.knownFor = response.data.known_for;
        },
        async fetchCredits(actorId) {
            const response = await this.$http.get(
                `https://api.themoviedb.org/3/discover/movie?&with_cast=${actorId}&sort_by=popularity.desc`);
            this.knownFor = response.data.results.slice(0, 5);
        },
        async fetchSocials(actorId) {
            const response = await this.$http.get(`/person/${actorId}/external_ids`);
            this.socialDetails = response.data;
        },
        movieImage(movie) {
            const posterPath = movie.poster_path
            if (!posterPath){
                return "https://via.placeholder.com/w300"
            } 
            return "https://image.tmdb.org/t/p/w400/" + posterPath
        },
        calculateAge(birthday) {
            const birthDate = new Date(birthday);
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const month = today.getMonth() - birthDate.getMonth();
            if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        },
    }
}
</script>
<style lang="">
    
</style>
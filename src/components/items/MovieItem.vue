<template lang="">
    <div>
        <router-link :to="`/movie/${movie.id}`">
            <img :src="posterPath" class="hover:opacity-75 transition easy-in-out duration-200">
        </router-link>
        <h3 class="font-semibold text-lg">{{movie.title}}</h3>
        <div>
            <i class="fas fa-star text-yellow-500 w-4"></i>
            <span class="ml-2">{{movie.vote_average * 10}}% | {{movie.release_date}} </span><br/>
        </div>
        <span class="text-sm text-gray-400">
            <span :key="genre" v-for="(genre, index) in movie.genre_ids">{{genreTypeName(genre, index)}}</span>
        </span>
    </div>
</template>
<script>
export default {
    props: {
        movie: {
            required: true
        },
        genres: {
            required: true
        }
    },
    computed: {
        posterPath() {
            return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path;
        }
    },
    methods: {
        genreTypeName(genreId, index) {

            for (const item of this.genres) {
                if (item.id == genreId) {
                    if (this.movie.genre_ids.length - 1 == index){
                        return item.name
                    } else {
                        return item.name + ", "
                    }      
                }
            }
        }
    }
}
</script>
<style lang="">

</style>
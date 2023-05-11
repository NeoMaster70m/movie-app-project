<template lang="">
    <div class="my-5 mx-auto flex relative">
        <input type="text" class="rounded-full bg-gray-600 px-7 w-50 h-10 mr-3 focus: outline-none focus: outline-shawod"
        placeholder="Search Movie!" @input="debounceSearch" v-model="searchTerm">
        <div class="absolute top-0">
            <i class="fas fa-search text-gray-400 mt-3 ml-2"></i>
        </div>
        <div  class="absolute mt-12 rounded bg-gray-600 w-60">
            <ul v-if="searchResult.length != 0" class="mt-3">
                <li :key="index" v-for="(movie, index) in searchResult" class="flex items-center border-b border-gray-500 p-1">
                    <img class="w-10" :src="posterPath(movie.poster_path)" alt="">
                    <span class="ml-3">{{movie.title}}</span>
                </li>
            </ul>
            <ul class="px-3">
                <li v-if="noResultFound">No results found for "{{searchTerm}}"</li>
            </ul>
        </div>
        <img src="@/assets/images/avatar.jpg" alt="" class="h-10 rounded-full">
    </div> 
</template>
<script>
export default {
    data() {
        return {
            searchResult: [],
            noResultFound: false,
            searchTerm: "",
        }     
    },
    methods: {
        debounceSearch(event) {
            clearTimeout(this.debounce)
            this.debounce = setTimeout(() => {
                if (event.target.value.length > 2) {
                    this.fetchSearch(event.target.value)
                }    
            }, 600)
        },
        async fetchSearch(term) {
            try {
                const response = await this.$http.get("/search/movie?query=" + term);
                this.searchResult = response.data.results;
                this.noResultFound = response.data.results ? true: false;
            } catch (error) {
                console.log(error)
            }
        },
        posterPath(poster_path) {
            if (poster_path) {
                return "https://image.tmdb.org/t/p/w500/" + poster_path;
            }else {
                return "https://via.placeholder.com/50x75";
            }
        },
    }
}
</script>
<style lang="">
    
</style>
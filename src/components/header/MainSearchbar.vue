<template lang="">
    <div class="my-5 mx-auto flex relative">
        <input 
        ref="searchBox" 
        type="text" 
        class="rounded-full bg-gray-600 px-7 w-50 h-10 mr-3 focus: outline-none focus: outline-shawod"
        placeholder="Search Movie!" 
        @input="debounceSearch" 
        v-model="searchTerm"
        @focus="handleFocus"
        >
        <div class="absolute top-0">
            <i class="fas fa-search text-gray-400 mt-3 ml-2"></i>
        </div>
        <div  class="absolute mt-12 rounded bg-gray-600 w-60 z-50">
            <ul v-if="showSearchResult" class="mt-3">
                <li :key="index" v-for="(movie, index) in searchResult" >
                    <router-link 
                    class="flex items-center border-b border-gray-500 p-1" 
                    :to="`/movie/${movie.id}`" 
                    @click.native="showSearchResult = false"
                    >
                        <img class="w-10" :src="posterPath(movie.poster_path)" alt="">
                        <span class="ml-3">{{movie.title}}</span>
                    </router-link>
                </li>
            </ul>
            <ul class="px-3" v-else>
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
            searchTerm: "",
            showSearchResult: false
        }     
    },
    mounted() {
        this.keyboardEvents();
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
                this.showSearchResult = response.data.results ? true: false;
            } catch (error) {
                console.log(error)
            }
        },
        handleFocus() {
            if (this.searchTerm != "") {
                this.showSearchResult = true
            }
        },
        keyboardEvents() {
            let windowObj = this

            window.addEventListener("click", (e) => {
                if (!this.$el.contains(e.target)) {
                    this.showSearchResult = false
                }
            });
            window.addEventListener("keypress", (e) => {
                if (e.keyCode == "47") {
                    e.preventDefault();
                    windowObj.$refs.searchBox.focus();
                    
                }
            });
            window.addEventListener("keydown", (e) => {
                if (e.key == "Escape") {
                    this.showSearchResult = false
                }
            })
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
<template lang="">
    <div class="container mx-auto px-4 py-16">
        <h2 class="text-yellow-400 uppercase text-2xl font-roboto-semibold mb-2 text-center">
            Popular Actors
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <ActorItems :key="actor.id" v-for="actor in this.actors" :actor="actor" />
        </div>
        <div class="flex justify-center my-6">
            <button @click="prevPage" :disabled="currentPage === 1" class="mx-1 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-yellow-400 hover:text-black transition-colors ease-in-out duration-200">Prev</button>
            <button @click="nextPage" class="mx-1 px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-gray-500 hover:text-white transition-colors ease-in-out duration-200">Next</button>
        </div>
    </div>
</template>

<script>
import ActorItems from '../items/ActorItems.vue'
export default {
    components: {
        ActorItems
    },
    data() {
        return {
            actors: [],
            currentPage: 1,
        }
    },
    mounted() {
        this.fetchActors(this.currentPage)
    },
    methods: {
        async fetchActors(page) {
            try {
                const response = await this.$http.get("https://api.themoviedb.org/3/person/popular?page=" + page);
                this.actors = response.data.results
            } catch (error) {
                console.log(error)
            }
        },
        nextPage() {
            this.currentPage++;
            this.fetchActors(this.currentPage);
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.fetchActors(this.currentPage);
            }
        },
    }
}
</script>

<style>
button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
}
button {
    background-color: #ffc107;
    color: #000;
    border: none;
    padding: 10px 20px;
    margin: 10px 2px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    transition-duration: 0.4s;
    cursor: pointer;
    border-radius: 12px;
}
button:hover {
    background-color: #d4a307;
    color: white;
}
</style>

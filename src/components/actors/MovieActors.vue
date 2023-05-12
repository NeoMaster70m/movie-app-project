<template lang="">
    <div class="container mx-auto px-4 py-16">
        <h2 class="text-yellow-400 uppercase text-2xl font-roboto-semibold mb-4">
            Popular Actors
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <ActorItems :key="actor.id" v-for="actor in this.actors" :actor="actor" />
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
            actors: []
        }
    },
    mounted() {
        this.fetchActors(1)
    },
    methods: {
        async fetchActors(page) {
            try {
                const response = await this.$http.get("https://api.themoviedb.org/3/person/popular?page=" + page);
                this.actors = response.data.results
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>
<style lang="">
    
</style>
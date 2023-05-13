<template lang="">
    <div class="p-4">
        <router-link :to="`/actor/${this.actor.id}`" class="flex flex-col items-center text-center">
            <img :src="profileImage" alt="" class="w-48 h-48 object-cover rounded-full shadow-md">
            <h3 class="mt-4 text-lg font-semibold">{{actor.name}}</h3>
            <p class="mt-2 text-sm text-gray-400">{{knownFor}}</p>
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        actor: {
            required: true
        }
    },
    computed: {
        profileImage() {
            return ("https://image.tmdb.org/t/p/w235_and_h235_face/" + this.actor.profile_path);
        },
        knownFor() {
            if (this.actor.known_for && this.actor.known_for.length > 0) {
                return this.actor.known_for[0].title;
            }
            return '';
        }
    }
}
</script>

<style lang="">
    
</style>



<template lang="">
  <div class="container mx-auto">
    <MovieBanner />
    <PopularMovies />
  </div>
</template>
<script>
import PopularMovies from "./PopularMovies.vue"
import MovieBanner from "./MovieBanner.vue"
export default {
  components: {
    PopularMovies,
    MovieBanner
  },
};
</script>
<style lang="">
  
</style>

<template lang="">
  <div class="container mx-auto">
    <MovieBanner />
    <PopularMovies />
    <UpcomingMovies />
  </div>
</template>
<script>
import PopularMovies from "./PopularMovies.vue"
import MovieBanner from "./MovieBanner.vue"
import UpcomingMovies from "./UpcomingMovies.vue"
export default {
  components: {
    PopularMovies,
    MovieBanner,
    UpcomingMovies
  },
};
</script>
<style lang="">
  
</style>

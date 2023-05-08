<template lang="">
  <div class="container mx-auto">
    <div class="flex justify-between border-b border-gray-500">
      <MainNavbar />
      <MainSearchbar />
    </div>
    <PopularMovies />
  </div>
</template>
<script>
import MainNavbar from "./header/MainNavbar.vue"
import MainSearchbar from "./header/MainSearchbar.vue"
import PopularMovies from "./PopularMovies.vue"
export default {
  components: {
    MainNavbar,
    MainSearchbar,
    PopularMovies,
  },
};
</script>
<style lang="">
  
</style>

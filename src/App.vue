<template>
  <div class="bg-black text-white" id="app">
    <div class="flex justify-between border-b border-gray-500">
      <MainNavbar />
      <MainSearchbar />
    </div>
    <router-view />
  </div>
</template>

<script>
import MainNavbar from "./components/header/MainNavbar.vue"
import MainSearchbar from "./components/header/MainSearchbar.vue"

export default {
  name: "App",
  components: {
    MainNavbar,
    MainSearchbar,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Nunito:wght@200;300;400;500;600;700;800;900;1000&display=swap');
@import url('https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic');
</style>

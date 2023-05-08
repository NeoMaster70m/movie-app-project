<template>
  <div class="bg-gray-900 text-white" id="app">
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

</style>

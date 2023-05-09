<template lang="">
    <div class="my-5 mx-auto flex relative">
        <input type="text" class="rounded-full bg-gray-600 px-7 w-50 h-10 mr-3 focus: outline-none focus: outline-shawod"
        placeholder="Search Movie!">
        <div class="absolute top-0">
            <i class="fas fa-search text-gray-400 mt-3 ml-2"></i>
        </div>
        <div v-if="false" class="absolute mt-12 ml-2 rounded bg-gray-600 w-60">
            <ul class="mt-3">
                <li class="flex items-center border-b border-gray-500 p-1">
                    <img class="w-10" src="@/assets/images/batman.jpg" alt="">
                    <span class="ml-3">Batman</span>
                </li>
            </ul>
        </div>
        <img src="@/assets/images/avatar.jpg" alt="" class="h-10 rounded-full">
    </div> 
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>
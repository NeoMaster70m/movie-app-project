<template lang="">
    <div>
        <div class="container mx-auto flex mt-20 border-b border-gray-600 pb-2">
            <img src="@/assets/images/batman.jpg" alt="" class="w-64">
            <div class="ml-24">
                <h1 class="text-4xl font-semibold">Batman</h1>
                <span class="text-sm text-gray-400">
                <i class="fas fa-star text-yellow-500 w-4 mr-1"></i>82% | 2022-10-01 Crime, Thriller, Drama</span>
                <P class="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante eget velit aliquet varius. Fusce sed purus porttitor, viverra massa eu, ultricies ipsum. Sed consectetur, nunc non hendrerit venenatis, odio sapien eleifend lorem, sit amet efficitur lectus enim vel odio. Ut tempus ante vel mauris consectetur faucibus. Nam gravida interdum tortor, eu efficitur velit elementum eget. Fusce laoreet turpis non quam tincidunt bibendum. Curabitur a vestibulum orci, eu ullamcorper neque. Aliquam quis odio ac massa congue varius ac id erat. Cras vehicula ipsum vel magna finibus, eget viverra velit luctus.</P>
                <div class="mt-5">
                    <span class="font-semibold">Featured Cast</span>
                    <div class="flex">
                        <div class="flex flex-col mt-5 mr-5">
                            <span>Scott Silver </span>
                            <span class="text-gray-400">Writter</span>
                        </div>
                        <div class="flex flex-col mt-5">
                            <span>Bruce Berman </span>
                            <span class="text-gray-400">Executive Producer</span>
                        </div>
                    </div>   
                </div>
                <div class="mt-10">
                    <a href="" class="rounded bg-red-600 px-5 py-3 mr-5"><i class="fab fa-youtube text-lg mr-2"></i>Play Trailer</a>
                    <a href="" class="rounded bg-yellow-500 px-5 py-3 text-black"><i class="fas fa-heart text-lg mr-2"></i>Favourite</a>
                </div>
            </div>
        </div>  
        <MovieCast />
    </div>
</template>
<script>
import MovieCast from './MovieCast.vue'
export default {
    components:{
        MovieCast
    }
}
</script>
<style lang="">
    
</style>
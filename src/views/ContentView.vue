<script setup>
import {getRegions} from '../composables/fetch.js'
import { onMounted, ref, computed } from "vue";


const regions = ref([])

onMounted(async () => {
    regions.value = await getRegions()
     console.log(regions.value)
})

//ต้องมี 


</script>
 
<template>
 <!-- <div class="container mx-auto bg-gray-200 rounded-xl shadow border px-10 m-10 w-full"> -->
    <div>
        <img src="../../public/bgContent.jpg" alt="BG"  class="w-full h-[520px]">
    </div>

    <div class="flex justify-center pb-8 pt-32 px-0 text-4xl "> Explore Your Destination</div>
    <div class="flex flex-wrap justify-center">
        <botton v-for="region in regions" class="rounded-full bg-white py-2 px-4 flex justify-center border border-gold  mx-2"  >
            {{ region.regionName }}
        </botton>
       
    </div>
    <!-- ต้องส่งตัวแปรregionNameไปให้Province Item -->
    <ProvinceItem></ProvinceItem> 
    <RouterLink :to="{name: 'Hotel'}">
        <button class="bg-gold hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6">
        go to hotel
    </button>
    </RouterLink>
 <!-- </div> -->
</template>
 
<style scoped>

</style>
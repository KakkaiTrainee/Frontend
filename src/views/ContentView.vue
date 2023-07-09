<script setup>
import { getRegions, getProvinces, getProvinceImageById } from '../composables/fetch.js'
import { onMounted, ref, computed } from "vue";
import ProvinceItem from "../components/ProvinceItem.vue";
import Navbar from "../components/Navbar.vue";
import HotelItem from '../components/HotelItem.vue';
import Tub from "../components/Tub.vue";

const regions = ref([])
const provinces = ref({})
const imageProvince = ref('')
const currentRegionId = ref('1')
const searchQuery = ref('')


//fetch
onMounted(async () => {
    regions.value = await getRegions()
    console.log(regions.value)
})
onMounted(async () => {
    provinces.value = await getProvinces()
    console.log(provinces.value)
})
onMounted(async () => {
    imageProvince.value = await getProvinceImageById(1)
    console.log(imageProvince.value)
})

//region
const currentRegion = (id) => {
    currentRegionId.value = id
    console.log(currentRegionId.value)
}

const isChoose = computed(()=>{
    return 
})

//search




</script>
 
<template>
    <!-- <div class="container mx-auto bg-gray-200 rounded-xl shadow border px-10 m-10 w-full"> -->
    <Navbar></Navbar>
    <div>
        <img src="../../public/bgContent.jpg" alt="BG" class="w-full h-[520px]">
    </div>
    <div class="flex items-center justify-center ">
        <div class="flex">
            <input v-model="searchQuery" type="text" placeholder="Enter Your Destination..."
                class=" px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 " />
        </div>
    </div>

    <div class="flex justify-center pb-8 pt-32 px-0 text-4xl "> Explore Your Destination</div>
    <div class="flex flex-wrap justify-center">
        <botton v-for="region in regions"  @click="currentRegion(region.id)" :class="isChoose ? 'bg-gold' : 'bg-white' " 
            class="rounded-full bg-white py-2 px-4 flex justify-center border border-gold  mx-2">
            {{ region.regionName }}
        </botton>
    </div>
<div class="my-10">
    <!-- ต้องส่งตัวแปรregionIdไปให้Province Item -->
    <ProvinceItem :provinces="provinces" :imageProvince="imageProvince"></ProvinceItem>
</div>
    <div class="flex justify-center pb-8 pt-32 px-0 text-4xl ">Type of Bathtub</div>
    <Tub></Tub>

    <!-- <RouterLink :to="{ name: 'Hotel' }">
        <button class="bg-gold hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6">
            go to hotel
        </button>
    </RouterLink> -->
    <!-- </div> -->
    <div class="flex justify-center pb-8 pt-32 px-0 text-4xl ">Explore More Hotel</div>

    <HotelItem></HotelItem>
</template>
 
<style scoped></style>
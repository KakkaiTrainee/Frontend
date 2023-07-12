<script setup>
import { getRegions, getProvinces, getProvinceImageById,getHotels,getTubs } from '../composables/fetch.js'
import { onMounted, ref, computed } from "vue";
import ProvinceItem from "../components/ProvinceItem.vue";
import Navbar from "../components/Navbar.vue";
import HotelItem from '../components/HotelItem.vue';
import Tub from "../components/Tub.vue";
import Region from '../components/Region.vue';

const regions = ref([])
const provinces = ref([])
const hotels = ref([])
const tubs = ref([])
// const imageProvince = ref('')
const searchQuery = ref('')


const selectedRegionId = ref(4)
const regionId=ref(4)


//region
const currentRegion = (id) => {
    selectedRegionId.value = id
    console.log(selectedRegionId.value)
}

const isRegionSelected = (regionId) => {
    if (selectedRegionId.value === regionId)
        return true
}

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
    hotels.value = await getHotels()
    console.log(hotels.value)
})
onMounted(async () => {
    tubs.value = await getTubs()
    console.log(tubs.value)
})

const filterProvince = computed(() => {
   return provinces.value.filter((province) => province.provinceRegion.id === selectedRegionId.value)
    })

const filterPopular = computed(() => {
  return hotels.value.filter(hotel => hotel.hotelProvince.provinceTravel === 'Y')
})

//search




</script>
 
<template>
    <!-- <div class="container mx-auto bg-gray-200 rounded-xl shadow border px-10 m-10 w-full"> -->
    <Navbar></Navbar>
    <div>
        <!-- <div class="w-full text-white flex justify-center mt-16 pb-8 pt-4 px-0 text-5xl absolute "> Hotel Hotub?</div> -->
        <img src="../../public/bgContent.jpg" alt="BG" class="w-full h-[520px]">
    </div>
    <div class="flex items-center justify-center ">
        <div class="flex">
            <input v-model="searchQuery" type="text" placeholder="Enter Your Destination..."
                class=" px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 " />
        </div>
    </div>

    <div id="destination" class=" flex justify-center pb-8 pt-32 px-0 text-4xl "> Explore Your Destination</div>
    <div class="flex flex-wrap justify-center">
        <button v-for="region in regions" :key="region.id" :value="region.id" @click="currentRegion(region.id)" 
            :class="{ 'bg-gold text-white': isRegionSelected(region.id), 'bg-white': !isRegionSelected(region.id) }"
            class="rounded-full py-2 px-4 flex justify-center border border-gold mx-2">
            {{ region.regionName }}
        </button>
    </div>
    <div class="my-10">
    <!-- ต้องส่งตัวแปรregionIdไปให้Province Item -->
    <ProvinceItem :provinces="filterProvince"></ProvinceItem>
</div>
    <div id="tub" class="flex justify-center pb-8 pt-32 px-0 text-4xl ">Type of Bathtub</div>
    <Tub :tubs="tubs"></Tub>

    <!-- <RouterLink :to="{ name: 'Hotel' }">
        <button class="bg-gold hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6">
            go to hotel
        </button>
    </RouterLink> -->
    <!-- </div> -->
    <div id="hotel"  class="flex justify-center pb-8 pt-32 px-0 text-4xl ">Explore More Hotel</div>

    <!-- ต้องส่งไอดีที่ hotels.hotelProvince.provinceTravel เป็น  Y -->
    <HotelItem :hotels="filterPopular"></HotelItem>
</template>
 
<style scoped></style>
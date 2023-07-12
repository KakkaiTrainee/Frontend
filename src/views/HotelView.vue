<script setup>
import { getHotels } from '../composables/fetch.js'
import HotelItem from '../components/HotelItem.vue'
import { onMounted, ref, computed } from "vue"
import { useRoute } from 'vue-router'

const hotels = ref([])
const route = useRoute()
const Provinceid = route.params.id
console.log(Provinceid)
onMounted(async () => {
    hotels.value = await getHotels()
    console.log(hotels.value)
})
//ทำfilter
const filterTub = computed(() => {
   return provinces.value.filter((province) => province.provinceRegion.id === selectedRegionId.value)
    })

const filterProvince = computed(() => {
   return provinces.value.filter((province) => province.provinceRegion.id === selectedRegionId.value)
    })
    //ทำเช็คว่าใครกด
</script>
 
<template>
<div>
  <div class="w-full text-white flex justify-center mt-16 pb-8 pt-4 px-0 text-5xl absolute "> Search for Hotel</div>
        <img src="../../public/bgContent.jpg" alt="BG" class="w-full h-[350px]">
    </div>
    <div class="flex  w-full absolute items-center justify-center  ">
            <input v-model="searchQuery"  type="text" placeholder="Enter Your Destination..."
               class=" px-4 py-2 border flex justify-center  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 " />
    </div>

    <div class=" flex justify-center pb-8 pt-32 px-0 text-4xl "> Enjoy your time with Hotel</div>
<div class="my-10">
  <HotelItem :hotels="hotels"></HotelItem>
</div>
    
</template>
 
<style scoped>

</style>
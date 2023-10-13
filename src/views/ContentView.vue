<script setup>
import { getRegions, getProvinces, getHotelById,getHotels,getTubs } from '../composables/fetch.js'
import { onMounted, ref, computed } from "vue";
import ProvinceItem from "../components/ProvinceItem.vue";
import Navbar from "../components/Navbar.vue";
import HotelItem from '../components/HotelItem.vue';
import { useRouter } from 'vue-router';
import Tub from '../components/Tub.vue';

const regions = ref([])
const provinces = ref([])
const hotels = ref([])
const tubs = ref([])
// const imageProvince = ref('')
const router = useRouter();
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

const filterPopularHotel = computed(() => {
  return hotels.value.filter(hotel => hotel.hotelProvince.provinceTravel === 'Y')
})

//search
const searchQuery = ref('')
const who = "single"
const showResults = ref(false);

//search

const filteredResults = computed(() => {
  return hotels.value.filter((result) =>
    result.hotelName.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const search = () => {
  showResults.value = searchQuery.value.length > 0;
};

const selectResult = (result) => {
  console.log('Selected Result:', result.hotelName);
  // ดำเนินการตามต้องการเมื่อผลลัพธ์ถูกเลือก
};


</script>
 
<template>
    <!-- <div class="container mx-auto bg-gray-200 rounded-xl shadow border px-10 m-10 w-full"> -->
    <Navbar></Navbar>
<div  class="header">
    <div class="text-white text-8xl font-bold mb-4">Hotel</div>
    <div class="text-white text-8xl font-bold mb-4">Hotub</div>
    <div class="text-white text-2xl font-bold mb-4">Explore Your Hotel with your tub mood</div>
</div>
    <div>
        <!-- <div class="w-full text-white flex justify-center mt-16 pb-8 pt-4 px-0 text-5xl absolute "> Hotel Hotub?</div> -->
        <img src="../../public/tub-homepage.jpg" alt="BG" class="w-full h-[500px] object-cover object-center">
    </div>
    <div class="flex  w-full absolute items-center justify-center  ">


      <div class="absolute">
        <input
      v-model="searchQuery"
      @input="search"
      type="text"
      placeholder="Enter your Destination"
      class="w-full py-10 pl-48 pr-20 ml-30 mr-60 text-white bg-gold border border-gold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gold"
    />
    <ul
      v-if="showResults && filteredResults.length"
      class="absolute z-10 w-full p-2 mt-1 bg-white border border-gray-300 rounded-md shadow-lg"
    >
    
      <li
        v-for="result in filteredResults"
        :key="result.id"
        class="py-1 px-2 cursor-pointer hover:bg-gray-100"
        @click="selectResult(result)"
      >
      <RouterLink :to="{ name: 'HotelView', params: { id: result.id }, query: { who: who }   }">      
        {{ result.hotelName }}
      </RouterLink>
      </li>
    </ul>
  </div>



</div>
  <!-- <div class="relative">
    <input
      v-model="searchQuery"
      @input="search"
      type="text"
      placeholder="Search"
      class="w-full py-2 pl-10 pr-3 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <ul
      v-if="showResults && filteredResults.length"
      class="absolute z-10 w-full p-2 mt-1 bg-white border border-gray-300 rounded-md shadow-lg"
    >
    
      <li
        v-for="result in filteredResults"
        :key="result.id"
        class="py-1 px-2 cursor-pointer hover:bg-gray-100"
        @click="selectResult(result)"
      >
      <RouterLink :to="{ name: 'HotelView', params: { id: result.id }, query: { who: who }   }">      
        {{ result.hotelName }}
      </RouterLink>
      </li>
    </ul>
  </div> -->

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

   
    <!-- </div> -->
    <div id="hotel"  class="flex justify-center pb-8 pt-32 px-0 text-4xl ">Explore More Hotel</div>

    <!-- ต้องส่งไอดีที่ hotels.hotelProvince.provinceTravel เป็น  Y -->
    <HotelItem :hotels="filterPopularHotel" ></HotelItem>
</template>
 
<style scoped>
.header {
  position: absolute;
  top: 35%;
  left: 25%;
  transform: translate(-50%, -50%);
  text-align: left;
}
input {
  font-size: 1.2rem;
  opacity: 0.9;
  width: 100%; /* เพิ่มความกว้างของ Input เต็มหน้าจอ */
  max-width: 800px; /* กำหนดความกว้างสูงสุดของ Input */
}

/* ส่วนของ Placeholder ให้โปร่งใสมากกว่าข้อความที่ใส่แล้ว */
input::placeholder {
  color: rgba(255, 255, 255, 1);
  font-size: 1.5rem;
}
</style>
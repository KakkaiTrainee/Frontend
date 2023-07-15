<script setup>
import { getHotels } from '../composables/fetch.js'
import HotelItem from '../components/HotelItem.vue'
import { onMounted, ref, computed,onUpdated  } from "vue"
import { useRoute } from 'vue-router'
import Filter from '../components/Filter.vue'
import SearchBar from '../components/SearchBar.vue';

// import { defineProps } from 'vue'

const hotels = ref([])
const route = useRoute()
const selectedId =route.params.id 
const whoPassed = route.query.who
const filterHotels = ref([])
const showResults = ref(false);
const searchQuery = ref('')

console.log(selectedId)
console.log(whoPassed)
onMounted(async () => {
    hotels.value = await getHotels()
    console.log(hotels.value)
})


// const filterProvince = computed (() => {
//   return  hotels.value.filter((hotel) => hotel.hotelProvince.id == selectedId)
// })

// // ทำfilter
// const filterTub = computed(() => {
//    return hotels.value.filter((hotel) =>hotel.hotelTub.id === selectedId)
//     })

//ฟิลเตอร์ว่า 
//ถ้า whoPassed เป็น case province ให้ทำfilterProvinceและให้ filterHotelเป็นfilterProvince
//ถ้า whoPassed เป็น case tub ให้ทำfilterTubและให้ filterHotelเป็นfilterTub
const filterHotel= computed (()=>{
  if(whoPassed=='province')
  return hotels.value.filter((hotel) => hotel.hotelProvince.id == selectedId)
  if(whoPassed=='tub')
  return hotels.value.filter((hotel) =>hotel.hotelTub.id == selectedId)
  if(whoPassed=='single')
  return hotels.value.filter((hotel) =>hotel.id == selectedId)
})

console.log(filterHotel.value)

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
    

<div >
  <div class="w-full text-white flex justify-center mt-16 pb-8 pt-4 px-0 text-5xl absolute "> Search for Hotel</div>
        <img src="../../public/bgContent.jpg" alt="BG" class="w-full h-[350px]">
    </div>
    <div class="flex  w-full absolute items-center justify-center  ">
      <!-- <form @submit="submitSearch">
    <div class="flex items-center justify-center">
      <div class="flex">
          <input placeholder="Enter Your Destination..." type="text" 
                            class="text-lg h-10 rounded-lg px-4 10 w-[14rem] sss:w-[17rem] ss:w-[20rem] sm:w-[20rem] md:w-[20rem] lg:w-[15rem] xl:w-[20rem] 2xl:w-[25rem] bg-[#eeeeee] cursor-pointer"
                            v-model.trim="searchQuery">
        <input type="submit" value="Search" class="ml-2 px-4 py-2 text-white bg-blue-500 rounded-md cursor-pointer" />

      </div>
      
<Filter :hotels="hotels"></Filter>

    </div>
  </form> -->
  <SearchBar :hotels="filterHotel" :provinces="provinces"></SearchBar>

  
    </div>

    <div class=" flex justify-center pb-8 pt-32 px-0 text-4xl "> Enjoy your time with Hotel</div>
<div class="my-10">
  <HotelItem :hotels="filterHotel"></HotelItem>
</div>
    
</template>
 
<style scoped>

</style>
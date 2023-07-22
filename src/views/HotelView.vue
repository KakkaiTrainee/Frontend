<script setup>
import { getHotels,getTubs } from '../composables/fetch.js'
import HotelItem from '../components/HotelItem.vue'
import { onMounted, ref, computed,onUpdated,watch,reactive  } from "vue"
import { useRoute } from 'vue-router'
import Filter from '../components/Filter.vue'
import SearchBar from '../components/SearchBar.vue';

// import { defineProps } from 'vue'

const hotels = ref([])
const tubs = ref([])
const route = useRoute()
const selectedId =route.params.id 
const whoPassed = route.query.who
const showResultss = ref([])
const showResults = ref(false);
const searchQuery = ref('')

console.log(selectedId)
console.log(whoPassed)
onMounted(async () => {
    hotels.value = await getHotels()
    console.log(hotels.value)
})
onMounted(async () => {
    tubs.value = await getTubs()
    console.log(tubs.value)
})

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
// watch([hotels, selectedId, whoPassed], () => {
//   filterHotels.value = filterHotel();
// });

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


const numberOfPeople = ref(1);

const tubFilter = ref('Any');

// ฟังก์ชันสำหรับเปลี่ยนค่า tubFilter เมื่อคลิกที่ปุ่ม
const setTubFilter = (tubName) => {
  tubFilter.value = tubName;
};


const handleChange = () => {
  console.log("จำนวนคนต่อห้องที่เลือก:", numberOfPeople.value);
};
const increaseNumberOfPeople = () => {
  if (numberOfPeople.value < 5) {
    numberOfPeople.value++;
  }
};

const decreaseNumberOfPeople = () => {
  if (numberOfPeople.value > 1) {
    numberOfPeople.value--;
  }
};
const showFilter = ref(false)
const minValue =ref(2500);
const maxValue = ref(7500);




//ปุ่มเปิด/ปิด/clear
const openFilter = () => {
  showFilter.value = true
}

const closeFilter = () => {
  showFilter.value = false;
}
const resetValues = () => {
  minValue.value = 2500
  maxValue.value = 7500
  numberOfPeople.value = 1
  tubFilter.value = 'Any'
  selectedFacilities.clear()
}


//facilities
const facilities = ref(['Parking', 'Wifi', 'Bathtub', 'Breakfast', 'Swimming Pool']);

const selectedFacilities = reactive(new Set());

// เมื่อคลิกที่ปุ่มแต่ละประเภทของ Facility ก็จะเพิ่มหรือลบรายการใน selectedFacilities
const toggleFacility = (facility) => {
  if (selectedFacilities.has(facility)) {
    selectedFacilities.delete(facility);
  } else {
    selectedFacilities.add(facility);
  }
};

//filter hotel
const filterHotelFromFilter = computed(() => {
  return props.hotels.filter((hotel) => {
    // กรองโรงแรมตามช่วงราคา
    const priceInRange = hotel.price >= minValue.value && hotel.price <= maxValue.value;

    // กรองโรงแรมตามจำนวนคนต่อห้อง
    const peopleInRange = hotel.personPerRoom >= numberOfPeople.value;

    // กรองโรงแรมตามค่าความสะอาด
    const tubFilterMatch = tubFilter.value === 'Any' || hotel.facilities.includes(tubFilter.value);

    // กรองโรงแรมตาม facilities ที่เลือก
    const facilitiesMatch = selectedFacilities.size === 0 || selectedFacilities.every(facility => hotel.facilities.includes(facility));

    // คืนค่า true หากโรงแรมตรงตามเงื่อนไขทั้งหมด
    return priceInRange && peopleInRange && tubFilterMatch && facilitiesMatch;
  });
});



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
  <button @click="openFilter" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
    Open Filter
  </button>

  <div v-show="showFilter" class="fixed inset-0 z-50 flex items-center justify-center ">
    <div class="w-full  max-w-md p-4 rounded-lg shadow-lg bg-white">

      <button @click="closeFilter" class=" mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
        Close Filter
      </button>
      <h2 class="text-xl font-bold mb-4">Filters</h2>



      <div class="wrapper">
        <h2 class="text-xl font-bold mb-4">Price Range</h2>
        <div class="price-input">
          <div class="field">
            <span>Min</span>
            <input type="number" v-model="minValue" class="input-min">
          </div>
          <div class="separator">-</div>
          <div class="field">
            <span>Max</span>
            <input type="number" v-model="maxValue" class="input-max" >
          </div>
        </div>
        <!-- <div class="slider">
          <div class="progress"></div>
        </div>
        
        <div class="range-input">
          <input type="range" class="range-min" min="0" max="10000" >
          <input type="range" class="range-max" min="0" max="10000" >
        </div> -->
      </div>

      <div>
    <h2 class="text-xl font-bold mb-4">Person per room</h2>
    <div class="flex items-center">
      <input
        type="number"
        v-model="numberOfPeople"
        min="1"
        max="5"
        @input="handleChange"
        class="w-16 text-2xl text-center bg-gray-300 py-2 px-4 rounded-lg mr-2"
      />
      <div class="flex items-center">
        <button @click="increaseNumberOfPeople" class="w-8 h-8 bg-gray-300 rounded-lg">+</button>
        <button @click="decreaseNumberOfPeople" class="w-8 h-8 bg-gray-300 rounded-lg">-</button>
      </div>
    </div>
  </div>

      <div>
        <div>
  <h2 class="text-xl font-bold mb-4">Type of Bathtub</h2>
  <!-- สร้างปุ่ม "Any" ที่เมื่อคลิกจะเปลี่ยนค่า tubFilter เป็น "Any" -->
  <button @click="setTubFilter('Any')" :class="{ 'active': tubFilter === 'Any' }" class="px-4 py-2 border rounded-lg mr-2">Any</button>

  <!-- สร้างปุ่มสำหรับแต่ละประเภทของ Bathtub และทำการเช็คเมื่อ tubName ตรงกับ tubFilter จะเพิ่ม class active -->
  <button v-for="tub in tubs" :key="tub.id" @click="setTubFilter(tub.tubName)" :class="{ 'active': tub.tubName === tubFilter }" class="px-4 py-2 border rounded-lg mr-2">{{ tub.tubName }}</button>
</div>

<div>
  <h2 class="text-xl font-bold mb-4">Facilities</h2>
  <div class="flex flex-wrap">
    <!-- สร้างปุ่มสำหรับแต่ละ Facilities และทำการเช็คว่าอยู่ในรายการที่เลือกหรือไม่ ถ้าใช่ก็ให้เพิ่ม class "active" -->
    <button
      v-for="facility in facilities"
      :key="facility"
      @click="toggleFacility(facility)"
      :class="{ 'active': selectedFacilities.has(facility) }"
      class="px-4 py-2 border rounded-lg mr-2 mb-2"
    >
      {{ facility }}
    </button>
  </div>
</div>


        <div>
          <button @click="resetValues" class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Clear All</button>          
          <botton @click="showHotel"  class="rounded-full py-2 px-4 flex justify-center border border-gold mx-2">Show</botton>

        </div>
      </div>

    </div>
  </div>



  <SearchBar :hotels="filterHotel" :provinces="provinces"></SearchBar>

  
    </div>

    <div class=" flex justify-center pb-8 pt-32 px-0 text-4xl "> Enjoy your time with Hotel</div>
<div class="my-10">
  <HotelItem :hotels="filterHotel"></HotelItem>
</div>
    
</template>
 
<style scoped>
.wrapper {
  width: 100%;
  max-width: 450px; /* ความกว้างสูงสุดที่ต้องการ */
  margin: 0 auto; /* จัดกึ่งกลาง */
}
.relative {
  width: 100%;
  height: 20px;
}

.price-input {
  width: 100%;
  display: flex;
  margin: 30px 35px;
}

.price-input .field {
  height: 45px;
  width: 100%;
  display: flex;
  align-items: center;
}

.field input {
  width: 100%;
  height: 100%;
  outline: none;
  font-size: 19px;
  text-align: center;
  margin-left: 12px;
  border-radius: 5px;
  border: 1px solid #999;
}

.price-input .separatetor{
  width: 130px;
  display: flex;
  font-size: 19px;
  align-items: center;
  justify-content: center;
}
.slider {
  height: 5px;
  border-radius: 5px;
  background: #cdcdcd;
  position: relative;
}

.slider .progess {
  height: 5px;
  left: 25%;
  right: 25%;
  position: absolute;
  border-radius: 5px;
  background: #2b2b2b;
}
  .range-input{
    position: relative;
  }

  .range-input input{
    position: absolute;
    top: -5px;
    height: 5px;
    width: 100%;
    background:none;
    -webkit-appearance: none;
  }
  .bg-gray-300 {
  background-color: #ccc;
}

/* ทำให้ปุ่มมีขนาดเล็กขึ้น */
.active {
  background-color: blue; /* ตั้งค่าสีพื้นหลังปุ่มที่มีสถานะ active ตรงนี้ */
}
</style>
<script setup>
import { onMounted, ref, computed } from "vue";

const searchQuery = ref('')
const who = "single"
const showResults = ref(false);
const props = defineProps({
    hotels: Object,
    provinces:Object
})
//search

const filteredResults = computed(() => {
  return props.hotels.filter((result) =>
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
<div class="relative">
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
  </div>
</template>
 
<style scoped>

</style>
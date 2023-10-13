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
<div class="absolute">
    <input
      v-model="searchQuery"
      @input="search"
      type="text"
      placeholder="Enter your Destination"
      class="w-full py-4 pl-12 pr-3  text-white bg-gold border border-gold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gold"
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
input::placeholder {
  opacity: 0.6;
}
</style>
<script setup>
//ไว้ตอนหน้าSearch จะเชื่อมกับไอคอน
import { onMounted, ref, computed,onUpdated  } from "vue"
const props = defineProps({
    hotels: Object
})


const showFilter = ref(false)

    const openFilter = () => {
      showFilter.value = true
    }

    const closeFilter = () => {
      showFilter.value = false;
    }
    
console.log(showFilter.value)
</script>
 
<template>
 
    <button @click="openFilter" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      Open Filter
    </button>
    
    <div v-show="showFilter" class="fixed inset-0 z-50 flex items-center justify-center">
      <div class="bg-white w-full max-w-md p-4 rounded-lg shadow-lg">
        <h2 class="text-xl font-bold mb-4">Filter</h2>
        <p>คือทำไมเอ็งถึงขึ้นแปปเดียววะ งง!!!!!!</p>
        <button @click="closeFilter" class="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
          Close Filter
        </button>
      </div>
    </div>
  
</template>
 
<style scoped>

</style>
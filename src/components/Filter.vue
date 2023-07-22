<script setup>
//ไว้ตอนหน้าSearch จะเชื่อมกับไอคอน
import { onMounted, ref, computed, onUpdated, reactive, onUnmounted } from "vue"
const props = defineProps({
  hotels: Object,
  tubs: Object
})
const isDragging = false
const activeHandle = 0
const initialX = 0
const slider = ref(null)
const state = reactive({
  minValue: 0, // ค่าต่ำสุด
  maxValue: 100, // ค่าสูงสุด
  handle1: 20, // ค่าเริ่มต้นของจุดที่เลื่อนได้ 1
  handle2: 80 // ค่าเริ่มต้นของจุดที่เลื่อนได้ 2
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

  <!-- <div v-show="showFilter" class="fixed inset-0 z-50 flex items-center justify-center"> -->
  <div class="fixed inset-0 z-50 flex items-center justify-center ">
    <div class="bg-white w-full max-w-md p-4 rounded-lg shadow-lg">
      <button @click="closeFilter" class=" mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
        Close Filter
      </button>
      <h2 class="text-xl font-bold mb-4">Filters</h2>
      <div>
        <h2 class="text-xl font-bold mb-4">Person per room</h2>
        <div class="">
          เป็นกล่องๆ
        </div>
      </div>

      <div>
        <h2 class="text-xl font-bold mb-4">Type of Bathtub</h2>
        <div v-for="tub in tubs">
          {{ tub.tubName }}
        </div>
        <div>
          <h2 class="text-xl font-bold mb-4">Facilities</h2>
          <ul>
            <li>Parking</li>
            <li>Wifi</li>
            <li>Bathtub</li>
            <li>Breakfast</li>
            <li>Swimming Pool</li>
          </ul>
        </div>
        <div>
          <botton class="rounded-full py-2 px-4 flex justify-center border border-gold mx-2">Clear all</botton>
          <botton class="rounded-full py-2 px-4 flex justify-center border border-gold mx-2">Show</botton>

        </div>
      </div>

      <p>คือทำไมเอ็งถึงขึ้นแปปเดียววะ งง!!!!!!</p>

    </div>
  </div>
</template>
 
<style scoped>
.relative {
  width: 100%;
  height: 20px;
}
</style>
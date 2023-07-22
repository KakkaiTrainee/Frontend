<script setup>
import { onMounted, ref, computed } from "vue";
import { RouterLink } from 'vue-router'

const selectedProvinceId = ref('')
const who = "province"
const props = defineProps({
    provinces: Object,
})
const currentProvince= (id) => {
  selectedProvinceId.value=id
    console.log(selectedProvinceId.value)
}

    // selectedRegionId
    // vue3 composition api จะเอาตัวแปรออกจากvueยังไง คือผมอยากใช้ตัวแปรจากอีกcomponentนึงอ่ะ

    
</script>
 
<template>
  <div class="flex-row overflow-x-auto p-4" >
  <div v-for="province in provinces" @click=currentProvince(province.id)  class="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-2 my-2"  >
    <div class="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
      <RouterLink :to="{ name: 'HotelView', params: { id: province.id }, query: { who: who }   }">
        <div class="relative">
        <img class="rounded-t-lg w-full" :src="`http://localhost:8081/api/provinces/images/${province.id}`" alt="" />
 
            <h5 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold  text-white">{{ province.provinceName }}</h5>
 
        <!-- <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">ลองLoopข้อมูลจังหวัดแบบcard</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">ID = {{ province.id }} </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">RegionId = {{ province.provinceRegion.id }}</p> -->
        <!-- <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a> -->
    
    </div>
    
  </RouterLink>

</div>
  </div>
</div>
</template>
<style scoped>
.flex-row {
  display: flex;
}

.overflow-x-auto::-webkit-scrollbar {
  height: 0.5rem;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0.25rem;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.1);
}

.max-w-xs {
  flex: 0 0 12rem;
}

.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
  
</style>
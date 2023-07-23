<script setup>
import { onMounted, ref, computed } from "vue";
import { RouterLink } from 'vue-router'

const selectedProvinceId = ref('')
const who = "province"
const props = defineProps({
  provinces: Object,
})
const currentProvince = (id) => {
  selectedProvinceId.value = id
  console.log(selectedProvinceId.value)
}

    // selectedRegionId
    // vue3 composition api จะเอาตัวแปรออกจากvueยังไง คือผมอยากใช้ตัวแปรจากอีกcomponentนึงอ่ะ


</script>
 
<template>
   <div class="flex-row overflow-x-auto p-4 mx-20">
    <div
      v-for="province in provinces"
      @mouseenter="handleCardEnter"
      @mouseleave="handleCardLeave"
      :key="province.id"
      class="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-2 my-2"
    >
      <div
        class="max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <RouterLink
          :to="{ name: 'HotelView', params: { id: province.id }, query: { who: who } }"
        >
          <div class="relative">
            
            <img
              ref="cardImage"
              class="rounded-t-lg w-full h-[150px] object-cover"
              :src="`http://localhost:8081/api/provinces/images/${province.id}`"
              alt=""
            />
            

            <h5
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-white"
            >
              {{ province.provinceName }}
            </h5>
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

/* ใส่ transition เมื่อเมาส์อยู่บนการ์ด */
.max-w-xs:hover {
  transform: translateY(-8px);
  transition: transform 0.3s ease;
}

/* ตั้งค่ารูปแบบการ์ดเริ่มต้น */
.max-w-xs {
  transition: transform 0.3s ease;
}
</style>
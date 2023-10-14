<script setup>
const props = defineProps({
    tubs: Object
})
const who = "tub"

</script>
 
<template>
    <div class="flex-row overflow-x-auto p-4 mx-20">
        <div v-for="tub in tubs"
            class="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-2 mr-4">
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                <RouterLink :to="{ name: 'HotelView', params: { id: tub.id }, query: { who: who } }">
                   <div class="relative">
                        <img class="rounded-t-lg w-full h-[300px] object-cover" :src="`http://chanathipgeist.ddns.net:8088/api/tubs/images/${tub.id}`" alt="" />
             
                        <h5 class="mb-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white px-5 pt-8"> {{ tub.tubName }} </h5>
                    </div>
                        <!-- <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">ลองLoopข้อมูลจังหวัดแบบcard</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">ID = {{ tub.id }} </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">haha</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a> -->
                </RouterLink>
  
                <!-- <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-slate-600 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50"> -->
              
         


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

.max-w-lg {
  flex: 0 0 20rem;
}

.aspect-w-1 {
  width: 100%;
}

.aspect-h-1 {
  height: 0;
  padding-bottom: 100%;
}

.rounded-t-lg {
  border-radius: 0.5rem 0.5rem 0 0;
}

.absolute {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  width: 100%;
}

.p-4 {
  padding: 1rem;
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
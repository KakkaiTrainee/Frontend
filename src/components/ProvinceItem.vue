<script setup>

const props = defineProps({
    provinces: Object,
    imageProvince: String
})
const cardContainers = document.querySelectorAll('.flex.overflow-x-auto');
  cardContainers.forEach((container) => {
    container.addEventListener('wheel', (event) => {
      event.preventDefault();
      container.scrollLeft += event.deltaY;
    });
  });



//มีfilter
</script>
 
<template>
<!-- <div class="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
  <div v-for="province in provinces" class="rounded-full bg-white py-2 px-4 flex justify-center border border-gold  mx-2"  >
    {{ province.id }}      {{ province.provinceName }}  {{ province.provinceRegion.id }}
  </div>
 </div> -->
 
  <div v-for="province in provinces" class=" bg-white py-2 px-4 flex overflow-x-auto mx-2  "  >
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
    <a href="#">
        <img class="rounded-t-lg w-full" src="../../public/bgContent.jpg"  alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ province.provinceName }}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">ลองLoopข้อมูลจังหวัดแบบcard</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">ID = {{ province.id }} </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">RegionId = {{ province.provinceRegion.id }}</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
  </div>

 

 
</template>
 
<style scoped>

</style>
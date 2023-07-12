<script setup>
import { onMounted, ref, computed } from "vue";

const selectedRegionId = ref(4)
const regionId=ref(4)
const props = defineProps({
    regions: Object
})

//region
const currentRegion = (id) => {
    selectedRegionId.value = id
    console.log(selectedRegionId.value)
}

const isRegionSelected = (regionId) => {
    if (selectedRegionId.value === regionId)
        return true
}

</script>
 
<template>
    <div class="flex flex-wrap justify-center">
        <button v-for="region in regions" :key="region.id" :value="region.id" @click="currentRegion(region.id)" 
            :class="{ 'bg-gold text-white': isRegionSelected(region.id), 'bg-white': !isRegionSelected(region.id) }"
            class="rounded-full py-2 px-4 flex justify-center border border-gold mx-2">
            {{ region.regionName }}
        </button>
    </div>

</template>
 
<style scoped></style>


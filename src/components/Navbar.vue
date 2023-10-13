<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const isVisible = ref(false)
</script>
 
<template>
    <div class="overflow-x-auto flex items-center fixed  top-0 right-40 justify-end space-x-2">
        <a href="#destination">
            <div class="px-8 ">
                Destination
            </div>
        </a>
        <a href="#tub">
            <div class="px-8">
                Bathtub
            </div>
        </a>
        <a href="#hotel">
            <div class="px-8 ">
                Hotel
            </div>
        </a>
    </div>
</template>
 
<style scoped></style>
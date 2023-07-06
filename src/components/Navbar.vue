<script setup>

</script>
 
<template>
    <div class="flex items-center absolute  top-0 right-40 justify-end space-x-2">
        <RouterLink :to="{ name: 'Hotel' }">
            <div class="px-8 ">
                Destination
            </div>
        </RouterLink>
        <RouterLink :to="{ name: 'Hotel' }">
            <div class="px-8">
                Bathtub
            </div>
        </RouterLink>
        <RouterLink :to="{ name: 'Hotel' }">
            <div class="px-8 ">
                Hotel
            </div>
        </RouterLink>
    </div>
</template>
 
<style scoped></style>
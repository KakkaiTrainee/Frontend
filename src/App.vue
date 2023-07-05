<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
// import {RouterView} from 'vue-router'

</script>
 
<template>
  <Navbar></Navbar>
  <RouterView></RouterView>
  <div class="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
    <p class="text-3xl text-gray-700 font-bold mb-5">
      Welcome!
    </p>
    <p class="text-gray-500 text-lg">
      Vue and Tailwind CSS in action
      
    </p>
    <Footer></Footer>
 </div>
</template>
<style scoped>

</style>


<script setup lang="ts">
import Navbar from './components/Navbar.vue';



</script>



<template>
  <div id="app" class="bg-slate-100 p-1   dark:bg-slate-900 transition duration-300 ease-in-out w-full min-h-screen select-none     font-[Lexend]">
  <Navbar />
    

  <router-view/>

<footer class="text-sm font-light text-slate-500 dark:text-slate-400">© 2025 imGegeg;</footer>
  </div>

</template>












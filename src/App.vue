<script setup lang="ts">
/**
 * This is where app the components will be imported and conditionally rendered
 */
import { ref } from "vue";
import Console from "./components/console.vue";


const message = ref("Authenify");
</script>



<template>
  <div class="h-dvh p-2">
  <h1 class="text-5xl font-bold text-center p-2">{{ message }}</h1>
  <p class="text-center p-2 text-3xl">A simple app using Vue on the frontend</p>
  <Console />
</div>
</template>

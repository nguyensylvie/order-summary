<template>
  <v-app class="app bg-paleblue">
    <v-main>
      <OrderSummary />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import OrderSummary from "./components/OrderSummary.vue";
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;600;700&display=swap");
.app {
  font-family: "Red Hat Display", sans-serif;
}
</style>

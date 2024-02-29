<template>
  <div>
    <header class="shadow-sm bg-white">
      <Navbar />
    </header>
    <!-- This is the Page Output -->
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<script setup>
</script>

<style>
  .router-link-exact-active {
    color: #fb923c;
  }
</style>
<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">Story</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
        </ul>
      </nav>
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
    color: hsla(160, 100%, 37%, 1);
  }
</style>
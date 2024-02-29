<template>
  <nav class="container mx-auto p-4 flex justify-between">
    <NuxtLink to="/" class="font-bold">Story</NuxtLink>
    <ul class="flex gap-4">
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
      <li><NuxtLink to="/products/abc">Error page</NuxtLink></li>
    </ul>
  </nav>
</template>

<script setup>
</script>
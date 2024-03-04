<template>
  <div>
    <header class="shadow-sm bg-white" >
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">Story</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><button @click="logout">Log Out</button></li>
        </ul>
      </nav>
    </header>

    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<script setup>
const auth = useAuth();

const logout = () => {
  auth.value.isAuthenticated = false;
  clearError({ redirect: '/' });
}

</script>

<style scoped>

</style>
<template>
  <div>
    Welcome Nikhilesh
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'user',
  middleware: ['auth'],
  /*****Inline Middleware****
  middleware: () => {
    // console.log('I am from Middleware')
    const auth = useAuth();
    return auth.value.isAuthenticated;
  } */
})
</script>

<style scoped>

</style>
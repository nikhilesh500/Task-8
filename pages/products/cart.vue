<template>
  <div>
    <div v-for="item in cart" :key="item.id">
      {{ item.id }}
      {{ item.title }}
      {{ item.price }}
      {{ item.image }}
      {{ item.quantity }}
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'products'
})

const cart = useCart();
// console.log(cart.value);
</script>

<style scoped>

</style>
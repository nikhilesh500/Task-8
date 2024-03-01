<template>
  <table class="table-auto w-full">
    <thead>
      <tr>
        <th class="w-1/6 py-2">Product ID</th>
        <th class="w-1/6 py-2">Image</th>
        <th class="w-2/6 py-2">Product Title</th>
        <th class="w-1/6 py-2">Price</th>
        <th class="w-1/6 py-2">Quantity</th>
      </tr>
    </thead>
    <tbody>
        <tr v-for="item in cart" :key="item.id" class="border-b border-gray-200">
          <td class="w-1/6 py-2 text-center">{{ item.id }}</td>
          <td class="w-1/6 py-2"><img :src="item.image" alt="Product Image" class="w-16 h-auto mx-auto"></td>
          <td class="w-2/6 py-2">{{ item.title }}</td>
          <td class="w-1/6 py-2 text-center">{{ item.price }}</td>
          <td class="w-1/6 py-2 text-center">{{ item.quantity }}</td>
        </tr>
    </tbody>
  </table>
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
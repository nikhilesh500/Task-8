<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products" :key="p.id">
        <!-- <NuxtLink :to="`/products/${p.id}`" >{{ p.title }}</NuxtLink> -->
        <ProductCard :product="p" class="product"/>
      </div>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'products'
  })
  
  // fetch the products from the API
  const { data: products } = await useFetch('https://fakestoreapi.com/products')

  useHead({
    title: 'Story | Products',
      meta: [
        { name: 'description', content: 'Everything About Products'}
      ]
  })

  
</script>

<style>
.product {
  transition: all 0.4s ease-in;
}
.product:hover{
  transform: scale(1.08);
  box-shadow: 0px 0px 7px #fb923c;
}
</style>
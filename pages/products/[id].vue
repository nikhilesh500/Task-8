<template>
  <div>
    <p>Product Details for {{ id }}</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi rem officiis eius inventore explicabo id, et similique natus dolores doloremque soluta odio adipisci enim unde sint recusandae ut. Porro, harum?</p>
  </div>
</template>

<script setup>
const { id } = useRoute().params
</script>

<style lang="scss" scoped>

</style>
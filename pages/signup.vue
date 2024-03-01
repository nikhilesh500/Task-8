<template>
  <div>
    <div class="card w-4/12 mx-auto py-10 ">
      <h1 class="text-center text-4xl my-8">Join with us</h1>
      <form @submit.prevent="onSubmit" class="flex flex-col px-8 ">
        <input class="my-4 py-2 px-2 border-2 rounded-xl " type="text" v-model="username" placeholder="Name">
        <input class="my-4 py-2 px-2 border-2 rounded-xl " type="email" v-model="email" placeholder="Email">
        <input class="my-4 py-2 px-2 border-2 rounded-xl " type="password" v-model="password" placeholder="Password">
        <button type="submit" class="btn w-6/12 mx-auto my-4 ">
          <span>Sign Up</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
const username = ref('')
const email = ref('')
const password = ref('')
const profiles = useProfiles();

const onSubmit = () => {
  const data = {
    name: username.value,
    email: email.value,
    password: password.value
  }

  console.log(data)
  username.value = '';
  email.value = '';
  password.value = '';
}

</script>

<style lang="scss" scoped>

</style>
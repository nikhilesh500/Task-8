<template>
  <div>
    <div class="card w-4/12 mx-auto py-10 ">
      <h1 class="text-center text-4xl my-8">Welcome Back</h1>
      <form @submit.prevent="onSubmit" class="flex flex-col px-8 ">
        <span v-if="err" >
          <div class="text-red-600 text-md flex">
            <i class="material-icons mr-1">no_accounts</i>
            <p>{{ err }}</p>
          </div>
        </span>
        <input class="my-4 py-2 px-2 border-2 rounded-xl " type="email" v-model="form.email" placeholder="Email">
        <input class="my-4 py-2 px-2 border-2 rounded-xl " type="password" v-model="form.password" placeholder="Password">
        <button type="submit" class="btn w-6/12 mx-auto my-4 ">
          <span v-if="isLoading">Loading...</span>
          <span v-else>Log In</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
// definePageMeta({
//   layout: 'user'
// })
const email = ref('')
const password = ref('')
const isLoading = ref(false)

const url = 'https://reqres.in/api/login'
const form = reactive({
  email: 'eve.holt@reqres.in',
  password: 'cityslicka',
})
const err = ref(null);

const onSubmit = async() => {
  if (isLoading.value) return;
  isLoading.value = true;
  // console.log(email.value, password.value);
  const { data, error } = await useFetch(url,{
    method: 'post',
    body: form,
  });

  isLoading.value = false;
  if (error.value){
    err.value = error.value.data.error;
    return;
  };

  const auth = useAuth()
  auth.value.isAuthenticated = true;

  navigateTo('/')
  
  // console.log(data.value, error.value.data);
  email.value = ''
  password.value = ''

};

</script>

<style scoped>

</style>
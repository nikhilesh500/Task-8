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
        <input class="my-4 py-2 px-2 border-2 rounded-xl " type="email" v-model="email" placeholder="Email">
        <input class="my-4 py-2 px-2 border-2 rounded-xl " type="password" v-model="password" placeholder="Password">
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
const err = ref('')
const auth = useAuth()
const users = useProfiles()
console.log(users.value)
console.log(email.value)


const onSubmit = () => {
  isLoading.value = true
  if (email.value && password.value) {
    for (let user of users.value) {
      if (user.email === email.value) {
        console.log('Username Matched')
        if (user.password === password.value) {
          isLoading.value = false
          console.log('Password Matched')
          auth.value.isAuthenticated = true;
          navigateTo('/')
          email.value = ''
          password.value = ''
          break;
        }
        else {
          isLoading.value = false
          err.value = 'Incorrect Password'
          break;
        }
      }
    }
    if (isLoading.value) {
      isLoading.value = false
      err.value = 'User not found'
    }
  }
  else {
    isLoading.value = false
    err.value = 'Please fill in all fields'
  }
}


// const url = 'https://reqres.in/api/login'
// const form = reactive({
//   email: 'eve.holt@reqres.in',
//   password: 'cityslicka',
// })
// const err = ref(null);

// const onSubmit = async() => {
//   if (isLoading.value) return;
//   isLoading.value = true;
//   // console.log(email.value, password.value);
//   const { data, error } = await useFetch(url,{
//     method: 'post',
//     body: form,
//   });

//   isLoading.value = false;
//   if (error.value){
//     err.value = error.value.data.error;
//     return;
//   };

//   const auth = useAuth()
//   auth.value.isAuthenticated = true;

//   navigateTo('/')
  
//   // console.log(data.value, error.value.data);
//   email.value = ''
//   password.value = ''

// };

</script>

<style scoped>

</style>
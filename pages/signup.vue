<template>
  <div>
    <div class="card w-4/12 mx-auto py-10 ">
      <h1 class="text-center text-4xl my-8">Join with us</h1>
      <form @submit.prevent="onSubmit" class="flex flex-col px-8 ">
        <span v-if="registered" >
          <div class="text-amber-500 text-md flex">
            <!-- <i class="material-icons mr-1">no_accounts</i> -->
            <p>User got registered successfully</p>
          </div>
        </span>
        <span v-if="exists" >
          <div class="text-amber-500 text-md flex">
            <!-- <i class="material-icons mr-1">no_accounts</i> -->
            <p>User already exsists</p>
          </div>
        </span>
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
import { ref } from 'vue'
const username = ref('');
const email = ref('');
const password = ref('');
const registered = ref(null);
const exists = ref(null);
const { signup } = useNuxtApp(); // Use signup function directly

const onSubmit = ()=> {
  const data = { name: username.value, email: email.value, password: password.value };
  const { registered: isRegistered, exists: userExists } = signup(data);
  registered.value = isRegistered;
  exists.value = userExists;

  username.value = '';
  email.value = '';
  password.value = '';
};

// const onSubmit = () => {
//   const data = {
//     name: username.value,
//     email: email.value,
//     password: password.value
//   }

//   for (let user of users.value) {
//     if ((user.name === username.value) || (user.email === email.value)) {
//       registered.value = false;
//       exists.value = true;
//       break;
//     }
//   }
//   if (!exists.value) {
//     users.value.push(data);
//     registered.value = true;
//     exists.value = false;
//   }
  
//   username.value = '';
//   email.value = '';
//   password.value = '';
// }
</script>

<style lang="scss" scoped>

</style>
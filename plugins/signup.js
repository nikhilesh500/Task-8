export default defineNuxtPlugin((nuxtApp) => {
  const users = useProfiles(); // Assuming the profiles are injected as $profiles
  const registered = ref(true);
  const exists = ref();
  const evaluate = ref();
  nuxtApp.signup = (data) => {
    if (registered.value) {
      for (let user of users.value) {
        if (user.name === data.name || user.email === data.email) {
          registered.value = false; 
          exists.value = true;
          console.log(registered.value, exists.value);
          return { registered, exists };
        }
        exists.value = false;
      }
    }
    if (!exists.value) {
      users.value.push(data); 
      registered.value = true;
      exists.value = false;
      console.log(users.value);
      console.log(registered.value, exists.value);
      return { registered, exists };
    }
  }
});
// return {
//   provide: {
//     signup: (data) => {
//       exists.value = false;
//       for (let user of users.value) {
//         if (user.name === data.name || user.email === data.email) {
//           registered.value = true; // User found, already registered
//           exists.value = true;
//           break;
//         }
//       }
//       if (!exists.value) {
//         users.value.push(data); // User not found, register them
//         registered.value = true;
//       }
//       return { registered, exists };
//     }
//   }
// }
//   const signup = (data) => {
//     for (let user of users.value) {
//       if (user.name === data.name || user.email === data.email) {
//         registered.value = false;
//         exists.value = true;
//         break;
//       }
//     }
//     if (!exists.value) {
//       users.value.push(data);
//       registered.value = true;
//       exists.value = false;
//     }
//     return { registered, exists };
//   };

//   app.provide('signup', signup);
// 
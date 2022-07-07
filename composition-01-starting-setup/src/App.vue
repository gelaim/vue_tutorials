<template>
  <section class="container">
    <h2>{{ uName }}</h2>
    <h3>{{ age }}</h3>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First name" v-model="firstName" />
      <input type="text" placeholder="Last name" v-model="lastName" />
    </div>
  </section>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    // const user = reactive({ name: 'Thiago', age: 33 });
    const firstName = ref('');
    const lastName = ref('');
    const age = ref(22);

    function changeAge() {
      age.value = 36;
    }

    const uName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    });
    return {
      uName,
      age,
      firstName,
      lastName,
      setAge: changeAge,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>

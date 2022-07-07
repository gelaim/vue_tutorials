<template>
  <section class="container">
    <h2>{{ uName }}</h2>
    <h3>{{ age }}</h3>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First name" @input="setFirstName" />
      <input type="text" placeholder="Last name" @input="setLastName" />
    </div>
  </section>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    // const user = reactive({ name: 'Thiago', age: 33 });
    const firtName = ref('');
    const lastName = ref('');
    const age = ref(22);

    function changeAge() {
      age.value = 36;
    }
    function setLastName(event) {
      lastName.value = event.target.value;
    }

    function setFirstName(event) {
      firtName.value = event.target.value;
    }
    const uName = computed(function () {
      return firtName.value + ' ' + lastName.value;
    });
    return {
      uName,
      age,
      setFirstName,
      setLastName,
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

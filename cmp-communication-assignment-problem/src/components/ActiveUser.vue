<template>
  <li>
    <h2>Username: {{ name }}</h2>
    <h3>Age: {{ age }}</h3>
  </li>
</template>
<script>
export default {
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    age: { type: String, required: true },
  },
};
</script>

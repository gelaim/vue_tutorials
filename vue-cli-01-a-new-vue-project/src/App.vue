<template>
  <section>
    <h2>My friends</h2>
    <ul>
      <li></li>
    </ul>
  </section>
</template>
<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lopesz",
          phone: "4324324",
          email: "manuel@example.com",
        },
        {
          id: "manuela",
          name: "Manuela Lopesz",
          phone: "43243245454",
          email: "manuela@example.com",
        },
      ],
    };
  },
};
</script>

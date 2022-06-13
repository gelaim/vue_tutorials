<template>
  <section>
    <h2>My friends</h2>
    <ul>
      <friend-contact></friend-contact>
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
      ],
    };
  },
};
</script>

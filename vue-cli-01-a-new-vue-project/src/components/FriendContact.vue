<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button v-on:click="toggleDetails">Show Details</button>
    <ul v-if="detailsAreVisible">
      <li>Phone: {{ friend.phone }}</li>
      <li>Email: {{ friend.email }}</li>
    </ul>
  </li>
</template>
<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuela",
        name: "Manuela Lopesz",
        phone: "43243245454",
        email: "manuela@example.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>

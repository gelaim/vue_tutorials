<template>
  <li>
    <h2>{{ name }} {{ isFavoriteContact ? "(Favorite)" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumberWithPlus }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  //props: ["name", "phoneNumber", "emailAddress"],
  props: {
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    emailAddress: { type: String, required: false, default: "@example.com" },
    isFavorite: { type: Boolean },
  },
  data() {
    return {
      detailsAreVisible: false,
      isFavoriteContact: this.isFavorite,
      phoneNumberWithPlus: "+" + this.phoneNumber,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.isFavoriteContact = !this.isFavoriteContact;
    },
  },
};
</script>

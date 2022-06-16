<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
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
    <button v-on:click="deleteFriend">Delete</button>
  </li>
</template>

<script>
export default {
  //props: ["name", "phoneNumber", "emailAddress"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    emailAddress: { type: String, required: false, default: "@example.com" },
    isFavorite: { type: Boolean },
  },
  //emits: ["toggle-favorite"],
  emits: {
    "toggle-favorite": function (id) {
      if (id) {
        return true;
      }
      console.log("id is missing");
      return false;
    },
    "delete-contact": function (id) {
      if (id) {
        return true;
      }
      return false;
    },
  },
  data() {
    return {
      detailsAreVisible: false,

      phoneNumberWithPlus: "+" + this.phoneNumber,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
      //this.isFavoriteContact = !this.isFavoriteContact;
    },
    deleteFriend() {
      this.$emit("delete-contact", this.id);
    },
  },
};
</script>

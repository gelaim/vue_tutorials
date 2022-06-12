const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuela",
          name: "Manuela lopez",
          phone: "32424248678",
          email: "manuela@localhost.com",
        },
      ],
    };
  },
  methods: {},
});
app.component("friend-contact", {
  template: `
  <li >
  <h2>{{friend.name}}</h2>
  <button v-on:click="toggleDetails()">
    {{ detailsAreVisible ? 'Hide' :' Show'}} Details
  </button>
  <ul v-if="detailsAreVisible">
    <li><strong>Phone:</strong> {{friend.phone}}</li>
    <li><strong>Email:</strong> {{friend.email}}</li>
  </ul>
</li>
  `,
  data() {
    return {
      friend: {
        id: "manuel",
        name: "Manuel lopez",
        phone: "3242424",
        email: "manuel@localhost.com",
      },
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");

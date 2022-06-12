const app = Vue.createApp({
  data() {
    return {
      detailsAreVisible: false,
      friends: [
        {
          id: "manuel",
          name: "Manuel lopez",
          phone: "3242424",
          email: "manuel@localhost.com",
        },
        {
          id: "manuela",
          name: "Manuela lopez",
          phone: "32424248678",
          email: "manuela@localhost.com",
        },
      ],
    };
  },
  methods: {
    toggleDetais() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");

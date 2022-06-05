const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add() {
      this.counter += 1;
    },
    remove() {
      this.counter -= 1;
    }
  }
});

app.mount('#events');

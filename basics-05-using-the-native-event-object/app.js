const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
    };
  },
  computed: {
    fullname() {
      if (this.name == '' || this.lastName == '') {
        return ""
      }
      return this.name + ' ' + this.lastName
    }
  },
  methods: {
    outputFullname() {
      console.log("running again...");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "MyLastName";
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");

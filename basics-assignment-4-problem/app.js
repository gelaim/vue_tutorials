const app = Vue.createApp({
  data() {
    return {
      customClass: "",
      paragraphIsVisible: true,
      customBackgroundColor: "red"
    };
  },
  computed: {
    useVisible() {
      return {
        visible: this.paragraphIsVisible,
        hidden: !this.paragraphIsVisible,
        user1: this.customClass === "user1",
        user2: this.customClass === "user2",
      };
    },
  },
  methods: {
    format(value) {
      this.customClass = value.target.value;
    },
    toggleVisible() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
  },
});
app.mount("#assignment");

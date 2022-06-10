const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTask: "",
      visibleList: true,
    };
  },
  computed: {
    isVisible() {
      return { visible: this.visibleList, hidden: !this.visibleList };
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
      console.log(this.tasks);
      this.enteredTask = "";
    },
    showList() {
      this.visibleList = !this.visibleList;
    },
  },
});
app.mount("#assignment");

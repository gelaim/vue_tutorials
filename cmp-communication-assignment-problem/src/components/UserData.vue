<template>
  <form v-on:submit.prevent="submitData">
    <div><label>Name:</label><input type="text" v-model="enteredName" /></div>
    <div><label>Age:</label><input type="text" v-model="enteredAge" /></div>
    <div><button>Add User</button></div>
  </form>
</template>
<script>
export default {
  emit: ["add-user"],
  data() {
    return { enteredName: "", enteredAge: "" };
  },
  methods: {
    submitData() {
      this.$emit("add-user", this.enteredName, this.enteredAge);
    },
  },
};
</script>

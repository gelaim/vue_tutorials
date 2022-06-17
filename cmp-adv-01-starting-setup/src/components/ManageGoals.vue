<template>
  <h2>Manage Goals</h2>
  <input type="text" ref="goal" />
  <button @click="setGoal">Set goal</button>
  <ErrorAlert v-if="inputIsInvalid"
    ><h2>Input is invalid</h2>
    <button @click="confirmError">Ok</button></ErrorAlert
  >
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  components: { ErrorAlert },
  data() {
    return { inputIsInvalid: false };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === "") {
        this.inputIsInvalid = true;
      }
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>

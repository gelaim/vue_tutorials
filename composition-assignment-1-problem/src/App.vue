<template>
  <h2 v-if="myPath.showGoal">{{ myPath.myGoal }}</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-else>OUTPUT COURSE GOAL</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="showGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
import { reactive } from 'vue';
//import { ref } from 'vue';

export default {
  setup() {

    const myPath=reactive({
      myGoal: 'Apply it on Thesis Crafter',
      showGoal: false,

    })
    //const mygoal = ref('Apply it on Thesis Crafter');
    //const showGoal = ref(false);
    function showMyGoal() {
      myPath.showGoal = !myPath.showGoal;
    }
    return { myPath:myPath, showGoal: showMyGoal};
  },
};
</script>
<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>

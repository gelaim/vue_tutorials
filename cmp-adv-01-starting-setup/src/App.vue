<template>
  <div>
    <TheHeader></TheHeader>
    <button v-on:click="setSelectedComponent('ActiveGoals')">
      ActiveGoals
    </button>
    <button v-on:click="setSelectedComponent('ManageGoals')">
      ManageGoals
    </button>
    <!--<ActiveGoals v-if="selectedComponent === 'ActiveGoals'"> </ActiveGoals>
    <ManageGoals v-if="selectedComponent === 'ManageGoals'"></ManageGoals>-->
    <keep-alive>
      <component v-bind:is="selectedComponent"></component
    ></keep-alive>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
  components: { TheHeader, ActiveGoals, ManageGoals },
  data() {
    return {
      selectedComponent: "ActiveGoals",
      activeUser: {
        name: "Thiago Gelaim",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>

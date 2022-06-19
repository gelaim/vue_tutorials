<template>
  <ul>
    <li><button :class="{active: activeOption=='poor'}" @click="activate('poor')" type="button">Poor</button></li>
    <li><button :class="{active: activeOption=='average'}" @click="activate('average')" type="button">Average</button></li>
    <li><button :class="{active: activeOption=='great'}" @click="activate('great')" type="button">Great</button></li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      activeOption: null,
    };
  },
  methods: {
    activate(option) {
      this.activeOption = option;
    },
  },
};
</script>
<style scoped>
.active {
  border-color: red;
}
.active bottom {
  color: blue;
}
ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}
li {
  margin: 0 1rem;
}
</style>

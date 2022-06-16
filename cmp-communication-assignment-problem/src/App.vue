<template>
  <section>
    <header><h1>Assignment 6</h1></header>
    <ul>
      <active-user
        v-for="user in users"
        v-bind:age="user.age"
        v-bind:key="user.id"
        v-bind:name="user.name"
        v-bind:id="user.id"
      ></active-user>
    </ul>
    <user-data v-on:add-user="addUser"></user-data>
  </section>
</template>
<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    addUser(name, age) {
      const newUser = {
        id: new Date().toISOString(),
        name: name,
        age: age,
      };
      this.users.push(newUser);
    },
  },
};
</script>

<template>
  <div>
    <TheHeader></TheHeader>
    <BadgeList></BadgeList>
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></UserInfo>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import UserInfo from "./components/UserInfo.vue";
import BadgeList from "./components/BadgeList.vue";
export default {
  components: { UserInfo, TheHeader, BadgeList },
  data() {
    return {
      activeUser: {
        name: "Thiago Gelaim",
        description: "Site owner and admin",
        role: "admin",
      },
    };
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

<template>
  <StoredResources :resources="storedResources"></StoredResources>
</template>

<script>
import StoredResources from './components/learning-resources/StoredResources.vue';
export default {
  components: {
    StoredResources,
  },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'This is the description',
          link: 'https://vuejs.org',
        },
        {
          id: 'google-guide',
          title: 'Google Guide',
          description: 'This is the description',
          link: 'https://google.com',
        },
      ],
    };
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>

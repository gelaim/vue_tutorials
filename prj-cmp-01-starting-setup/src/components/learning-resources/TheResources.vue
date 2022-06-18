<template>
  <BaseCard
    ><BaseButton
      @click="setSelectedTab('stored-resources')"
      :mode="storedResourceButtonMode"
      >Stored Resources</BaseButton
    >
    <BaseButton
      @click="setSelectedTab('add-resource')"
      :mode="addResourceButtonMode"
      >Add Resource</BaseButton
    ></BaseCard
  >
  <component :is="selectedTab"></component>
</template>
<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: { AddResource, StoredResources },
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
      selectedTab: 'stored-resources',
    };
  },
  provide() {
    return { resources: this.storedResources };
  },
  computed: {
    storedResourceButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResourceButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>

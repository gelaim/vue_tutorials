<template>
  <div>
    <header v-if="$slots.customHeader">
      <slot name="customHeader"
        ><h2>If you don't have a content, show me!</h2></slot
      >
    </header>
    <slot></slot>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log(this.$slots.customHeader);
  },
};
</script>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

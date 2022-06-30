<template>
  <section>
    <base-card>
      <h2>Register a coach now!</h2>
      <coach-form></coach-form
    ></base-card>
  </section>
</template>
<script>
import BaseCard from '../../components/ui/BaseCard.vue';
import CoachForm from '../../components/coaches/CoachForm.vue';
export default {
  components: { CoachForm, BaseCard },
};
</script>

<template>
  <member-page />
</template>

<script lang="ts">
import Vue from 'vue';
import MemberPage from './MemberPage.vue';
export default Vue.extend({
  name: 'MemberPageContainer',
  components: { MemberPage },
});
</script>

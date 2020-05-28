<template>
  <members-page />
</template>

<script lang="ts">
import Vue from 'vue';
import MembersPage from './MembersPage.vue';

export default Vue.extend({
  name: 'MembersPageContainer',
  components: { MembersPage },
});
</script>

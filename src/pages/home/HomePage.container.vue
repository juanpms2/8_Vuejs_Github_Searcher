<template>
  <home-page />
</template>

<script lang="ts">
import Vue from 'vue';
import HomePage from './HomePage.vue';

export default Vue.extend({
  name: 'HomePageContainer',
  components: { HomePage },
});
</script>
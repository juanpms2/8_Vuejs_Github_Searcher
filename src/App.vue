<template>
  <home-page-container />
</template>

<script lang="ts">
import Vue from 'vue';
import { HomePageContainer } from './pages/home';

export default Vue.extend({
  name: 'App',
  components: { HomePageContainer },
});
</script>

<template>
  <v-app class="body">
    <router-view />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
});
</script>

<style>
.body {
  background: #fafafa !important;
}
</style>

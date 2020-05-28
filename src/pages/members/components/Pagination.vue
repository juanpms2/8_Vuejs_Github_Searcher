<template>
  <div class="text-center pagination-container">
    <v-pagination v-model="page" :length="4" circle></v-pagination>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'PaginationComponent',
  data() {
    return {
      page: 1,
    };
  },
});
</script>

<style scoped>
.pagination-container {
  margin: 4% auto;
}
</style>

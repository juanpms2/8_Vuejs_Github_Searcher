<template>
  <div class="text-center pagination-container">
    <v-pagination
      v-model="page"
      :length="totalPage"
      circle
      prev-icon="chevron_left"
      next-icon="chevron_right"
      @input="handleChange"
    ></v-pagination>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';

export default Vue.extend({
  name: 'PaginationComponent',
  props: {
    totalPage: Number,
    handleChange: {} as PropOptions<(value: number) => void>,
  },
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

<template>
  <div class="alert">
    <v-alert dense outlined type="error" v-model="alert">
      <i
        aria-hidden="true"
        class="v-icon notranslate v-alert__icon material-icons theme--light red--text"
        @click="showAlert"
        >cancel</i
      >
      {{ error }}
    </v-alert>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
export default Vue.extend({
  name: 'AlertError',
  props: {
    error: String,
    showAlert: {} as PropOptions<() => void>,
    alert: Boolean,
  },
});
</script>

<style scoped>
.alert {
  min-width: 420px;
  width: 80%;
  margin: 3% auto;
}
i {
  cursor: pointer;
}
</style>

<template>
  <div class="subtitle">
    <span class="text-subtitle"> <strong>LEMONCODE</strong> Members </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'SubtitleComponent',
});
</script>

<style scoped>
.subtitle {
  width: 95%;
  margin: 4% auto 0;
  border-radius: 5px;
  background: #24292e;
  color: #fff;
}
.text-subtitle {
  padding: 2%;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 3rem;
}
@media (max-width: 720px) {
  .subtitle {
    top: 25%;
    min-width: 450px;
  }
}
</style>

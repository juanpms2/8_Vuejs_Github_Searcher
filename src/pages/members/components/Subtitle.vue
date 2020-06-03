<template>
  <div class="subtitle">
    <span class="text-subtitle">
      <strong>{{ organization.toUpperCase() }}</strong> Members
    </span>
    <v-text-field
      placeholder="Filtrar por nombre..."
      single-line
      background-color="#ffffff"
      prepend-inner-icon="search"
      reverse
      class="search"
      :value="txtSearchUser"
      @input="searchedUser"
    ></v-text-field>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { MemberEntity } from 'models';

export default Vue.extend({
  name: 'SubtitleComponent',
  props: {
    organization: String,
    txtSearchUser: String,
    searchedUser: {} as PropOptions<(value: string) => void>,
  },
});
</script>

<style scoped>
.subtitle {
  width: 95%;
  margin: 4% auto 0;
  border-radius: 5px;
  background: #24292e;
  color: #fff;
  display: flex;
  justify-content: space-between;
}
.text-subtitle {
  padding: 2%;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 3rem;
}
.search {
  max-width: 40%;
  margin-right: 2%;
  align-self: center;
}
@media (max-width: 720px) {
  .subtitle {
    top: 25%;
    min-width: 450px;
  }
}
</style>

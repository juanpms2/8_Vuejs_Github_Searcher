<template>
  <home-page v-bind="{ company, txtSearch, onSearch }" />
</template>

<script lang="ts">
import Vue from 'vue';
import HomePage from './HomePage.vue';

export default Vue.extend({
  name: 'HomePageContainer',
  components: { HomePage },
  data() {
    return {
      company: '',
    };
  },
  methods: {
    txtSearch(company: string) {
      this.company = company;
    },
    onSearch(company: string) {
      this.$router.push(`/members/${this.company}`);
    },
  },
});
</script>

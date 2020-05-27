<template>
  <div class="background">
    <div class="search">
      <p class="title">Github Search...</p>
      <div class="input-search">
        <v-text-field
          placeholder="Search..."
          single-line
          outlined
          dense
          append-icon="search"
          background-color="#fff"
        ></v-text-field>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HomePage',
});
</script>

<style scoped>
.background {
  background-color: #24292e;
  height: 100vh;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('../../assets/logoGitHub2.png');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  overflow: hidden;
  width: 100%;
  min-width: 420px;
  max-width: 600px;
  margin: 0 auto;
}
.title {
  width: 100%;
  color: #ffffff;
  font-size: 24px;
  text-align: center;
  position: absolute;
  top: 42%;
  display: flex;
  justify-content: center;
}
.input-search {
  width: 50%;
  max-width: 250px;
  margin-top: 8%;
}
</style>

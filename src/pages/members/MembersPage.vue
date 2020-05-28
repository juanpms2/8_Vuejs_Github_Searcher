<template>
  <div>
    <div class="header">
      <navbar-component />

      <subtitle-component />
    </div>
    <div class="card-container">
      <v-card class="mx-auto card" max-width="344" v-for="n in 7" :key="n">
        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

        <v-card-title>Top western road trips</v-card-title>

        <v-card-subtitle>1,000 miles of wonder</v-card-subtitle>

        <v-card-actions>
          <v-btn text>Share</v-btn>

          <v-btn color="purple" text>Explore</v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <pagination-component />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { NavbarComponent, SubtitleComponent, PaginationComponent } from './components';

export default Vue.extend({
  name: 'MembersPage',
  components: { NavbarComponent, SubtitleComponent, PaginationComponent },
});
</script>

<style scoped>
.header {
  position: fixed;
  z-index: 999;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.7);
}
.card-container {
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  width: 100%;
  margin-top: 20%;
}
.card {
  margin: 2% auto;
}
@media (max-width: 720px) {
  .card-container {
    margin-top: 50%;
    min-width: 450px;
  }
}
@media (max-width: 450px) {
  .card-container {
    margin-top: 65%;
  }
}
</style>

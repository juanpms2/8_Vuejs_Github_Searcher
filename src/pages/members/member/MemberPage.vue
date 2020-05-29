<template>
  <div class="content">
    <div class="header">
      <navbar-component />
    </div>
    <div class="content">
      <v-card class="mx-auto card" max-width="720">
        <v-list-item>
          <v-list-item-avatar color="grey">
            <img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" alt="John" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="headline">Our Changing Planet</v-list-item-title>
            <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <div class="img-card">
          <img class="img-card" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" alt />
        </div>

        <v-card-title>Top western road trips</v-card-title>

        <v-card-subtitle>1,000 miles of wonder</v-card-subtitle>

        <v-card-actions>
          <v-badge color="#777777" content="9" right>
            <v-icon color="grey lighten-1" medium>people_alt</v-icon>
          </v-badge>
          <v-btn class="logo-github" icon href="http://www.google.es" target="_blank">
            <img class="img-logo-github" src="../../../assets/github-black.png" alt="github" />
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show" class="btn-icon">
            <v-icon color="grey lighten-1">expand_more</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he could deliver. You
              won't have time for sleeping, soldier, not with all the bed making you'll be doing.
              Then we'll go with that data file! Hey, you add a one and two zeros to that or we
              walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { NavbarComponent } from '../components';
export default Vue.extend({
  name: 'MemberPage',
  components: { NavbarComponent },
  data: () => ({
    show: false,
  }),
});
</script>

<style scoped>
.btn-icon {
  background: #f4f4f4;
}
.logo-github {
  opacity: 0.6;
  margin-left: 2%;
}
.img-logo-github {
  max-width: 40px;
}
.header {
  position: fixed;
  z-index: 999;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.7);
}
.content {
  margin: 15% auto;
  display: block;
}
.card {
  margin: 0 auto;
  padding: 3%;
}
.img-card {
  border-radius: 50%;
  width: 400px;
  height: 400px;
  margin: 0 auto;
  display: block;
}
.img-card > img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
@media (max-width: 720px) {
  .content {
    margin: 50% auto 0;
    min-width: 420px;
  }
}
</style>

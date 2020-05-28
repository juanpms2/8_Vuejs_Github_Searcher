<template>
  <div class="content">
    <navbar-component />
    <div class="content">
      <v-card class="mx-auto card" max-width="720">
        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

        <v-card-title>
          Top western road trips
        </v-card-title>

        <v-card-subtitle>
          1,000 miles of wonder
        </v-card-subtitle>

        <v-card-actions>
          <v-btn text>Share</v-btn>

          <v-btn color="purple" text>
            Explore
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
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
.content {
  margin: 20% auto;
  display: block;
}
.card {
  margin: 0 auto;
  padding: 3%;
}
@media (max-width: 720px) {
  .content {
    margin: 50% auto 0;
    min-width: 420px;
  }
}
</style>

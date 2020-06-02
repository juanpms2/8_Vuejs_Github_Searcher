<template>
  <div>
    <div class="header">
      <navbar-component v-bind="{ company, txtSearch, onSearch }" />
    </div>
    <div class="content" v-if="user">
      <v-card class="mx-auto card" max-width="720">
        <v-list-item>
          <v-list-item-avatar color="grey">
            <img :src="user.avatar_url" alt="John" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="headline">{{user.name}}</v-list-item-title>
            <v-list-item-subtitle>{{user.login}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <div class="img-card">
          <img class="img-card" :src="user.avatar_url" :alt="user.login" />
        </div>

        <v-card-title>{{user.login}}</v-card-title>

        <v-card-subtitle>{{user.name}}</v-card-subtitle>

        <v-card-actions>
          <v-badge color="#777777" :content="user.followers" right>
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
import Vue, { PropOptions } from 'vue';
import { NavbarComponent } from '../components';
import { UserEntity, createDefaultUserEntity, createDefaultMemberEntity } from '../../../models';
export default Vue.extend({
  name: 'MemberPage',
  components: { NavbarComponent },
  props: {
    user: {} as PropOptions<UserEntity>,
    company: String,
    error: String,
    txtSearch: {} as PropOptions<(value: string) => void>,
    onSearch: {} as PropOptions<(value: string) => void>,
  },
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

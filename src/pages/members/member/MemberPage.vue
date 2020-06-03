<template>
  <div>
    <div class="header">
      <navbar-component v-bind="{ company, txtSearch, onSearch }" />
      <alert-error v-bind="{ error, showAlert, alert }" />
    </div>
    <div class="content" v-if="user">
      <v-card class="mx-auto card" max-width="720">
        <v-list-item>
          <v-list-item-avatar color="grey">
            <img :src="user.avatar_url" :alt="user.name" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="headline">{{ user.login }}</v-list-item-title>
            <v-list-item-subtitle>{{ user.company }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <div class="img-card">
          <img class="img-card" :src="user.avatar_url" :alt="user.login" />
        </div>

        <v-card-title>{{ user.name ? user.name : user.login }}</v-card-title>

        <v-card-subtitle>{{ user.bio }}</v-card-subtitle>

        <v-card-actions>
          <v-badge color="#777777" :content="user.followers" right>
            <v-icon color="grey lighten-1" medium>people_alt</v-icon>
          </v-badge>
          <v-btn class="logo-github" icon :href="user.html_url" target="_blanck">
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit consequatur eveniet
              quas nulla iure, praesentium tenetur necessitatibus molestias? Ab nulla explicabo
              inventore, et aspernatur animi veritatis excepturi pariatur cumque atque.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </div>
    <div class="spinner" v-if="loading">
      <v-progress-circular :size="100" :width="7" color="#24292e" indeterminate />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { NavbarComponent, AlertError } from '../components';
import { UserEntity, createDefaultUserEntity, createDefaultMemberEntity } from '../../../models';
export default Vue.extend({
  name: 'MemberPage',
  components: { NavbarComponent, AlertError },
  props: {
    user: {} as PropOptions<UserEntity>,
    company: String,
    error: String,
    txtSearch: {} as PropOptions<(value: string) => void>,
    onSearch: {} as PropOptions<(value: string) => void>,
    loading: Boolean,
    showAlert: {} as PropOptions<() => void>,
    alert: Boolean,
  },
  data: () => ({
    show: false,
  }),
});
</script>

<style scoped>
.spinner {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}
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

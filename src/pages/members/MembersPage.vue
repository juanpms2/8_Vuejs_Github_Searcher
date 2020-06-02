<template>
  <div class="content">
    <div class="header">
      <navbar-component v-bind="{ company, txtSearch, onSearch }" />

      <subtitle-component :organization="organization" />
    </div>
    <div class="card-container" v-if="members">
      <v-card class="mx-auto card" max-width="344" v-for="member in members" :key="member.id">
        <!-- <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img> -->

        <div class="img-card">
          <img :src="member.avatar_url" alt />
        </div>

        <v-card-title class="card-name">{{member.login}}</v-card-title>

        <v-card-subtitle>{{organization}}</v-card-subtitle>

        <v-card-actions>
          <v-btn text :to="`/user/${member.login}`">Ver perfil</v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <pagination-component />
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { MemberEntity, createDefaultMemberEntity, createDefaultUserEntity } from 'models';
import { NavbarComponent, SubtitleComponent, PaginationComponent } from './components';

export default Vue.extend({
  name: 'MembersPage',
  components: { NavbarComponent, SubtitleComponent, PaginationComponent },
  props: {
    members: {} as PropOptions<MemberEntity[]>,
    company: String,
    organization: String,
    error: String,
    txtSearch: {} as PropOptions<(value: string) => void>,
    onSearch: {} as PropOptions<(value: string) => void>,
  },
});
</script>

<style scoped>
.content {
  min-width: 450px;
}
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
  padding: 3%;
  text-align: center;
}
.img-card {
  border-radius: 50%;
  width: 250px;
  height: 250px;
  margin: 0 auto;
  display: block;
}
.img-card > img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.card-name {
  display: block;
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

<template>
  <div class="content">
    <div class="header">
      <navbar-component v-bind="{ company, txtSearch, onSearch }" />
      <alert-error v-bind="{ error, showAlert, alert }" />
      <subtitle-component v-bind="{ organization, txtSearchUser, searchedUser }" />
    </div>
    <div class="card-container" v-if="membersCard">
      <v-card class="mx-auto card" max-width="344" v-for="member in membersCard" :key="member.id">
        <div class="img-card">
          <img :src="member.avatar_url" alt />
        </div>

        <v-card-title class="card-name">{{ member.login }}</v-card-title>

        <v-card-subtitle>{{ organization }}</v-card-subtitle>

        <v-card-actions>
          <v-btn text :to="`/user/${member.login}`">Ver perfil</v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <pagination-component v-bind="{ totalPage, handleChange }" />
    <div class="spinner" v-if="loading">
      <v-progress-circular :size="100" :width="7" color="#24292e" indeterminate />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { MemberEntity, createDefaultMemberEntity, createDefaultUserEntity } from 'models';
import { NavbarComponent, SubtitleComponent, PaginationComponent, AlertError } from './components';

export default Vue.extend({
  name: 'MembersPage',
  components: { NavbarComponent, SubtitleComponent, PaginationComponent, AlertError },
  props: {
    membersCard: {} as PropOptions<MemberEntity[]>,
    company: String,
    organization: String,
    error: String,
    txtSearch: {} as PropOptions<(value: string) => void>,
    onSearch: {} as PropOptions<(value: string) => void>,
    loading: Boolean,
    totalPage: Number,
    handleChange: {} as PropOptions<(value: number) => void>,
    showAlert: {} as PropOptions<() => void>,
    alert: Boolean,
    txtSearchUser: String,
    searchedUser: {} as PropOptions<(value: string) => void>,
  },
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
  margin-top: 25%;
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
    margin-top: 55%;
    min-width: 450px;
  }
}
@media (max-width: 450px) {
  .card-container {
    margin-top: 65%;
  }
}
</style>

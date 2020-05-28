<template>
  <members-page-container />
</template>

<script lang="ts">
import Vue from 'vue';
import { HomePageContainer } from './pages/home';
import { MembersPageContainer } from './pages/members';
import { MemberPageContainer } from './pages/members/member';

export default Vue.extend({
  name: 'App',
  components: { HomePageContainer, MembersPageContainer, MemberPageContainer },
});
</script>

<template>
  <member-page v-bind="{ user, txtSearch, onSearch, company, error }" />
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { getUser, getAllMembers } from 'api';
import { UserEntity, createDefaultUserEntity, createDefaultMemberEntity } from 'models';
import MemberPage from './MemberPage.vue';

export default Vue.extend({
  name: 'MemberPageContainer',
  components: { MemberPage },

  data() {
    return {
      user: createDefaultUserEntity(),
      company: this.$route.params.company,
      error: '',
    };
  },

  methods: {
    txtSearch(company: string) {
      this.company = company;
    },
    onSearch() {
      this.company ? this.$router.push(`/members/${this.company}`) : null;
    },
  },
  created() {
    getUser(this.$route.params.id)
      .then(dataUser => {
        return (this.user = dataUser);
      })
      .catch(error => console.log(error));
  },
});
</script>

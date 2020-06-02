<template>
  <members-page v-bind="{members, organization, company, error, txtSearch, onSearch}" />
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import MembersPage from './MembersPage.vue';
import { getAllMembers } from 'api';
import { MemberEntity, createDefaultMembersEntity } from 'models';

export default Vue.extend({
  name: 'MembersPageContainer',
  components: { MembersPage },
  data() {
    return {
      members: createDefaultMembersEntity(),
      company: '',
      error: '',
      organization: '',
    };
  },
  methods: {
    txtSearch(company: string) {
      this.company = company;
    },
    getMembers() {
      getAllMembers(this.$route.params.company)
        .then(allMembers => {
          this.organization = this.$route.params.company;
          return (this.members = allMembers);
        })
        .catch(error => {
          this.error = `No existe la compañia o el usuario ${this.$route.params.company} en nuestra base de datos.`;
          console.log(error);
        });
    },
    onSearch() {
      if (this.company) {
        this.$router.push(`/members/${this.company}`);
        this.getMembers();
      } else {
        return undefined;
      }
    },
  },
  created() {
    this.organization = this.$route.params.company;
    this.getMembers();
  },
});
</script>

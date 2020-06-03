<template>
  <member-page v-bind="{ user, txtSearch, onSearch, company, error, loading, alert, showAlert }" />
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
      company: '',
      error: '',
      loading: true,
      alert: false,
    };
  },

  methods: {
    showAlert() {
      this.alert = !this.alert;
    },
    txtSearch(company: string) {
      this.company = company;
    },
    onSearch() {
      this.company ? this.$router.push(`/members/${this.company}`) : null;
    },
  },
  created() {
    this.loading = true;
    getUser(this.$route.params.id)
      .then(dataUser => {
        this.loading = false;
        return (this.user = dataUser);
      })
      .catch(error => {
        this.showAlert();
        this.error = `El usuario o compañía ${this.$route.params.id.toUpperCase()} no existe en nuestra base de datos.`;
        console.log(error);
        this.loading = false;
      });
  },
});
</script>

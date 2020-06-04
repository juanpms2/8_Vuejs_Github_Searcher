<template>
  <members-page
    v-bind="{
      membersCard,
      organization,
      company,
      error,
      txtSearch,
      onSearch,
      loading,
      totalPage,
      handleChange,
      showAlert,
      alert,
      txtSearchUser,
      searchedUser,
    }"
  />
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import MembersPage from './MembersPage.vue';
import { getAllMembers } from 'api';
import { PropsData, createDefaultPropsData } from './MembersPage.vm';
import { MemberEntity } from '../../models';

export default Vue.extend({
  name: 'MembersPageContainer',
  components: { MembersPage },
  data: createDefaultPropsData,

  methods: {
    searchedUser(txt: string) {
      this.membersCard = this.members.filter(
        member => member.login.toLowerCase().indexOf(txt.toLowerCase()) >= 0
      );
    },
    showAlert() {
      this.alert = !this.alert;
    },
    calcTotalPage(value: number) {
      this.totalPage = value / 4;
    },
    handleChange(value: number) {
      this.init = value * this.increment - 4;
      this.fin = value * this.increment;
      this.page = value;
      this.membersCard = this.members.slice(this.init, this.fin);
    },
    txtSearch(company: string) {
      this.company = company;
    },
    getMembers() {
      this.loading = true;
      getAllMembers(this.$route.params.company)
        .then(arrayMembers => {
          this.organization = this.$route.params.company;
          this.loading = false;
          this.members = arrayMembers;
          this.totalPage = Math.round(arrayMembers.length / 4);
          this.membersCard = arrayMembers.slice(this.init, this.fin);
          return (this.members = arrayMembers);
        })
        .catch(error => {
          this.showAlert();
          this.error = `El usuario o compañía ${this.$route.params.company.toUpperCase()} no existe en nuestra base de datos.`;
          console.log(error);
          this.loading = false;
        });
    },
    onSearch() {
      if (this.company) {
        this.init = 0;
        this.fin = 4;
        this.page = 1;
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

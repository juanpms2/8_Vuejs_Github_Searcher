<template>
  <div>
    <div class="content">
      <div dense color="#24292e" class="nav-content">
        <router-link class="logo-container" to="/home">
          <img class="logo" src="../../../assets/logoGitHub2.png" alt="github" />

          <v-toolbar-title class="title">Github Search...</v-toolbar-title>
        </router-link>

        <div class="input-search">
          <v-text-field
            placeholder="Search..."
            :value="company"
            @input="txtSearch"
            @keypress.enter="onSearch"
            single-line
            outlined
            dense
            append-icon="search"
            background-color="#fff"
          ></v-text-field>
          <div class="btn-container">
            <v-btn class="btn" outlined color="#008000" @click="onSearch">Search</v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';

export default Vue.extend({
  name: 'NavbarComponent',
  props: {
    company: String,
    txtSearch: {} as PropOptions<(value: string) => void>,
    onSearch: {} as PropOptions<() => void>,
  },
});
</script>

<style scoped>
.content {
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  box-shadow: 1px 1px 2px #000;
}
.nav-content {
  display: grid;
  grid-template-columns: 35% 15% 50%;
  background: #24292e;
  width: 100%;
}
.logo-container {
  grid-column: 1 / 2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
}
.title {
  font-size: 1.2rem;
  margin-left: 2%;
  color: #fff;
}
.logo {
  max-height: 45px;
  max-width: 45px;
  margin: 0 4%;
  cursor: pointer;
}
.input-search {
  width: 100%;
  padding-top: 4%;
  grid-column: 3 / 4;
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
}
.input-text {
  color: green;
}
.btn-container {
  width: 30%;
  text-align: center;
}
.btn {
  border-color: #008000;
}
@media (max-width: 720px) {
  .nav-content {
    grid-template-columns: 100%;
    min-width: 450px;
  }
  .logo-container {
    margin-top: 2%;
  }
  .title {
    margin-left: 0;
  }
  .input-search {
    grid-column: 1 / 2;
    display: block;
    width: 90%;
    margin: 3% auto;
  }
  .btn-container {
    width: 100%;
  }
  .btn {
    width: 100%;
  }
}
</style>

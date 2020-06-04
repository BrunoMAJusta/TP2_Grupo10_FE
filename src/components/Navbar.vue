<template>
  <nav class="navbar navbar-light bg-light">
    <div class="row" style="width: 100vw">
      <div class="col-sm-6">
        <div v-if="this.$store.state.loggedUser.length != 0" style="float: left">
          <router-link v-if="this.$store.state.loggedUser.userType == 1" to="/adminHome">Início</router-link>
          <span>|</span>
          <router-link v-if="this.$store.state.loggedUser.length ==1" to="/addEpis">Adicionar EPI</router-link>
          <router-link v-else to="/">Início</router-link>
          <span>|</span>
          <router-link to="/epiCatalog">Catálogo</router-link>
        </div>
        <div v-else style="float: left">
          <router-link to="/login">Login</router-link>|
          <router-link to="/register">Registo</router-link>
        </div>
      </div>
      <div class="col-sm-6">
        <form
          class="form-inline"
          v-if="this.$store.state.loggedUser.length != 0"
          style="float: right"
        >
          <a class="navbar-brand" style="float: left">{{this.$store.state.loggedUser.name}}</a>
          <button class="btn btn-outline-success" type="button" @click="logout()">
            Terminar
            Sessão
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: function() {
    return {
      onlineUser: ""
    };
  },
  created() {
    if (localStorage.getItem("loggedUser")) {
      this.$store.state.loggedUser = JSON.parse(
        localStorage.getItem("loggedUser")
      );
      this.onlineUser = this.$store.state.loggedUser;
    }
    this.$store.commit("STORE_ITEMS");
  },
  methods: {
    logout() {
      alert("Terminou sessão com sucesso!");
      this.$store.commit("LOGOUT");
    }
  },
  computed: {
    getName() {
      if (localStorage.getItem("loggedUser")) {
        return this.onlineUser;
      } else {
        return "Entrar";
      }
    }
  }
};
</script>


<style lang="css" scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: black;
}

#nav a.router-link-exact-active {
  color: #007bff;
}
</style>
<template>
  <div id="registration">
    <div class="container-full title">
      <h1 id="redTitle">Registo</h1>
      <hr class="back-line">
      <div class="container" id="whiteRect">
        <p id="space">space</p>
      </div>
    </div>

    <form v-on:submit.prevent="addUser()">
      <div class="container col-sm-6">
        <div class="form-group">
          <label for="exampleInputName">Nome</label>
          <input type="text" class="form-control" id="exampleInputName" placeholder="Nome" v-model="name" required>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail" placeholder="Email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword">Palavra-Passe:</label>
          <input type="password" class="form-control" id="exampleInputPassword" placeholder="Palavra-Passe"
            v-model="password" required>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword2">Confirmar Palavra-Passe:</label>
          <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Confirmar Palavra-Passe"
            v-model="confPassword" required>
        </div>
        <button type="submit" class="btn btn-primary">Confirmar</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: "Registration",
    data: () => ({
      id: 0,
      email: "",
      name: "",
      password: "",
      confPassword: "",
    }),
    created: function () {
      window.addEventListener('unload', this.saveStorage)
      if (localStorage.getItem("users")) {
        this.$store.state.users = JSON.parse(localStorage.getItem("users"))
      }
      if (localStorage.getItem("loggedUser")) {
        this.$store.state.loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
      }
    },
    methods: {
      getLastId() {
        return this.$store.getters.lastId + 1
      },
      addUser() {
        this.$store.commit('ADD_USER', {
          id: this.getLastId(),
          email: this.email,
          name: this.name,
          password: this.password,
          confPassword: this.confPassword,
        })
      },
      saveStorage() {
        localStorage.setItem("users", JSON.stringify(this.$store.state.users))
        localStorage.setItem("loggedUser", JSON.stringify(this.$store.state.loggedUser))
      },
    }
  }
</script>


<style lang="css" scoped>
  .input {
    padding: 5px;
  }

  #link {
    color: white;
  }

  label {
    float: left;
    margin-bottom: .5rem;
  }


  #redTitle {
    font-size: 45px;
    color: #007bff;
    display: block;
    z-index: 7;
    position: relative;
  }

  .back-line {
    background-color: black;
    margin-top: -35px;
    width: 60vw;
    display: block;
    z-index: 5;
    position: relative;
    height: 1px;
  }

  #space {
    color: white;
  }

  .title {
    padding-top: 20px;
    padding-bottom: 50px;
  }

  #whiteRect {
    background-color: white;
    margin-top: -35px;
    height: 35px;
    width: 200px;
    position: relative;
    display: block;
    z-index: 5;
  }
</style>
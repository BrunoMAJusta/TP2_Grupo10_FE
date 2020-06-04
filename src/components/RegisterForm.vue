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
          <label for="exampleInputName">Morada:</label>
          <input type="text" class="form-control" id="exampleInputName" placeholder="Morada" v-model="adress" required>
        </div>
        <div class="form-group">
          <label for="exampleInputName">Código Postal</label>
          <input type="text" class="form-control" id="exampleInputName" placeholder="Código Postal" v-model="zip_code" required>
        </div>
        <div class="form-group">
          <label for="exampleInputName">Contacto</label>
          <input type="text" class="form-control" id="exampleInputName" placeholder="Contacto" v-model="number" required>
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
      adress: "",
      zip_code: "",
      number: ""
    }),
    methods: {
    async addUser() {
      try {
        await this.$store.dispatch("postUser", {
          email: this.email,
          name: this.name,
          password: this.password,
          password2: this.confPassword,
          adress: this.adress,
          zipcode: this.zip_code,
          number: this.number,
        });
      } catch (err) {
        alert(err);
      }
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
<template>
    <div id="loginform">
        <div class="container-full title">
            <h1 id="redTitle">Iniciar Sessão</h1>
            <hr class="back-line">
            <div class="container" id="whiteRect">
                <p id="space">space</p>
            </div>
        </div>
        <div class="container col-sm-4">
            <form v-on:submit.prevent="login()">
                <div class="container col-sm-6">
                    <div class="form-group">
                        <label for="exampleInputEmail">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail" placeholder="Email"
                            v-model="emailLogin" required>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword">Palavra-Passe:</label>
                        <input type="password" class="form-control" id="exampleInputPassword"
                            placeholder="Palavra-Passe" v-model="passwordLogin" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Entrar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoginForm",
        data: () => ({
            emailLogin: "",
            passwordLogin: "",
        }),
        created: function () {
            if (localStorage.getItem("users")) {
                this.$store.state.users = JSON.parse(localStorage.getItem("users"))
            }
            if (localStorage.getItem("loggedUser")) {
                this.$store.state.loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
            }
        },
        methods: {
            login() {
                this.$store.commit('LOGIN', {
                    email: this.emailLogin,
                    password: this.passwordLogin,
                })
            },
            toRegister() {
                router.push({
                    name: 'register'
                })
            }
        }
    };
</script>

<style lang="css" scoped>
    #input-group-4,
    #input-group-1 {
        padding: 20px;
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
        width: 340px;
        position: relative;
        display: block;
        z-index: 5;
    }
</style>
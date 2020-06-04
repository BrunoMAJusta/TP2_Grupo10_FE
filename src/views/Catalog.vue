<template>
    <div>
        <div class="container-full title">
            <h1 id="redTitle">Catálogo de EPIs</h1>
            <hr class="back-line">
            <div class="container" id="whiteRect">
                <p id="space">space</p>
            </div>
        </div>

        <!-- <div class="container">
            <div class="card" style="width: 18rem;" v-for="epi in epis" :key="epi.id">
                <img class="card-img-top" src="..." alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{epi.name}}</h5>
                    <p class="card-text">Preço: {{epi.name}}</p>
                    <a href="#" class="btn btn-primary">ver Mais</a>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
    import {
        mapGetters
    } from "vuex";

    export default {
        data: function () {
            return {
                epis: [],
                userType: "",
                users: []
            };
        },
        created() {
            /* this.getMyMenus(); */
            if (localStorage.getItem("users")) {
                this.$store.state.users = JSON.parse(localStorage.getItem("users"));
            }
            this.users = this.$store.state.users;
            this.userType = this.$store.state.loggedUser.type;
        },
        methods: {
            /* async getEpis() {
              try {
                await this.$store.dispatch("fetchEpis");
                this.epis = this.getEpis.data;
              } catch (err) {
                alert(err);
              }
            } */
        },
        computed: {
            /* ...mapGetters(["getMenus"]), */
        }
    }
</script>

<style lang="css" scoped>
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
        width: 80vw;
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
        width: 600px;
        position: relative;
        display: block;
        z-index: 5;
    }
</style>
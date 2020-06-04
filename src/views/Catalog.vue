<template>
    <div>
        <div class="container-full title">
            <h1 id="redTitle">Catálogo de EPIs</h1>
            <hr class="back-line">
            <div class="container" id="whiteRect">
                <p id="space">space</p>
            </div>
        </div>

        <div class="container">
            <div class="card" style="width: 18rem;" v-for="epi in epis" :key="epi.epi_id">
                <img class="card-img-top" :src="epi.img" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{epi.name}}</h5>
                    <p class="card-text">Preço: {{epi.price}}</p>
                    <button type="button" @click="showDetais(epi.epi_id)" squared>Ver</button>
                    <button type="button" @click="addToCart(epi.epi_id)" squared>Encomendar</button>
                </div>
            </div>
        </div>

        <div class="container">
            
        </div>
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
                orders: [],
                userType: "",
                users: []
            };
        },
        created() {
            this.getEpis();
            if (localStorage.getItem("users")) {
                this.$store.state.users = JSON.parse(localStorage.getItem("users"));
            }
            this.users = this.$store.state.users;
            this.userType = this.$store.state.loggedUser.type;
        },
        methods: {
            async getEpis() {
                try {
                    await this.$store.dispatch("fetchEpis");
                    this.epis = this.getEPIS.data;
                } catch (err) {
                    alert(err);
                }
            },
            async addOrder() {
                try {
                    await this.$store.dispatch("fetchOrderEpi");
                    /* this.orders = this.getOrders.data; */
                } catch (err) {
                    alert(err);
                }
            }
        },
        computed: {
            ...mapGetters(["getEPIS"])
            /* ...mapGetters(["getOrders"]) */
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
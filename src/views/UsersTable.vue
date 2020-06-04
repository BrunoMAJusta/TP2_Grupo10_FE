<template>
    <div>
        <table class="table table-striped table-dark">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Email</th>
                    <th scope="col">Opções</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user of users" :key="user.id">
                    <th scope="row">{{user.id}}</th>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td><button type="button" class="btn btn-primary" @click="edit(user.id)">Editar</button>
                        <button type="button" class="btn btn-primary" @click="del(user.id)">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data: () => ({
            users: []
        }),
        created: function () {
            if (localStorage.getItem("users")) {
                this.$store.state.users = JSON.parse(localStorage.getItem("users"))
                this.users = this.$store.state.users
            }
            console.log(this.users)
        },
        methods: {
            edit(id) {

            },
            del(id) {

            }
        }
    };
</script>

<style lang="css" scoped>

</style>
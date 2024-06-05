<template>
    <div class="container">
        <div class="row my-4">
            <h1>Usuários</h1>
        </div>
        <div class="row mt-4">
            <table
                class="table table-striped table-hover"
                v-if="users.length > 0"
            >
                <thead>
                    <tr>
                        <th scope="col">Código</th>
                        <th scope="col">Nome</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Admin</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="user in users"
                        :class="{ 'table-primary': user.admin }"
                    >
                        <th scope="row">{{ user.id }}</th>
                        <td>{{ user.name }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.admin ? "Sim" : "Não" }}</td>
                    </tr>
                </tbody>
            </table>
            <div v-else>
                <p>Não há usuários registrados.</p>
            </div>
        </div>
        <!-- <div class="row">
            <div class="pagination-content">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link" href="#">Anterior</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">1</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">3</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">Próximo</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div> -->
    </div>
</template>

<script>
import UserDataService from "../services/UserDataService";
export default {
    name: "users-list",
    data() {
        return {
            users: [],
        };
    },
    methods: {
        getAllUsers() {
            UserDataService.getAll()
                .then((res) => {
                    this.users = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    mounted() {
        this.getAllUsers();
    },
};
</script>

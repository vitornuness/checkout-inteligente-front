<template>
    <div class="container">
        <div class="row my-4">
            <div class="col-11">
                <h1>Categorias</h1>
            </div>
            <div class="col-1">
                <router-link to="categories/new" class="btn btn-primary">
                    <strong>Adicionar</strong>
                </router-link>
            </div>
        </div>
        <div class="row mt-4 card">
            <table
                class="table table-light table-hover"
                v-if="categories.length > 0"
            >
                <thead>
                    <tr>
                        <th scope="col">Código</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Produtos</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="category in categories">
                        <th scope="row">{{ category.id }}</th>
                        <td>{{ category.name }}</td>
                        <td>{{ category.products.length }}</td>
                        <td>
                            <div class="actions">
                                <router-link
                                    :to="`/categories/${category.id}/edit`"
                                    class="btn btn-warning"
                                >
                                    <i class="bi bi-pencil-square"></i>
                                </router-link>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="row" v-else>
                <p>Não há categorias registradas.</p>
            </div>
        </div>
    </div>
</template>

<script>
import CategoryDataService from "../services/CategoryDataService";

export default {
    name: "products-list",
    data() {
        return {
            categories: [],
        };
    },
    methods: {
        getAllCategories() {
            CategoryDataService.getAll()
                .then((res) => {
                    this.categories = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    watch: {
        $route: function (to, from) {
            if (to.path === "/categories") {
                this.getAllCategories();
            }
        },
    },
    mounted() {
        this.getAllCategories();
    },
};
</script>

<style>
.pagination-content {
    display: flex;
    align-items: center;
    justify-content: center;
}

.actions {
    display: flex;
    gap: 10px;
}

.bi {
    color: white;
}
</style>

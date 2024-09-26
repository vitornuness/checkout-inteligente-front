<template>
    <div class="container">
        <div class="row my-4">
            <div class="col-10">
                <h1>Categorias</h1>
            </div>
            <div class="col-2">
                <router-link to="categories/new">
                    <button class="btn btn-primary">Adicionar</button>
                </router-link>
            </div>
        </div>
        <div class="row mt-4 card">
            <table
                class="table table-striped table-hover"
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

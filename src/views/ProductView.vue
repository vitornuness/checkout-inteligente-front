<template>
    <div class="container">
        <div class="row my-4">
            <div class="col-10">
                <h1>Produtos</h1>
            </div>
            <div class="col-2">
                <router-link to="products/new">
                    <button class="btn btn-primary">Adicionar</button>
                </router-link>
            </div>
        </div>
        <div class="row mt-4 card">
            <table
                class="table table-striped table-hover"
                v-if="products.length > 0"
            >
                <thead>
                    <tr>
                        <th scope="col">Código</th>
                        <th scope="col">Imagem</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Quantidade</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products">
                        <th scope="row">{{ product.id }}</th>
                        <td>
                            <!-- <img :src="product.image" alt="..." width="100vh" /> -->
                        </td>
                        <td>{{ product.name }}</td>
                        <td>{{ product.category.name }}</td>
                        <td>{{ product.quantity }}</td>
                        <td>{{ product.price }}</td>
                        <td>
                            <div class="actions">
                                <router-link
                                    :to="`/products/${product.id}/edit`"
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
                <p>Não há produtos registrados.</p>
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
import ProductDataService from "../services/ProductDataService";

export default {
    name: "products-list",
    data() {
        return {
            products: [],
        };
    },
    methods: {
        getAllProducts() {
            ProductDataService.getAll()
                .then((res) => {
                    this.products = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    mounted() {
        this.getAllProducts();
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

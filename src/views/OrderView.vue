<template>
    <div class="container">
        <div class="row my-4">
            <h1>Pedidos</h1>
        </div>
        <div class="row mt-4">
            <table
                class="table table-striped table-hover"
                v-if="orders.length > 0"
            >
                <thead>
                    <tr>
                        <th scope="col">Código</th>
                        <th scope="col">Usuário</th>
                        <th scope="col">Qtd. Produtos</th>
                        <th scope="col">Valor Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="order in orders">
                        <th scope="row">{{ order.id }}</th>
                        <td>{{ order.user.name }}</td>
                        <td>{{ order.products.length }}</td>
                        <td>{{ order.total }}</td>
                    </tr>
                </tbody>
            </table>
            <div v-else>
                <p>Não há pedidos no momento.</p>
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
import OrderDataService from "../services/OrderDataService";
export default {
    name: "orders-list",
    data() {
        return {
            orders: [],
        };
    },
    methods: {
        getAllOrders() {
            OrderDataService.getAll()
                .then((res) => {
                    this.orders = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    watch: {
        $route: function (to, from) {
            if (to.path === "/orders") {
                this.getAllOrders();
            }
        },
    },
    mounted() {
        this.getAllOrders();
    },
};
</script>

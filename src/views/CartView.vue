<template>
    <div class="container text-center">
        <div class="row align-items-start">
            <div class="card mb-3 mt-5">
                <div class="row">
                    <div class="col-md-6">
                        <div class="produtos">
                            <div class="card mb-3 mt-2">
                                <div class="row g-0" v-for="item in cart.items">
                                    <div class="col-md-4">
                                        <!-- <img
                                            :src="`http://localhost:5102/api/images/${item.product.imageId}`"
                                            class="img-fluid mt-3"
                                            :alt="item.product.name"
                                        /> -->
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                {{ item }}
                                            </h5>
                                            <p class="card-text">
                                                <small
                                                    class="text-body-secondary"
                                                    >R$
                                                    <!-- {{
                                                        item.product.price.toFixed(
                                                            2
                                                        )
                                                    }} -->
                                                </small>
                                            </p>
                                            <button
                                                class="btn btn-primary d-flex align-items-end flex-column mb-3"
                                                @click="
                                                    removeProduct(
                                                        item.product.id
                                                    )
                                                "
                                            >
                                                <i class="bi bi-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <label
                            for="customRange2"
                            class="form-label mt-2 mb-0 border-top border-start border-end"
                            >Frete gratis</label
                        >
                        <p class="border-start border-end mt-0 mb-0">
                            Falta apenas 32 reais para seu frete gratis!
                        </p>
                        <div
                            class="progress"
                            role="progressbar"
                            aria-label="Basic example"
                            aria-valuenow="0"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            <div class="progress-bar" style="width: 70%"></div>
                        </div>
                    </div>

                    <div class="card col-md-6">
                        <div class="card-body">
                            <h5 class="card-title">Resumo da compra:</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li
                                class="list-group-item"
                                v-for="product in cart.items"
                            >
                                {{ product.name }} - R$ {{ product.price }}
                            </li>
                        </ul>
                        <div class="card-body" v-if="cart.items.length > 0">
                            <button type="button" class="btn btn-success">
                                <div class="row">
                                    <router-link
                                        to="checkout"
                                        class="btn btn-sucess"
                                        style="color: white"
                                        >Continuar para Pagamento</router-link
                                    >
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <h2>Produtos em campanhas</h2>
        <div class="row" v-if="campaignsProducts.length > 0">
            <ProductCard
                v-for="product in campaignsProducts"
                :product="product"
            />
        </div>
        <h2>Produtos mais comprados</h2>
        <div class="row" v-if="products.length > 0">
            <ProductCard v-for="product in products" :product="product" />
        </div>
    </div>
</template>

<script>
import OrderDataService from "@/services/OrderDataService";
import ProductCard from "../components/home/ProductCard.vue";

import { session } from "../session";

export default {
    name: "cart",
    components: {
        ProductCard,
    },
    data() {
        return {
            cart: session().cart,
            products: [],
            campaignsProducts: [],
        };
    },
    methods: {
        getSuggestions() {
            OrderDataService.getSugestions(cart.id, false, session().token)
                .then((res) => {
                    this.products = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
            OrderDataService.getSugestions(cart.id, true, session().token)
                .then((res) => {
                    this.campaignsProducts = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        removeProduct(productId) {
            OrderDataService.removeProduct(cart.id, productId)
                .then((res) => {
                    location.reload();
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    mounted() {
        this.getSuggestions();
    },
};
</script>

<style>
.produtos {
    height: 500px;
    overflow: auto;
}
</style>

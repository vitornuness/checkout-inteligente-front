<template>
    <div class="container text-center">
        <div class="row align-items-start">
            <div class="card mb-3 mt-5">
                <div class="row">
                    <div class="col-md-8">
                        <div class="produtos">
                            <div
                                class="card mb-3 mt-2"
                                v-if="cart.items.length > 0"
                            >
                                <div class="row g-0" v-for="item in cart.items">
                                    <div class="col-md-2">
                                        <img
                                            :src="`http://localhost:5102/api/images/${item.product.imageId}`"
                                            class="img-fluid mt-3"
                                            style="height: 5rem"
                                            :alt="item.product.name"
                                        />
                                    </div>
                                    <div class="col-md-8">
                                        <div
                                            class="card-body d-flex justify-content-between"
                                        >
                                            <h5 class="card-title">
                                                {{ item.product.name }}
                                            </h5>
                                            <p class="card-text">
                                                {{ item.quantity }} Un.
                                            </p>
                                            <p class="card-text">
                                                R$
                                                {{
                                                    item.product.price.toFixed(
                                                        2
                                                    )
                                                }}
                                            </p>
                                            <div class="col-sm-2">
                                                <button
                                                    class="btn btn-primary mb-3"
                                                    @click="
                                                        addProduct(
                                                            item.product.id
                                                        )
                                                    "
                                                >
                                                    <i class="bi bi-plus"></i>
                                                </button>
                                                <button
                                                    class="btn btn-primary mb-3"
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
                            <div class="card mb-3 mt-2" v-else>
                                <p>Não há produtos no carrinho.</p>
                            </div>
                        </div>
                        <!-- <label
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
                        </div> -->
                    </div>

                    <div class="card col-md-4">
                        <div class="card-body">
                            <h5 class="card-title">Resumo da compra:</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li
                                class="list-group-item d-flex justify-content-between"
                                v-for="item in cart.items"
                            >
                                <span>{{ item.product.name }}</span>
                                <span>{{ item.quantity }} Un.</span>
                                <span>
                                    R$
                                    {{ item.total.toFixed(2) }}
                                </span>
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
        <div
            class="row suggested-products"
            v-if="campaignsProducts.length > 0 && !cart.freeShipping"
        >
            <h2>Produtos em campanhas</h2>
            <div class="product-list">
                <ProductCard
                    v-for="product in campaignsProducts"
                    :product="product"
                    @productAdded="updateCart"
                />
            </div>
        </div>
        <div class="row suggested-products" v-if="products.length > 0">
            <h2>Produtos mais comprados</h2>
            <div class="product-list">
                <ProductCard
                    v-for="product in products"
                    :product="product"
                    @productAdded="updateCart"
                />
            </div>
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
        getCart() {
            OrderDataService.getOrderByUser(session().user.id, session().token)
                .then((res) => {
                    this.cart = res.data;
                    this.getSuggestions();
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        getSuggestions() {
            OrderDataService.getSugestions(this.cart.id, false, session().token)
                .then((res) => {
                    this.products = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
            OrderDataService.getSugestions(this.cart.id, true, session().token)
                .then((res) => {
                    this.campaignsProducts = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        addProduct(productId) {
            OrderDataService.addProduct(
                this.cart.id,
                productId,
                session().token
            )
                .then((res) => {
                    OrderDataService.getOrderByUser(
                        session().user.id,
                        session().token
                    )
                        .then((res) => {
                            session().cart = res.data;
                            this.cart = session().cart;
                            this.getSuggestions();
                        })
                        .catch((err) => console.log(err));
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        removeProduct(productId) {
            OrderDataService.removeProduct(
                this.cart.id,
                productId,
                session().token
            )
                .then((res) => {
                    OrderDataService.getOrderByUser(
                        session().user.id,
                        session().token
                    )
                        .then((res) => {
                            session().cart = res.data;
                            this.cart = session().cart;
                            this.getSuggestions();
                        })
                        .catch((err) => console.log(err));
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        updateCart() {
            this.getCart();
            this.getSuggestions();
        },
    },
    mounted() {
        this.getCart();
    },
};
</script>

<style>
.produtos {
    height: 500px;
    overflow: auto;
}

.suggested-products {
    overflow: auto;
}

.product-list {
    display: flex;
    flex-wrap: nowrap;
}
</style>

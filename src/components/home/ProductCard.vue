<template>
    <div class="col-md-6 col-sm-12 col-lg-3 mb-4">
        <div class="card p-1">
            <img
                :src="`http://localhost:5102/api/images/${product.imageId}`"
                :alt="product.name"
                width="100vh"
                class="card-img-top"
            />
            <div class="card-body">
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-text">R$ {{ product.price.toFixed(2) }}</p>
                <button class="btn btn-primary" @click="addToCart()">
                    Adicionar
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import OrderDataService from "../../services/OrderDataService";
import { session } from "../../session";

export default {
    name: "product-card",
    props: {
        product: {
            id: "",
            name: "",
            image: "",
            category: "",
            quantity: "",
            price: "",
        },
    },
    methods: {
        addToCart() {
            OrderDataService.addProduct(
                session().cart.id,
                this.product.id,
                session().token
            ).catch((err) => console.log(err));
        },
    },
};
</script>

<style>
.card {
    border: none;
    border-radius: 4px !important;
    background: #f7f1f1;
}

.btn-primary {
    background: #13293d;
    border: none;
    width: 100%;
}

.btn-primary:hover {
    background: #13293d;
    opacity: 0.9;
    transition: 0.5s ease-in-out;
}
</style>

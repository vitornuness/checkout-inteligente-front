<script setup>
import { useUserStore } from "@/store/user";
</script>

<template>
    <div class="col-md-6 col-sm-12 col-lg-3 mb-4">
        <div
            class="card p-2 d-flex flex-column justify-content-between"
            style="width: 15rem; height: 20rem; position: relative"
        >
            <div style="width: 100%; text-align: center">
                <img
                    :src="product.imageUrl"
                    :alt="product.name"
                    class="card-img-top"
                />
            </div>
            <div
                class="card-body d-flex flex-column justify-content-between"
                style="width: 100%; position: absolute; bottom: 0"
            >
                <div>
                    <h5 class="card-title text-truncate">
                        {{ product.name }}
                    </h5>
                    <p class="card-text">R$ {{ product.price.toFixed(2) }}</p>
                </div>
                <button
                    v-if="useUserStore().user"
                    class="btn btn-primary mt-4"
                    @click="addToCart()"
                >
                    Adicionar
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { useCartStore } from "@/store/cart";
import OrderDataService from "../../services/OrderDataService";
import SideCart from "../SideCart.vue";

export default {
    name: "product-card",
    components: { SideCart },
    props: {
        product: {
            id: "",
            name: "",
            image: "",
            category: "",
            quantity: "",
            price: "",
        },
        methods: {
            addToCart() {
                OrderDataService.addProduct(
                    useCartStore().cart.id,
                    this.product.id
                );
            },
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

.card-img-top {
    width: 8rem;
}

.btn-primary {
    background-color: #007bff;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.btn-primary:hover {
    background-color: #0056b3;
}
</style>

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
                    <h5 class="card-title">{{ product.name }}</h5>
                    <p class="card-text">R$ {{ product.price.toFixed(2) }}</p>
                </div>
                <button class="btn btn-primary" @click="addToCart()">
                    Adicionar
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import OrderDataService from "../../services/OrderDataService";
import { useUserStore } from "../../store/user";

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
                useUserStore().cart.id,
                this.product.id,
                useUserStore().token
            )
                .then(() => {
                    OrderDataService.getOrderByUser(
                        useUserStore().user.id,
                        useUserStore().token
                    )
                        .then((res) => {
                            useUserStore().cart = res.data;
                        })
                        .catch((err) => console.log(err));
                    this.$emit("productAdded");
                })
                .catch((err) => console.log(err));
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

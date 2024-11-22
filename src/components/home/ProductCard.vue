<script setup>
import { useUserStore } from "@/store/user";
</script>

<template>
    <div class="col-md-6 col-sm-12 col-lg-3 mb-4">

        <div class="product-alert" :hidden="!showAlert">
            <i class="bi bi-bag-check-fill"></i>
            Produto adicionado ao carrinho!
        </div>
        <div class="card bg-white rounded" style="width: 16vw">
            <div class="img-card">
                <img
                    :src="product.imageUrl"
                    :alt="product.name"
                    class="card-img-top img-fluid"
                />
            </div>
            <div class="card-body justify-content-between">
                <div>
                    <h5 class="card-title text-truncate">
                        {{ product.name }}
                    </h5>
                    <p class="card-text">R$ {{ product.price.toFixed(2) }}</p>
                </div>
                <button
                    v-if="useUserStore().user"
                    class="btn btn-primary mt-4 w-100"
                    @click="addToCart()"
                >
                    <i class="bi bi-cart-plus"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { useCartStore } from "@/store/cart";
import OrderDataService from "../../services/OrderDataService";

export default {
    name: "ProductCard",
    props: {
        product: Object
    },
    data () {
        return {
            showAlert: false,
        }
    },
    methods: {
        async addToCart() {
            var cart = await useCartStore().handleCart()
            OrderDataService.addProduct(cart.id, this.product.id)
                .then(() => {
                    this.$emit("productAdded");
                    this.displayAlert();
                })
                .catch((err) => console.log(err));
        },
        displayAlert() {
            this.showAlert = true;
            setTimeout(() => {
                this.showAlert = false;
            }, 3000);
        }
    },
};
</script>

<style scoped>
.card {
    border: none;
    border-radius: 4px !important;
    background: #f7f1f1;
}

.card-img-top {
    width: 8rem;
}

.img-card {
    text-align: center;
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

.product-alert {
    position: fixed !important;
    text-align: end;
    top: 2rem;
    right: 2rem;
    max-width: 60vw;
    padding: 0.4rem 2rem;
    border-radius: 4px;
    z-index: 99;
    background-color: #f90;
    color: white;
    font-weight: bold;
    font-size: 14pt;
}
</style>

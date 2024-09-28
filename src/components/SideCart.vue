<template>
    <button
        type="button"
        class="btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        @click="getCart()"
    >
        <i class="bi bi-cart3"></i>
    </button>

    <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <div id="sideCart" class="side-cart">
                        <h2>
                            Itens no carrinho (<span id="item-count">{{
                                cart ? cart.items.length : ""
                            }}</span
                            >)
                        </h2>
                        <div
                            v-if="loading"
                            class="spinner-border"
                            role="status"
                        ></div>
                        <div
                            v-if="cart?.items.length > 0 && !loading"
                            class="product-list flex flex-column"
                        >
                            <div
                                v-for="item in cart?.items"
                                class="card mb-3 bg-white"
                                style="max-width: 100vw"
                            >
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img
                                            :src="item.product.imageUrl"
                                            class="img-fluid rounded-start"
                                            :alt="item.product.name"
                                        />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body text-right">
                                            <h5
                                                class="card-title text-truncate"
                                            >
                                                {{ item.product.name }}
                                            </h5>
                                            <p class="card-text">
                                                <strong>
                                                    R$
                                                    {{
                                                        item.product.price.toFixed(
                                                            2
                                                        )
                                                    }}
                                                </strong>
                                            </p>
                                            <div>
                                                <small>
                                                    <button
                                                        class="btn btn-primary"
                                                        @click="
                                                            add(item.product.id)
                                                        "
                                                        :disabled="loading"
                                                    >
                                                        <i
                                                            class="bi bi-plus-circle"
                                                        ></i>
                                                    </button>
                                                    <span class="mx-4">{{
                                                        item.quantity
                                                    }}</span>
                                                    <button
                                                        class="btn btn-primary"
                                                        @click="
                                                            remove(
                                                                item.product.id
                                                            )
                                                        "
                                                        :disabled="loading"
                                                    >
                                                        <i
                                                            class="bi bi-dash-circle"
                                                        ></i>
                                                    </button>
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-3 mt-2" v-else>
                            <p v-if="!loading">Não há produtos no carrinho.</p>
                        </div>
                        <div class="cart-summary" v-if="!loading">
                            <h3 class="text-right">
                                Subtotal:
                                <strong id="subtotal"
                                    >R$
                                    {{ cart?.totalAmount.toFixed(2) }}</strong
                                >
                            </h3>
                        </div>
                        <div class="cart-actions" v-if="!loading">
                            <RouterLink
                                to="/cart"
                                class="btn btn-primary btn-cart"
                            >
                                Ir para o Carrinho
                            </RouterLink>
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Continuar comprando
                            </button>
                        </div>
                    </div>
                </div>
                <div class="modal-footer"></div>
            </div>
        </div>
    </div>
</template>

<script>
import OrderDataService from "@/services/OrderDataService";
import { useCartStore } from "@/store/cart";
import { useUserStore } from "@/store/user";
import { ref } from "vue";
import { RouterLink } from "vue-router";

export default {
    name: "side-cart",
    data() {
        return {
            cart: ref(null),
            loading: false,
        };
    },
    methods: {
        getCart() {
            this.loading = true;
            OrderDataService.fetchCurrentUserOrder(useUserStore().user.id)
                .then((res) => {
                    this.cart = res.data;
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        add(productId) {
            this.loading = true;
            OrderDataService.addProduct(useCartStore().cart.id, productId)
                .then(() => {
                    this.getCart();
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        remove(productId) {
            this.loading = true;
            OrderDataService.removeProduct(useCartStore().cart.id, productId)
                .then(() => {
                    this.getCart();
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    this.loading = false;
                });
        },
    },
    mounted() {
        this.getCart();
    },
};
</script>

<style>
.modal-dialog {
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    margin: 0;
    max-width: none;
    width: 30vw;
}

.modal-content {
    height: 100%;
}

.modal-body {
    padding: 20px;
    background-color: #f8f9fa;
    color: #495057;
    border-radius: 0;
}

#sideCart {
    border: 1px solid #dee2e6;
    border-radius: 5px;
    padding: 15px;
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.cart-item {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    padding: 10px;
    border-bottom: 1px solid #dee2e6;
}

.cart-summary {
    border-top: 1px solid #dee2e6;
    padding-top: 15px;
    margin-top: 15px;
    font-weight: bold;
}

.cart-actions {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.product-list {
    max-height: 70vh;
    margin-bottom: 20px;
    overflow-y: auto;
    overflow-x: hidden;
}

.product-image {
    width: 60px;
    height: 60px;
    object-fit: cover;
    margin-right: 15px;
    border-radius: 5px;
}
</style>

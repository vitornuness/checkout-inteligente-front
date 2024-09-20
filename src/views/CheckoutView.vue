<script setup></script>

<template>
    <div class="container">
        <div class="container text-center">
            <h1>Checkout</h1>
            <div class="row">
                <div class="col p-0">
                    <div class="mb-3">
                        <CheckoutCard
                            nome="Enviar para o meu endereço - Sedex"
                            valor="R$22,90"
                        />
                    </div>
                    <div class="mb-3">
                        <CheckoutCard
                            nome="Enviar para o meu endereço - Entrega convêncional"
                            valor="R$14,80"
                        />
                    </div>
                    <div class="mb-3">
                        <CheckoutCard
                            nome="Retirar na agência mais próxima"
                            valor="R$7,60"
                        />
                    </div>
                </div>
                <div class="col-4 p-0">
                    <button class="btn btn-success" @click="completeOrder()">
                        Finalizar compra
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import router from "@/router";
import CheckoutCard from "../components/checkout/CheckoutCard.vue";
import OrderDataService from "../services/OrderDataService";

import { useUserStore } from "../store/user";

export default {
    name: "checkout",
    components: {
        CheckoutCard,
    },
    data() {
        return {
            cart: useUserStore().cart,
        };
    },
    methods: {
        completeOrder() {
            OrderDataService.completeOrder(order.id, useUserStore().token)
                .then((res) => {
                    this.$router.push("/");
                })
                .catch((err) => console.log(err));
        },
    },
};
</script>

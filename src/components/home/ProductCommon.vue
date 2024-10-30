<script setup>
import { useUserStore } from "@/store/user";
</script>

<template>
    <div class="produtos-container">
        <div class="produto-card" v-for="product in products" :key="product.id">
            <img
                :src="product.imageUrl"
                :alt="product.name"
                class="product-imagem"
            />
            <h3 class="text-truncate">{{ product.name }}</h3>
            <p>R$ {{ product.price.toFixed(2) }}</p>
            <button
                v-if="useUserStore().user"
                class="botao-comprar"
                @click="addToCart(product.id)"
            >
                <i class="bi bi-cart-plus"></i>
            </button>
        </div>
    </div>
</template>

<script>
import OrderDataService from "@/services/OrderDataService";
import { useCartStore } from "@/store/cart";

export default {
    props: {
        products: Array,
    },
    methods: {
        addToCart(id) {
            OrderDataService.addProduct(useCartStore().cart.id, id);
        },
    },
};
</script>

<style scoped>
.produtos-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
}

.produto-card {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.produto-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.produto-imagem {
    width: 100px;
    height: auto;
    margin: 0 auto;
    display: block;
}

h3 {
    margin: 10px 0;
    font-size: 1.1rem;
}

.avaliacao {
    color: #ffc107;
    margin: 10px 0;
}

.botao-comprar {
    background-color: #007bff;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.botao-comprar:hover {
    background-color: #0056b3;
}
</style>

<template>
    <div class="mais-vendidos-container">
        <h2>Mais Vendidos da Semana</h2>
        <div class="carrossel bg-white rounded">
            <Produto
                v-for="product in products"
                :key="product.id"
                :product="product"
            />
        </div>
    </div>
</template>

<script>
import Produto from "./Produto.vue";

export default {
    components: { Produto },
    props: {
        products: Array,
    },
};
</script>

<style scoped>
.mais-vendidos-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
}

.carrossel {
    display: flex;
    overflow-x: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    gap: 20px;
    max-width: 100%;
    scroll-behavior: smooth;
}

.carrossel::-webkit-scrollbar {
    display: none;
}

.produto {
    min-width: 200px;
    flex-shrink: 0;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.produto img {
    max-width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.3s ease;
}

.produto img:hover {
    transform: scale(1.1);
}
</style>

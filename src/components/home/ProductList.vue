<script setup></script>

<template>
    <div class="container-fluid">
        <div class="row">
            <ProductCard
                v-for="product in products"
                :key="product.id"
                :product="product"
            />
        </div>
    </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
export default {
    name: "product-list",
    components: {
        ProductCard,
    },
    props: {
        products: Array,
    },
};
</script>

<style></style>

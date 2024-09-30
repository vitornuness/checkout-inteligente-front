<template>
    <div class="produto">
        <ProductCard :key="product.id" :product="product" />
    </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";

export default {
    props: { product: Object },
    components: { ProductCard },
};
</script>

<style scoped>
.produto {
    margin: 10px;
}
</style>

<template>
    <div class="categorias-container">
        <div
            class="categoria pb-4"
            v-for="category in categories"
            :key="category.id"
        >
            <img
                :src="category.imageUrl"
                :alt="category.name"
                class="categoria-imagem"
            />
            <h3 class="my-4">{{ category.name }}</h3>
            <RouterLink
                :to="`/categories/${category.id}/products`"
                class="botao-produtos"
            >
                Ver Produtos
            </RouterLink>
        </div>
    </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
    name: "Categories",
    props: {
        categories: Array,
    },
};
</script>

<style scoped>
.categorias-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
}

.categoria {
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.categoria:hover {
    transform: translateY(-10px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
}

.categoria-imagem {
    width: 100%;
    height: auto;
    border-radius: 8px;
}

h3 {
    margin-top: 10px;
    font-size: 1.2em;
}

.botao-produtos {
    padding: 10px 20px;
    background-color: #f90;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.botao-produtos:hover {
    background-color: #ff7400;
    text-decoration: none;
}
</style>

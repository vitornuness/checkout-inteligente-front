<template>
    <div v-if="category" class="container-fluid">
        <h1 class="my-4">{{ category.name }}</h1>
        <hr />
        <div class="row">
            <div class="col-xxl-8">
                <ProductList :products="category.products" />
            </div>
        </div>
    </div>
</template>

<script>
import ProductList from "@/components/home/ProductList.vue";
import CategoryDataService from "@/services/CategoryDataService";
import { ref } from "vue";

export default {
    name: "CategoryProducts",
    components: {
        ProductList,
    },
    data() {
        return {
            category: ref(null),
        };
    },
    methods: {
        getCategory(id) {
            CategoryDataService.get(id)
                .then((res) => {
                    this.category = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    mounted() {
        this.getCategory(this.$route.params.id);
    },
};
</script>

<style></style>

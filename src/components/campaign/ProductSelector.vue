<template>
    <label for="products">Selecione os produtos para a campanha</label>
    <div class="row row-cols-1 row-cols-md-3 mt-4">
        <div v-for="product in products" :key="product.id" class="col">
            <button
                class="card border p-2 pointer"
                style="width: 9vw"
                :class="{ 'border-primary': isSelected(product.id) }"
                @click="toggleProductSelection(product.id)"
            >
                <img
                    :src="product.imageUrl"
                    :alt="'Image do produto: ' + product.name"
                    class="m-auto"
                    style="width: 4vw"
                />
                <div class="card-body">
                    <p class="card-title text-truncate">
                        {{ product.name }}
                    </p>
                    <small class="card-text">
                        <li class="list-group-item">
                            {{ product.quantity }}
                        </li>
                        <li class="list-group-item">
                            R${{ product.price.toFixed(2) }}
                        </li>
                    </small>
                </div>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductSelector",
    props: {
        products: {
            type: Array,
            required: true,
        },
        selectedProductIds: {
            type: Set,
            required: true,
        },
    },
    methods: {
        toggleProductSelection(id) {
            if (this.selectedProductIds.has(id)) {
                this.selectedProductIds.delete(id);
            } else {
                this.selectedProductIds.add(id);
            }
            this.$emit("update:products", Array.from(this.selectedProductIds));
        },
        isSelected(id) {
            return this.selectedProductIds.has(id);
        },
    },
};
</script>

<style>
.border:hover {
    border-color: #1177d6 !important;
}

.border-primary {
    border-color: #1177d6 !important;
    border-width: 2px !important;
}
</style>

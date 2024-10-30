<template>
    <label for="products">Selecione os produtos para a campanha</label>
    <div
        class="row mt-4"
        style="height: 50vh; overflow-y: scroll; overflow-x: hidden"
    >
        <div
            v-for="product in products"
            :key="product.id"
            class="col-4"
            style="padding: 0; margin: 0"
        >
            <button
                class="card border pointer w-100"
                :class="{ 'border-primary': isSelected(product.id) }"
                @click="toggleProductSelection(product.id)"
            >
                <img
                    :src="product.imageUrl"
                    :alt="'Image do produto: ' + product.name"
                    class="m-auto"
                    style="width: 4vw"
                />
                <div class="card-body" style="padding-inline: 10px">
                    <p class="card-title text-truncate">
                        <small
                            ><strong>{{ product.name }}</strong></small
                        >
                    </p>
                    <small class="card-text">
                        {{ product.quantity }}
                        <hr />
                        R${{ product.price.toFixed(2) }}
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

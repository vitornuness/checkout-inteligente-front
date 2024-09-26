<template>
    <div class="container center">
        <h1>Editar produto</h1>

        <div v-if="submitted" class="alert alert-success">
            Produto atualizado com sucesso.
        </div>

        <div
            v-if="product"
            class="form row g-3 m-4 needs-validation"
            novalidate
        >
            <div class="row">
                <label for="name" class="form-label">Nome</label>
                <input
                    type="text"
                    class="form-control mb-4"
                    id="name"
                    name="name"
                    placeholder="Produto exemplo"
                    required
                    v-model="product.name"
                />
            </div>
            <div class="row">
                <label for="image" class="form-label">Imagem</label>
                <div class="row my-4">
                    <img
                        :src="fileUrl ?? product.imageUrl"
                        :alt="product.name"
                        style="width: auto; height: 20vh"
                    />
                </div>
                <input
                    type="file"
                    class="form-control mb-4"
                    id="image"
                    ref="image"
                    accept="image/*"
                    required
                    @change="setImage"
                />
            </div>
            <div class="row">
                <label for="category" class="form-label">Categoria</label>
                <select
                    name="category"
                    id="category"
                    class="form-control"
                    v-model="product.category.id"
                >
                    <option
                        v-for="category in categories"
                        :key="category.id"
                        :value="category.id"
                    >
                        {{ category.name }}
                    </option>
                </select>
            </div>
            <div class="row mt-4">
                <div class="col-md-6">
                    <label for="quantity" class="form-label">Quantidade</label>
                    <input
                        type="number"
                        class="form-control"
                        id="quantity"
                        name="quantity"
                        placeholder="0"
                        value="0"
                        required
                        v-model="product.quantity"
                    />
                </div>
                <div class="col-md-6">
                    <label for="price" class="form-label">Preço de venda</label>
                    <input
                        type="number"
                        class="form-control"
                        id="price"
                        name="price"
                        placeholder="0"
                        value="1.00"
                        step="0.01"
                        required
                        v-model="product.price"
                    />
                </div>
            </div>
            <div class="row my-4 g-4">
                <button class="btn btn-primary" @click="updateProduct()">
                    Confirmar
                </button>
                <router-link to="/products" class="btn btn-danger"
                    >Cancelar</router-link
                >
                <button class="btn btn-danger" @click="deleteProduct()">
                    Deletar
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import ProductDataService from "../services/ProductDataService";
import CategoryDataService from "../services/CategoryDataService";
import { ref } from "vue";

export default {
    name: "product-edit",
    data() {
        return {
            submitted: false,
            product: ref(null),
            file: null,
            fileUrl: null,
            categories: [],
        };
    },
    methods: {
        getProduct(id) {
            ProductDataService.get(id)
                .then((res) => {
                    this.product = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        getAllCategories() {
            CategoryDataService.getAll()
                .then((res) => {
                    this.categories = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        updateProduct() {
            var formData = new FormData();
            formData.append("file", this.file);

            var data = {
                id: this.product.id,
                name: this.product.name,
                quantity: this.product.quantity,
                price: this.product.price,
                categoryId: this.product.category.id,
                image: formData.get("file"),
            };

            ProductDataService.update(data.id, data)
                .then((res) => {
                    this.submitted = true;
                    this.file = null;
                    this.fileUrl = null;
                    this.$refs.image.value = null;
                    this.getProduct(data.id);

                    setTimeout(() => {
                        this.submitted = false;
                    }, 3000);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        setImage() {
            var file = this.$refs.image.files.item(0);
            this.file = file;

            if (file) {
                this.fileUrl = URL.createObjectURL(file);
            } else {
                this.fileUrl = null;
            }
        },
        deleteProduct() {
            ProductDataService.delete(this.product.id)
                .then(this.$router.push("/products"))
                .catch((err) => {
                    console.log(res);
                });
        },
    },
    mounted() {
        this.getProduct(this.$route.params.id);
        this.getAllCategories();
    },
};
</script>

<style></style>

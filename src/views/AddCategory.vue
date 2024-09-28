<script setup></script>

<template>
    <div class="container center bg-white rounded my-4 py-4">
        <div v-if="submitted">
            <h3>Categoria criada com sucesso.</h3>
            <button class="btn btn-primary mt-4" @click="newCategory()">
                Nova Categoria
            </button>
            <div class="row text-center mt-4">
                <router-link to="/categories"
                    >Voltar à lista de categorias</router-link
                >
            </div>
        </div>
        <div v-else>
            <h1>Nova categoria</h1>
            <div class="form g-3 m-4 needs-validation" novalidate>
                <div class="row">
                    <div class="col">
                        <label for="name" class="form-label">Nome</label>
                        <input
                            type="text"
                            class="form-control mb-4"
                            id="name"
                            name="name"
                            placeholder="Categoria exemplo"
                            required
                            v-model="category.name"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <label for="image" class="form-label">Imagem</label>
                        <div v-if="fileUrl" class="row my-4">
                            <img
                                :src="fileUrl"
                                :alt="category.name"
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
                </div>
                <div class="row my-4 justify-content-end">
                    <router-link to="/categories" class="btn btn-danger">
                        Cancelar
                    </router-link>
                    <button
                        class="btn btn-primary mx-4"
                        @click="saveCategory()"
                    >
                        Adicionar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CategoryDataService from "../services/CategoryDataService";

export default {
    name: "new-category",
    data() {
        return {
            submitted: false,
            category: {
                name: "",
            },
            file: null,
            fileUrl: null,
        };
    },
    methods: {
        saveCategory() {
            var formData = new FormData();
            formData.append("file", this.file);

            var data = {
                name: this.category.name,
                image: formData.get("file"),
            };

            CategoryDataService.create(data)
                .then((res) => {
                    this.submitted = true;
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
        newCategory() {
            (this.submitted = false), (this.category = {});
        },
    },
};
</script>

<style></style>

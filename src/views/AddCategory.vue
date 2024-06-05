<script setup></script>

<template>
    <div class="container center">
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
            <div class="form row g-3 m-4 needs-validation" novalidate>
                <div class="row">
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
                <div class="row my-4 g-4">
                    <button class="btn btn-primary" @click="saveCategory()">
                        Adicionar
                    </button>
                    <router-link to="/categories" class="btn btn-danger"
                        >Cancelar</router-link
                    >
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
        };
    },
    methods: {
        saveCategory() {
            var data = {
                name: this.category.name,
            };

            CategoryDataService.create(data)
                .then((res) => {
                    console.log(res);
                    this.submitted = true;
                })
                .catch((err) => {
                    console.log(err);
                });
        },

        newCategory() {
            (this.submitted = false), (this.category = {});
        },
    },
};
</script>

<style></style>

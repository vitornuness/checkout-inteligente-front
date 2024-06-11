<template>
    <div class="container center">
        <h1>Editar categoria</h1>

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
                <button class="btn btn-primary" @click="updateCategory()">
                    Confirmar
                </button>
                <router-link to="/categories" class="btn btn-danger"
                    >Cancelar</router-link
                >
                <button class="btn btn-danger" @click="deleteCategory()">
                    Deletar
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import CategoryDataService from "../services/CategoryDataService";

import { session } from "../session";

export default {
    name: "category-edit",
    data() {
        return {
            category: {
                id: "",
                name: "",
            },
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
        updateCategory() {
            var data = {
                id: this.category.id,
                name: this.category.name,
            };

            CategoryDataService.update(data.id, data, session().token)
                .then((res) => {
                    this.getCategory(data.id);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        deleteCategory() {
            CategoryDataService.delete(this.category.id, session().token)
                .then(this.$router.push("/categories"))
                .catch((err) => {
                    console.log(res);
                });
        },
    },
    mounted() {
        this.getCategory(this.$route.params.id);
    },
};
</script>

<style></style>

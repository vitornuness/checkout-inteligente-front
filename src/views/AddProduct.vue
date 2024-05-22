<script setup>
import { ref } from "vue";

let email = ref("");
let password = ref("");
const errors = ref([]);
</script>

<template>
    <div class="container center">
        <h1>Novo produto</h1>

        <div class="form row g-3 m-4 needs-validation" novalidate>
            <div class="row">
                <label for="name" class="form-label">Nome</label>
                <input
                    type="text"
                    class="form-control mb-4"
                    id="name"
                    name="name"
                    placeholder="Produto exemplo"
                    required
                />
            </div>
            <div class="row">
                <label for="image" class="form-label">Imagem</label>
                <input
                    type="file"
                    class="form-control mb-4"
                    id="image"
                    name="image"
                    required
                />
            </div>
            <div class="row">
                <label for="category" class="form-label">Categoria</label>
                <select name="category" id="category" class="form-control">
                    <option value="Categoria 1">Categoria 1</option>
                    <option value="Categoria 2">Categoria 2</option>
                    <option value="Categoria 3">Categoria 3</option>
                    <option value="Categoria 4">Categoria 4</option>
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
                    />
                </div>
            </div>
            <div class="row my-4 g-4">
                <button class="btn btn-primary">Adicionar</button>
                <router-link to="/products" class="btn btn-danger"
                    >Cancelar</router-link
                >
            </div>
        </div>
    </div>
</template>

<style></style>

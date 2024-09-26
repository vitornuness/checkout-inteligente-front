<template>
    <div class="container center">
        <h1>Editar categoria</h1>

        <div v-if="submitted" class="alert alert-success">
            Categoria atualizada com sucesso.
        </div>

        <div
            v-if="category"
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
                    placeholder="Categoria exemplo"
                    required
                    v-model="category.name"
                />
            </div>
            <div class="row">
                <label for="image" class="form-label">Imagem</label>
                <div class="row my-4">
                    <img
                        :src="fileUrl ?? category.imageUrl"
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
import { ref } from "vue";
import CategoryDataService from "../services/CategoryDataService";

export default {
    name: "category-edit",
    data() {
        return {
            submitted: false,
            category: ref(null),
            file: null,
            fileUrl: null,
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
            var formData = new FormData();
            formData.append("file", this.file);

            var data = {
                id: this.category.id,
                name: this.category.name,
                image: formData.get("file"),
            };

            CategoryDataService.update(data.id, data)
                .then((res) => {
                    this.submitted = true;
                    this.file = null;
                    this.fileUrl = null;
                    this.$refs.image.value = null;
                    this.getCategory(data.id);
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
        deleteCategory() {
            CategoryDataService.delete(this.category.id)
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

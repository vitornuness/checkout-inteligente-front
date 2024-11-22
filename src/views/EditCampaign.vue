<template>
    <div class="container center bg-white rounded my-4 py-4">
        <h1>Editar campanha</h1>

        <div v-if="submitted" class="alert alert-success">
            Campanha atualizada com sucesso.
        </div>

        <div v-if="campaign" class="form g-3 m-4 needs-validation" novalidate>
            <div class="row">
                <div class="col">
                    <label for="name" class="form-label">Nome</label>
                    <input
                        type="text"
                        class="form-control mb-4"
                        id="name"
                        name="name"
                        placeholder="Campanha exemplo"
                        required
                        v-model="campaign.title"
                    />
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <label for="image" class="form-label">Imagem</label>
                    <div class="my-4">
                        <img
                            :src="fileUrl ?? campaign.imageUrl"
                            :alt="campaign.name"
                            style="width: 20vw"
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

            <div class="row">
                <div class="col">
                    <div class="form-check form-switch">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            id="active"
                            v-model="campaign.active"
                        />
                        <label class="form-check-label" for="active"
                            >Ativa</label
                        >
                    </div>
                </div>
            </div>

            <div class="row my-3">
                <div class="col">
                    <label for="searchProducts" class="form-label"
                        >Pesquisar Produtos</label
                    >
                    <div class="input-group">
                        <input
                            type="text"
                            class="form-control"
                            id="searchProducts"
                            placeholder="Digite o nome do produto"
                            v-model="searchQuery"
                            @keydown.enter="searchProducts" 
                        />
                        <button
                            class="btn btn-outline-secondary"
                            @click="searchProducts"
                        >
                            <i class="bi bi-search"></i> Pesquisar
                        </button>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <ProductSelector
                        :products="filteredProducts"
                        :selectedProductIds="selectedProductIds"
                        @update:products="updateSelectedProducts"
                    />
                </div>
            </div>

            <div class="row my-4 justify-content-end">
                <div class="col">
                    <button class="btn btn-danger" @click="deleteCampaign()">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
                <div class="col d-flex flex-row">
                    <router-link to="/campaigns" class="btn btn-danger">
                        <strong>Cancelar</strong>
                    </router-link>
                    <button
                        class="btn btn-primary mx-4"
                        @click="updateCampaign()"
                    >
                        <strong>Confirmar</strong>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CampaignDataService from "../services/CampaignDataService";
import ProductDataService from "@/services/ProductDataService";
import ProductSelector from "../components/campaign/ProductSelector.vue";
import router from "@/router";
import { ref } from "vue";

export default {
    name: "campaign-edit",
    components: {
        ProductSelector,
    },
    data() {
        return {
            submitted: false,
            campaign: ref(null),
            file: null,
            fileUrl: null,
            products: [],
            filteredProducts: [],
            selectedProductIds: new Set(),
            searchQuery: "",
        };
    },
    methods: {
        getCampaign(id) {
            CampaignDataService.get(id)
                .then((res) => {
                    this.campaign = res.data;
                    this.selectedProductIds = new Set(
                        this.campaign.products.map((product) => product.id)
                    );
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        updateCampaign() {
            var formData = new FormData();
            formData.append("file", this.file);

            const data = {
                id: this.campaign.id,
                title: this.campaign.title,
                productsId: Array.from(this.selectedProductIds),
                active: this.campaign.active,
                image: formData.get("file"),
            };

            CampaignDataService.update(data.id, data)
                .then(() => {
                    this.submitted = true;
                    this.file = null;
                    this.fileUrl = null;
                    this.$refs.image.value = null;
                    this.getCampaign(data.id);

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
        deleteCampaign() {
            CampaignDataService.delete(this.campaign.id)
                .then(() => {
                    router.push("/campaigns");
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        updateSelectedProducts(ids) {
            this.selectedProductIds = new Set(ids);
        },
        getProducts() {
            ProductDataService.getAll().then((res) => {
                this.products = res.data;
                this.filteredProducts = res.data;
            });
        },
        searchProducts() {
            const query = this.searchQuery.trim().toLowerCase();
            this.filteredProducts = this.products.filter((product) =>
                product.name.toLowerCase().includes(query)
            );
        },
    },
    mounted() {
        this.getProducts();
        this.getCampaign(this.$route.params.id);
    },
};
</script>

<style></style>

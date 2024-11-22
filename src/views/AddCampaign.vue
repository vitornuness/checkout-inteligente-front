<template>
    <div class="container center bg-white rounded my-4 py-4">
        <div v-if="submitted">
            <h3>Campanha criada com sucesso.</h3>
            <button class="btn btn-primary mt-4" @click="newCampaign">
                Nova Campanha
            </button>
            <div class="row text-center mt-4">
                <router-link to="/campaigns"
                    >Voltar à lista de campanhas</router-link
                >
            </div>
        </div>
        <div v-else>
            <h1>Nova campanha</h1>
            <div class="form g-3 m-4 needs-validation" novalidate>
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
                        <div v-if="fileUrl" class="my-4">
                            <img
                                :src="fileUrl"
                                :alt="campaign.name"
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
                            @update:products="updateProducts"
                        />
                    </div>
                </div>

                <div class="row my-4 justify-content-end">
                    <router-link to="/campaigns" class="btn btn-danger"
                        >Cancelar</router-link
                    >
                    <button class="btn btn-primary mx-4" @click="saveCampaign">
                        Adicionar
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

export default {
    name: "new-campaign",
    components: {
        ProductSelector,
    },
    data() {
        return {
            submitted: false,
            campaign: {
                title: "",
                products: [],
                active: true,
            },
            file: null,
            fileUrl: null,
            products: [],
            filteredProducts: [],
            selectedProductIds: new Set(),
            searchQuery: "", 
        };
    },
    methods: {
        updateProducts(ids) {
            this.campaign.products = ids;
        },
        saveCampaign() {
            var formData = new FormData();
            formData.append("file", this.file);

            const data = {
                title: this.campaign.title,
                productsId: Array.from(this.campaign.products),
                active: this.campaign.active,
                image: formData.get("file"),
            };

            CampaignDataService.create(data)
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
        newCampaign() {
            this.submitted = false;
            this.campaign = { title: "", products: [], active: true };
            this.selectedProductIds.clear();
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
    },
};
</script>

<style></style>

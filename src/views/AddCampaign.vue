<template>
    <div class="container center">
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
            <div class="form row g-3 m-4 needs-validation" novalidate>
                <div class="row">
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
                <div class="row">
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

                <ProductSelector
                    :products="products"
                    :selectedProductIds="selectedProductIds"
                    @update:products="updateProducts"
                />

                <div class="row my-4 g-4">
                    <button class="btn btn-primary" @click="saveCampaign">
                        Adicionar
                    </button>
                    <router-link to="/campaigns" class="btn btn-danger"
                        >Cancelar</router-link
                    >
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
            products: [],
            selectedProductIds: new Set(),
        };
    },
    methods: {
        updateProducts(ids) {
            this.campaign.products = ids;
        },
        saveCampaign() {
            const data = {
                title: this.campaign.title,
                productsId: Array.from(this.campaign.products),
                active: this.campaign.active,
            };

            CampaignDataService.create(data)
                .then((res) => {
                    this.submitted = true;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        newCampaign() {
            this.submitted = false;
            this.campaign = { title: "", products: [], active: true };
            this.selectedProductIds.clear();
        },
        getProducts() {
            ProductDataService.getAll().then((res) => {
                this.products = res.data;
            });
        },
    },
    mounted() {
        this.getProducts();
    },
};
</script>

<style></style>

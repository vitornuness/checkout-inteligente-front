<template>
    <div class="container center">
        <h1>Editar campanha</h1>

        <div v-if="submitted" class="alert alert-success">
            Campanha atualizada com sucesso.
        </div>

        <div
            v-if="campaign"
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
                    placeholder="Campanha exemplo"
                    required
                    v-model="campaign.title"
                />
            </div>

            <div class="row">
                <label for="image" class="form-label">Imagem</label>
                <div class="row my-4">
                    <img
                        :src="fileUrl ?? campaign.imageUrl"
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

            <div class="row">
                <div class="form-check form-switch">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        id="active"
                        v-model="campaign.active"
                    />
                    <label class="form-check-label" for="active">Ativa</label>
                </div>
            </div>

            <ProductSelector
                :products="products"
                :selectedProductIds="selectedProductIds"
                @update:products="updateSelectedProducts"
            />

            <div class="row my-4 g-4">
                <button class="btn btn-primary" @click="updateCampaign()">
                    Confirmar
                </button>
                <router-link to="/campaigns" class="btn btn-danger"
                    >Cancelar</router-link
                >
                <button class="btn btn-danger" @click="deleteCampaign()">
                    Deletar
                </button>
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
            selectedProductIds: new Set(),
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
            });
        },
    },
    mounted() {
        this.getProducts();
        this.getCampaign(this.$route.params.id);
    },
};
</script>

<style></style>

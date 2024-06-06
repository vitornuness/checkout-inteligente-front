<template>
    <div class="container center">
        <h1>Editar campanha</h1>

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
                    v-model="campaign.title"
                />
            </div>
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

export default {
    name: "campaign-edit",
    data() {
        return {
            campaign: {
                id: "",
                title: "",
            },
        };
    },
    methods: {
        getCampaign(id) {
            CampaignDataService.get(id)
                .then((res) => {
                    this.campaign = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        updateCampaign() {
            var data = {
                id: this.campaign.id,
                title: this.campaign.title,
            };

            CampaignDataService.update(data.id, data)
                .then((res) => {
                    this.getCampaign(data.id);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        deleteCampaign() {
            CampaignDataService.delete(this.category.id)
                .then(this.$router.push("/categories"))
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    mounted() {
        this.getCampaign(this.$route.params.id);
    },
};
</script>

<style></style>

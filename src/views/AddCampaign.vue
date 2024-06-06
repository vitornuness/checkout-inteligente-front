<script setup></script>

<template>
    <div class="container center">
        <div v-if="submitted">
            <h3>Campanha criada com sucesso.</h3>
            <button class="btn btn-primary mt-4" @click="newCategory()">
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
                        placeholder="Categoria exemplo"
                        required
                        v-model="campaign.title"
                    />
                </div>
                <div class="row my-4 g-4">
                    <button class="btn btn-primary" @click="saveCampaign()">
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

export default {
    name: "new-campaign",
    data() {
        return {
            submitted: false,
            campaign: {
                title: "",
            },
        };
    },
    methods: {
        saveCampaign() {
            var data = {
                title: this.campaign.title,
            };

            CampaignDataService.create(data)
                .then((res) => {
                    this.submitted = true;
                })
                .catch((err) => {
                    console.log(err);
                });
        },

        newCamáign() {
            (this.submitted = false), (this.campaign = {});
        },
    },
};
</script>

<style></style>

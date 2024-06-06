<template>
    <div class="container">
        <div class="row my-4">
            <div class="col-10">
                <h1>Campanhas</h1>
            </div>
            <div class="col-2">
                <router-link to="campaigns/new">
                    <button class="btn btn-primary">Adicionar</button>
                </router-link>
            </div>
        </div>
        <div class="row mt-4 card">
            <table
                class="table table-striped table-hover"
                v-if="campaigns.length > 0"
            >
                <thead>
                    <tr>
                        <th scope="col">Código</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="campaign in campaigns">
                        <th scope="row">{{ campaign.id }}</th>
                        <td>{{ campaign.title }}</td>
                        <td>
                            <div class="actions">
                                <router-link
                                    :to="`/campaigns/${campaign.id}/edit`"
                                    class="btn btn-warning"
                                >
                                    <i class="bi bi-pencil-square"></i>
                                </router-link>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="row" v-else>
                <p>Não há campanhas registradas.</p>
            </div>
        </div>
        <!-- <div class="row">
            <div class="pagination-content">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link" href="#">Anterior</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">1</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">3</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">Próximo</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div> -->
    </div>
</template>

<script>
import CampaignDataService from "../services/CampaignDataService";

export default {
    name: "campaign-list",
    data() {
        return {
            campaigns: [],
        };
    },
    watch: {
        $route: function (to, from) {
            if (to.path === "/campaigns") {
                this.getAllCampaigns();
            }
        },
    },
    methods: {
        getAllCampaigns() {
            CampaignDataService.getAll()
                .then((res) => {
                    this.campaigns = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    mounted() {
        this.getAllCampaigns();
    },
};
</script>

<style>
.pagination-content {
    display: flex;
    align-items: center;
    justify-content: center;
}

.actions {
    display: flex;
    gap: 10px;
}

.bi {
    color: white;
}
</style>

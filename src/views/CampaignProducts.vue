<template>
    <div v-if="campaign" class="container-fluid">
        <img
            :src="campaign.imageUrl"
            :alt="campaign.title"
            class="d-block w-100"
        />
        <div class="row">
            <div class="col-xxl-8">
                <ProductCommon :products="campaign.products" />
            </div>
        </div>
    </div>
</template>

<script>
import ProductCommon from "@/components/home/ProductCommon.vue";
import CampaignDataService from "../services/CampaignDataService";
import router from "@/router";
import { ref } from "vue";

export default {
    name: "CampaignProducts",
    components: {
        ProductCommon,
    },
    data() {
        return {
            campaign: ref(null),
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
    },
    mounted() {
        this.getCampaign(this.$route.params.id);
    },
};
</script>

<style></style>

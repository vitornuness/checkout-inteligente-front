<template>
    <div v-if="campaign" class="container-fluid">
        <img
            :src="campaign.imageUrl"
            :alt="campaign.title"
            class="d-block w-100"
        />
        <ProductList :products="campaign.products" />
    </div>
</template>

<script>
import ProductCommon from "@/components/home/ProductCommon.vue";
import CampaignDataService from "../services/CampaignDataService";
import router from "@/router";
import { ref } from "vue";
import ProductList from "@/components/home/ProductList.vue";

export default {
    name: "CampaignProducts",
    components: {
        ProductList,
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

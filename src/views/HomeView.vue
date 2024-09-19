<script setup></script>

<template>
  <Banner />
  <ProductList :products="products" />
</template>

<script>
import Banner from "../components/home/Banner.vue";
import ProductList from "../components/home/ProductList.vue";
import ProductDataService from "../services/ProductDataService";
import CampaignDataService from "../services/CampaignDataService";

import { session } from "../session";

export default {
  name: "home",
  components: {
    Banner,
    ProductList,
  },
  data() {
    return {
      campaigns: [],
      products: [],
    };
  },
  methods: {
    getAllProducts() {
      ProductDataService.getAll()
        .then((res) => {
          this.products = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
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
    this.getAllProducts();
    this.getAllCampaigns();
    if (session.token) {
      this.getOrder();
    }
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

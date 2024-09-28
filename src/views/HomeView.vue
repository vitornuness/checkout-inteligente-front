<script setup></script>

<template>
  <Banner />
  <BestSellers />
  <ProductList :products="products" />
  <Categories />
  <ProductCommon />

</template>

<script>
import Banner from "../components/home/Banner.vue";
import BestSellers from "../components/home/BestSellers.vue";
import ProductList from "../components/home/ProductList.vue";
import ProductDataService from "../services/ProductDataService";
import CampaignDataService from "../services/CampaignDataService";
import Categories from "../components/home/Categories.vue";
import ProductCommon from "@/components/home/ProductCommon.vue";



export default {
  name: "home",
  components: {
    Banner,
    BestSellers,
    ProductList,
    Categories,
    ProductCommon,

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

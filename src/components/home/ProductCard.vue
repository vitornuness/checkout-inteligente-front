<template>
  <div class="col-md-6 col-sm-12 col-lg-3 mb-4">
    <div
      class="card p-2 d-flex flex-column justify-content-between"
      style="width: 15rem; height: 20rem; position: relative"
    >
      <div style="width: 100%; text-align: center">
        <SideCart></SideCart>

        <img :src="product.imageUrl" :alt="product.name" class="card-img-top" />
      </div>
      <div
        class="card-body d-flex flex-column justify-content-between"
        style="width: 100%; position: absolute; bottom: 0"
      >
        <div>
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">R$ {{ product.price.toFixed(2) }}</p>
        </div>
        <button class="btn btn-primary" @click="addToCart()">Adicionar</button>
      </div>
    </div>
  </div>
</template>

<script>
import OrderDataService from "../../services/OrderDataService";
import { session } from "../../session";
import SideCart from "../SideCart.vue";

export default {
  name: "product-card",
  components: { SideCart },
  props: {
    product: {
      id: "",
      name: "",
      image: "",
      category: "",
      quantity: "",
      price: "",
    },
  },
  methods: {
    addToCart() {
      OrderDataService.addProduct(
        session().cart.id,
        this.product.id,
        session().token
      )
        .then(() => {
          OrderDataService.getOrderByUser(session().user.id, session().token)
            .then((res) => {
              session().cart = res.data;
            })
            .catch((err) => console.log(err));
          this.$emit("productAdded");
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
.card {
  border: none;
  border-radius: 4px !important;
  background: #f7f1f1;
}

.card-img-top {
  width: 8rem;
}

.btn-primary {
  background: #13293d;
  border: none;
  width: 100%;
}

.btn-primary:hover {
  background: #13293d;
  opacity: 0.9;
  transition: 0.5s ease-in-out;
}
</style>

<template>
  <button
    type="button"
    class="btn"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    @click="getCart()"
  >
    <i class="bi bi-cart3"></i>
  </button>

  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <div
            v-if="complete"
            class="center m-auto"
            style="width: 20vw; height: 100vh"
          >
            <h3 class="my-4">
              <strong>Pedido realizado!</strong>
            </h3>
            <CompleteOrder />
            <button class="btn btn-primary my-4" data-bs-dismiss="modal">
              <strong>Voltar à loja</strong>
            </button>
          </div>
          <div v-else id="sideCart" class="side-cart">
            <h2>
              Itens no carrinho (<span id="item-count">{{
                cart ? cart.items.length : ""
              }}</span
              >)
            </h2>
            <div v-if="loading" class="spinner-border" role="status"></div>
            <div
              v-if="cart?.items.length > 0 && !loading"
              class="product-list flex flex-column"
            >
              <div
                v-for="item in cart?.items"
                class="card mb-3 bg-white"
                style="max-width: 100vw"
              >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      :src="item.product.imageUrl"
                      class="img-fluid rounded-start"
                      :alt="item.product.name"
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body text-right">
                      <h5 class="card-title text-truncate">
                        {{ item.product.name }}
                      </h5>
                      <p class="card-text">
                        <strong>
                          R$
                          {{ item.product.price.toFixed(2) }}
                        </strong>
                      </p>
                      <div>
                        <small>
                          <button
                            class="btn btn-primary"
                            @click="add(item.product.id)"
                            :disabled="loading"
                          >
                            <i class="bi bi-plus-circle"></i>
                          </button>
                          <span class="mx-4">{{ item.quantity }}</span>
                          <button
                            class="btn btn-primary"
                            @click="remove(item.product.id)"
                            :disabled="loading"
                          >
                            <i class="bi bi-dash-circle"></i>
                          </button>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card my-4 bg-white" v-else>
              <p v-if="!loading">Não há produtos no carrinho.</p>
              <button class="btn btn-primary" data-bs-dismiss="modal">
                <strong>Continuar comprando</strong>
              </button>
            </div>
            <div
              class="cart-summary d-flex flex-row justify-content-between"
              v-if="!loading"
            >
              <button
                id="btnFinalizar"
                v-if="cart?.items.length > 0"
                class="btn btn-success btn-cart"
                @click="finish()"
              >
                Finalizar
                <i class="bi bi-cart-check"></i>
              </button>
              <h3 class="text-right">
                Subtotal:
                <strong id="subtotal"
                  >R$ {{ cart?.totalAmount.toFixed(2) }}</strong
                >
              </h3>
            </div>
            <hr />
            <div class="container overflow-auto" style="height: 45vh">
              <h5 class="my-4">Não perca a promoção!</h5>
              <div class="row flex-nowrap overflow-auto">
                <ProductCard
                  v-for="product in campaignSuggestions"
                  :key="product.id"
                  :product="product"
                  style="margin-right: 4vw"
                  @productAdded="getCart()"
                />
              </div>
              <h5 class="my-4">Para seguir a onda</h5>
              <div class="row flex-nowrap overflow-auto">
                <ProductCard
                  v-for="product in productSuggestions"
                  :key="product.id"
                  :product="product"
                  style="margin-right: 4vw"
                  @productAdded="getCart()"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CampaignDataService from "@/services/CampaignDataService";
import CategoryDataService from "@/services/CategoryDataService";
import OrderDataService from "@/services/OrderDataService";
import ProductDataService from "@/services/ProductDataService";
import { useCartStore } from "@/store/cart";
import { useUserStore } from "@/store/user";
import { ref } from "vue";
import { RouterLink } from "vue-router";
import ProductCard from "./home/ProductCard.vue";
import CompleteOrder from "./images/CompleteOrder.vue";

export default {
  name: "side-cart",
  components: { ProductCard, CompleteOrder },
  data() {
    return {
      cart: ref(null),
      loading: false,
      campaignSuggestions: ref([]),
      productSuggestions: ref([]),
      complete: false,
    };
  },
  methods: {
    async getCart() {
      this.complete = false;
      this.loading = true;
      OrderDataService.fetchCurrentUserOrder(useUserStore().user.id)
        .then((res) => {
          this.cart = res.data;
          this.getCampaignSuggestions();
          this.getProductSuggestions();
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    async add(productId) {
      this.loading = true;
      var cart = await useCartStore().handleCart();
      OrderDataService.addProduct(cart.id, productId)
        .then(() => {
          this.getCart();
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    async remove(productId) {
      this.loading = true;
      var cart = await useCartStore().handleCart();
      OrderDataService.removeProduct(cart.id, productId)
        .then(() => {
          this.getCart();
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    async finish() {
      this.loading = true;
      var cart = await useCartStore().handleCart();
      OrderDataService.completeOrder(cart.id)
        .then(() => {
          this.cart = null;
          this.complete = true;

          OrderDataService.fetchCurrentUserOrder(useUserStore().user.id)
            .then((res) => {
              useCartStore().setCart(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    async getCampaigns() {
      return CampaignDataService.getAll()
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async getCategories() {
      return CategoryDataService.getAll()
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async getBestSellers() {
      return ProductDataService.getBestSellers()
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getCampaignSuggestions() {
      this.getCampaigns().then((res) => {
        this.campaignSuggestions = this.filterProductsNotInCart(res);
      });
    },
    async getProductSuggestions() {
      if (this.cart?.items.length == 0) {
        this.productSuggestions = await this.getBestSellers();
      } else {
        const categories = await this.getCategories();
        const categoryIds = this.cart.items.map(
          (item) => item.product.category.id
        );

        const filteredCategories = categories.filter((category) =>
          categoryIds.includes(category.id)
        );

        const filteredProducts =
          this.filterProductsNotInCart(filteredCategories);

        this.productSuggestions = filteredProducts
          .sort((a, b) => b.sales - a.sales)
          .slice(0, 15);
      }
    },
    filterProductsNotInCart(items) {
      const cartProductIds =
        this.cart?.items.map((item) => item.product.id) || [];
      return items.flatMap((item) =>
        item.products.filter((product) => !cartProductIds.includes(product.id))
      );
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>

<style scoped>
.modal-dialog {
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  margin: 0;
  max-width: none;
  width: 30vw;
}

.modal-content {
  height: 100vh;
}

.modal-body {
  padding: 20px;
  background-color: #f8f9fa;
  color: #495057;
  border-radius: 0;
}

#sideCart {
  border: 1px solid #dee2e6;
  border-radius: 5px;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;
  border-bottom: 1px solid #dee2e6;
}

.cart-summary {
  border-top: 1px solid #dee2e6;
  padding-top: 15px;
  margin-top: 15px;
  font-weight: bold;
}

.cart-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.product-list {
  max-height: 30vh;
  margin-bottom: 20px;
  overflow-y: auto;
  overflow-x: hidden;
}

.product-image {
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin-right: 15px;
  border-radius: 5px;
}
</style>

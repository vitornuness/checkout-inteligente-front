import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CartView from "../views/CartView.vue";
import CheckoutView from "../views/CheckoutView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import ProductView from "../views/ProductView.vue";
import AddProduct from "../views/AddProduct.vue";
import EditProduct from "../views/EditProduct.vue";
import OrderView from "../views/OrderView.vue";
import UserView from "../views/UserView.vue";
import CategoryView from "../views/CategoryView.vue";
import AddCategory from "../views/AddCategory.vue";
import EditCategory from "../views/EditCategory.vue";
import CampaignView from "../views/CampaignView.vue";
import AddCampaign from "../views/AddCampaign.vue";
import EditCampaign from "../views/EditCampaign.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/cart",
            name: "cart",
            component: CartView,
        },
        {
            path: "/checkout",
            name: "checkout",
            component: CheckoutView,
        },
        {
            path: "/login",
            name: "login",
            component: LoginView,
        },
        {
            path: "/signup",
            name: "signup",
            component: RegisterView,
        },
        {
            path: "/products",
            name: "products",
            component: ProductView,
        },
        {
            path: "/products/new",
            name: "productsNew",
            component: AddProduct,
        },
        {
            path: "/products/:id/edit",
            name: "productsEdit",
            component: EditProduct,
        },
        {
            path: "/categories",
            name: "categories",
            component: CategoryView,
        },
        {
            path: "/categories/new",
            name: "categoriesNew",
            component: AddCategory,
        },
        {
            path: "/categories/:id/edit",
            name: "categoriesEdit",
            component: EditCategory,
        },
        {
            path: "/campaigns",
            name: "campaigns",
            component: CampaignView,
        },
        {
            path: "/campaigns/new",
            name: "campaignsNew",
            component: AddCampaign,
        },
        {
            path: "/campaigns/:id/edit",
            name: "campaignsEdit",
            component: EditCampaign,
        },
        {
            path: "/orders",
            name: "orders",
            component: OrderView,
        },
        {
            path: "/users",
            name: "users",
            component: UserView,
        },
    ],
});

export default router;

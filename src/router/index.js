import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CartView from "../views/CartView.vue";
import CheckoutView from "../views/CheckoutView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import ProductView from "../views/ProductView.vue";
import AddProduct from "../views/AddProduct.vue";
import EditProduct from "../views/EditProduct.vue";

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
            path: "/products/edit",
            name: "productsEdit",
            component: EditProduct,
        },
    ],
});

export default router;

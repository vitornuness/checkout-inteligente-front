import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
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

import { useUserStore } from "../store/user";
import CampaignProducts from "@/views/CampaignProducts.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
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
            beforeEnter: (to, from) => {
                if (!useUserStore().user) {
                    return "/login";
                }

                if (useUserStore().user.role !== "ADMIN") {
                    return "/";
                }
            },
        },
        {
            path: "/products/new",
            name: "productsNew",
            component: AddProduct,
            beforeEnter: (to, from) => {
                if (!useUserStore().user) {
                    return "/login";
                }

                if (useUserStore().user.role !== "ADMIN") {
                    return "/";
                }
            },
        },
        {
            path: "/products/:id/edit",
            name: "productsEdit",
            component: EditProduct,
            beforeEnter: (to, from) => {
                if (!useUserStore().user) {
                    return "/login";
                }

                if (useUserStore().user.role !== "ADMIN") {
                    return "/";
                }
            },
        },
        {
            path: "/categories",
            name: "categories",
            component: CategoryView,
            beforeEnter: (to, from) => {
                if (!useUserStore().user) {
                    return "/login";
                }

                if (useUserStore().user.role !== "ADMIN") {
                    return "/";
                }
            },
        },
        {
            path: "/categories/new",
            name: "categoriesNew",
            component: AddCategory,
            beforeEnter: (to, from) => {
                if (!useUserStore().user) {
                    return "/login";
                }

                if (useUserStore().user.role !== "ADMIN") {
                    return "/";
                }
            },
        },
        {
            path: "/categories/:id/edit",
            name: "categoriesEdit",
            component: EditCategory,
            beforeEnter: (to, from) => {
                if (!useUserStore().user) {
                    return "/login";
                }

                if (useUserStore().user.role !== "ADMIN") {
                    return "/";
                }
            },
        },
        {
            path: "/campaigns",
            name: "campaigns",
            component: CampaignView,
            beforeEnter: (to, from) => {
                if (!useUserStore().user) {
                    return "/login";
                }

                if (useUserStore().user.role !== "ADMIN") {
                    return "/";
                }
            },
        },
        {
            path: "/campaigns/new",
            name: "campaignsNew",
            component: AddCampaign,
            beforeEnter: (to, from) => {
                if (!useUserStore().user) {
                    return "/login";
                }

                if (useUserStore().user.role !== "ADMIN") {
                    return "/";
                }
            },
        },
        {
            path: "/campaigns/:id/edit",
            name: "campaignsEdit",
            component: EditCampaign,
            beforeEnter: (to, from) => {
                if (!useUserStore().user) {
                    return "/login";
                }

                if (useUserStore().user.role !== "ADMIN") {
                    return "/";
                }
            },
        },
        {
            path: "/campaigns/:id/products",
            name: "campaignsProducts",
            component: CampaignProducts,
        },
        {
            path: "/orders",
            name: "orders",
            component: OrderView,
            beforeEnter: (to, from) => {
                if (!useUserStore().user) {
                    return "/login";
                }

                if (useUserStore().user.role !== "ADMIN") {
                    return "/";
                }
            },
        },
        {
            path: "/users",
            name: "users",
            component: UserView,
            beforeEnter: (to, from) => {
                if (!useUserStore().user) {
                    return "/login";
                }

                if (useUserStore().user.role !== "ADMIN") {
                    return "/";
                }
            },
        },
    ],
});

export default router;

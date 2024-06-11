<script setup>
import { RouterLink } from "vue-router";
import { session } from "../session";
</script>

<template>
    <div class="container-fluid mb-2 p-2 header">
        <nav class="navbar navbar-expand-lg">
            <div class="container d-flex justify-content-between">
                <div class="col-md-2">
                    <RouterLink to="/" class="navbar-brand text-white"
                        >Loja</RouterLink
                    >
                </div>
                <div class="col-md-6">
                    <form class="d-flex" role="search">
                        <input
                            class="form-control"
                            type="search"
                            placeholder="Procure em toda loja"
                            aria-label="Procure em toda loja"
                        />
                        <button class="btn" type="submit">
                            <i class="bi bi-search text-white"></i>
                        </button>
                    </form>
                </div>
                <div>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i class="bi bi-list"></i>
                    </button>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-white">
                            <div v-if="!session().token">
                                <li class="nav-item d-flex mt-2">
                                    <RouterLink
                                        to="/login"
                                        class="nav-link text-white"
                                        >Entrar</RouterLink
                                    >
                                    <span
                                        class="row align-items-start mt-2 mx-2"
                                        >|</span
                                    >
                                    <RouterLink
                                        to="/signup"
                                        class="nav-link text-white"
                                        >Registrar-se</RouterLink
                                    >
                                </li>
                            </div>
                            <div v-else class="d-flex">
                                <li class="nav-item">
                                    <RouterLink
                                        to="cart"
                                        class="nav-link text-white"
                                    >
                                        <i class="bi bi-cart3"></i>
                                    </RouterLink>
                                </li>
                                <li class="nav-item dropdown">
                                    <a
                                        class="nav-link text-white dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <i class="bi bi-person-fill"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item" href="#"
                                                >Perfil</a
                                            >
                                        </li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <div v-if="session().user.admin">
                                            <li>
                                                <router-link
                                                    class="dropdown-item"
                                                    to="/products"
                                                    >Produtos</router-link
                                                >
                                            </li>
                                            <li>
                                                <router-link
                                                    class="dropdown-item"
                                                    to="/categories"
                                                    >Categorias</router-link
                                                >
                                            </li>
                                            <li>
                                                <router-link
                                                    class="dropdown-item"
                                                    to="/campaigns"
                                                    >Campanhas</router-link
                                                >
                                            </li>
                                            <li>
                                                <router-link
                                                    class="dropdown-item"
                                                    to="/orders"
                                                    >Pedidos</router-link
                                                >
                                            </li>
                                            <li>
                                                <router-link
                                                    class="dropdown-item"
                                                    to="/users"
                                                    >Usuários</router-link
                                                >
                                            </li>
                                        </div>
                                        <li>
                                            <button
                                                class="dropdown-item"
                                                @click="logout()"
                                            >
                                                Sair
                                            </button>
                                        </li>
                                    </ul>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "home",
    methods: {
        logout() {
            session().clearData();
            location.reload();
        },
    },
};
</script>

<style>
.text-white {
    color: #fff;
}
.header {
    background: #13293d;
    box-shadow: 0 1px 4px #000;
}

.navbar-toggler {
    color: #fff;
    border: none;
}

.bi-search {
    font-size: 14pt !important;
}

i,
.bi {
    font-size: 20pt;
}

a:hover,
i:hover,
.bi:hover {
    color: #9193b4 !important;
    transition: 0.5s ease-in-out;
}

.dropdown-item:active {
    background: #9193b4;
}

.right-nav-side {
    display: flex;
    justify-content: end;
    align-items: end;
}
</style>

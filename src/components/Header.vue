<script setup>
import { RouterLink } from "vue-router";
import { useUserStore } from "../store/user";
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
                            <div v-if="!useUserStore().user">
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
                                        <div
                                            v-if="
                                                useUserStore().user.role ===
                                                'ADMIN'
                                            "
                                        >
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
                                        </div>
                                        <li><hr class="dropdown-divider" /></li>
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
  </header>
</template>

<script>
export default {
    name: "home",
    methods: {
        logout() {
            useUserStore().setUser(null);
            location.reload();
        },
    },
  },
};
</script>

<style>
header {
  background-color: #2b2b2b;
  color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header h1 {
  margin: 0;
}

.pesquisa {
  display: flex;
  align-items: center;
}

.pesquisa input {
  padding: 5px;
  width: 300px;
  border: none;
  border-radius: 4px 0 0 4px;
}

.pesquisa button {
  padding: 5px 10px;
  background-color: #ff9900;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 0 4px 4px 0;
}

.pesquisa button:hover {
  background-color: #e68a00;
}

.login a {
  padding: 5px 10px;
  border: 1px solid white;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}

.login a:hover {
  background-color: #444;
}
</style>

<script setup>
import { RouterLink } from "vue-router";
import { useUserStore } from "../store/user";
import SideCart from "./SideCart.vue";
import { useTokenStore } from "@/store/token";
</script>

<template>
  <header>
    <div class="container-fluid mb-2 p-2 header">
      <nav class="navbar navbar-expand-lg">
        <div class="container d-flex justify-content-between">
          <div class="col-md-2">
            <RouterLink to="/" class="navbar-brand text-white">Loja</RouterLink>
          </div>

          <div>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-white">
              <div v-if="!useUserStore().handleUser()">
                <li class="nav-item d-flex mt-2">
                  <RouterLink to="/login" class="nav-link text-white"
                    >Entrar</RouterLink
                  >
                  <span class="row align-items-start mt-2 mx-2">|</span>
                  <RouterLink to="/signup" class="nav-link text-white"
                    >Registrar-se</RouterLink
                  >
                </li>
              </div>
              <div v-else class="d-flex">
                <li class="nav-item">
                  <SideCart />
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
                    <div v-if="useUserStore().user.role === 'ADMIN'">
                      <li>
                        <router-link class="dropdown-item" to="/products"
                          >Produtos</router-link
                        >
                      </li>
                      <li>
                        <router-link class="dropdown-item" to="/categories"
                          >Categorias</router-link
                        >
                      </li>
                      <li>
                        <router-link class="dropdown-item" to="/campaigns"
                          >Campanhas</router-link
                        >
                      </li>
                      <li>
                        <router-link class="dropdown-item" to="/reports"
                          >Exportações</router-link
                        >
                      </li>
                    </div>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <button class="dropdown-item" @click="logout()">
                        Sair
                      </button>
                    </li>
                  </ul>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "home",
  components: [SideCart],
  methods: {
    logout() {
      useUserStore().setUser(null);
      useTokenStore().revokeToken();
      location.reload();
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

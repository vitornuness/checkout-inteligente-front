<script setup>
import { RouterLink } from "vue-router";
import { session } from "../session";
</script>

<template>
  <header>
    <div
      class="topo container d-flex justify-content-between align-items-center"
    >
      <h1>SHOP</h1>
      <div class="pesquisa">
        <input type="text" placeholder="Pesquisar um produto" />
        <button class="btn btn-primary">Pesquisar</button>
      </div>
      <div class="login">
        <a href="#" class="btn btn-outline-secondary">Entrar ou Registrar</a>
      </div>
    </div>
  </header>
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

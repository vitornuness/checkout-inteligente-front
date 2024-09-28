<template>
  <div class="categorias-container">
    <div class="categoria" v-for="categoria in categorias" :key="categoria.nome">
      <img :src="categoria.imagem" :alt="categoria.nome" class="categoria-imagem" />
      <h3>{{ categoria.nome }}</h3>
      <button @click="verProdutos(categoria.nome)" class="botao-produtos">Ver Produtos</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categorias: [
        { nome: "CORSAIR", imagem: "../../../img/CategoriesCorsair.jpeg" },
        { nome: "INTEL", imagem: "../../../img/CategoriesIntel.png" },
        { nome: "LOGITECH", imagem: "../../../img/CategoriesLogitech.jpeg" },
        { nome: "KINGSTON", imagem: "../../../img/CategoriesKingston.png" },
        { nome: "RISE MODE", imagem: "../../../img/CategoriesRiseMode.jpeg" },
      ],
    };
  },
  methods: {
    verProdutos(nomeCategoria) {
      alert(`Exibindo produtos da categoria: ${nomeCategoria}`);
    },
  },
};
</script>

<style scoped>
.categorias-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
}

.categoria {
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.categoria:hover {
  transform: translateY(-10px);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
}

.categoria-imagem {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

h3 {
  margin-top: 10px;
  font-size: 1.2em;
}

.botao-produtos {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #f90;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.botao-produtos:hover {
  background-color: #ff7400;
}
</style>

<template>
    <div>
      <h2>Mais Vendidos da Semana</h2>
      <div class="carrossel">
        <Produto v-for="produto in produtos" :key="produto.nome" :produto="produto" />
      </div>
    </div>
  </template>
  
  <script>
  import Produto from './Produto.vue';
  
  export default {
    components: { Produto },
    data() {
      return {
        produtos: [
          { nome: "Produto 1", preco: "R$17,90", imagem: "imagem_produto.jpg", avaliacao: 5 },
          { nome: "Produto 2", preco: "R$17,90", imagem: "imagem_produto.jpg", avaliacao: 3 },
          { nome: "Produto 2", preco: "R$17,90", imagem: "imagem_produto.jpg", avaliacao: 4 },
          { nome: "Produto 2", preco: "R$17,90", imagem: "imagem_produto.jpg", avaliacao: 5 },
          { nome: "Produto 2", preco: "R$17,90", imagem: "imagem_produto.jpg", avaliacao: 4 },
          { nome: "Produto 2", preco: "R$17,90", imagem: "imagem_produto.jpg", avaliacao: 4 },
          { nome: "Produto 2", preco: "R$17,90", imagem: "imagem_produto.jpg", avaliacao: 5 },
          { nome: "Produto 2", preco: "R$17,90", imagem: "imagem_produto.jpg", avaliacao: 5 },
          { nome: "Produto 2", preco: "R$17,90", imagem: "imagem_produto.jpg", avaliacao: 3 },
          { nome: "Produto 2", preco: "R$17,90", imagem: "imagem_produto.jpg", avaliacao: 5 },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .carrossel {
    display: flex;
    overflow-x: auto;
  }
  </style>
  
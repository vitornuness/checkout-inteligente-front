<template>
    <div class="produto">
      <img :src="produto.imagem" :alt="produto.nome" />
      <div>{{ produto.nome }}</div>
      <div>{{ produto.preco }}</div>
      <div>
        <span v-for="n in 5" :key="n">{{ n <= produto.avaliacao ? '★' : '☆' }}</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["produto"], 
  };
  </script>
  
  <style scoped>
  .produto {
    text-align: center;
    margin: 10px;
  }
  </style>
  
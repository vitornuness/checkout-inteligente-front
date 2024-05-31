<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  nome: String,
  valor: String
});
</script>

<template>
  <div class="card">
    <h5 class="card-header">Escolha a forma de entrega:</h5>
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <h4 class="card-title">{{props.nome}}</h4>
        <h4 class="card-title">{{ props.valor }}</h4>
      </div>
      <p class="card-text d-flex">Rua joaninha, 356, casa 37 - Marília/SP</p>
      <a href="#" class="btn btn-primary">Selecionar</a>
    </div>
  </div>
</template>

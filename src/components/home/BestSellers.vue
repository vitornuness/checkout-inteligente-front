<template>
  <div class="mais-vendidos-container">
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
        { nome: "Mouse Logitech G403", preco: "R$229,99", imagem: "../../../img/MouseLogitechG403.jpg", avaliacao: 5 },
        { nome: "Console Sony PlayStation 5 Slim", preco: "R$3.719,07", imagem: "../../../img/PS5.jpg", avaliacao: 4 },
        { nome: "Notebook Aspire Acer 5", preco: "R$3.499,99", imagem: "../../../img/NotebookAspire.jpg", avaliacao: 4 },
        { nome: "Notebook Gamer Nitro V", preco: "R$5.699,00", imagem: "../../../img/NotebookNitro.jpg", avaliacao: 5 },
        { nome: "Monitor Gamer Acer Nitro 23.8", preco: "R$1.089,99", imagem: "../../../img/Monitor1.jpg", avaliacao: 4 },
        { nome: "Monitor Gamer Acer Predator 27", preco: "R$1.899,00", imagem: "../../../img/Monitor2.jpg", avaliacao: 4 },
        { nome: "Headset Gamer Sem Fio HyperX Cloud III", preco: "R$789,90", imagem: "../../../img/Headset1.jpg", avaliacao: 5 },
        { nome: "Volante Logitech G29 ", preco: "R$1.804,05", imagem: "../../../img/VolanteLogitech.jpg", avaliacao: 5 },
        { nome: "Teclado Mecânico Gamer HyperX ", preco: "R$699,99", imagem: "../../../img/Teclado1.jpg", avaliacao: 3 },
        { nome: "Microfone Gamer HyperX", preco: "R$779,90", imagem: "../../../img/Microfone1.jpg", avaliacao: 5 },
      ],
    };
  },
};
</script>

<style scoped>
.mais-vendidos-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
}

.carrossel {
  display: flex;
  overflow-x: auto;
  justify-content: center;
  gap: 20px;
  padding: 10px;
  max-width: 100%;
}

</style>

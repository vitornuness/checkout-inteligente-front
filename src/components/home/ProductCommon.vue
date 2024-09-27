<template>
    <div class="produtos-container">
      <div class="produto-card" v-for="produto in produtos" :key="produto.nome">
        <img :src="produto.imagem" :alt="produto.nome" class="produto-imagem" />
        <h3>{{ produto.nome }}</h3>
        <div>
            <span v-for="n in 5" :key="n">{{ n <= produto.avaliacao ? '★' : '☆' }}</span>
        </div>
        <p>{{ produto.preco }}</p>
        <button class="botao-comprar">Comprar</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        produtos: [
          { nome: "Headset Gamer HyperX Cloud Stinger 2", preco: "R$269,90", imagem: "../../../img/IMGProductsCommon/Headset Gamer HyperX Cloud Stinger 2.jpg", avaliacao: 4 },
          { nome: "Processador AMD Ryzen 9 9950x", preco: "R$4.599,90", imagem: "../../../img/IMGProductsCommon/Processador AMD Ryzen 9 9950x.jpg", avaliacao: 5 },
          { nome: "Fonte MSI MAG A650GL", preco: "R$529,99", imagem: "../../../img/IMGProductsCommon/Fonte MSI MAG A650GL.jpg", avaliacao: 4 },
          { nome: "SSD Externo Portátil XS1000 Kingston 2TB", preco: "R$869,99", imagem: "../../../img/IMGProductsCommon/SSD Externo Portátil XS1000 Kingston 2TB.jpg", avaliacao: 4 },
          { nome: "SSD WD Black SN850X Gaming Storage 2TB", preco: "R$1.259,99", imagem: "../../../img/IMGProductsCommon/SSD WD Black SN850X Gaming Storage 2TB.jpg", avaliacao: 5 },
          { nome: "Placa de Vídeo RTX 4070", preco: "R$1.979,99", imagem: "../../../img/IMGProductsCommon/Placa de Vídeo RTX 4070.jpg", avaliacao: 4 },
          { nome: "iPhone 16 Pro Max Apple 1TB", preco: "R$13.949,10", imagem: "../../../img/IMGProductsCommon/iPhone 16 Pro Max Apple 1TB.jpg", avaliacao: 5 },
          { nome: "iPhone 16 Apple 128GB", preco: "R$7.019,10", imagem: "../../../img/IMGProductsCommon/iPhone 16 Apple 128GB.jpg", avaliacao: 5 },
          { nome: "Teclado Mecânico Gamer HyperX Alloy Origins Core", preco: "R$649,99", imagem: "../../../img/IMGProductsCommon/Teclado Mecânico Gamer HyperX.jpg", avaliacao: 4 },
          { nome: "Gabinete Gamer Neologic Titan", preco: "R$374,76", imagem: "../../../img/IMGProductsCommon/Gabinete Gamer Neologic Titan.jpg", avaliacao: 3 },
          { nome: "Jogo EA Sports FC 25", preco: "R$341,99", imagem: "../../../img/IMGProductsCommon/Jogo EA Sports FC 25.jpg", avaliacao: 2 },
          { nome: "Controle Sony Dualsense Edge PS5", preco: "R$1.439,99", imagem: "../../../img/IMGProductsCommon/Controle Sony Dualsense Edge PS5.jpg", avaliacao: 4 },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .produtos-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
  }
  
  
  .produto-card {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  
  .produto-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
 
  .produto-imagem {
  width: 100px;
  height: auto;
  margin: 0 auto; 
  display: block; 
}
  
  h3 {
    margin: 10px 0;
    font-size: 1.1rem;
  }
  
  .avaliacao {
    color: #ffc107;
    margin: 10px 0;
  }
  
  .botao-comprar {
    background-color: #007bff;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .botao-comprar:hover {
    background-color: #0056b3;
  }
  
  </style>
  
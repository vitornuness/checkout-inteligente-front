<template>
  <button>
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Launch demo modal
    </button>

    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <!-- Corpo Modal -->
          <div class="modal-body">
            <div id="sideCart" class="side-cart">
              <h2>Itens no carrinho (<span id="item-count">1</span>)</h2>
              <div class="cart-item">
                <img src="#" alt="Produto" class="product-image" />
                <div class="item-info">
                  <p class="product-name">Nome do Produto</p>
                  <p class="product-price" id="product-price">R$100,00</p>
                  <div class="quantity">
                    <button
                      class="decrease btn btn-outline-secondary"
                      onclick="changeQuantity(-1)"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value="1"
                      class="quantity-input"
                      id="quantity-input"
                      readonly
                    />
                    <button
                      class="increase btn btn-outline-secondary"
                      onclick="changeQuantity(1)"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div class="cart-summary">
                <p>Subtotal: <strong id="subtotal">R$100,00</strong></p>
                <p>
                  Valor com 10% de desconto:
                  <strong id="discounted-total">R$90,00</strong>
                </p>
              </div>
              <div class="cart-actions">
                <button class="btn btn-primary btn-cart">
                  Ir para o Carrinho
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Escolher mais produtos
                </button>
              </div>
            </div>
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>
  </button>
</template>

<style>
.modal-dialog {
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  margin: 0;
  max-width: none;
  width: 500px;
}

.modal-content {
  height: 100%;
}

.modal-body {
  padding: 20px;
  background-color: #f8f9fa;
  color: #495057;
  border-radius: 0;
}

#sideCart {
  border: 1px solid #dee2e6;
  border-radius: 5px;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;
  border-bottom: 1px solid #dee2e6;
}

.cart-summary {
  border-top: 1px solid #dee2e6;
  padding-top: 15px;
  margin-top: 15px;
  font-weight: bold;
}

.cart-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.product-image {
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin-right: 15px;
  border-radius: 5px;
}
</style>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const unitPrice = 100;
  const discountRate = 0.1;

  window.changeQuantity = function (amount) {
    const quantityInput = document.getElementById("quantity-input");
    const itemCount = document.getElementById("item-count");
    const subtotal = document.getElementById("subtotal");
    const discountedTotal = document.getElementById("discounted-total");

    let quantity = parseInt(quantityInput.value) + amount;

    if (quantity < 1) {
      quantity = 1;
    }

    quantityInput.value = quantity;
    itemCount.textContent = quantity;

    const subtotalValue = (unitPrice * quantity).toFixed(2);
    const discountedValue = (subtotalValue * (1 - discountRate)).toFixed(2);

    subtotal.textContent = `R$${subtotalValue}`;
    discountedTotal.textContent = `R$${discountedValue}`;
  };
});
</script>

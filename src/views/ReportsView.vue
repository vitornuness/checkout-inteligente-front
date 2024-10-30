<template>
  <main>
    <div class="export-container">
      <h1>Exportações</h1>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Arquivo</th>
            <th>Referência</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>11102024products.csv</td>
            <td>Produtos</td>
            <td>11/10/2024</td>
            <td>
              <button class="download-btn">⬇️</button>
              <button class="delete-btn">🗑️</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>11102024sales14012024.csv</td>
            <td>Vendas</td>
            <td>11/10/2024</td>
            <td>
              <button class="download-btn">⬇️</button>
              <button class="delete-btn">🗑️</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="dropdown">
        <button
          class="btn btn-primary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Adicionar
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Relatório de Produtos</a></li>
          <li>
            <!-- Button trigger modal -->
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#ModalReports"
            >
              Launch demo modal
            </button>

            <!-- Modal -->
          </li>
        </ul>
      </div>
    </div>
  </main>
  <div
    class="modal"
    id="ModalReports"
    tabindex="-1"
    aria-labelledby="ModalReports"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="ModalReports">Modal title</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333;
}

header {
  background-color: #333;
  color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.search-bar {
  width: 300px;
  padding: 10px;
  border: none;
  border-radius: 5px;
}

main {
  padding: 20px;
}

.export-container {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

table th,
table td {
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.download-btn,
.delete-btn {
  background-color: #fff;
  border: none;
  cursor: pointer;
  font-size: 18px;
}

.download-btn:hover {
  color: #007bff;
}

.delete-btn:hover {
  color: #dc3545;
}

/* .modal-content {
  top: 0;
  left: 0;
  position: absolute;
  z-index: 99;
} */
</style>

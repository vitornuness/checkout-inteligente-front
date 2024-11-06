<template>
  <div class="container">
    <div class="row my-4">
      <div class="col-11">
        <h1>Exportações</h1>
      </div>
      <div class="col-1">
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
            <li>
              <a class="dropdown-item" href="#">Relatório de Produtos</a>
            </li>
            <li>
              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn"
                data-bs-toggle="modal"
                data-bs-target="#ModalReports"
              >
                Relatório de Vendas
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="export-container">
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
    </div>
  </div>
  <!--CORPO DO MODAL-->
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
          <h1 class="modal-title fs-5" id="ModalReports">Informe o Período:</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="date-inputs">
            <input
              type="text"
              placeholder="00/00/0000"
              v-model="exportData.startDate"
            />
            <input
              type="text"
              placeholder="00/00/0000"
              v-model="exportData.endDate"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancelar
          </button>
          <button type="button" class="btn btn-primary">Salvar</button>
        </div>
      </div>
    </div>
  </div>
  <!--FIM DO MODAL-->
</template>

<script>
export default {
  name: "Exportations",
  data() {
    return {
      exportData: {
        startDate: " ",
        endDate: " ",
      },
    };
  },
};
</script>

<style scoped>
.date-inputs {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.date-inputs input {
  width: 200px;
  padding: 15x;
  text-align: center;
  font-size: 30px;
}

.modal-footer {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.modal-footer .btn {
  padding: 10px 40px;
  font-size: 18px;
  border-radius: 5px;
}

.btn-secondary {
  background-color: #ccc;
  color: #333;
}

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

.dropdown-menu {
  flex-direction: column;
  align-items: center !important;
  text-align: center;
}

/* ESTILO MODAL */
.modal {
  background-color: rgba(0, 0, 0, 0.7);
}

.modal-content {
  border-radius: 12px;
  padding: 20px 30px;
  background-color: #ffffff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  border: none;
}

.modal-header {
  border-bottom: none;
  padding-bottom: 0;
}

.modal-title {
  color: #333;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 auto;
  text-align: center;
}

.btn-close {
  color: #999;
  opacity: 1;
  font-size: 1.2rem;
}

.date-inputs {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 20px;
}

.date-inputs input {
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  width: 100%;
  max-width: 150px;
  text-align: center;
  font-size: 1rem;
  color: #333;
  background-color: #f1f3f5;
  transition: border-color 0.3s ease;
}

.date-inputs input:focus {
  outline: none;
  border-color: #007bff;
  background-color: #ffffff;
}

.modal-footer {
  display: flex;
  justify-content: center;
  gap: 15px;
  border-top: none;
  padding-top: 20px;
}

.modal-footer .btn {
  width: 110px;
  font-weight: bold;
  padding: 10px 0;
  border-radius: 6px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.modal-footer .btn-secondary {
  background-color: #6c757d;
  color: #ffffff;
  border: none;
}

.modal-footer .btn-secondary:hover {
  background-color: #5a6268;
  transform: scale(1.05);
}

.modal-footer .btn-primary {
  background-color: #007bff;
  color: #ffffff;
  border: none;
}

.modal-footer .btn-primary:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}
/* ESTILO MODAL*/
</style>

<template>
    <div class="container">
        <div class="row my-4">
            <h1>Usuários</h1>
        </div>
        <div class="row mt-4">
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">Código</th>
                        <th scope="col">Nome</th>
                        <th scope="col">E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Nome do Usuário 1</td>
                        <td>emailusuario@email.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="row">
            <div class="pagination-content">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link" href="#">Anterior</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">1</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">3</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">Próximo</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

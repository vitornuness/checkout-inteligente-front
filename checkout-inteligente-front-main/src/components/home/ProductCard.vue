<template>
    <div class="col-md-6 col-sm-12 col-lg-3 mb-4">
        <div class="card p-1">
            <div class="content-card">Image</div>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">R$ 0,00</p>
                <a href="#" class="btn btn-primary">Adicionar</a>
            </div>
        </div>
    </div>
</template>

<style>
.content-card {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 250px;
    background: #dddd;
}

.card {
    border: none;
    border-radius: 4px !important;
    background: #f7f1f1;
}

.btn-primary {
    background: #13293d;
    border: none;
    width: 100%;
}

.btn-primary:hover {
    background: #13293d;
    opacity: 0.9;
    transition: 0.5s ease-in-out;
}
</style>

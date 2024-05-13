<script setup>
import { RouterLink } from "vue-router";
import ProductCard from "../components/home/ProductCard.vue";
</script>

<template>
    <div class="container text-center">
        <div class="row align-items-start">
            <div class="card mb-3 mt-5">
                <div class="row">
                    <div class="col-md-6">
                        <div class="produtos">
                            <div class="card mb-3 mt-2">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img
                                            src="../assets/images/vara_de_pescar.webp"
                                            class="img-fluid mt-3"
                                            alt="..."
                                        />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                Fornecedor: Rainho Peixes
                                            </h5>
                                            <p class="card-text">
                                                Maleta de pesca completa, com
                                                tudo.
                                            </p>
                                            <p class="card-text">
                                                <small
                                                    class="text-body-secondary"
                                                    >R$600,00</small
                                                >
                                            </p>
                                            <a
                                                href="#"
                                                class="d-flex align-items-end flex-column mb-3"
                                                style=""
                                            >
                                                <i class="bi bi-trash"></i>
                                            </a>
                                            <div
                                                class="d-flex justify-content-center align-items-center"
                                            >
                                                <button
                                                    class="btn btn-primary"
                                                    style="
                                                        height: 2rem;
                                                        width: 2rem;
                                                    "
                                                >
                                                    -
                                                </button>
                                                <p
                                                    class="mb-0"
                                                    style="margin: 0.5rem"
                                                >
                                                    1
                                                </p>
                                                <button
                                                    class="btn btn-primary"
                                                    style="
                                                        height: 2rem;
                                                        width: 2rem;
                                                    "
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="col-md-4 mt-2">
                                        <img
                                            src="../assets/images/vara_de_pescar.webp"
                                            class="img-fluid mt-3"
                                            alt="..."
                                        />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title mt-2">
                                                Fornecedor: Rainho Peixes
                                            </h5>
                                            <p class="card-text">
                                                Essa vara é muito boa pra pescar
                                                tilapia.
                                            </p>
                                            <p class="card-text">
                                                <small
                                                    class="text-body-secondary"
                                                    >R$1450,00</small
                                                >
                                            </p>
                                            <a
                                                href="#"
                                                class="d-flex align-items-end flex-column mb-3"
                                                style=""
                                            >
                                                <i class="bi bi-trash"></i>
                                            </a>
                                            <div
                                                class="d-flex justify-content-center align-items-center"
                                            >
                                                <button
                                                    class="btn btn-primary"
                                                    style="
                                                        height: 2rem;
                                                        width: 2rem;
                                                    "
                                                >
                                                    -
                                                </button>
                                                <p
                                                    class="mb-0"
                                                    style="margin: 0.5rem"
                                                >
                                                    1
                                                </p>
                                                <button
                                                    class="btn btn-primary"
                                                    style="
                                                        height: 2rem;
                                                        width: 2rem;
                                                    "
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="col-md-4 mt-2">
                                        <img
                                            src="../assets/images/vara_de_pescar.webp"
                                            class="img-fluid mt-3"
                                            alt="..."
                                        />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title mt-2">
                                                Fornecedor: Rainho Peixes
                                            </h5>
                                            <p class="card-text">
                                                Essa vara é muito boa pra pescar
                                                tilapia.
                                            </p>
                                            <p class="card-text">
                                                <small
                                                    class="text-body-secondary"
                                                    >R$1450,00</small
                                                >
                                            </p>
                                            <a
                                                href="#"
                                                class="d-flex align-items-end flex-column mb-3"
                                                style=""
                                            >
                                                <i class="bi bi-trash"></i>
                                            </a>
                                            <div
                                                class="d-flex justify-content-center align-items-center"
                                            >
                                                <button
                                                    class="btn btn-primary"
                                                    style="
                                                        height: 2rem;
                                                        width: 2rem;
                                                    "
                                                >
                                                    -
                                                </button>
                                                <p
                                                    class="mb-0"
                                                    style="margin: 0.5rem"
                                                >
                                                    1
                                                </p>
                                                <button
                                                    class="btn btn-primary"
                                                    style="
                                                        height: 2rem;
                                                        width: 2rem;
                                                    "
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <label
                            for="customRange2"
                            class="form-label mt-2 mb-0 border-top border-start border-end"
                            >Frete gratis</label
                        >
                        <p class="border-start border-end mt-0 mb-0">
                            Falta apenas 32 reais para seu frete gratis!
                        </p>
                        <input
                            type="range"
                            class="form-range border-start border-end border-bottom mb-2"
                            min="0"
                            max="100"
                            id="customRange2"
                        />
                    </div>

                    <div class="card col-md-6">
                        <div class="card-body">
                            <h5 class="card-title">Resumo da compra:</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Maleta - R$:600,00</li>
                            <li class="list-group-item">
                                Vara de pesca - R$1450,00
                            </li>
                            <li class="list-group-item">Total: 2050,00</li>
                        </ul>
                        <div class="card-body">
                            <button type="button" class="btn btn-success">
                                <div class="row">
                                    <RouterLink
                                        to="checkout"
                                        class="btn btn-sucess"
                                        style="color: white"
                                        >Continuar para Pagamento</RouterLink
                                    >
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </div>
</template>

<style>
.produtos {
    height: 500px;
    overflow: auto;
}
</style>

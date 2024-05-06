<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <div class="container-fluid mb-2 p-2 header">
        <nav class="navbar navbar-expand-lg">
            <div class="container d-flex justify-content-between">
                <div>
                    <RouterLink to="/" class="navbar-brand text-white"
                        >Loja</RouterLink
                    >
                </div>
                <div>
                    <form class="d-flex" role="search">
                        <input
                            class="form-control"
                            type="search"
                            placeholder="Procure em toda loja"
                            aria-label="Procure em toda loja"
                        />
                        <button class="btn" type="submit">
                            <i class="bi bi-search text-white"></i>
                        </button>
                    </form>
                </div>
                <div>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i class="bi bi-list"></i>
                    </button>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-white">
                            <li class="nav-item d-flex mt-2">
                                <RouterLink
                                    to="/login"
                                    class="nav-link text-white"
                                    >Entrar</RouterLink
                                >
                                <span class="row align-items-start mt-2 mx-2"
                                    >|</span
                                >
                                <RouterLink
                                    to="/signup"
                                    class="nav-link text-white"
                                    >Registrar-se</RouterLink
                                >
                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link text-white dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i class="bi bi-person-fill"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a class="dropdown-item" href="#"
                                            >Perfil</a
                                        >
                                    </li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li>
                                        <a class="dropdown-item" href="#"
                                            >Sair</a
                                        >
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <RouterLink
                                    to="cart"
                                    class="nav-link text-white"
                                >
                                    <i class="bi bi-cart3"></i>
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<style>
.text-white {
    color: #fff;
}
.header {
    background: #13293d;
    box-shadow: 0 1px 4px #000;
}

.navbar-toggler {
    color: #fff;
    border: none;
}

.bi-search {
    font-size: 14pt !important;
}

i,
.bi {
    font-size: 20pt;
}

a:hover,
i:hover,
.bi:hover {
    color: #9193b4 !important;
    transition: 0.5s ease-in-out;
}

.dropdown-item:active {
    background: #9193b4;
}
</style>

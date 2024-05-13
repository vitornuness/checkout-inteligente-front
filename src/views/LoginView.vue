<script setup>
import { ref } from "vue";

let email = ref("");
let password = ref("");
const errors = ref([]);

function login(email, password) {
    if (emailValidation(email) && passwordValidation(password)) {
        console.log(email);
        console.log(password);
    } else {
        console.log(errors.value);
    }
}
</script>

<template>
    <div class="container">
        <div class="center">
            <h1>Entre na sua conta</h1>
            <div class="form row g-3 m-4 needs-validation" novalidate>
                <div class="row">
                    <label for="email" class="form-label">E-mail</label>
                    <input
                        type="email"
                        class="form-control mb-4"
                        id="email"
                        name="email"
                        v-model="email"
                        placeholder="Digite seu e-mail"
                        required
                    />
                </div>
                <div class="row">
                    <label for="password" class="form-label">Senha</label>
                    <input
                        type="password"
                        class="form-control"
                        id="password"
                        name="password"
                        v-model="password"
                        placeholder="Digite sua senha"
                        required
                    />
                </div>
                <div class="row my-4">
                    <button
                        class="btn btn-primary"
                        @click="login(email, password)"
                    >
                        Entrar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css">
.center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
}

.form {
    width: 500px;
}
</style>

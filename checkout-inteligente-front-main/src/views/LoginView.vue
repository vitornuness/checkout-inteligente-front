<script setup></script>

<template>
    <div class="container">
        <form class="row g-3 m-4 needs-validation" novalidate>
            <div class="row">
                <label for="email" class="form-label">E-mail</label>
                <input
                    type="email"
                    class="form-control"
                    id="email"
                    name="email"
                    placeholder="Digite seu e-mail"
                    required
                />
            </div>
            <div class="row">
                <label for="senha" class="form-label">Senha</label>
                <input
                    type="password"
                    class="form-control"
                    id="senha"
                    name="senha"
                    placeholder="Digite sua senha"
                    required
                />
            </div>
            <div class="col">
                <button class="btn btn-primary" type="submit">Entrar</button>
            </div>
        </form>
    </div>
</template>

<style lang="css">
form {
    width: 500px;
}
</style>

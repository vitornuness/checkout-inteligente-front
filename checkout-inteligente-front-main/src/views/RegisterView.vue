<template>
    <div class="center">
      <form class="row g-3 needs-validation" @submit.prevent="validarFormulario" novalidate>
        <div class="col-md-6">
          <label for="nome" class="form-label">Primeiro Nome</label>
          <input v-model="nome" type="text" class="form-control" id="nome" name="nome" required :class="{ 'is-invalid': formEnviado && !nome }">
          <div class="valid-feedback">
            Parece bom!
          </div>
          <div v-if="formEnviado && !nome" class="invalid-feedback">
            Por favor informe seu primeiro nome.
          </div>
        </div>
        <div class="col-md-6">
          <label for="sobrenome" class="form-label">Sobrenome</label>
          <input v-model="sobrenome" type="text" class="form-control" id="sobrenome" name="sobrenome" required :class="{ 'is-invalid': formEnviado && !sobrenome }">
          <div class="valid-feedback">
            Parece bom!
          </div>
          <div v-if="formEnviado && !sobrenome" class="invalid-feedback">
            Por favor informe seu sobrenome.
          </div>
        </div>
        <div class="col-md-6">
          <label for="email" class="form-label">Email</label>
          <input v-model="email" type="email" class="form-control" id="email" name="email" required :class="{ 'is-invalid': formEnviado && (!email || !validarEmail(email)) }">
          <div class="invalid-feedback">
            Por favor informe um email válido.
          </div>
        </div>
        <div class="col-md-6">
          <label for="confirmationEmail" class="form-label">Confirmar email</label>
          <input v-model="confirmationEmail" type="email" class="form-control" id="confirmationEmail" name="confirmationEmail" required :class="{ 'is-invalid': formEnviado && (email !== confirmationEmail) }">
          <div class="invalid-feedback">
            Os emails não correspondem.
          </div>
        </div>
        <div class="col-md-6">
          <label for="senha" class="form-label">Senha</label>
          <input v-model="senha" type="password" class="form-control" id="senha" name="senha" required :class="{ 'is-invalid': formEnviado && !senha }">
          <div class="invalid-feedback">
            Por favor informe uma senha.
          </div>
        </div>
        <div class="col-md-6">
          <label for="confirmationSenha" class="form-label">Confirmar senha</label>
          <input v-model="confirmationSenha" type="password" class="form-control" id="confirmationSenha" name="confirmationSenha" required :class="{ 'is-invalid': formEnviado && (senha !== confirmationSenha) }">
          <div class="invalid-feedback">
            As senhas não correspondem.
          </div>
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">Enviar formulário</button>
        </div>
      </form>
    </div>
  </template>

<style>
.center {
    display: flex;
    align-items: center;
    justify-content: center;
}


</style>
  
  <script setup>
  import { ref } from 'vue';
  
  const nome = ref('');
  const sobrenome = ref('');
  const email = ref('');
  const confirmationEmail = ref('');
  const senha = ref('');
  const confirmationSenha = ref('');
  const concordou = ref(false);
  const formEnviado = ref(false);
  
  const validarEmail = (inputEmail) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(inputEmail);
  };
  
  const validarFormulario = () => {
    formEnviado.value = true;
    if (
      nome.value &&
      sobrenome.value &&
      email.value &&
      validarEmail(email.value) &&
      email.value === confirmationEmail.value &&
      senha.value &&
      senha.value === confirmationSenha.value &&
      concordou.value
    ) {
      console.log('Formulário válido, enviando dados...');
    } else {
      console.log('Por favor, preencha todos os campos corretamente.');
    }
  };
  </script>
  
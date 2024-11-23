<script setup>
import AuthDataService from "@/services/AuthDataService";
import OrderDataService from "@/services/OrderDataService";
import { useCartStore } from "@/store/cart";
import { useTokenStore } from "@/store/token";
import { useUserStore } from "@/store/user";
</script>

<template>
  <div class="container center bg-white rounded py-4">
    <h1>Registre uma nova conta</h1>
    <div v-if="errors.length > 0" class="text-danger">
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </div>
    <div class="form my-4 py-4">
      <div class="row">
        <div class="col">
          <label for="name" class="form-label">Nome</label>
          <input
            type="text"
            class="form-control"
            id="name"
            name="name"
            placeholder="Seu nome completo"
            required
            v-model="user.name"
          />
        </div>
      </div>
      <div class="row my-2">
        <div class="col">
          <label for="email" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            placeholder="exemplo@email.com"
            required
            v-model="user.email"
            autocomplete="false"
          />
        </div>
        <div class="col">
          <label for="emailConfirmation" class="form-label"
            >Confirmar email</label
          >
          <input
            type="email"
            class="form-control"
            id="emailConfirmation"
            name="emailConfirmation"
            placeholder="exemplo@email.com"
            required
            v-model="user.emailConfirmation"
          />
        </div>
      </div>
      <div class="row my-2">
        <div class="col">
          <label for="password" class="form-label">Senha</label>
          <input
            type="password"
            class="form-control"
            id="password"
            name="password"
            placeholder="Digite uma senha"
            required
            v-model="user.password"
            autocomplete="false"
          />
        </div>
        <div class="col">
          <label for="passwordConfirmation" class="form-label"
            >Confirmar senha</label
          >
          <input
            type="password"
            class="form-control"
            id="passwordConfirmation"
            name="passwordConfirmation"
            placeholder="Confirme a senha"
            required
            v-model="user.passwordConfirmation"
          />
        </div>
      </div>

      <div class="form-check my-3">
        <input
          type="checkbox"
          class="form-check-input"
          id="terms"
          v-model="user.termsAccepted"
        />
        <label class="form-check-label" for="terms">
          Aceito os <a href="#" target="_blank">termos e condições</a>
        </label>
      </div>

      <div class="row justify-content-end my-4">
        <router-link to="/login">Já possui uma conta?</router-link>
        <button
          id="btnGravar"
          class="btn btn-primary mx-4"
          @click="validateData()"
          :disabled="!user.termsAccepted"
        >
          <strong>Confirmar</strong>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "new-user",
  data() {
    return {
      user: {
        name: "",
        email: "",
        emailConfirmation: "",
        password: "",
        passwordConfirmation: "",
        termsAccepted: false,
      },
      errors: [],
    };
  },
  methods: {
    validateData() {
      const errors = [];

      if (!this.user.name) {
        errors.push("Por favor, insira seu nome.");
      }
      if (!this.isValidEmail(this.user.email)) {
        errors.push("Por favor, insira um email válido.");
      }
      if (this.user.email !== this.user.emailConfirmation) {
        errors.push("Os emails não correspondem.");
      }
      if (this.user.password.length < 8) {
        errors.push("A senha deve ter pelo menos 8 caracteres.");
      }
      if (this.user.password !== this.user.passwordConfirmation) {
        errors.push("As senhas não correspondem.");
      }
      if (!this.user.termsAccepted)
        this.errors.push("Você deve aceitar os termos e condições.");

      if (errors.length === 0) {
        var data = {
          name: this.user.name,
          email: this.user.email,
          password: this.user.password,
        };
        this.saveUser(data);
      } else {
        this.errors = errors;
      }
    },
    isValidEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
    saveUser(data) {
      AuthDataService.register(data)
        .then((res) => {
          const userStore = useUserStore();
          userStore.setUser(res.data.user);
          useTokenStore().setToken(res.data.token);
          this.fetchUserOrder();
          this.$router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },

    fetchUserOrder() {
      const userStore = useUserStore();
      const cartStore = useCartStore();
      OrderDataService.fetchCurrentUserOrder(userStore.user.id).then((res) => {
        cartStore.setCart(res.data);
      });
    },
  },
};
</script>

<style>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
}
</style>

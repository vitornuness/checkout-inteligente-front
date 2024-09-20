<script setup></script>

<template>
    <div class="container center">
        <h1>Entre na sua conta</h1>
        <div v-if="messages.length > 0" class="text-danger">
            <ul>
                <li v-for="message in messages" :key="message">
                    {{ message }}
                </li>
            </ul>
        </div>
        <div class="form row g-3 m-4 needs-validation" novalidate>
            <div class="row">
                <label for="email" class="form-label">E-mail</label>
                <input
                    type="email"
                    class="form-control mb-4"
                    id="email"
                    name="email"
                    v-model="credential.email"
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
                    v-model="credential.password"
                    placeholder="Digite sua senha"
                    required
                />
            </div>
            <div class="row my-4">
                <button
                    class="btn btn-primary"
                    @click="login()"
                    @keyup.enter="login()"
                >
                    Entrar
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { useUserStore } from "@/store/user";
import AuthDataService from "../services/AuthDataService";
import { useTokenStore } from "@/store/token";
import { useCartStore } from "@/store/cart";
import OrderDataService from "@/services/OrderDataService";

export default {
    name: "login",
    data() {
        return {
            credential: {
                email: "",
                password: "",
            },
            messages: [],
        };
    },
    methods: {
        login() {
            this.messages = [];
            var data = {
                email: this.credential.email,
                password: this.credential.password,
            };
            AuthDataService.login(data)
                .then((res) => {
                    const userStore = useUserStore();
                    userStore.setUser(res.data.user);
                    useTokenStore().setToken(res.data.token);
                    this.fetchUserOrder();
                    this.$router.push("/");
                })
                .catch((err) => {
                    console.log(err);
                    if (err.response.status === 404) {
                        this.messages.push("Credenciais inválidas.");
                    }
                });
        },

        fetchUserOrder() {
            const userStore = useUserStore();
            const cartStore = useCartStore();
            OrderDataService.fetchCurrentUserOrder(userStore.user.id).then(
                (res) => {
                    cartStore.setCart(res.data);
                }
            );
        },
    },
};
</script>

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

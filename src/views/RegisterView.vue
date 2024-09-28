<script setup>
import AuthDataService from "@/services/AuthDataService";
</script>

<template>
    <div class="container center">
        <h1>Registre uma nova conta</h1>
        <div v-if="errors.length > 0" class="text-danger">
            <ul>
                <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
        </div>
        <div class="row g-3">
            <div>
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
            <div class="col-md-6">
                <label for="email" class="form-label">Email</label>
                <input
                    type="email"
                    class="form-control"
                    id="email"
                    name="email"
                    placeholder="exemplo@email.com"
                    required
                    v-model="user.email"
                />
            </div>
            <div class="col-md-6">
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
            <div class="col-md-6">
                <label for="password" class="form-label">Senha</label>
                <input
                    type="password"
                    class="form-control"
                    id="password"
                    name="password"
                    placeholder="Digite uma senha"
                    required
                    v-model="user.password"
                />
            </div>
            <div class="col-md-6">
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
            <div class="col-12">
                <button class="btn btn-primary" @click="validateData()">
                    Confirmar
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
            OrderDataService.fetchCurrentUserOrder(userStore.user.id).then(
                (res) => {
                    cartStore.setCart(res.data);
                }
            );
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

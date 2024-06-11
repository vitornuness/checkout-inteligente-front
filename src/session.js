import { defineStore } from "pinia";

export const session = defineStore("session", {
    state: () => ({
        user: null,
        cart: null,
        token: null,
    }),
    actions: {
        setData(user, cart, token) {
            this.user = user;
            this.cart = cart;
            this.token = token;
        },
        clearData() {
            this.user = null;
            this.cart = null;
            this.token = null;
        },
    },
});
